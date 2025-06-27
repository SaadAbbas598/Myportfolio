"use client";
import React, { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ParticlesBackground = dynamic(
  () => import("../components/ParticlesBackground"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />,
  }
);

// Animation variants
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageAnim = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      className={`py-10 sm:py-14 px-3 sm:px-6 text-black bg-black relative overflow-hidden`}
    >
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h5 className="text-xs xs:text-sm sm:text-base text-cyan-400 uppercase tracking-wider">
            Get to know
          </h5>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white font-bold mt-2">
            About Me
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-[1fr_1.5fr] gap-6 sm:gap-10 items-start"
        >
          {/* Left: Image */}
          <motion.div variants={imageAnim} className="w-full aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-tr from-transparent via-cyan-500 to-transparent grid place-items-center p-0.5 sm:p-1">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] w-full h-full">
              <motion.img
                src="/images/profile.webp"
                alt="Saad Abbas"
                className="object-cover w-full h-full"
                loading="lazy"
                width={400}
                height={400}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div variants={container} className="mt-4 sm:mt-0">
            <motion.div variants={container} className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-5 mb-6 sm:mb-8">
              {/* Experience Card */}
              <motion.article 
                variants={cardAnim}
                whileHover={{ y: -5 }}
                className="bg-[#0f0f0f] border border-cyan-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center hover:shadow-lg hover:scale-[1.02] hover:border-cyan-500 transition-all duration-300 cursor-default"
              >
                <FaAward className="text-cyan-500 text-xl sm:text-2xl mb-2 sm:mb-3 mx-auto" />
                <h5 className="text-base sm:text-lg font-semibold text-white">
                  Experience
                </h5>
                <small className="text-xs text-gray-400">1.5 years</small>
              </motion.article>

              {/* Projects Card */}
              <motion.article 
                variants={cardAnim}
                whileHover={{ y: -5 }}
                className="bg-[#0f0f0f] border border-cyan-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center hover:shadow-lg hover:scale-[1.02] hover:border-cyan-500 transition-all duration-300 cursor-default"
              >
                <VscFolderLibrary className="text-cyan-500 text-xl sm:text-2xl mb-2 sm:mb-3 mx-auto" />
                <h5 className="text-base sm:text-lg font-semibold text-white">
                  Projects
                </h5>
                <small className="text-xs text-gray-400">10+ Completed</small>
              </motion.article>
            </motion.div>

            <motion.p 
              variants={item}
              className="text-white mb-6 sm:mb-8 leading-relaxed text-xs xs:text-sm sm:text-base"
            >
              1+ years experienced Front End Developer with hands-on experience
              in identifying web-based user interactions along with designing
              and implementing highly-responsive user interface components by
              deploying React concepts. Proficient in translating designs and
              wireframes into high-quality code, and writing application
              interface code via JavaScript and React JS workflows. Adept at
              monitoring and maintaining frontend performance and
              troubleshooting and debugging the same to bolster overall
              performance.
            </motion.p>

            <motion.div 
              variants={item}
              className="text-center sm:text-left"
            >
              <motion.a
                href="#contact"
                className="inline-block bg-transparent text-cyan-500 border border-cyan-500 px-4 py-2 sm:px-5 sm:py-3 rounded-md font-medium sm:font-semibold hover:bg-cyan-500 hover:text-blue-950 transition-colors duration-300 text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Intro);