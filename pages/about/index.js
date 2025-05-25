import React, { useState } from "react";

// icons
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiExpo,
  SiFirebase,
  SiSentry,
  SiSonarqube,
  SiTypescript,
} from "react-icons/si";

//  about data
export const aboutData = [
  {
    title: "Habilidades",
    info: [
      {
        title: "Desenvolvimento Mobile e Web :",
        icons: [
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
          <FaJs key={2} />,
          <FaReact key={3} />,
          <SiTypescript key={4} />,
          <SiExpo key={5} />,
        ],
      },
      {
        title: "Ferramentas e Serviços:",
        icons: [
          <SiFirebase key={0} />,
          <SiSentry key={1} />,
          <SiSonarqube key={2} />,
        ],
      },
      {
        title: "UI/UX Design:",
        icons: [<FaFigma key={0} />],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Hackthon Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experiência",
    info: [
      {
        title: "Fundador - CouldWave Technology",
      },
      {
        title: "Front end Developer - Hopy Tecnologia",
        stage: "2019 - 2022 ",
      },
      {
        title: "Mobile Developer - React Native",
        stage: "2022 - 2023 ",
      },
      {
        title: "Front end Developer - Fabrika SVF",
        stage: "2023 - 2024 ",
      },
      {
        title: "Full Stack Developer REACT/NODE - BLUMA",
        stage: "2024 - Atual ",
      },
    ],
  },
  {
    title: "Certificados",
    info: [
      // {
      //   title: "BootCamp - Rocketseat",
      //   stage: "2011",
      // },
      {
        title: "Graduando em Sistemas para Internet - Uniesp - PB",
        // stage: "2009",
      },
      {
        title: "Certificado Bootcamp - Rocketseat",
        // stage: "2023",
      },
      {
        title: "Certificado Bootcamp - Rocketseat",
        // stage: "2023",
      },
      {
        title: "Certificado Ignite - Rocketseat",
        // stage: "2023",
      },
      {
        title: "Certificado Ignite - Rocketseat",
        // stage: "2023",
      },
      {
        title: "Certificado Ignite - Rocketseat",
        // stage: "2023",
      },
      {
        title: "Certificado - Desenvolvimento WebReact JS - Udemy",
        // stage: "2023",
      },
      {
        title: "Curso Dev full cycle",
        // stage: "2023",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="md:overflow-visible overflow-auto h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto  flex flex-col items-center xl:flex-row gap-x-6 h-[100vh]">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center z-50">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Quando a narrativa <span className="text-accent">envolve</span>, o
            design encanta.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            🚀 Desenvolvedor Front-end Olá! Me chamo Paulo Roberto, sou de João
            Pessoa - PB e tenho 25 anos. Sou um desenvolvedor front-end
            apaixonado por tecnologia, com experiência sólida na construção de
            aplicativos e sistemas escaláveis.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Anos de experiência
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Cursos Completados
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projetos Finalizados
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {/* <div className="hidden md:flex">-</div> */}
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="flex flex-col items-center gap-y-2"
                        >
                          <div className="text-2xl text-white">{icon}</div>
                          <span className="text-xs text-white/60">
                            {icon.type.name === "FaHtml5" && "HTML5"}
                            {icon.type.name === "FaCss3" && "CSS3"}
                            {icon.type.name === "FaJs" && "JavaScript"}
                            {icon.type.name === "FaReact" && "React"}
                            {icon.type.name === "SiTypescript" && "TypeScript"}
                            {icon.type.name === "SiExpo" && "Expo"}
                            {icon.type.name === "SiFirebase" && "Firebase"}
                            {icon.type.name === "SiSentry" && "Sentry"}
                            {icon.type.name === "SiSonarqube" && "SonarQube"}
                            {icon.type.name === "FaFigma" && "Figma"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
