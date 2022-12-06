import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  directionLeft: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="https://logodix.com/logo/1193669.png"
        alt="skill"
        className="object-cover w-24 h-24 transition duration-300 ease-out border rounded-full xl:w-32 xl:h-32 group-hover:grayscale filter hover:opacity-0"
      />
      <div className="absolute transition duration-150 ease-out opacity-0 group-hover:opacity-90 group-hover:bg-[#fff] h-24 w-24 rounded-full xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p
            className="
        text-2xl font-semibold text-[hsl(0,2%,11%)] opacity-100"
          >
            100%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
