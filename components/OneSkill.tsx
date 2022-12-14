import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings.d";
import { urlFor } from "../sanity";
import Image from "next/image";
type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

export default function OneSkill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          //x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
          //x: 0
        }}
      >
        <Image
          src={urlFor(skill?.image).url()}
          width={128}
          height={128}
          alt={"Skill"}
          className="rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-[90%] w-[100%]  md:h-32 md:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-black opacity-100 ">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
