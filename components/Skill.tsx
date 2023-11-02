import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  directionLeft: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={urlFor(skill?.image).url()}
        alt="skill"
        className="object-fill w-20 h-20 transition duration-300 ease-out border rounded-full xl:w-24 xl:h-24 group-hover:grayscale filter hover:opacity-0"
      />
      {/* be aware of parent div relative */}
      <div className="absolute transition duration-150 ease-out opacity-0 group-hover:opacity-90 group-hover:bg-[#fff] h-20 w-20 rounded-full xl:w-24 xl:h-24">
        <div className="flex items-center justify-center h-full">
          <p
            className="
        text-2xl font-semibold text-[hsl(0,2%,11%)] opacity-100"
          >
            {skill?.progress}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
