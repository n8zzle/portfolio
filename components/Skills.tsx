import React from "react";
import OneSkill from "./OneSkill";
import { motion } from "framer-motion";
import { Skill } from "../typings.d";
type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>

      <h3 className="hidden md:inline-flex top-36 absolute uppercase tacking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>

      <div className="mt-30 mb-20 grid p-5 md:p-0 grid-cols-5 md:grid-cols-7  gap-2 md:gap-3">
        {skills?.map((skill) => (
          <OneSkill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
