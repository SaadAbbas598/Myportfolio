"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Tilt = dynamic(() => import("react-parallax-tilt"), {
  ssr: false,
  loading: () => (
    <div className="p-4 sm:p-6 rounded-xl shadow-lg bg-[#0f0f0f] border border-cyan-500/20" />
  ),
});

const ParticlesBackground = dynamic(
  () => import("../components/ParticlesBackground"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />,
  }
);

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      "Working with Saad was a game-changer for our business. His attention to detail and creative solutions took our platform to the next level.",
    name: "Elena Matthews",
    position: "CEO of NovaTech",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "Saad’s ability to understand our needs and deliver exactly what we imagined is rare. Highly recommended for any tech project.",
    name: "James Carter",
    position: "Product Manager at SkyLabs",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "From start to finish, the project was handled professionally. Saad brought both clarity and efficiency to our complex requirements.",
    name: "Maya Rios",
    position: "CTO of Brightline Solutions",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
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
    <section
      id="testimonials"
      className="relative min-h-screen w-full px-3 sm:px-6 py-10 sm:py-14 bg-black text-white overflow-hidden"
    >
      {/* ✅ Always render particles */}
      <ParticlesBackground />

      <div className="relative z-10 flex justify-center items-center min-h-[80vh]">
        <div className="max-w-6xl text-center w-full">
          <p className="uppercase text-xs xs:text-sm tracking-wide text-cyan-400 mb-2">
            WHAT OTHERS SAY
          </p>

          <motion.h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-8 text-cyan-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariants}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.h2>

          <motion.p
            className="mb-6 sm:mb-10 text-gray-300 max-w-3xl mx-auto text-xs xs:text-sm sm:text-base px-2 sm:px-0 leading-relaxed"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={isMobile ? 0 : 5}
                tiltMaxAngleY={isMobile ? 0 : 5}
                className="p-4 sm:p-5 rounded-xl shadow-lg bg-[#0f0f0f] border border-cyan-500/20"
                glareEnable={!isMobile}
                glareMaxOpacity={0.1}
              >
                <motion.div
                  className="p-2 xs:p-3 sm:p-4 rounded-lg"
                  whileHover={{ scale: isMobile ? 1 : 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-xs xs:text-sm sm:text-base leading-relaxed text-white/80 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                      loading="lazy"
                      width={48}
                      height={48}
                    />
                    <div className="text-left">
                      <h3 className="text-sm sm:text-base font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-gray-400">
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
