"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

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
    image: "/images/My Certificate.jpeg", // Ensure this exists in public/images
  },
];

const ProfessionalCertificates = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variant
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="certificates"
      className="relative py-16 bg-black text-white overflow-hidden"
    >
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-cyan-400">
          Professional Certificates
        </h2>

        <div className="mx-auto max-w-3xl">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInFromLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8 rounded-lg border border-[#00ffff30] bg-[#0f0f0f] p-6 shadow-lg backdrop-blur-md"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={`${cert.title} Certificate`}
                className="mb-4 w-full rounded-lg border border-cyan-700 shadow-md"
                loading="lazy"
              />

              <div className="mb-4">
                <h3 className="mb-1 text-xl font-semibold text-cyan-400">
                  {cert.title}
                </h3>
                <h4 className="mb-1 text-base text-gray-300">{cert.issuer}</h4>
                <p className="text-sm text-gray-400">{cert.date}</p>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                {cert.description.map((desc, i) => (
                  <li key={i} className="leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCertificates;
