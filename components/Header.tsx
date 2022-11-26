import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};
import { motion } from "framer-motion";
function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20 md:items-center p-5">
      {/* Social icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex gap-4 items-center ml-2"
      >
        <SocialIcon url="https://www.linkedin.com/in/oscar-wihlborg-erg%C3%BCn/" />
        <SocialIcon url="https://github.com/oscaroguzhan" />
        <SocialIcon url="https://www.facebook.com/oscaroguzhan/" />
        <SocialIcon url="https://www.instagram.com/ergunoguzhan/" />
        <SocialIcon url="http://twitter.com" />
      </motion.div>
      {/* contact logo */}
      <motion.div 
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex items-center cursor-pointer ">
        <SocialIcon className="mx-2 " network="email" />
        <span className="hidden md:inline-block tracking-wide text-slate-700 uppercase pl-2">
          Get in Touch
        </span>
      </motion.div>
    </header>
  );
}

export default Header;
