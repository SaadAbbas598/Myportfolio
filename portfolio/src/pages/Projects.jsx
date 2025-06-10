"use client";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Tilt from "react-parallax-tilt";

const MyProjects = () => {
  const projects = [
    {
      title: "Event Planner",
      description:
        "A platform to create, manage, and share events with real-time RSVP tracking and notifications.",
      tags: ["React", "Firebase", "Tailwind"],
      image: "/images/myprojects/event-planner.jpeg",
      link: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "A mobile-friendly app to log workouts, track progress, and set fitness goals with analytics.",
      tags: ["React Native", "MongoDB", "CSS"],
      image: "/images/myprojects/fitness-tracker.jpeg",
      link: "#",
    },
    {
      title: "E-Commerce Hub",
      description:
        "An online store with product filtering, secure checkout, and user account management.",
      tags: ["Next.js", "Stripe", "Tailwind"],
      image: "/images/myprojects/ecommerce-hub.jpeg",
      link: "#",
    },
    {
      title: "Task Manager",
      description:
        "A collaborative tool for teams to organize tasks, set deadlines, and track project progress.",
      tags: ["Vue.js", "Node.js", "SCSS"],
      image: "/images/myprojects/task-manager.jpeg",
      link: "#",
    },
    {
      title: "Recipe Finder",
      description:
        "A web app to discover recipes based on ingredients, with meal planning and shopping lists.",
      tags: ["React", "REST API", "Bootstrap"],
      image: "/images/myprojects/recipe-finder.jpeg",
      link: "#",
    },
    {
      title: "Portfolio Builder",
      description:
        "A drag-and-drop interface for creatives to build and showcase their portfolios online.",
      tags: ["Next.js", "Supabase", "CSS"],
      image: "/images/myprojects/portfolio-builder.jpeg",
      link: "#",
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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Element name="projects">
      <section className="text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              My <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
              Explore my recent projects, each crafted to solve real-world challenges and showcase my development expertise.
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`} // Unique key to avoid React key issues
                variants={item}
                className="h-full"
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  glareColor="#00FFFF"
                  glarePosition="all"
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 8px 32px rgba(0, 255, 255, 0.2)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#1a1a1a] border border-cyan-500/30 rounded-xl overflow-hidden h-full flex flex-col"
                  >
                    <div className="overflow-hidden h-48 sm:h-56">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-900/40 text-cyan-400 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="mt-auto text-cyan-400 hover:text-cyan-300 text-sm sm:text-base font-medium transition-colors duration-300"
                      >
                        View Project →
                      </a>
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