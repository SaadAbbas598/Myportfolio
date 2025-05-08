"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamically import components to reduce initial load
const Tilt = dynamic(() => import("react-parallax-tilt"), { 
  ssr: false,
  loading: () => <div className="p-6 rounded-xl shadow-lg bg-[#0f0f0f] border border-cyan-500/20" />
});

const ParticlesBackground = dynamic(() => import("../components/ParticlesBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      quote: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      position: "CFO of Acme Co",
      image: "/images/testimonials/person1.webp", // Using WebP format
    },
    {
      quote: "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      position: "COO of DEF Corp",
      image: "/images/testimonials/person2.webp",
    },
    {
      quote: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      position: "CTO of 456 Enterprises",
      image: "/images/testimonials/person3.webp",
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section id="testimonials" className="relative min-h-screen w-full px-4 sm:px-6 py-12 bg-black text-white overflow-hidden">
      {/* Only render particles on desktop */}
      {!isMobile && <ParticlesBackground />}
      
      {/* Content with higher z-index */}
      <div className="relative z-10 flex justify-center items-center min-h-[80vh]">
        <div className="max-w-6xl text-center w-full">
          <p className="uppercase text-xs sm:text-sm tracking-wide text-cyan-400 mb-2">
            WHAT OTHERS SAY
          </p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-cyan-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariants}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.h2>

          <motion.p
            className="mb-8 sm:mb-10 text-gray-300 max-w-4xl mx-auto text-sm sm:text-base px-2 sm:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Discover what clients and colleagues say about my work in the
            testimonial section. Their feedback highlights my expertise in MERN
            stack development, problem-solving skills, and commitment to
            delivering high-quality web applications.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={isMobile ? 0 : 5}
                tiltMaxAngleY={isMobile ? 0 : 5}
                className="p-4 sm:p-6 rounded-xl shadow-lg bg-[#0f0f0f] border border-cyan-500/20"
                glareEnable={!isMobile}
                glareMaxOpacity={0.1}
              >
                <motion.div
                  className="p-4 sm:p-6 rounded-lg"
                  whileHover={{ scale: isMobile ? 1 : 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-sm sm:text-base leading-relaxed text-white/80 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                      loading="lazy"
                      width={48}
                      height={48}
                    />
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;