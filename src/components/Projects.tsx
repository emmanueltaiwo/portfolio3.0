"use client";

import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Project = {
  name: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
};

const projectsData: Project[] = [
  {
    name: "PicGenie",
    description:
      "PicGenie is an AI image generator software that generates image for users based on prompts.",
    imageUrl: "/assets/images/picgenie-bg.png",
    liveUrl: "https://picgenie.vercel.app/",
    githubUrl: "https://github.com/emmanueltaiwo/picgenie-frontend",
  },
  {
    name: "SpendSense",
    description:
      "SpendSense is a financial expense management platform built for simplifying expenses management.",
    imageUrl: "/assets/images/spendsense.png",
    liveUrl: "https://spendsense.com.ng/",
    githubUrl: "https://github.com/emmanueltaiwo/spendsense",
  },
  {
    name: "Clutch",
    description:
      "Clutch is a social network that focuses on building communities.",
    imageUrl: "/assets/images/clutch.png",
    liveUrl: "https://clutchapp.vercel.app/",
    githubUrl: "https://github.com/emmanueltaiwo/clutch",
  },
  {
    name: "TokenTide",
    description:
      "This is a Modern Web3 App Landing Page Built using Next.js, Typescript, and Tailwind CSS",
    imageUrl: "/assets/images/tokentide.png",
    liveUrl: "https://tokentideapp.vercel.app/",
    githubUrl: "https://github.com/emmanueltaiwo/tokentide-landing-page",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="w-full h-full flex flex-col gap-5 justify-center items-center relative md:pb-[20vh]"
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
        src="/assets/images/14.png"
        alt="1"
        width={100}
        height={100}
        className="absolute hidden lg:flex right-0 top-[400px] z-[0px] select-none"
        draggable="false"
      />
      <Image
        src="/assets/images/22.png"
        alt="emmanuel"
        width={600}
        height={600}
        className="w-[500px] absolute left-0 top-[550px] rounded-full z-10 select-none"
        draggable="false"
      />
      <Image
        src="/assets/images/21.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[1000px] right-0 top-[900px] z-[0px] select-none"
        draggable="false"
      />
      <Image
        src="/assets/images/21.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[1000px] left-0 top-[1400px] z-[0px] select-none"
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

      <motion.div
        className="xl:w-[80%] z-10 flex gap-5 items-end justify-end h-fit"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-[50px] text-center xl:text-right lg:text-[120px] font-[800] text-white leading-[110px] z-20">
          My Projects
        </h1>
      </motion.div>

      <div className="w-[70%] z-10 hidden xl:flex flex-col gap-[150px] justify-around mt-[100px]">
        {projectsData.map((project, index) => (
          <motion.div
            key={index + 10}
            className={`flex ${
              index % 2 === 0 ? "gap-5" : "justify-end ml-auto gap-5"
            } z-10 relative w-[900px] h-[400px]`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          >
            <div
              className={`absolute ${
                index % 2 === 0
                  ? "right-[-250px] top-[0px]"
                  : "left-[-180px] top-[100px]"
              } flex flex-col gap-1 z-20`}
            >
              <h3 className="text-[80px] font-[600] text-gray-100">
                {project.name}
              </h3>
              <h2 className="text-[20px] w-[500px] font-[300] text-white">
                {project.description}
              </h2>

              <div className="flex items-center gap-5">
                <a
                  href={project.liveUrl}
                  className="text-white font-[700] text-[15px] w-fit h-fit px-10 py-3 rounded-lg bg-[#b21eb2] hover:bg-[#b21eb2d5] mt-5 flex items-center gap-3 transition-all duration-300"
                >
                  Demo
                  <ArrowRightIcon />
                </a>

                <a
                  href={project.githubUrl}
                  className="text-white font-[700] text-[15px] w-fit h-fit px-10 py-3 rounded-lg border-2 border-[#b21eb2] hover:bg-[#b21eb2d5] mt-5 flex items-center gap-3 transition-all duration-300"
                >
                  Github Repo
                  <GitHubLogoIcon />
                </a>
              </div>
            </div>

            <div className="w-[700px] h-[400px] rounded-xl bg-slate-800/50 relative overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.imageUrl}
                width={600}
                height={500}
                className="w-[700px] h-[400px] rounded-xl select-none object-cover"
                draggable="false"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="z-10 xl:hidden flex flex-col gap-10 justify-around">
        {projectsData.map((project, index) => (
          <motion.div
            key={index + 10}
            className={`flex`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          >
            <div className="rounded-xl w-[95%] mx-auto bg-slate-800/50 p-5 relative overflow-hidden flex flex-col gap-5">
              <Image
                src={project.imageUrl}
                alt={project.imageUrl}
                width={700}
                height={500}
                className="w-[95%] mx-auto rounded-xl select-none object-cover"
                draggable="false"
              />

              <div className="">
                <h3 className="text-[40px] font-[700] text-gray-100">
                  {project.name}
                </h3>
                <h2 className="text-[14px] font-[300] text-white">
                  {project.description}
                </h2>

                <div className="flex flex-col items-center gap-1">
                  <a
                    target="_blank"
                    href={project.liveUrl}
                    className="text-white font-[700] text-[15px] w-full h-fit justify-center px-10 py-3 rounded-lg bg-[#b21eb2] hover:bg-[#b21eb2d5] mt-5 flex items-center gap-3 transition-all duration-300"
                  >
                    Demo
                    <ArrowRightIcon />
                  </a>

                  <a
                    target="_blank"
                    href={project.githubUrl}
                    className="text-white font-[700] text-[15px] w-full text-center h-fit px-10 py-3 rounded-lg border-2 border-[#b21eb2] hover:bg-[#b21eb2d5] mt-5 flex justify-center items-center gap-3 transition-all duration-300"
                  >
                    Github Repo
                    <GitHubLogoIcon />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
