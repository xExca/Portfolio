import React from "react";
import { projects } from "../data";

const Dot = ({ number }: { number: number }) => (
  <span
    className="absolute left-0 top-2 -translate-x-1/2 h-6 w-6 rounded-full bg-black dark:bg-white transition-colors duration-300 flex items-center justify-center"
    aria-hidden
  >
    <span className="text-white dark:text-black text-lg font-bold leading-none">
      {number}
    </span>
  </span>
);

const Projects: React.FC = () => {
  return (
    <section className="w-full py-12">
      <div className="flex flex-col items-start justify-start gap-5">
        <h1 className="text-4xl font-extrabold">Projects</h1>

        <div className="relative w-full max-w-4xl pl-8">
          <div
            className="absolute left-7.5 top-5 h-full w-1 bg-neutral-600 dark:bg-neutral-600"
            aria-hidden
          />

          <ol className="space-y-12">
            {projects.map((project, idx) => (
              <li key={idx} className="relative">
                <Dot number={projects.length - idx} />
                <div className="ml-6">
                  <a href={project.link == "" ? "#" : `/project/${project.id}`} className="text-xl font-bold hover:text-blue-300 hover:cursor-pointer">{project.title}</a>
                  <p className="italic text-sm text-gray-600 dark:text-gray-400">
                    {project.subtitle}
                  </p>
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {project.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Projects;