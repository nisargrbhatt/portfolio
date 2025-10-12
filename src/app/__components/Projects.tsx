import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/contents/projects";
import Link from "next/link";
import type { FC } from "react";

interface Props {}

const Projects: FC<Props> = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container px-4 md:px-6">
        <div className="animate-on-scroll flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-h2">My Projects</h2>
            <p className="font-p text-gray-500">
              Check out some of my recent work
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              className="animate-on-scroll hover-lift delay-100"
              key={project.id}
            >
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
              <CardFooter>
                <a href={`/project/${project.id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    View Project
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
