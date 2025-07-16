"use client";
import React, { useRef, useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/colorTheme"; // ✅ Theme context

const ContactForm = () => {
  const formRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const { darkMode } = useTheme(); // ✅ Get current theme

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_lt5svqo";
    const templateId = "template_aoez6m7";
    const userId = "iL1jEoGxX0efT4QsO";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, userId)
      .then(
        () => {
          setShowSuccessPopup(true);
          formRef.current.reset();
          setTimeout(() => setShowSuccessPopup(false), 3000);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
      <div
        className={`relative flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8 w-full overflow-hidden min-h-screen ${
          darkMode ? "bg-black text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* Background Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesBackground />
        </div>

        {/* Success Popup */}
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 right-5 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <span>✅</span>
            <span>Message sent successfully!</span>
          </motion.div>
        )}

        {/* Form Container */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className={`relative z-10 w-full max-w-xl p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-lg border ${
            darkMode
              ? "bg-black bg-opacity-60 border-cyan-600/30"
              : "bg-white bg-opacity-80 border-cyan-400/20"
          }`}
        >
          {/* Heading */}
          <motion.div variants={fadeInFromBottom} className="text-center mb-8">
            <motion.h2
              variants={fadeInFromBottom}
              className={`text-3xl sm:text-4xl font-bold mb-2 ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              Let's Build Something Amazing
            </motion.h2>
            <motion.p
              variants={fadeInFromBottom}
              className="text-sm sm:text-base text-gray-500"
            >
              Got a project in mind? Let's collaborate and turn your ideas into reality!
            </motion.p>
          </motion.div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <motion.div variants={fadeInFromLeft}>
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Saad Abbas"
                className={`w-full mt-1 p-3 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "bg-gray-900 text-white placeholder-gray-500 border border-gray-800 hover:border-cyan-600 focus:ring-cyan-600"
                    : "bg-white text-black placeholder-gray-400 border border-gray-300 hover:border-cyan-600 focus:ring-cyan-600"
                }`}
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeInFromRight}>
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="saad@example.com"
                className={`w-full mt-1 p-3 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "bg-gray-900 text-white placeholder-gray-500 border border-gray-800 hover:border-cyan-600 focus:ring-cyan-600"
                    : "bg-white text-black placeholder-gray-400 border border-gray-300 hover:border-cyan-600 focus:ring-cyan-600"
                }`}
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeInFromLeft}>
              <label htmlFor="message" className="text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={isMobile ? 4 : 5}
                required
                placeholder="Tell me about your project..."
                className={`w-full mt-1 p-3 rounded-lg text-sm resize-none transition-all duration-300 focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "bg-gray-900 text-white placeholder-gray-500 border border-gray-800 hover:border-cyan-600 focus:ring-cyan-600"
                    : "bg-white text-black placeholder-gray-400 border border-gray-300 hover:border-cyan-600 focus:ring-cyan-600"
                }`}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInFromBottom}>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className={`mt-2 p-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg w-full text-white font-medium flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow-lg ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend className="text-base" />
                    Send Message
                    <span className="inline-block ml-1">🚀</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </Element>
  );
};

export default ContactForm;
