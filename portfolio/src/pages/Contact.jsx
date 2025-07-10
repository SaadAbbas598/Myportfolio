import React, { useRef, useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import ParticlesBackground from "../components/ParticlesBackground";

const ContactForm = () => {
  const formRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    formRef.current.reset();
  };

  // Animation variants
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

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Element name="contact">
      <div className="relative flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8 w-full text-white bg-black overflow-hidden min-h-screen">
        {/* Background Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesBackground />
        </div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="relative z-10 w-full max-w-xl p-6 sm:p-8 rounded-2xl border border-cyan-600/30 backdrop-blur-md bg-black bg-opacity-60 shadow-lg"
        >
          {/* Header section */}
          <motion.div variants={fadeInFromBottom} className="text-center mb-8">
            <motion.h2
              variants={fadeInFromBottom}
              className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2"
            >
              Let's Build Something Amazing
            </motion.h2>
            <motion.p
              variants={fadeInFromBottom}
              className="text-gray-300 text-sm sm:text-base"
            >
              Got a project in mind? Let's collaborate and turn your ideas into reality!
            </motion.p>
          </motion.div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* Name Field */}
            <motion.div variants={fadeInFromLeft}>
              <label htmlFor="name" className="text-sm font-medium text-gray-200">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Saad Abbas"
                className="w-full mt-1 p-3 bg-gray-900 text-white placeholder-gray-500 border border-gray-800 hover:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded-lg text-sm transition-all duration-300"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={fadeInFromRight}>
              <label htmlFor="email" className="text-sm font-medium text-gray-200">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="saad@example.com"
                className="w-full mt-1 p-3 bg-gray-900 text-white placeholder-gray-500 border border-gray-800 hover:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded-lg text-sm transition-all duration-300"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={fadeInFromLeft}>
              <label htmlFor="message" className="text-sm font-medium text-gray-200">
                Your Message
              </label>
              <textarea
                id="message"
                required
                rows={isMobile ? 4 : 5}
                placeholder="Tell me about your project..."
                className="w-full mt-1 p-3 bg-gray-900 text-white placeholder-gray-500 border border-gray-800 hover:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded-lg resize-none text-sm transition-all duration-300"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInFromBottom}>
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)"
                }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-2 p-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg w-full text-white font-medium flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
              >
                <FiSend className="text-base" />
                Send Message
                <span className="inline-block ml-1">🚀</span>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </Element>
  );
};

export default ContactForm;