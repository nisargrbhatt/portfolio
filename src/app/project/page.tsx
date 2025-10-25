import { Metadata, NextPage } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "./projects";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectList: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start *:border-b *:border-neutral-200 *:last-of-type:border-b-0">
      <div className="flex w-full flex-col items-start justify-start gap-2 px-4 py-6 md:px-6">
        <h1 className="font-h1">Projects</h1>
        <p className="font-p">
          Checkout my projects. I love to build projects with new tools and
          technologies. All of them are also available on my{" "}
          <Link
            target="_blank"
            className="link"
            href="https://github.com/nisargrbhatt"
          >
            GitHub
          </Link>
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/project/${project.id}`}>
            <Card className="animate-on-scroll hover-lift delay-100">
              <CardHeader>
                <CardTitle>{project?.title}</CardTitle>
                <CardDescription>{project?.short_description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {project?.keywords?.map((keyword) => (
                    <Badge
                      variant="outline"
                      key={keyword}
                      className="capitalize"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
