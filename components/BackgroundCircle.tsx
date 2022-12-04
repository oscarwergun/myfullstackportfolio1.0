import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <div className="relative flex justify-center items-center z-0">
      <div className="absolute
      border border-[#fafafa] rounded-full border-slate-400 h-[500px] w-[500px] mt-48 animate-ping " />
    </div>
  );
}

export default BackgroundCircle;
