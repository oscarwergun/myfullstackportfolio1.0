import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, helper] = useTypewriter({
    words: ["This is Oscar", "Who-loves-to-code.tsx", "<ButWantsToLearnMore/>"],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 overflow-hidden text-center ">
      <BackgroundCircle />
      {/* pull a remote image using Image component and layout property. It is important to keep in mind with layout property that parent div is relative  */}
      <div className="relative h-72 w-72 md:w-80 md:h-80 xl:w-96 xl:h-96">
        <Image
          src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.6435-9/71897782_1389460091228007_8841843597960544256_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WaoS9bMjO1kAX_EPj1I&_nc_ht=scontent.fmmx3-1.fna&oh=00_AfANQnNQk5qeVmq39KDqpUWz5k3suU5xrvTxQlKkxGpfrQ&oe=63A9F021"
          alt="/"
          layout="fill"
          objectFit="contain"
          className="rounded-full"
          priority
        />
      </div>
      <h1 className="text-3xl tracking-widest uppercase text-[#c7c5c5] pb-2">
        Frontend Developer
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
