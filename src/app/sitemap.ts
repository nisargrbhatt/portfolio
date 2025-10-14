import { SITE_URL } from "@/lib/common";
import type { MetadataRoute } from "next";
import { projects } from "./project/projects";
import { blogs } from "./blog/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: new URL("/blog", SITE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...Object.values(blogs).map((b) => ({
      url: new URL(`/blog/${b.slug}`, SITE_URL).toString(),
      lastModified: new Date(b.createdAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: new URL("/project", SITE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...projects.map((p) => ({
      url: new URL(`/project/${p.id}`, SITE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
