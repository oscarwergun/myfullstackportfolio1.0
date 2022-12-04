import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <section className="flex flex-col items-center flex-shrink-0 px-3 m-3 space-y-6 bg-[#2b2b2b] rounded-xl w-[500px] md:w-[600px] lg:w-[700px] snap-center h-[500px] md:h-[600px] lg:h-[700px] opacity-40 hover:opacity-100 pt-5 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="space-y-3 "
      >
        <Image
          src="https://z3d9h8m9.stackpathcdn.com/wp-content/uploads/2020/11/ec-logo-mono2.svg"
          alt="experience-logo"
          objectFit="contain"
          width="200"
          height="200"
          className="rounded-full md:rounded-lg lg:w-[300px] lg:h-[300px] "
        />
        <div className="px-0 md:px-6">
          <h4 className="text-2xl font-light">Web Developer</h4>
          <p className="mt-1 text-lg">Frontend / Fullstack </p>
          <div className="flex my-2 space-x-2">
            <Image
              src="https://logodix.com/logo/1658345.png"
              alt="techLogo"
              width="50"
              height="50"
            />
            <Image
              src="https://logodix.com/logo/1658345.png"
              alt="techLogo"
              width="50"
              height="50"
            />
            <Image
              src="https://logodix.com/logo/1658345.png"
              alt="techLogo"
              width="50"
              height="50"
            />
          </div>
          <p className="text-sm uppercase text-[#c6bfbf] my-2">
            Started work ... Ended- ...
          </p>
          <ul className="mt-3 space-y-3 text-lg list-disc">
            <li>
              Summary Lorem ipsum dolor sit, amet consectetur
              ldfsflsdfdsfsdlfdssdfldsfdsfl
            </li>
            <li>
              Summary Lorem ipsum dolor sit, amet consectetur
              ldfsflsdfdsfsdlfdssdfldsfdsfl
            </li>
            <li>
              Summary Lorem ipsum dolor sit, amet consectetur
              ldfsflsdfdsfsdlfdssdfldsfdsfl
            </li>
            <li>
              Summary Lorem ipsum dolor sit, amet consectetur
              ldfsflsdfdsfsdlfdssdfldsfdsfl
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default ExperienceCard;
