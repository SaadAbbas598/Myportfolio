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

// Dynamically import ParticlesBackground
const ParticlesBackground = dynamic(() => import("../components/ParticlesBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});

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
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const skillContainerRef = useRef(null);
  const animationRef = useRef(null);

  // Adjust speed based on screen size
  const duration = isMobile ? 30 : 20;

  // Only duplicate once for mobile
  const duplicatedSkills = isMobile ? [...skills] : [...skills, ...skills, ...skills];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const skillContainer = skillContainerRef.current;
    
    if (!container || !skillContainer || isMobile) return;

    const skillContainerWidth = skillContainer.scrollWidth / 3;
    let startTime = null;
    let progress = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      progress = (elapsed / (duration * 1000)) % 1;

      const translateX = -skillContainerWidth * progress;
      skillContainer.style.transform = `translateX(${translateX}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [duration, isMobile]);

  return (
    <section id="skills" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Only render particles on desktop */}
      {!isMobile && <ParticlesBackground />}
      
      {/* Content with higher z-index */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-cyan-500">
          My Skills
        </h2>

        <div 
          ref={containerRef}
          className="w-full overflow-hidden py-4 sm:py-8"
        >
          <div
            ref={skillContainerRef}
            className={`flex ${isMobile ? 'justify-center flex-wrap' : 'w-max'}`}
          >
            {duplicatedSkills.map((skill, index) => (
              <div 
                key={`${skill.id}-${index}`} 
                className={`flex flex-col items-center mx-2 sm:mx-4 ${isMobile ? 'w-20 mb-4' : 'w-24'}`}
              >
                <div className={`${isMobile ? 'w-16 h-16' : 'w-20 h-20'} flex items-center justify-center rounded-full bg-[#0f0f0f] border border-cyan-500/20 hover:border-cyan-500 transition-colors duration-300`}>
                  <div className={`${isMobile ? 'text-3xl' : 'text-4xl'}`}>{skill.icon}</div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-white/80 mt-2 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;