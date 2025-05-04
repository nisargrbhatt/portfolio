import { glob, file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    relatedPosts: z.array(reference("blog")).catch([]),
    keywords: z.array(z.string()),
  }),
});

const project = defineCollection({
  loader: file("./src/content/projects.json"),
  schema: z.object({
    title: z.string(),
    short_description: z.string().describe("Used for Cards and SEO"),
    description: z.string(),
    keywords: z.array(z.string()),
    repos: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      })
    ),
    previews: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
      })
    ),
  }),
});

export const collections = {
  blog,
  project,
};
