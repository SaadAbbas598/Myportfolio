"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import {
  FaAndroid,
  FaApple,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiKotlin,
  SiFlutter,
  SiFirebase,
  SiSwift,
  SiFigma,
  SiTypescript,
} from "react-icons/si";
import { useTheme } from "../context/colorTheme";

const skills = [
  { id: 1, icon: <FaAndroid className="text-green-500" />, name: "Android Development" },
  { id: 2, icon: <FaApple className="text-gray-800 dark:text-white" />, name: "iOS Development" },
  { id: 3, icon: <SiKotlin className="text-purple-500" />, name: "Kotlin" },
  { id: 4, icon: <FaJava className="text-orange-500" />, name: "Java" },
  { id: 5, icon: <SiSwift className="text-red-500" />, name: "Swift" },
  { id: 6, icon: <SiFlutter className="text-blue-400" />, name: "Flutter" },
  { id: 7, icon: <FaReact className="text-cyan-400" />, name: "React Native" },
  { id: 8, icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
  { id: 9, icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
  { id: 10, icon: <FaGitAlt className="text-red-500" />, name: "Git & Version Control" },
  { id: 11, icon: <SiFigma className="text-pink-500" />, name: "Figma UI/UX" },
];

const Skills = () => {
  const containerRef = useRef(null);
  const skillContainerRef = useRef(null);
  const animationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { darkMode } = useTheme();

  const duration = isMobile ? 35 : 20;
  const duplicatedSkills = [...skills, ...skills, ...skills];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
    const skillContainer = skillContainerRef.current;
    if (!skillContainer) return;
    const scrollWidth = skillContainer.scrollWidth / 3;
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
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-5 text-center text-cyan-500"
          >
            Mobile App Development Tech Stack
          </motion.h2>

          <motion.p
            variants={item}
            className={`text-center max-w-3xl mx-auto mb-6 sm:mb-8 text-xs xs:text-sm sm:text-base leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            My expertise covers{" "}
            <strong>Android, iOS, and cross-platform mobile application development</strong>, 
            using modern tools like Kotlin, Swift, Flutter, React Native, Firebase, and more 
            to create high-performance, user-friendly apps.
          </motion.p>

          <motion.div
            variants={item}
            ref={containerRef}
            className="w-full overflow-hidden py-1 sm:py-2"
          >
            <div
              ref={skillContainerRef}
              className="flex w-max"
              style={{ willChange: "transform" }}
            >
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.id}-${index}`}
                  className="flex flex-col items-center mx-2 sm:mx-4 w-20 sm:w-24"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full transition-colors duration-300 border ${
                      darkMode
                        ? "bg-[#0f0f0f] text-white border-cyan-500/20 hover:border-cyan-500"
                        : "bg-gray-100 text-black border-cyan-500/10 hover:border-cyan-500"
                    }`}
                  >
                    <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                  </div>
                  <p
                    className={`text-xs sm:text-sm font-medium mt-2 text-center ${
                      darkMode ? "text-white/80" : "text-gray-800"
                    }`}
                  >
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
