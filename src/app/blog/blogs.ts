export const blogSlugs = [
  "anatomy-of-jwt",
  "love-orpc-monorepo",
  "react-query-fetch",
] as const;

export const blogs: Record<
  (typeof blogSlugs)[number],
  {
    title: string;
    description: string;
    createdAt: string;
    keywords: string[];
    slug: string;
    readingTime: string;
  }
> = {
  "react-query-fetch": {
    title: "Tanstack Query Data fetching",
    description: "Guide to do a data fetching in React Project",
    createdAt: "2025-03-15T07:00:10.748Z",
    keywords: ["tanstack", "react", "query", "fetch", "@tanstack/react-query"],
    slug: "react-query-fetch",
    readingTime: "5 min read",
  },
  "love-orpc-monorepo": {
    title: "oRPC and Turborepo: A Match Made in Monorepo Heaven",
    description:
      "How oRPC and Turborepo can help you build a better monorepo with end-to-end type safety.",
    createdAt: "2025-11-08T07:00:10.748Z",
    keywords: [
      "orpc",
      "turborepo",
      "monorepo",
      "typescript",
      "vite",
      "next.js",
      "typesafety",
    ],
    slug: "love-orpc-monorepo",
    readingTime: "4 min read",
  },
  "anatomy-of-jwt": {
    title: "Anatomy of a JWT (JSON Web Token)",
    description:
      "A deep dive into the structure of a JWT, including the header, payload, and signature.",
    createdAt: "2025-11-20T09:00:00.000Z",
    keywords: [
      "jwt",
      "json web token",
      "authentication",
      "authorization",
      "security",
      "nodejs",
      "jose",
    ],
    slug: "anatomy-of-jwt",
    readingTime: "10 min read",
  },
};
