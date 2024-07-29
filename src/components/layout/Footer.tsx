"use client";

import Link from "next/link";
import Image from "next/image";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { NAV_LINKS } from "./Header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.footer
      ref={ref}
      className="pt-[20vh] pb-[10vh] h-full flex flex-col gap-5 w-full relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/assets/images/30.png"
        alt="1"
        width={600}
        height={500}
        className="absolute right-0 top-[100px] z-[0px] select-none"
        draggable="false"
      />

      <Image
        src="/assets/images/21.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[1000px] left-0 top-[-100px] z-[0px] select-none"
        draggable="false"
      />

      <Image
        src="/assets/images/20.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[900px] left-0 top-0 z-[0px] select-none"
        draggable="false"
      />

      <div className="flex flex-wrap flex-col md:flex-row md:justify-between lg:justify-around lg:gap-5 lg:pb-10">
        <motion.div
          className="flex flex-col p-5 lg:p-0 gap-5 lg:relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="lg:w-full text-[30px] md:text-[50px] lg:text-[100px] xl:text-[150px] font-[800] text-white lg:leading-[110px] z-20 lg:text-center">
            Follow me
          </h1>
          <Image
            src="/assets/images/33.png"
            alt="1"
            width={500}
            height={500}
            className="hidden lg:inline absolute z-[0px] select-none"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="z-10 p-5 lg:grid lg:grid-cols-2 lg:gap-10 flex gap-5 flex-wrap items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://twitter.com/emmanueltaiwo_"
            target="_blank"
            className="text-gray-200 w-fit h-fit p-2 lg:p-5 bg-[#b21eb2] hover:bg-[#e828e8] rounded-full hover:text-white transition-all duration-500"
          >
            <TwitterLogoIcon className="w-5 h-5 lg:w-16 lg:h-16" />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanueloluwafunso/"
            target="_blank"
            className="text-gray-200 w-fit h-fit p-2 lg:p-5 bg-[#b21eb2] hover:bg-[#e828e8] rounded-full hover:text-white transition-all duration-500"
          >
            <LinkedInLogoIcon className="w-5 h-5 lg:w-16 lg:h-16" />
          </a>
          <a
            href="https://github.com/emmanueltaiwo"
            target="_blank"
            className="text-gray-200 w-fit h-fit p-2 lg:p-5 bg-[#b21eb2] hover:bg-[#e828e8] rounded-full hover:text-white transition-all duration-500"
          >
            <GitHubLogoIcon className="w-5 h-5 lg:w-16 lg:h-16" />
          </a>
          <a
            href="https://www.instagram.com/emmanuelcodez/"
            target="_blank"
            className="text-gray-200 w-fit h-fit p-2 lg:p-5 bg-[#b21eb2] hover:bg-[#e828e8] rounded-full hover:text-white transition-all duration-500"
          >
            <InstagramLogoIcon className="w-5 h-5 lg:w-16 lg:h-16" />
          </a>
        </motion.div>
      </div>

      <hr className="border-2 border-[#b21eb2] w-full lg:w-[90%] mx-auto" />

      <motion.div
        className="lg:w-[85%] w-full p-5 lg:p-0 flex flex-wrap flex-col md:flex-row justify-between mx-auto lg:gap-5 md:items-center items-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          href="/"
          className="text-[30px] font-[800] text-white leading-[110px] z-20"
        >
          Emmanuel
        </Link>

        <ul className="flex flex-col md:flex-row lg:items-center items-start gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-white font-[400] text-[15px] lg:pb-6 `}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
