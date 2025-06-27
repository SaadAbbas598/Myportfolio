"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
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

// Particle background
const ParticlesBackground = dynamic(
  () => import("../components/ParticlesBackground"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />,
  }
);

const skills = [
  { id: 1, icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { id: 2, icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { id: 3, icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
  {
    id: 4,
    icon: <SiTypescript className="text-blue-400" />,
    name: "TypeScript",
  },
  { id: 5, icon: <FaReact className="text-cyan-400" />, name: "React" },
  { id: 6, icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  {
    id: 7,
    icon: <SiTailwindcss className="text-teal-400" />,
    name: "Tailwind",
  },
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

  const duration = isMobile ? 35 : 20;
  const duplicatedSkills = [...skills, ...skills, ...skills];

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

    const scrollWidth = skillContainer.scrollWidth / 3;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed / (duration * 1000)) % 1;
      const translateX = -scrollWidth * progress;
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
      className="relative py-12 bg-black text-white overflow-hidden"
    >
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col justify-center items-center px-3 sm:px-6">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-cyan-500">
          Tech Stack
        </h2>

        <div ref={containerRef} className="w-full overflow-hidden py-1 sm:py-2">
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-[#0f0f0f] border border-cyan-500/20 hover:border-cyan-500 transition-colors duration-300">
                  <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-white/80 mt-2 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
