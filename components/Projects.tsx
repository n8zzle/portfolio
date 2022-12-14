import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../typings.d";
import { SocialIcon } from "react-social-icons";
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
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>

      <div className="relative w-full mt-0 md:mt-16 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-grey-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 md:space-y-5 items-center justify-center p-10 md:p-44 h-screen"
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
              className="h-auto w-screen  md:h-auto md:w-2/5 rounded-lg mt-14"
            />
            <div className="space-y-3 md:space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl md:text-4xl font-semibold text-center">
                {project.title}
              </h4>
              <div className="flex items-center">
                <p className="text-sm md:text-lg font-bold">
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
                <p className="text-xs md:text-lg text-center md:text-left">
                  {project.summary}
                </p>
                <Link href={project.linkToBuild}>
                  <button className="bg-[#F7AB0A] py-0 md:py-1  rounded-lg text-black font-bold text-sm md:text-lg">
                    <SocialIcon
                      url={project.linkToBuild}
                      fgColor="black"
                      bgColor="transparent"
                    />
                    Link
                  </button>
                </Link>
              </div>
            </div>
            <p className="text-center font-extrabold">
              {i + 1} of {projects.length}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
