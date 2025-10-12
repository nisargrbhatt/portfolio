import { NextPage } from "next";
import { blogs } from "./blogs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {}

const BlogList: NextPage<Props> = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
      {Object.values(blogs).map((blog) => (
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
      ))}
    </div>
  );
};

export default BlogList;
