"use client";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/ColorTheme"; // ✅ Theme context

const MyProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { darkMode } = useTheme(); // ✅ Theme status

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "A Software House Website",
      description:
        "A professional website for a software house, showcasing services, projects, team members, and a contact section with responsive design.",
      tags: ["React", "Tailwind", "Node.js"],
      image: "/images/image2.png.png",
      link: "https://softsincs.com",
    },
    {
      title: "A Chat Bot",
      description:
        "An AI-powered chat bot built with OpenAI API, capable of natural language conversations and integrated with voice input support.",
      tags: ["Next.js", "OpenAI", "Tailwind"],
      image: "/images/image3.png",
      link: "https://github.com/SaadAbbas598/Chatbot.git",
    },
    {
      title: "Website Visitor Dashboard",
      description:
        "A real-time analytics dashboard to monitor website visitors, track page views, and analyze user behavior with charts and insights.",
      tags: ["React", "Node.js", "Tailwind"],
      image: "/images/image4.png",
      link: "https://github.com/SaadAbbas598/web-analytics.git",
    },
    {
      title: "Stakeholder Management System",
      description:
        "A role-based web application to manage projects, stakeholders, and their shares, with approval flows and secure user access control.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/images/image5.png",
      link: "https://github.com/SaadAbbas598/SHMS..git",
    },
    {
      title: "Smart Quest System",
      description:
        "A request and complaint management platform with role-based hierarchy built using Django and React.",
      tags: ["Django", "React", "SQLite"],
      image: "/images/image6.png",
      link: "https://smart-quest-system.vercel.app/",
    },
    {
      title: "My Portfolio",
      description:
        "A personal portfolio website to showcase my projects, skills, and professional achievements with a modern, responsive design.",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "/images/image.png",
      link: "https://saadabbas.me",
    },
    {
      title: "Weather Dashboard",
      description:
        "A real-time weather app with location-based forecasts and interactive visualizations.",
      tags: ["Angular", "OpenWeather API", "Tailwind"],
      image: "/images/myprojects/weather-dashboard.jpeg",
      link: "#",
    },
    {
      title: "Chat App",
      description:
        "A secure messaging platform with real-time chat, group channels, and file sharing.",
      tags: ["React", "Socket.io", "MUI"],
      image: "/images/myprojects/chat-app.jpeg",
      link: "#",
    },
  ];

  const leftSlide = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightSlide = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Element name="projects">
      <section
        className={`relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <ParticlesBackground />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            <motion.h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}
              variants={{
                hidden: { opacity: 0, y: -30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              My Projects
            </motion.h2>

            <motion.p
              className={`text-base sm:text-lg max-w-2xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
            >
              Explore my recent projects, each crafted to solve real-world
              challenges and showcase my development expertise.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(showAll ? projects : projects.slice(0, 3)).map(
              (project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  variants={index % 2 === 0 ? leftSlide : rightSlide}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="h-full"
                >
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    glareEnable
                    glareMaxOpacity={0.3}
                    glareColor="#00FFFF"
                    glarePosition="all"
                    className="h-full"
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                        boxShadow: "0 8px 32px rgba(0, 255, 255, 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                      className={`border rounded-xl overflow-hidden h-full flex flex-col ${
                        darkMode
                          ? "bg-[#1a1a1a] border-cyan-500/30"
                          : "bg-white border-cyan-300 shadow-md"
                      }`}
                    >
                      <div className="overflow-hidden h-48 sm:h-56">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 sm:p-6 flex flex-col flex-grow">
                        <h3
                          className={`text-lg sm:text-xl font-semibold mb-3 ${
                            darkMode ? "text-white" : "text-black"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-sm sm:text-base mb-4 flex-grow ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`text-xs px-3 py-1 rounded-full ${
                                darkMode
                                  ? "bg-cyan-900/40 text-cyan-400"
                                  : "bg-cyan-100 text-cyan-700"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          className={`mt-auto text-sm sm:text-base font-medium transition-colors duration-300 ${
                            darkMode
                              ? "text-cyan-400 hover:text-cyan-300"
                              : "text-cyan-600 hover:text-cyan-800"
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project →
                        </a>
                      </div>
                    </motion.div>
                  </Tilt>
                </motion.div>
              )
            )}
          </div>

          {/* Show More Button */}
          {!showAll && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll(true)}
                className={`px-6 py-2 rounded-md border transition-all duration-300 ${
                  darkMode
                    ? "text-cyan-400 hover:text-cyan-300 border-cyan-500/30"
                    : "text-cyan-600 hover:text-cyan-800 border-cyan-300"
                }`}
              >
                See More Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </Element>
  );
};

export default MyProjects;
