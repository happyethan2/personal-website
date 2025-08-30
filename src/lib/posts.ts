import { getCollection } from 'astro:content';

const toTime = (x:any) => x instanceof Date ? x.getTime() : new Date(x).getTime();

export async function allPosts() {
  const posts = await getCollection('posts');
  const visible = import.meta.env.PROD ? posts.filter(p => !p.data.draft) : posts;
  return visible.sort((a,b) => toTime(b.data.date) - toTime(a.data.date));
}

export async function postsByTag(tag: string) {
  const wanted = tag.toLowerCase();
  const posts = await getCollection('posts', ({ data }) =>
    (!import.meta.env.PROD || !data.draft) &&
    (data.tags ?? []).some(t => t.toLowerCase() === wanted)
  );
  return posts.sort((a, b) => toTime(b.data.date) - toTime(a.data.date));
}

export async function latestPostByTag(tag: string) {
  const list = await postsByTag(tag);
  return list[0] ?? null;
}

export function applyQuery(posts, { q='', tag='', sort='date-desc' } = {}) {
  let out = [...posts];
  if (tag) out = out.filter(p => p.data.tags?.map(t => t.toLowerCase()).includes(tag.toLowerCase()));
  if (q) { const qq = q.toLowerCase(); out = out.filter(p => p.data.title.toLowerCase().includes(qq)); }
  switch (sort) {
    case 'date-asc': out.sort((a,b)=> toTime(a.data.date) - toTime(b.data.date)); break;
    case 'name-az':  out.sort((a,b)=> a.data.title.localeCompare(b.data.title)); break;
    case 'name-za':  out.sort((a,b)=> b.data.title.localeCompare(a.data.title)); break;
    default:         out.sort((a,b)=> toTime(b.data.date) - toTime(a.data.date));
  }
  return out;
}

export function uniqueTags(posts) {
  const set = new Set<string>();
  for (const p of posts) for (const t of (p.data.tags ?? [])) set.add(t);
  return Array.from(set).sort();
}
