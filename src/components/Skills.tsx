import Image from "next/image";

type Skill = {
  name: string;
};

const SKILLS: Skill[] = [
  { name: "Html" },
  { name: "CSS" },
  { name: "Javascript" },
  { name: "React.js" },
  { name: "React Native" },
  { name: "Redux" },
  { name: "Typescript" },
  { name: "Tailwind css" },
  { name: "Material UI" },
  { name: "SCSS" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "GraphQL" },
  { name: "MongoDB" },
  { name: "Jest" },
  { name: "Cypress" },
  { name: "Firebase" },
  { name: "Netlify" },
  { name: "Git & Github" },
  { name: "Vercel" },
];

const chunkArray = (array: Skill[], chunkSize: number): Skill[][] => {
  const chunks: Skill[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const Skills = () => {
  const skillChunks = chunkArray(SKILLS, Math.ceil(SKILLS.length / 4));

  return (
    <section
      id="skills"
      className="h-full flex flex-col gap-5 justify-center lg:items-center relative md:pb-[20vh]"
    >
      <Image
        src="/assets/images/20.png"
        alt="1"
        width={500}
        height={500}
        className="absolute right-0 top-0 z-[0px] select-none"
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
      <Image
        src="/assets/images/21.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[900px] bottom-0 left-0 z-[0px] select-none"
        draggable="false"
      />

      <div className="z-10 flex flex-col lg:flex-row gap-5 items-center justify-center h-fit">
        <h1 className="w-full text-[60px] lg:text-[120px] font-[800] text-white leading-[110px] z-20 text-center lg:text-left">
          My Skills
        </h1>
        <Image
          src="/assets/images/24.png"
          alt="emmanuel"
          width={500}
          height={100}
          className="hidden lg:flex w-[500px] z-10 select-none"
          draggable="false"
        />
      </div>

      <div
        className={`hidden lg:grid grid-cols-4 z-10 gap-5 lg:justify-items-center lg:w-[70%] lg:mx-auto mt-10`}
      >
        {skillChunks.map((chunk, index) => (
          <ul key={index} className="flex flex-col gap-5 list-disc px-5">
            {chunk.map((skill, i) => (
              <li
                key={i}
                className="text-white text-[20px] font-500 hover:text-[#e33fe3] transition-all duration-300 cursor-pointer"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div
        className={`flex flex-col md:px-10 px-5 justify-start items-start lg:hidden z-10 gap-5] mt-10`}
      >
        {skillChunks.map((chunk, index) => (
          <ul key={index} className="flex flex-col gap-5 list-disc px-5">
            {chunk.map((skill, i) => (
              <li
                key={i}
                className="text-white text-[20px] font-500 hover:text-[#e33fe3] transition-all duration-300 cursor-pointer"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        ))}
      </div>

      <Image
        src="/assets/images/22.png"
        alt="emmanuel"
        width={300}
        height={600}
        className="absolute hidden lg:flex right-0 mt-[400px] w-[200px] rounded-full z-10 select-none"
        draggable="false"
      />

      <Image
        src="/assets/images/22.png"
        alt="emmanuel"
        width={300}
        height={600}
        className="absolute hidden lg:flex left-0 w-[200px] rounded-full z-10 select-none"
        draggable="false"
      />
    </section>
  );
};

export default Skills;