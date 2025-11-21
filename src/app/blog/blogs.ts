import { SITE_URL } from "@/lib/common";
import { Metadata } from "next";
import { WithContext, BlogPosting } from "schema-dts";

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

export const getSeoMetadata = (
  slug: (typeof blogSlugs)[number]
): { metadata: Metadata; jsonLd: WithContext<BlogPosting> } => {
  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogs[slug].title,
    datePublished: new Date(blogs[slug].createdAt).toISOString(),
    description: blogs[slug].description,
    url: new URL(`/blog/${slug}`, SITE_URL).toString(),
    keywords: blogs[slug].keywords.join(", "),
    author: [
      {
        "@type": "Person",
        image: new URL("/me.png", SITE_URL).toString(),
        jobTitle: "Full Stack Developer",
        description:
          "I'm Nisarg Bhatt, a Full Stack Developer from India. I'm passionate about building scalable and performant applications using modern technologies.",
        name: "Nisarg Bhatt",
        givenName: "Nisarg",
        familyName: "Bhatt",
        url: SITE_URL,
        sameAs: [
          "https://github.com/nisargrbhatt",
          "https://www.linkedin.com/in/nisarg-r-bhatt/",
          "https://x.com/nisarg_2001",
        ],
        email: "mailto:nisargrbhatt@gmail.com",
        gender: "Male",
        nationality: "Indian",
      },
    ],
  };

  return {
    metadata: {
      title: blogs[slug].title,
      description: blogs[slug].description,
      openGraph: {
        type: "article",
        title: blogs[slug].title,
        description: blogs[slug].description,
        images: [
          {
            url: new URL(
              `/api/og/blog?${new URLSearchParams({
                title: blogs[slug].title,
                date: blogs[slug].createdAt,
              }).toString()}`,
              SITE_URL
            ).toString(),
            width: 1200,
            height: 628,
            alt: "",
          },
        ],
        url: new URL(`/blog/${slug}`, SITE_URL).toString(),
      },
    },
    jsonLd,
  };
};
