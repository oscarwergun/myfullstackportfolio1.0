import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { pageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: pageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <div
      className="h-screen flex flex-col relative text-center justify-evenly items-center text-[#fff]
    md:text-left md:flex-row max-w-7xl px-10 mx-auto"
    >
      <h2 className="pageTitle">About</h2>
      <motion.div
        className="image-container"
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
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt="about image"
          objectFit="contain"
          width="300"
          height="300"
          className="rounded-full md:rounded-lg lg:w-[400px] lg:h-[400px]"
        />
      </motion.div>
      <div className="md:ml-4 md:flex-1">
        <p className="flex text-xl tracking-wider">
          {pageInfo?.backgroundInfo}
        </p>
      </div>
    </div>
  );
}

export default About;
