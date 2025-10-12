import type { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {}

const Hero: FC<Props> = () => {
  return (
    <section id="hero" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="font-h1">
              Hi, I'm <br /> <span className="text-blue-500">Nisarg Bhatt</span>
            </h1>
            <p className="max-w-lg font-p">
              Full Stack Developer based in Gujarat, India. Working at{" "}
              <Link
                href="https://sath.com"
                target="_blank"
                className="underline"
              >
                Sath
              </Link>{" "}
              as a Senior Software Engineer. I specialize in helping startups
              build their MVP fast and scalable. Love to architect and design
              systems.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Typescript",
              "Javascript",
              "Node.js",
              "Bun",
              "React",
              "TailwindCSS",
              "SQL",
              "NoSQL",
              "Postgres",
              "MongoDB",
            ].map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex gap-4">
            <Link href="#contact">
              <Button id="contact-me-btn">Contact Me</Button>
            </Link>
            <a href="/resume.pdf" target="_blank">
              <Button variant="outline">View Resume</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
