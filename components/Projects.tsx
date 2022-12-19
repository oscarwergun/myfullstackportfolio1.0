import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  projects: Project[];
};

function Projects({projects}: Props) {
  return (
    <div className=" relative flex items-center justify-center h-screen snap-center text-[rgb(255,255,255)] ">
      <h2 className="pageTitle">Projects</h2>
      {/* background effect */}
      <div className="bgEffect"></div>
      {/* projects */}
      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-10 space-y-5 snap-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Image
                src={urlFor(project?.image).url()}
                alt="project_image"
                width="400"
                height="400"
                
                className=""
              />
            </motion.div>
            <div className="flex flex-col items-center justify-center max-w-6xl space-y-5">
              <h4 className="text-3xl italic">
                <span className="underline decoration-[rgb(233,220,79)]/70 not-italic">
                  Project.{i + 1} of {projects.length}{" "}
                </span>
                {project.title}
              </h4>
              
              <p className="mx-4 text-2xl text-center md:text-left opacity-70 ">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
