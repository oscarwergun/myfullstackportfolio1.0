import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { pageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: pageInfo;
  title: String
};

function About({ pageInfo, title }: Props) {
  return (
    <div
    className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'
    >
      
      <motion.div
        className="flex flex-col items-center mt-24 space-y-12 md:flex-row md:mr-6 md:flex-1"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        viewport={{ once: true }}
      >
        <h2 className="pageTitle">{title}</h2>
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt="about image"
          width="300"
          height="300"
          className='-mb-20 flex-shrink-0 md:mb-0 rounded-full w-72 h-72 object-cover md:w-[300px] md:h-[300px] md:rounded-md xl:w-[400px] xl:h-[400px] xl:rounded-md'
          />
      <div className="flex items-center space-y-6 px:0 md:px-6 md:flex-1 md:text-lg">
        <p className='mb-6 text-md'>
          {pageInfo?.backgroundInfo}
        </p>
      </div>
      </motion.div>
    </div>
  );
}

export default About;
