export const blogSlugs = ["react-query-fetch"] as const;

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
};
