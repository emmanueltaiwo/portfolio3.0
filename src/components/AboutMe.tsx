"use client";

import Link from "next/link";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="h-full pb-[10vh] lg:h-screen max-h-full flex flex-col lg:flex-row gap-5 justify-center items-center relative"
    >
      <Image
        src="/assets/images/20.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[900px] right-0 top-0 z-[0px] select-none"
        draggable="false"
      />
      <Image
        src="/assets/images/21.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[900px] top-0 right-0 z-[0px] select-none"
        draggable="false"
      />

      <div className="hidden lg:flex z-10 relative w-[900px] h-[600px]">
        <h1 className="absolute top-[-50px] right-0 text-[120px] font-[800] text-white leading-[110px] z-20">
          About <br /> <span className="text-in-image">Me</span>
        </h1>
        <Image
          src="/assets/images/17.png"
          alt="emmanuel"
          width={900}
          height={600}
          className="rounded-full z-10 select-none"
          draggable="false"
        />
        <Image
          src="/assets/images/6.png"
          alt="emmanuel"
          width={200}
          height={200}
          className="rounded-full z-10 select-none absolute bottom-[20px] ml-[50px]"
          draggable="false"
        />
      </div>

      <Image
        src="/assets/images/17.png"
        alt="emmanuel"
        width={900}
        height={600}
        className="rounded-full z-10 select-none lg:hidden"
        draggable="false"
      />

      <h1 className="flex lg:hidden text-[60px] font-[800] text-white leading-[110px] z-20">
        About Me
      </h1>

      <div className="z-10 flex flex-col gap-5 lg:w-[450px]">
        <Image
          src="/assets/images/23.png"
          alt="emmanuel"
          width={300}
          height={600}
          className="mx-auto lg:mx-0 lg:ml-auto hidden lg:inline lg:w-[200px] rounded-full z-10 select-none"
          draggable="false"
        />

        <p className="text-[17px] text-gray-300 font-[400] w-[90%] mx-auto lg:w-full lg:mx-0 text-center lg:text-left">
          Highly skilled and results-driven Software Engineer withmultiple years
          of experience and a proven track record in developing robust and
          scalable software solutions. Specialized expertise in JavaScript,
          Typescript,Node.js, React.js, ReactNative, Express.js, andNoSQL
          databases. Delivering innovative solutionsthat drive operational
          efficiency and enhance user experiences.
        </p>
        <Link
          href="/#contact"
          className="text-white font-[700] text-[15px] w-fit h-fit px-10 py-4 rounded-lg bg-[#b21eb2] hover:bg-[#b21eb2d5] mt-5 flex items-center gap-3 mx-auto lg:mx-0"
        >
          Contact Me
        </Link>

        <Image
          src="/assets/images/22.png"
          alt="emmanuel"
          width={300}
          height={600}
          className="absolute right-0 mt-[400px] w-[200px] rounded-full z-10 select-none"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default AboutMe;
