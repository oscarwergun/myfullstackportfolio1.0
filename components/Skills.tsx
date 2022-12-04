import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="h-screen text-[#fff] snap-center flex justify-center items-center relative flex-col text-center xl:flex-row mx-auto">
      <h3 className="pageTitle">Skills</h3>
      <h4 className="absolute top-[200px] text-xl tracking-[10px] uppercase opacity-80 text-[#dfa52a]
      cursor-pointer">Hover over a skill to see profiency </h4>
      <span>Skill</span>
      <span>Skill</span>
      <span>Skill</span>
    </motion.div>
  );
}
export default Skills;
