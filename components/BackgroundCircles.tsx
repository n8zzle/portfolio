import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] md:h-[300px] md:w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] md:h-[500px] md:w-[500px] mt-52 animate-ping" />
      <div className="absolute rounded-full border border-[#F7AB0A] opacity-20 h-[350px] w-[350px] md:h-[650px] md:w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] md:h-[800px] md:w-[800px] mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
