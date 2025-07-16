"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiPrisma,
  SiFigma,
  SiTypescript,
} from "react-icons/si";
import { useTheme } from "../context/colorTheme";

const skills = [
  { id: 1, icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { id: 2, icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { id: 3, icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
  { id: 4, icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
  { id: 5, icon: <FaReact className="text-cyan-400" />, name: "React" },
  { id: 6, icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  { id: 7, icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
  { id: 8, icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { id: 9, icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { id: 10, icon: <SiPrisma className="text-gray-400" />, name: "Prisma" },
  { id: 11, icon: <FaGitAlt className="text-red-500" />, name: "Git" },
  { id: 12, icon: <SiFigma className="text-indigo-500" />, name: "Figma" },
  { id: 13, icon: <FaDocker className="text-blue-600" />, name: "Docker" },
];

const Skills = () => {
  const containerRef = useRef(null);
  const skillContainerRef = useRef(null);
  const animationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { darkMode } = useTheme; // ✅

  const duration = isMobile ? 35 : 20;
  const duplicatedSkills = [...skills, ...skills, ...skills];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const skillContainer = skillContainerRef.current;
    if (!container || !skillContainer) return;

    const scrollWidth = skillContainer.scrollWidth / 4;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const distancePerMs = scrollWidth / (duration * 1000);
      const translateX = -(elapsed * distancePerMs) % scrollWidth;
      skillContainer.style.transform = `translateX(${translateX}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [duration]);

  return (
    <section
      id="skills"
      className={`relative py-12 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col justify-center items-center px-3 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="w-full max-w-6xl"
        >
          <motion.h2
            variants={item}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-cyan-500"
          >
            Tech Stack
          </motion.h2>

          <motion.div
            variants={item}
            ref={containerRef}
            className="w-full overflow-hidden py-1 sm:py-2"
          >
            <motion.div
              ref={skillContainerRef}
              className="flex w-max"
              style={{ willChange: "transform" }}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.id}-${index}`}
                  variants={skillItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col items-center mx-2 sm:mx-4 w-20 sm:w-24"
                >
                  <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full transition-colors duration-300 border ${
                      darkMode
                        ? "bg-[#0f0f0f] text-white border-cyan-500/20 hover:border-cyan-500"
                        : "bg-gray-100 text-black border-cyan-500/10 hover:border-cyan-500"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                  </motion.div>
                  <motion.p
                    className={`text-xs sm:text-sm font-medium mt-2 text-center ${
                      darkMode ? "text-white/80" : "text-gray-800"
                    }`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    {skill.name}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
