"use client";
import React, { useRef, useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const formRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size once only (no resize listener for performance)
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    formRef.current.reset();
  };

  return (
    <Element name="contact">
      <div className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8 w-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-xl p-6 sm:p-8 rounded-2xl border border-cyan-600/30 backdrop-blur-md bg-black bg-opacity-60 shadow-md"
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-2 text-center">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-center mb-6 text-sm sm:text-base">
            Have a project in mind? Drop a message and let's bring it to life!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-200">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Saad Abbas"
                className="w-full mt-1 p-3 bg-gray-900 text-white placeholder-gray-500 border border-gray-800 hover:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded-lg text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-200">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="saad@example.com"
                className="w-full mt-1 p-3 bg-gray-900 text-white placeholder-gray-500 border border-gray-800 hover:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded-lg text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-gray-200">
                Your Message
              </label>
              <textarea
                id="message"
                required
                rows={isMobile ? 4 : 5}
                placeholder="Hello, I’d like to discuss..."
                className="w-full mt-1 p-3 bg-gray-900 text-white placeholder-gray-500 border border-gray-800 hover:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded-lg resize-none text-sm"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-2 p-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg w-full text-white font-medium flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow-lg"
            >
              <FiSend className="text-base" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Element>
  );
};

export default ContactForm;
