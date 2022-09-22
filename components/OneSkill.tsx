import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
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
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          src={urlFor(skill?.image).url()}
          width={128}
          height={128}
          className="rounded-full border border-gray-500 object-cover w-28 h-28  filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-32 md:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100 ">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
