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

const recipes = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().default(false),

      // Media & meta
      image: z.union([image(), z.string()]).optional(),
      tags: z.array(z.string()).default([]),

      // Serving & time
      servings: z.number().int().positive(),
      prep_mins: z.number().int().nonnegative().default(0),
      cook_mins: z.number().int().nonnegative().default(0),

      // Macros (per serving)
      calories_kcal: z.number().positive(),
      fat_g: z.number().nonnegative(),
      protein_g: z.number().nonnegative(),
      carbs_g: z.number().nonnegative(),

      // Key micronutrients (optional, Cronometer-sourced)
      nutrition: z
        .object({
          sodium_mg: z.number().nonnegative().optional(),
          potassium_mg: z.number().nonnegative().optional(),
          magnesium_mg: z.number().nonnegative().optional(),
          calcium_mg: z.number().nonnegative().optional(),
          iron_mg: z.number().nonnegative().optional(),
        })
        .partial()
        .default({}),

      // Content blocks
      ingredients: z.array(z.string()),
      method: z.array(z.string()),
    }),
});

export const collections = { 
  posts,
  recipes, 
};