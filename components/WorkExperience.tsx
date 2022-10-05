import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings.d";
type Props = {
  experiences: Experience[];
};

function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-screen  mt-24 mb-10 flex space-x-5  overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-grey-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences?.map((experience, i) => (
          <div key={experience._id}>
            <ExperienceCard experience={experience} />
            <p className="text-center">
              {i + 1} of {experiences.length}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
