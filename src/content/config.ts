import { defineCollection, z } from 'astro:content';

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),  // lets me draft posts without them displaying live
});

const posts = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = { posts };