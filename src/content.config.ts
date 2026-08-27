import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().int().default(0),
    featured: z.boolean().default(false),
    coverArt: z.string(),
    coverTag: z.enum(['open', 'offline', 'mission']),
    meta: z.string(),
    desc: z.object({
      en: z.string(),
      es: z.string(),
    }),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };