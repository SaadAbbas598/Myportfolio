"use client";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Tilt from "react-parallax-tilt";

const MyProjects = () => {
  const projects = [
    {
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: ["React", "MongoDB", "Tailwind"],
      image: "/images/myprojects/website1.jpeg",
      link: "#"
    },
    {
      title: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: ["React", "REST API", "SCSS"],
      image: "/images/myprojects/website2.jpeg",
      link: "#"
    },
    {
      title: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: ["Next.js", "Supabase", "CSS"],
      image: "/images/myprojects/website4.jpeg",
      link: "#"
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Element name="projects">
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Static header that won't disappear */}
          <div className="text-center mb-16 w-full px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              My <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              Here are some of my recent projects. Each one was built to solve real-world problems
              and showcase different aspects of my development skills.
            </p>
          </div>

          {/* Animated projects grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#00FFFF"
                  glarePosition="all"
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-[#111111] border border-cyan-500/20 rounded-xl overflow-hidden h-full flex flex-col"
                  >
                    <div className="overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="text-xs bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={project.link} 
                          className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                        >
                          View Project →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default MyProjects;