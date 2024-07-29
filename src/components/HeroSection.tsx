"use client";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:flex-row gap-5 lg:justify-center p-5 md:p-10 lg:items-start lg:pt-20 h-full lg:h-[90vh] pb-[20vh]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/assets/images/19.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[1000px] right-0 top-0 z-[0px] select-none"
        draggable="false"
      />
      <Image
        src="/assets/images/20.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[1000px] right-0 top-0 z-[0px] select-none"
        draggable="false"
      />
      <Image
        src="/assets/images/21.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[1000px] top-0 right-0 z-[0px] select-none"
        draggable="false"
      />

      <div className="absolute left-0 hidden xl:flex justify-start items-start top-1/2 transform -translate-y-1/2">
        <Image
          src="/assets/images/line.png"
          alt="1"
          width={500}
          height={500}
          className="w-[50px] z-0 mr-auto relative left-[-10px] select-none"
          draggable="false"
        />
      </div>

      <Image
        src="/assets/images/14.png"
        alt="1"
        width={500}
        height={500}
        className="absolute hidden lg:flex w-[50px] top-[200px] mr-[100px] right-0 z-[0px] select-none"
        draggable="false"
      />

      <Image
        src="/assets/images/14.png"
        alt="1"
        width={500}
        height={500}
        className="absolute hidden xl:flex w-[50px] mt-[250px] mr-[850px] right-0 z-[0px] select-none"
        draggable="false"
      />

      <div className="z-10 flex flex-col gap-5">
        <h3 className="text-[15px] md:text-[20px] lg:text-[20px] xl:text-[40px] text-gray-400 font-[300] tracking-[0.4em]">
          SOFTWARE ENGINEER
        </h3>
        <h1 className="hidden lg:inline text-[60px] xl:text-[100px] font-[800] text-white leading-[80px] xl:leading-[100px]">
          Emmanuel <br /> Taiwo
        </h1>

        <h1 className="inline lg:hidden text-[30px] md:text-[60px] font-[800] text-white">
          Emmanuel Taiwo
        </h1>

        <div className="h-full flex gap-2 lg:gap-5 lg:ml-2">
          <div className="h-[80px] lg:h-[100px] xl:h-[160px] p-[0.5px] bg-gray-300" />
          <p className="text-gray-400 text-[18px] md:w-[250px] lg:w-[250px] xl:w-[150px]">
            I&apos;m a software engineer and web3 developer. Want to take your
            team & project to the next level?
          </p>
        </div>

        <div className="flex xl:hidden flex-wrap gap-5 items-center">
          <a
            href="https://twitter.com/emmanueltaiwo_"
            target="_blank"
            className="text-gray-400 p-2 hover:bg-[#b21eb2] hover:rounded-full hover:text-white transition-all duration-500"
          >
            <TwitterLogoIcon className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanueloluwafunso/"
            target="_blank"
            className="text-gray-400 p-2 hover:bg-[#b21eb2] hover:rounded-full hover:text-white transition-all duration-500"
          >
            <LinkedInLogoIcon className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/emmanueltaiwo"
            target="_blank"
            className="text-gray-400 p-2 hover:bg-[#b21eb2] hover:rounded-full hover:text-white transition-all duration-500"
          >
            <GitHubLogoIcon className="w-7 h-7" />
          </a>
          <a
            href="https://www.instagram.com/emmanuelcodez/"
            target="_blank"
            className="text-gray-400 p-2 hover:bg-[#b21eb2] hover:rounded-full hover:text-white transition-all duration-500"
          >
            <InstagramLogoIcon className="w-7 h-7" />
          </a>
        </div>

        <Link
          href="/#contact"
          className="text-white font-[700] text-[15px] w-fit h-fit px-10 py-4 rounded-lg bg-[#b21eb2] hover:bg-[#b21eb2d5] mt-5 flex items-center gap-3"
        >
          <PaperPlaneIcon className="w-5 h-5" />
          Hire Me
        </Link>
      </div>

      <Image
        src="/assets/images/hero.jpg"
        alt="emmanuel"
        width={500}
        height={500}
        className="w-full lg:w-[510px] lg:h-[500px] shadow-2xl shadow-[#b21eb2] hidden lg:inline ring-2 rounded-full z-10 select-none"
        draggable="false"
      />

      <div className="z-10 p-5 absolute right-0 h-fit hidden xl:flex flex-col gap-5 items-center">
        <a
          href="https://twitter.com/emmanueltaiwo_"
          target="_blank"
          className="text-gray-400 p-2 hover:bg-[#b21eb2] hover:rounded-full hover:text-white transition-all duration-500"
        >
          <TwitterLogoIcon className="w-7 h-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanueloluwafunso/"
          target="_blank"
          className="text-gray-400 p-2 hover:bg-[#b21eb2] hover:rounded-full hover:text-white transition-all duration-500"
        >
          <LinkedInLogoIcon className="w-7 h-7" />
        </a>
        <a
          href="https://github.com/emmanueltaiwo"
          target="_blank"
          className="text-gray-400 p-2 hover:bg-[#b21eb2] hover:rounded-full hover:text-white transition-all duration-500"
        >
          <GitHubLogoIcon className="w-7 h-7" />
        </a>
        <a
          href="https://www.instagram.com/emmanuelcodez/"
          target="_blank"
          className="text-gray-400 p-2 hover:bg-[#b21eb2] hover:rounded-full hover:text-white transition-all duration-500"
        >
          <InstagramLogoIcon className="w-7 h-7" />
        </a>
      </div>
    </motion.div>
  );
};

export default HeroSection;
