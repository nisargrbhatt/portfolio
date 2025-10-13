import { NextPage } from "next";
import { notFound } from "next/navigation";
import { projects } from "../projects";
import { Button } from "@/components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

const ProjectDetail: NextPage<PageProps<"/project/[id]">> = async ({
  params,
}) => {
  const projectId = (await params).id;

  if (!projectId) {
    return notFound();
  }

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4 px-4 py-6 md:px-6">
      <div className="w-full">
        <Link href="/project">
          <Button variant="link" size="sm">
            ← Back to Projects
          </Button>
        </Link>
      </div>
      <h1 className="w-full font-h1 text-center">{project.title}</h1>
      <p className="font-p">{project.description}</p>
      <div className="flex w-full flex-row flex-wrap items-center justify-start gap-2">
        {project?.repos?.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            className="cursor-pointer"
          >
            <Button variant={"outline"} size={"sm"} className="cursor-pointer">
              <IconBrandGithub />
              {repo.name}
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
