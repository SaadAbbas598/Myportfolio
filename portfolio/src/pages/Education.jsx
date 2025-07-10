"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

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
    image: "/images/image7.jpg", // Make sure this image exists in public/images
  },
];

const Education = () => {
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
      className="relative py-16 bg-black text-white overflow-hidden"
    >
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Title - slides down */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl sm:text-4xl font-bold text-cyan-400"
        >
          Education
        </motion.h2>

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
              className="mb-8 rounded-lg border border-[#00ffff30] bg-[#0f0f0f] p-6 shadow-lg backdrop-blur-md"
            >
              {/* Institution Image - slides from left */}
              <motion.img
                variants={fadeInFromLeft}
                src={edu.image}
                alt={`${edu.institution}`}
                className="mb-4 w-full rounded-lg border border-cyan-700 shadow-md"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              />

              {/* Education Details - slides from right */}
              <motion.div variants={fadeInFromRight} className="mb-4">
                <h3 className="mb-1 text-xl font-semibold text-cyan-400">
                  {edu.degree}
                </h3>
                <h4 className="mb-1 text-base text-gray-300">
                  {edu.institution}
                </h4>
                <p className="text-sm text-gray-400">{edu.duration}</p>
              </motion.div>

              {/* Description List - staggered items */}
              <motion.ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
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