import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";
import { pageInfo } from "../typings";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";
type Props = {
  pageInfo: pageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, helper] = useTypewriter({
    words: [
      `This is ${pageInfo?.name}`,
      "Who-loves-to-code.tsx",
      "<ButWantsToLearnMore/>",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
<motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 2.5
      }}
      className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center'>
      <BackgroundCircle />
      <Image src={urlFor(pageInfo?.heroImage).url()} alt="Oscar profile picture" width={300} height={300} className='relative object-cover mx-auto rounded-full' />
      <div className='z-20'>
        <h2 className='text-slate-400 uppercase tracking-[12px] pb-2'>{pageInfo.role}</h2>
        
        <h1 className='px-10 text-3xl lg:text-5xl md:text-4xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#8e0de9' />
        </h1>

        <div className='pt-8 '>
          <Link href="#about">
            <button className='heroBtn'>About</button>
          </Link>
          <Link href="#experiences">
            <button className='heroBtn'>Experiences</button>
          </Link>
          <Link href="#skills">
            <button className='heroBtn'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroBtn'>Projects</button>
          </Link>
          <Link href="#contact">
            <button className='heroBtn'>Contact</button>
          </Link>

        </div>
      </div>
    </motion.div>
  )
}

export default Hero;
