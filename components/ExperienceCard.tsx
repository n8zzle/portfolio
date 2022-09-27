import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings.d";
import Image from "next/image";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center -mt-5 md:mt-0 space-y-0 flex-shrink-0 w-screen snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 md:opacity-40 md:cursor-pointer md:transition-opacity md:duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          src={urlFor(experience.companyImage).url()}
          width={128}
          height={128}
          alt={"Company"}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10 ">
        <h4 className="text-lg md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-lg md:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-1 my-2">
          {/*Tech*/}
          {experience.technologies.map((techlonogy) => (
            <Image
              key={techlonogy._id}
              src={urlFor(techlonogy.image).url()}
              className="rounded-full object-cover"
              width={30}
              height={30}
              alt={"Technologie"}
            />
          ))}
        </div>
      </div>
      <p className="uppercase text-sm md:text-light py-2 md:py-5 text-gray-300 ">
        {new Date(experience.dateStarted).toDateString()} -{" "}
        {experience.isCurrentlyWorkingHere
          ? "Present"
          : new Date(experience.dateEnded).toDateString()}
      </p>

      <ul className="list-disc space-y-0 md:space-y-4 ml-5 text-sm md:text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin crollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
