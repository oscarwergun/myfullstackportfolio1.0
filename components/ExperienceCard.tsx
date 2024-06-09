import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <section 
    className="flex flex-col text-start flex-shrink-0 px-3 mx-3 space-y-4 bg-[#49426c] rounded-xl w-[500px] md:w-[600px] lg:w-[700px] snap-center h-[500px] md:h-[600px] lg:h-[700px] opacity-40 hover:opacity-100 pt-16 cursor-pointer transition-opacity duration-200 overflow-hidden hover:bg-[#49426c]/50 ease-out">
      <div className="flex flex-col items-center justify-center space-y-3 snap-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={urlFor(experience?.companyImage).url()}
            alt="experience-logo"
            width="180"
            height="180"
            className="rounded-[20%] md:rounded-lg lg:w-[200px] lg:h-[200px]"
          />
        </motion.div>
        <div className="px-0 py-6 md:px-6">
          <h4 className="text-2xl ">{experience?.company}</h4>
          <p className="mt-1 text-lg">{experience?.title} </p>
          <p className="text-sm uppercase text-[#c6bfbf] my-2">
            {new Date(experience.dateStarted).toDateString()}-{" "}
            {experience?.isCurrentlyWorking
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
          <ul className="flex flex-col mt-8 space-y-4 overflow-y-scroll text-lg list-disc text-start">
            {experience?.details.map((point) => (
              <li key={experience._id} className="">
                ⭐️ {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ExperienceCard;
