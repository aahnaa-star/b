import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import ScrollFloat from "../../ReactBitsAnimations/ScrollFloat/ScrollFloat";
import About_ from "./About_";

const About = () => {
  const technologies = [
    { icon: "skill-icons:react-dark", label: "React" },
    { icon: "skill-icons:nextjs-dark", label: "Next.js" },
    { icon: "skill-icons:tailwindcss-light", label: "Tailwind CSS" },
    { icon: "vscode-icons:file-type-node", label: "Node.js" },
    { icon: "simple-icons:express", label: "Express" },
    { icon: "skill-icons:javascript", label: "JavaScript" },
    { icon: "logos:mysql", label: "MySQL" },
    { icon: "devicon:mongodb-wordmark", label: "MongoDB" },
    { icon: "skill-icons:html", label: "HTML" },
    { icon: "skill-icons:css", label: "CSS" },
    { icon: "devicon:bootstrap", label: "Bootstrap" },
    { icon: "logos:material-ui", label: "Material UI" },
    { icon: "fa6-brands:shoelace", label: "Shoelace" },
    { icon: "simple-icons:shadcnui", label: "ShadCN UI" },
    { icon: "devicon:postman", label: "Postman" },
    { icon: "devicon-plain:reactrouter", label: "React Router" },
    { icon: "skill-icons:threejs-light", label: "Three.js" },
    { icon: "skill-icons:figma-light", label: "Figma" },
    { icon: "devicon:git", label: "Git" },
    { icon: "skill-icons:github-light", label: "GitHub" },
    { icon: "mdi:language-c", label: "C" },
    { icon: "devicon:java-wordmark", label: "Java" },
    { icon: "skill-icons:python-dark", label: "Python" },
    { icon: "logos:pycharm", label: "PyCharm" },
    { icon: "logos:intellij-idea", label: "IntelliJ" },
    { icon: "vscode-icons:file-type-vscode", label: "VS Code" },
    { icon: "logos:numpy", label: "NumPy" },
    { icon: "logos:matplotlib-icon", label: "Matplotlib" },
    { icon: "skill-icons:scikitlearn-light", label: "Scikit-learn" },
  ];

  return (
    <>
      <About_ />
      <div className=" bg-[#1e2d2a] flex flex-col gap-2 pt-3 ml-0 mr-0 text-[#ffffff] ">
        <div className="tool-technologies px-[2em] flex flex-col">
          <h1 className="text-3xl font-semibold pb-[2px] font-robotoCondensed underline text-[#e356ab]">
            Tools and technologies
          </h1>
          <p className="px-[14px]">
            I use a variety of tools and technologies to build responsive,
            efficient, and scalable web applications. From coding languages to
            development frameworks, these are the key components I rely on to
            create great user experiences.
          </p>

          <motion.div className="iconsdiv flex gap-[1vw] flex-wrap justify-evenly pt-1">
            {technologies.map((tech, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    rotateY: index % 2 === 0 ? -180 : 180,
                  }}
                  whileInView={{
                    opacity: 1,
                    rotateY: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.05,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ once: false, amount: 0.4 }}
                  whileHover={{
                    x: [0, -2, 2, -2, 2, 0],
                    transition: {
                      duration: 0.4,
                      repeat: Infinity,
                    },
                  }}
                  className="flex gap-[1em] justify-center items-center"
                >
                  <Icon icon={tech.icon} width="36" height="64" />
                  <h1 className="text-[1em]">{tech.label}</h1>
                </motion.div>
              );
            })}
            <br />
          </motion.div>
        </div>

        <div className="coding Profile ml-1 pb-3">
          <h1 className="text-3xl font-semibold px-[2rem] font-robotoCondensed underline text-blue-600">
            Coding Profiles
          </h1>
          <h1 className="px-[2.5rem] pt-2">
            Solved <b>1000+</b> DSA problems across all coding platforms.
          </h1>
          <div className="button pl-[4rem] pt-4 ">
            <a
              href="https://codolio.com/profile/Azaan%20Suhail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Codolio
              </button>
            </a>
            <a
              href="https://leetcode.com/u/AzaanSuhail/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-black bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                LeetCode
              </button>
            </a>

            <a
              href="https://www.geeksforgeeks.org/user/azaansuhail/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Geeks For Geeks
              </button>
            </a>
            <a
              href="https://www.interviewbit.com/profile/azaan-suhail/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Interview Bit
              </button>
            </a>

            <a
              href="https://codeforces.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Codeforces
              </button>
            </a>
            <a
              href="https://www.codechef.com/users/azaansuhail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-bold"
              >
                Code Chef
              </button>
            </a>

            <a
              href="https://www.naukri.com/code360/profile/AzaanSuhail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Coding Ninjas
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
