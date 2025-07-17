import React, { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";
import { Link } from "react-scroll";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/colorTheme";

const scrollVariants = {
  offscreenLeft: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  offscreenRight: { opacity: 0, x: 50, transition: { duration: 0.5 } },
  onscreen: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { darkMode } = useTheme();

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
      className={`py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            id="about-heading"
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
          >
            About me
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-cyan-500 uppercase tracking-wider">
            Get to know me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 sm:gap-10 items-start">
          {/* Left: Image */}
          <motion.div
            initial="offscreenLeft"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollVariants}
            className="w-full aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-tr from-transparent via-cyan-500 to-transparent grid place-items-center p-0.5 sm:p-1"
          >
            <div className="overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] w-full h-full">
              <motion.img
                src="/images/profile.png"
                alt="Saad Abbas – Full Stack Developer Profile"
                className="object-cover w-full h-full transition-all duration-500 grayscale hover:grayscale-0 group-hover:grayscale-0"
                loading="lazy"
                width={400}
                height={400}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                onTouchStart={(e) =>
                  e.currentTarget.classList.remove("grayscale")
                }
                onTouchEnd={(e) => e.currentTarget.classList.add("grayscale")}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="offscreenRight"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollVariants}
            className="mt-4 sm:mt-0"
          >
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-5 mb-6 sm:mb-8">
              {/* Experience */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className={`border border-cyan-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center hover:shadow-lg hover:scale-[1.02] hover:border-cyan-500 transition-all duration-300 cursor-default ${
                  darkMode ? "bg-[#0f0f0f]" : "bg-gray-100"
                }`}
              >
                <FaAward className="text-cyan-500 text-xl sm:text-2xl mb-2 sm:mb-3 mx-auto" />
                <h3 className="text-base sm:text-lg font-semibold">
                  Experience
                </h3>
                <p className="text-xs text-gray-400">1.5+ Years</p>
              </motion.article>

              {/* Projects */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className={`border border-cyan-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center hover:shadow-lg hover:scale-[1.02] hover:border-cyan-500 transition-all duration-300 cursor-default ${
                  darkMode ? "bg-[#0f0f0f]" : "bg-gray-100"
                }`}
              >
                <VscFolderLibrary className="text-cyan-500 text-xl sm:text-2xl mb-2 sm:mb-3 mx-auto" />
                <h3 className="text-base sm:text-lg font-semibold">Projects</h3>
                <p className="text-xs text-gray-400">10+ Completed</p>
              </motion.article>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-6 sm:mb-8 leading-relaxed text-xs xs:text-sm sm:text-base"
            >
               1+ years experienced MERN Developer with hands-on experience
              in identifying web-based user interactions along with designing
              and implementing highly-responsive user interface components by
              deploying React concepts. Proficient in translating designs and
              wireframes into high-quality code, and writing application
              interface code via JavaScript and React JS workflows. Adept at
              monitoring and maintaining frontend performance and
              troubleshooting and debugging the same to bolster overall
              performance.
            </motion.p>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center sm:text-left"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 rgba(34, 211, 238, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer inline-block bg-transparent text-cyan-500 border border-cyan-500 px-4 py-2 sm:px-5 sm:py-3 rounded-md font-medium sm:font-semibold hover:bg-cyan-500 hover:text-blue-950 transition-colors duration-300 text-sm sm:text-base"
                >
                  Let’s Talk
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Intro);
