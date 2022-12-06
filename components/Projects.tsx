import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};
const projects = [1, 2, 3, 4, 5];
function Projects({}: Props) {
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
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen space-y-5 snap-center "
          >
            <motion.div
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Image
                src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.6435-9/71897782_1389460091228007_8841843597960544256_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WaoS9bMjO1kAX_EPj1I&_nc_ht=scontent.fmmx3-1.fna&oh=00_AfANQnNQk5qeVmq39KDqpUWz5k3suU5xrvTxQlKkxGpfrQ&oe=63A9F021"
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
                project name
              </h4>
              <p className="mx-4 text-2xl text-center md:text-left opacity-70 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing
                elit.Suscipit iure quas molestias fugiat optio omnis, vel
                commodi consectetur consequatur illo perferendis in fugit. Quasi
                cumque reiciendis eos explicabo? Minus, non.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
