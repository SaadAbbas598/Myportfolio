"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

const experience = {
  title: "Software Intern",
  company: "TheDevPort",
  date: "2024 (3 months)",
  description: [
    "Developed and maintained web applications using modern technologies.",
    "Collaborated with team members on various projects.",
    "Gained hands-on experience with software development workflows.",
    "Contributed to real-world projects and solutions.",
  ],
};

const WorkExperience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.4,
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      id="experience"
      className="relative py-12 bg-black text-white overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      <div className="relative z-10 container mx-auto px-4">
        {/* Title - slides down */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center text-3xl sm:text-4xl font-bold text-cyan-400"
        >
          Work Experience
        </motion.h2>

        {/* Experience card container */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mx-auto max-w-3xl"
        >
          {/* Card - slides from left */}
          <motion.div
            variants={slideFromLeft}
            className="rounded-lg border border-[#00ffff30] bg-[#0f0f0f] p-6 sm:p-8"
          >
            {/* Header section */}
            <motion.div variants={item} className="mb-4">
              <motion.h3
                variants={item}
                className="mb-1 text-lg sm:text-xl font-semibold text-cyan-400"
              >
                {experience.title}
              </motion.h3>
              <motion.h4
                variants={item}
                className="mb-2 text-sm sm:text-base text-gray-300"
              >
                {experience.company}
              </motion.h4>
              <motion.p
                variants={item}
                className="mb-4 text-sm text-gray-400"
              >
                {experience.date}
              </motion.p>
            </motion.div>

            {/* Description list - staggered items */}
            <motion.ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-300">
              {experience.description.map((desc, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItem}
                  className="leading-relaxed"
                >
                  {desc}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;