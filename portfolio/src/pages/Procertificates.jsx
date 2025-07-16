"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/colorTheme"; // ✅ Ensure this is correct

const certificates = [
  {
    title: "Crash Course on Python",
    issuer: "Coursera (Google)",
    date: "2025",
    description: [
      "Completed Google's Python course via Coursera.",
      "Learned core Python concepts like variables, functions, loops, and data structures.",
      "Gained hands-on experience in writing, debugging, and automating Python scripts.",
    ],
    image: "/images/My Certificate.jpeg", // ✅ Ensure this image exists in public/images
  },
];

const ProfessionalCertificates = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { darkMode } = useTheme(); // ✅ Use theme context

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
      id="certificates"
      className={`relative py-16 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={`mb-12 text-center text-3xl sm:text-4xl font-bold ${
            darkMode ? "text-cyan-400" : "text-cyan-600"
          }`}
        >
          Professional Certificates
        </motion.h2>

        {/* Certificate Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mx-auto max-w-3xl"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInFromBottom}
              className={`mb-8 rounded-lg border shadow-lg backdrop-blur-md p-6 ${
                darkMode
                  ? "bg-[#0f0f0f] border-cyan-500/20"
                  : "bg-white border-cyan-300"
              }`}
            >
              {/* Certificate Image */}
              <motion.img
                variants={fadeInFromLeft}
                src={cert.image}
                alt={`${cert.title} Certificate`}
                className="mb-4 w-full rounded-lg border shadow-md"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              />

              {/* Certificate Text Details */}
              <motion.div variants={fadeInFromRight} className="mb-4">
                <h3
                  className={`mb-1 text-xl font-semibold ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  {cert.title}
                </h3>
                <h4
                  className={`mb-1 text-base ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {cert.issuer}
                </h4>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {cert.date}
                </p>
              </motion.div>

              {/* Bullet Points */}
              <motion.ul
                className={`list-disc list-inside space-y-2 text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {cert.description.map((desc, i) => (
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

export default ProfessionalCertificates;
