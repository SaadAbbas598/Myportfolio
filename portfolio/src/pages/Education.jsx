"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/colorTheme"; // ✅ Import theme context

const educationDetails = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Engineering and Technology, Lahore",
    duration: "2023 – 2027",
    description: [
      "Studying core subjects including Data Structures, Algorithms, Operating Systems, and Computer Networks.",
      "Completed practical projects in MERN stack and Python.",
      "Actively involved in software development, AI, and research-based coursework.",
    ],
    image: "/images/image7.jpg",
  },
];

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { darkMode } = useTheme(); // ✅ Get theme mode

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
      id="education"
      className={`relative py-16 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={`mb-12 text-center text-3xl sm:text-4xl font-bold ${
            darkMode ? "text-cyan-400" : "text-cyan-600"
          }`}
        >
          Education
        </motion.h2>

        {/* Education Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mx-auto max-w-3xl"
        >
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInFromBottom}
              className={`mb-8 rounded-lg border p-6 shadow-lg backdrop-blur-md ${
                darkMode
                  ? "bg-[#0f0f0f] border-[#00ffff30]"
                  : "bg-white border-cyan-200"
              }`}
            >
              {/* Institution Image */}
              <motion.img
                variants={fadeInFromLeft}
                src={edu.image}
                alt={edu.institution}
                className={`mb-4 w-full rounded-lg border shadow-md ${
                  darkMode
                    ? "border-cyan-700"
                    : "border-cyan-400"
                }`}
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              />

              {/* Text Info */}
              <motion.div variants={fadeInFromRight} className="mb-4">
                <h3
                  className={`mb-1 text-xl font-semibold ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  {edu.degree}
                </h3>
                <h4 className="mb-1 text-base">
                  {edu.institution}
                </h4>
                <p className="text-sm text-gray-500">{edu.duration}</p>
              </motion.div>

              {/* Description List */}
              <motion.ul
                className={`list-disc list-inside space-y-2 text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {edu.description.map((desc, i) => (
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
