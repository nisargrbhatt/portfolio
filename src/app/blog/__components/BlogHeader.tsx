import type { FC } from "react";
import { blogs, blogSlugs } from "../blogs";
import { Badge } from "@/components/ui/badge";
import { IconCalendar, IconClock } from "@tabler/icons-react";

interface Props {
  slug: (typeof blogSlugs)[number];
}

const BlogHeader: FC<Props> = ({ slug }) => {
  const blogData = blogs[slug];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-1">
      <h1 className="font-h1">{blogData.title}</h1>
      <p className="font-p">{blogData.description}</p>
      <div className="flex flex-row items-center justify-center gap-2">
        <Badge variant={"secondary"} aria-label="Time to read">
          <IconClock width={10} height={10} /> {blogData.readingTime}
        </Badge>
        <Badge variant={"secondary"} aria-label="Time to read">
          <IconCalendar width={10} height={10} />{" "}
          {new Date(blogData.createdAt).toDateString()}
        </Badge>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2">
        {blogData.keywords.map((keyword) => (
          <Badge key={keyword} variant={"outline"} aria-label="Keyword">
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default BlogHeader;
