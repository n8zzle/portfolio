import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings.d";
type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl ">
        About
      </h3>

      <motion.img
        src={urlFor(pageInfo.profilePic).url()}
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="-mb-20 mt-16  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95  xl:w-[500px] xl:h-[600px]"
      />
      <div className="mt-6 space-y-5 md:space-y-10 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="sm:text-xs text-base ">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
