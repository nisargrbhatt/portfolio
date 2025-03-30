import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    relatedPosts: z.array(reference("blog")).catch([]),
    keywords: z.string(),
  }),
});

const project = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/project" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
  }),
});

export const collections = {
  blog,
  project
};
