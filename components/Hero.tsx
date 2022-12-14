import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings.d";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My Name's ${pageInfo.name}`,
      "<GuyWhoLovesToCodeMore />",
      "<GuyWhoLovesToLearnMore />",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 80,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircles />

      <div className="z-20">
        <Image
          src={urlFor(pageInfo.heroImage).url()}
          width={128}
          height={128}
          alt={"PortfolioImage"}
          className="relative rounded-full mx-auto object-cover"
        />
        <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[3px] md:tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-lg md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
