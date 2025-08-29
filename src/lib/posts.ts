import { getCollection } from 'astro:content';

export async function allPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => +b.data.date - +a.data.date);
}

const toTime = (x:any) => x instanceof Date ? x.getTime() : new Date(x).getTime();

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
