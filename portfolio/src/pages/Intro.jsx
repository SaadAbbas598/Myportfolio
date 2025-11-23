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
            className="text-2xl xs:text-3xl sm:text-4xl md:text-1xl font-bold mt-2"
          >
            About Me 
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-cyan-500 uppercase tracking-wider">
            Get to know my journey in mobile application development
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
            <div className="overflow-hidden rounded-xl sm:rounded-2xl w-full h-full relative">
              <motion.img
                src="/images/profile.png"
                alt="Saad Abbas – Mobile App Developer & Android Engineer Profile Picture"
                className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-[center_top] transition-all duration-500 grayscale hover:grayscale-0"
                loading="lazy"
                width={400}
                height={400}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
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
                <h3 className="text-base sm:text-lg font-semibold">Experience</h3>
                <p className="text-xs text-gray-400">1.5+ Years in Mobile App Development</p>
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
                <p className="text-xs text-gray-400">10+ Mobile Apps Completed</p>
              </motion.article>
            </div>

            {/* SEO-Optimized Description with Internal Links */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-6 sm:mb-8 leading-relaxed text-xs xs:text-sm sm:text-base"
            >
              I’m a <Link to="portfolio" smooth={true} duration={800} className="text-cyan-500 underline">mobile app developer</Link> 
              &nbsp;specializing in Android and cross-platform mobile application development. I create 
              high-performance, user-friendly apps using technologies like Java, Kotlin, Flutter, React Native, 
              and Firebase. My work spans from app concept and UI/UX design to deployment on 
              <a href="https://play.google.com" target="_blank" rel="noreferrer noopener" className="text-cyan-500 underline"> Google Play Store</a> 
              &nbsp;and Apple App Store. I also integrate APIs, payment systems, and push notifications to ensure 
              a seamless mobile experience.
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
                  Let’s Build Your Mobile App
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
