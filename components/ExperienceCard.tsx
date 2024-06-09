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
    <motion.section
    initial={{ opacity: 0, y: -100 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col items-center space-y-7 flex-shrink-0 snap-center w-[500px] md:w-[600px] xl:w-[900px] bg-[#1e2c3d] p-10 hover:bg-[#26384f] transition-opacity ease-out h-fit min-h-[720px]'>
          <Image
            src={urlFor(experience?.companyImage).url()}
            alt="experience-logo"
            width="180"
            height="180"
            className="rounded-[20%] md:rounded-lg lg:w-[200px] lg:h-[200px] mt-12"
          />
        <div className="px-0 py-6 md:px-6">
          <h4 className="text-2xl ">{experience?.company}</h4>
          <p className="mt-1 text-lg">{experience?.title} </p>
          <div className="flex justify-center mx-auto my-2 space-x-2">
            {experience?.technologies.map((technique, i) => technique?.image &&
              <Image key={i} alt="" src={urlFor(technique?.image).url()} width={40} height={40}  className="h-10"/>)}
          </div>
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
    </motion.section>
  );
}

export default ExperienceCard;
