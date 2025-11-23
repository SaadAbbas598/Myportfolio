import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import ParticlesBackground from "../components/ParticlesBackground";
import AnimatedSection from "../components/AnimatedSection";
import { useTheme } from "../context/colorTheme";

const Header = () => {
  const { darkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "/Saad-Abbas-Mobile-App-Developer-CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Saad_Abbas_Mobile_App_Developer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialIcons = [
    {
      Icon: BsLinkedin,
      href: "https://www.linkedin.com/in/saad-abbas-722b08345",
      label: "LinkedIn Profile",
      title: "Connect on LinkedIn – Mobile App Development",
      color: "hover:text-blue-500"
    },
    {
      Icon: FaGithub,
      href: "https://github.com/SaadAbbas598/",
      label: "GitHub Profile",
      title: "View Mobile App Development Projects on GitHub",
      color: "hover:text-purple-500"
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/saad__rahi",
      label: "Instagram Profile",
      title: "Follow Mobile App Projects on Instagram",
      color: "hover:text-pink-500"
    },
    {
      Icon: FaTwitter,
      href: "https://x.com/SaadRahi8",
      label: "Twitter Profile",
      title: "Follow Mobile App Development Updates on Twitter",
      color: "hover:text-sky-500"
    }
  ];

  return (
    <header
      id="home"
      className={`relative min-h-screen pt-16 sm:pt-20 flex items-center px-3 sm:px-6 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      role="banner"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <ParticlesBackground />
        
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left w-full px-2">
            <AnimatedSection animation="fadeDown" delay={0.2}>
              <motion.p 
                className="text-xs xs:text-sm sm:text-base md:text-lg mb-2 text-opacity-70 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                👋 Hello, I&apos;m
              </motion.p>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" delay={0.4}>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Saad Abbas
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeLeft" delay={0.6}>
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 text-opacity-90 font-semibold">
                <span className="text-cyan-400">Mobile App Developer</span> & <span className="text-purple-400">Android Engineer</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.8}>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-opacity-70 mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
                Expert in <strong>custom mobile application development</strong>, creating high-performance 
                <strong> Android</strong> and <strong>cross-platform</strong> apps with seamless UI/UX, 
                optimized performance, and modern integrations for startups, enterprises, and brands worldwide.
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="scale" delay={1} className="mb-8">
              <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-60}
                  className="group relative overflow-hidden px-6 py-3 sm:px-8 sm:py-3 rounded-lg border-2 border-cyan-500 text-cyan-500 font-semibold text-sm sm:text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <span className="relative z-10">Hire Me</span>
                  <motion.div
                    className="absolute inset-0 bg-cyan-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    Hire Me
                  </span>
                </Link>
                <motion.button
                  onClick={handleDownloadCV}
                  className="group relative overflow-hidden px-6 py-3 sm:px-8 sm:py-3 rounded-lg border-2 border-purple-500 text-purple-500 font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Download CV</span>
                  <motion.div
                    className="absolute inset-0 bg-purple-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    Download CV
                  </span>
                </motion.button>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection animation="fadeUp" delay={1.2}>
              <div className="flex gap-4 sm:gap-6 text-xl sm:text-2xl justify-center lg:justify-start">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    title={social.title}
                    className={`${social.color} transition-all duration-300 hover:scale-125`}
                    whileHover={{ y: -5, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <social.Icon />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Profile Image */}
          <AnimatedSection animation="scale" delay={0.5} className="flex-1 flex justify-center items-center w-full">
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Rotating rings */}
              <motion.div
                className="absolute top-[-5%] left-[-5%] w-[110%] h-[110%] border-2 border-dashed border-cyan-500/50 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-[-8%] left-[-8%] w-[116%] h-[116%] border-2 border-dotted border-purple-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Main image container */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden z-10 border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)",
                  borderColor: "rgba(6, 182, 212, 0.8)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/images/profile.png"
                  alt="Saad Abbas – Mobile App Developer and Android Engineer"
                  className="min-w-full min-h-full w-full h-full object-cover object-[center_top]"
                  width={400}
                  height={400}
                  loading="eager"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating particles around image */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    top: `${15 + i * 12}%`,
                    left: `${10 + (i % 2) * 80}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
