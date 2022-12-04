import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
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
          src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.6435-9/71897782_1389460091228007_8841843597960544256_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WaoS9bMjO1kAX_EPj1I&_nc_ht=scontent.fmmx3-1.fna&oh=00_AfANQnNQk5qeVmq39KDqpUWz5k3suU5xrvTxQlKkxGpfrQ&oe=63A9F021"
          alt="about image"
          objectFit="contain"
          width="300"
          height="300"
          className="rounded-full md:rounded-lg lg:w-[400px] lg:h-[400px]"
        />
      </motion.div>
      <div className="md:ml-4 md:flex-1">
        <p className="flex text-xl tracking-wider">
          My name is Oscar. Beside spending time with my family i am fascinated
          in web development and have been practicing both frontend and backend
          operations. I am recently studying at EC Education as a frontend
          developer. Building user-friendly, responsive and scalable websites/
          applications is a true passion for me. Aside my education as frontend
          developer i have been working in food industry as a team leader who
          can motivate other people and used to work with different tasks. I am
          looking for a new challenge
        </p>
      </div>
    </div>
  );
}

export default About;
