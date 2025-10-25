import { Metadata, NextPage } from "next";
import { blogs, blogSlugs } from "./blogs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs",
};

const BlogList: NextPage<PageProps<"/blog">> = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start *:border-b *:border-neutral-200 *:last-of-type:border-b-0">
      <div className="flex w-full flex-col items-start justify-start gap-2 px-4 py-6 md:px-6">
        <h1 className="font-h1">Blogs</h1>
        <p className="font-p">
          Checkout my blogs. I am not a regular blogger. I write stuff when I am
          very bored.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
        {blogSlugs.map((slug) => {
          const blog = blogs[slug];

          return (
            <Link key={blog.slug} href={`/blog/${blog.slug}` as any}>
              <Card>
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardDescription>{blog.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {blog.keywords.map((keyword) => (
                      <Badge variant="outline" key={keyword}>
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
