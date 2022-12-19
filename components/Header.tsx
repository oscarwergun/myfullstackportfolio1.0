import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {
  socials: Social[];
};
import { motion } from "framer-motion";
import { Social } from "../typings";
function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between p-5 mx-auto max-w-7xl md:items-center">
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
        className="flex items-center gap-4 ml-2"
      >
        
        {socials.map((social) => (
          <SocialIcon key={social._id} url={social.url} 
          fgColor="#fff"/>
        ))}
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
        className="flex items-center cursor-pointer "
      >
        <SocialIcon className="mx-2 " network="email" />
        <span className="hidden md:inline-block tracking-wide text-slate-700 uppercase pl-2 text-[#fff]">
          Get in Touch
        </span>
      </motion.div>
    </header>
  );
}

export default Header;
