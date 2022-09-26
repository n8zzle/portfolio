import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../typings.d";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>

      <div className="relative w-full mt-7 md:mt-16 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-grey-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 md:space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                //  y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{
                opacity: 1,
                // y: 0
              }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt={"Project"}
              className="h-auto w-screen  md:h-2/3 md:w-3/3 rounded-lg mt-14"
            />
            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                {project.title}
              </h4>
              <div className="flex items-center">
                <p className="text-md md:text-lg font-bold">
                  Technology Stack:
                </p>
                {project.technologies.map((techlonogy) => (
                  <Image
                    key={techlonogy._id}
                    src={urlFor(techlonogy.image).url()}
                    className="rounded-full object-cover"
                    alt={"Technologie"}
                    width={30}
                    height={30}
                  />
                ))}
              </div>
              <div className="flex flex-col p-3 space-y-5 md:w-[700px]">
                <p className="text-sm md:text-lg text-center md:text-left">
                  {project.summary}
                </p>
                <Link href={project.linkToBuild}>
                  <button className="bg-[#F7AB0A] py-3  rounded-lg text-black font-bold text-lg">
                    Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
