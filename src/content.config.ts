import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    author:      z.enum(['Adyaan', 'You']),  // swap 'You' for your real name
    category:    z.enum(['Finance', 'Tech']),
    tags:        z.array(z.string()).default([]),
    draft:       z.boolean().default(false),
    cover:       z.string().optional(),       // path to cover image in /public
  }),
});

export const collections = { blog };
