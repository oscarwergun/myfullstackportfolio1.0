import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";
import { pageInfo } from "../typings";
import { urlFor } from "../sanity";

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
    <div className="flex flex-col items-center justify-center h-screen space-y-6 overflow-hidden text-center ">
      <BackgroundCircle />
      {/* pull a remote image using Image component and layout property. It is important to keep in mind with layout property that parent div is relative  */}
      <div className="relative h-72 w-72 md:w-80 md:h-80 xl:w-96 xl:h-96">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="/"
          width={400}
          height={400}
          className="rounded-full"
          priority
        />
      </div>
      <h1 className="text-3xl tracking-widest uppercase text-[#c7c5c5] pb-2">
        {pageInfo?.role}
      </h1>
      {/* react-simple-typewriter library */}
      <h1 className="text-5xl text-center">
        <span className="text-[#fff] tracking-wider">{text}</span>
        <Cursor cursorColor="rgb(242, 177, 37)" />
      </h1>
      {/* section buttons */}
      <div className="z-10 inline-flex flex-col w-[60%] justify-center items-center md:flex md:flex-row md:py-4 py-2 cursor-pointer">
        <Link href="#about">
          <button className="heroButtons">About</button>
        </Link>
        <Link href="#experiences">
          <button className="heroButtons">Experiences</button>
        </Link>
        <Link href="#skills">
          <button className="heroButtons">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButtons">Projects</button>
        </Link>
        <Link href="#contact">
          <button className="heroButtons">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
