import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen text-[#fff] snap-center flex justify-center items-center relative flex-col text-center xl:flex-row mx-auto"
    >
      <h3 className="pageTitle">Skills</h3>
      <h4
        className="absolute top-[160px] text-xl tracking-[10px] uppercase opacity-80 hover:underline text-[#dfa52a]
     "
      >
        Hover over a skill to see profiency{" "}
      </h4>
      <div className="grid grid-cols-4 gap-5">
        {skills?.map((skill) => (
          <Skill key={skill?._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
export default Skills;
