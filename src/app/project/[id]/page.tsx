import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";
import { projects } from "../projects";
import { Button } from "@/components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { SITE_URL } from "@/lib/common";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLinkIcon } from "lucide-react";

export const generateStaticParams = async () => {
  return projects.map((p) => ({
    id: p.id,
  }));
};

export const generateMetadata = async (
  props: PageProps<"/project/[id]">
): Promise<Metadata> => {
  const projectId = (await props.params).id;

  if (!projectId) {
    return notFound();
  }

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return notFound();
  }

  return {
    title: project.title,
    description: project.description,
    keywords: project.keywords,
    twitter: {
      card: "summary",
      creator: "@nisarg_2001",
      title: project.title,
      description: project.description,
      site: SITE_URL,
    },
  };
};

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
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <div className="border-r border-b p-2">
        <Link href="/project" className="text-sm">
          Back to Projects
        </Link>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-4 py-6 *:border-b *:border-neutral-200 *:last-of-type:border-b-0">
        <section
          id="project-hero"
          className="flex w-full flex-col items-center justify-start gap-2 px-4 pb-4 md:px-6"
        >
          <h1 className="w-full font-h1 text-center" aria-label="Project Title">
            {project.title}
          </h1>
          <p
            className="mx-auto w-full max-w-3xl text-center font-p"
            aria-label="Project Description"
          >
            {project.description}
          </p>
          {project?.test_url ? (
            <Link
              className="link"
              target="_blank"
              href={project.test_url as any}
            >
              Test Env{" "}
              <ExternalLinkIcon className="mb-1 inline h-4 w-4 text-gray-500" />
            </Link>
          ) : null}
        </section>
        <section
          id="project-github-repo"
          className="flex w-full flex-col items-center justify-start gap-2 px-4 pb-4 md:px-6"
        >
          <h4 className="w-full font-h4 text-center">Github Repo</h4>
          <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2">
            {project?.repos?.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                className="cursor-pointer"
                aria-label="Project Github Repo Link"
              >
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="cursor-pointer"
                >
                  <IconBrandGithub />
                  {repo.name}
                </Button>
              </a>
            ))}
          </div>
        </section>
        {project?.previews?.length > 0 ? (
          <section
            id="project-previews"
            className="flex w-full flex-col items-center justify-start gap-2 px-4 pb-4 md:px-6"
          >
            <h4 className="w-full font-h4 text-center">Previews</h4>
            <div className="w-full px-2">
              <Carousel className="mx-auto w-[250px] max-w-xs sm:w-full sm:max-w-xl">
                <CarouselContent>
                  {project?.previews?.map((imageUrl) => (
                    <CarouselItem key={imageUrl}>
                      <div className="p-1">
                        <AspectRatio ratio={16 / 9} className="rounded-lg">
                          <img src={imageUrl} loading="lazy" />
                        </AspectRatio>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectDetail;
