import type { FC } from "react";
import {
  IconDatabase,
  IconFileTypeCss,
  IconFileTypeHtml,
  IconServer,
} from "@tabler/icons-react";

const Skills: FC = () => {
  return (
    <section id="skills" className="py-12">
      <div className="container px-4 md:px-6">
        <div className="animate-on-scroll flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-h2">Skills & Expertise</h2>
            <p className="font-p text-gray-500">
              Technologies and tools I work with
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="animate-on-scroll flex flex-col items-center space-y-2 delay-100">
            <div className="rounded-full bg-background p-4 shadow-sm">
              <IconFileTypeHtml />
            </div>
            <h3 className="font-h3">Frontend</h3>
            <p className="font-p">React, Angular, Astro</p>
          </div>
          <div className="animate-on-scroll flex flex-col items-center space-y-2 delay-100">
            <div className="rounded-full bg-background p-4 shadow-sm">
              <IconServer />
            </div>
            <h3 className="font-h3">Backend</h3>
            <p className="font-p">Hono, Nest.js, Fiber</p>
          </div>
          <div className="animate-on-scroll flex flex-col items-center space-y-2 delay-100">
            <div className="rounded-full bg-background p-4 shadow-sm">
              <IconDatabase />
            </div>
            <h3 className="font-h3">Databases</h3>
            <p className="font-p">MongoDB, PostgreSQL, MySQL</p>
          </div>
          <div className="animate-on-scroll flex flex-col items-center space-y-2 delay-100">
            <div className="rounded-full bg-background p-4 shadow-sm">
              <IconFileTypeCss />
            </div>
            <h3 className="font-h3">Design</h3>
            <p className="font-p">Figma, Tailwind, CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
