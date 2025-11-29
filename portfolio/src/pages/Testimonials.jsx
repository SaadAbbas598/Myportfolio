"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/colorTheme";
import { Link } from "react-scroll";

const Testimonials = () => {
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

  const testimonials = [
    {
      quote:
        "Working with Saad as our mobile app developer was a game-changer. His attention to detail and creative solutions took our Android platform to the next level.",
      name: "Elena Matthews",
      position: "CEO of NovaTech",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      quote:
        "Saad's expertise in cross-platform app development helped us deliver on time with exceptional quality. Highly recommended for any mobile app project.",
      name: "James Carter",
      position: "Product Manager at SkyLabs",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "From start to finish, the Android application project was handled professionally. Saad ensured seamless performance and a great user experience.",
      name: "Maya Rios",
      position: "CTO of Brightline Solutions",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

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

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const getCardAnimation = (index) =>
    index % 2 === 0 ? slideFromLeft : slideFromRight;

  return (
    <section
      id="testimonials"
      className={`relative min-h-screen w-full px-3 sm:px-6 py-10 sm:py-14 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <ParticlesBackground />

      <div className="relative z-10 flex justify-center items-center min-h-[80vh]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="max-w-6xl text-center w-full"
        >
          <motion.p
            variants={item}
            className="uppercase text-xs xs:text-sm tracking-wide text-cyan-500 mb-2"
          >
            WHAT CLIENTS SAY
          </motion.p>

          <motion.h2
            variants={item}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-8 text-cyan-500"
          >
            Client Testimonials 
          </motion.h2>

          <motion.p
            variants={item}
            className={`mb-6 sm:mb-10 max-w-3xl mx-auto text-xs xs:text-sm sm:text-base px-2 sm:px-0 leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Hear from clients who have trusted me with{" "}
            <Link to="portfolio" smooth={true} duration={800} className="text-cyan-500 underline font-semibold" title="View Mobile App Portfolio">
              mobile application development
            </Link>{" "}
            and{" "}
            <Link to="contact" smooth={true} duration={800} className="text-cyan-500 underline font-semibold" title="Contact for Android App Development">
              Android app projects
            </Link>
            . Their feedback reflects my commitment to delivering high-quality, performance-optimized apps tailored to each business need.
          </motion.p>

          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={getCardAnimation(index)}
                custom={index}
              >
                <Tilt
                  tiltMaxAngleX={isMobile ? 0 : 5}
                  tiltMaxAngleY={isMobile ? 0 : 5}
                  glareEnable={!isMobile}
                  glareMaxOpacity={0.1}
                  className={`p-4 sm:p-5 rounded-xl border ${
                    darkMode
                      ? "bg-[#0f0f0f] text-white border-cyan-500/20"
                      : "bg-gray-100 text-black border-cyan-500/10"
                  } shadow-lg`}
                >
                  <motion.div
                    className="p-2 xs:p-3 sm:p-4 rounded-lg"
                    whileHover={{ scale: isMobile ? 1 : 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p
                      className={`text-xs xs:text-sm sm:text-base leading-relaxed mb-4 ${
                        darkMode ? "text-white/80" : "text-black/80"
                      }`}
                    >
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center mt-3">
                      <motion.img
                        src={testimonial.image}
                        alt={`${testimonial.name} – Mobile App Development Client`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                        loading="lazy"
                        width={48}
                        height={48}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.3,
                          duration: 0.5,
                        }}
                      />
                      <div className="text-left">
                        <motion.h3
                          className="text-sm sm:text-base font-semibold"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + 0.4,
                            duration: 0.5,
                          }}
                        >
                          {testimonial.name}
                        </motion.h3>
                        <motion.p
                          className={`text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + 0.5,
                            duration: 0.5,
                          }}
                        >
                          {testimonial.position}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
