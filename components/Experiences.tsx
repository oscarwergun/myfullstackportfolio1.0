import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
type Props = {
  experiences: Experience[];
};

function Experiences({ experiences }: Props) {
  return (
    <motion.div
      className="relative flex flex-col justify-center max-w-full mx-auto h-screen text-center text-[#fff] overflow-hidden md:flex-row items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <h3 className="pageTitle">Experience / Education</h3>
      <div className="flex w-full p-10 my-2 space-x-5 overflow-x-scroll snap-x snap-mandatory">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experiences;
