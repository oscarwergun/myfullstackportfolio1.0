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
    <section className="flex flex-col items-center flex-shrink-0 px-3 mx-3 space-y-6 bg-[#2b2b2b] rounded-xl w-[500px] md:w-[600px] lg:w-[700px] snap-center h-[600px] md:h-[700px] lg:h-[800px] opacity-40 hover:opacity-100 pt-16 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-3">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={urlFor(experience?.companyImage).url()}
            alt="experience-logo"
            width="150"
            height="150"
            className="rounded-[20%] md:rounded-lg lg:w-[200px] lg:h-[200px]"
          />
        </motion.div>
        <div className="px-0 md:px-6">
          <h4 className="text-2xl font-light">{experience?.company}</h4>
          <p className="mt-1 text-lg">{experience?.title} </p>
          <p className="text-sm uppercase text-[#c6bfbf] my-2">
            {new Date(experience.dateStarted).toDateString()}-{" "}
            {experience?.isCurrentlyWorking
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
          <ul className="mt-8 space-y-4 overflow-y-scroll text-lg list-disc ">
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
