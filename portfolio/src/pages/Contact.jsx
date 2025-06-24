"use client";
import React, { useRef, useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const formRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    formRef.current.reset();
  };

  return (
    <Element name="contact">
      <div className="relative flex items-center justify-center min-h-screen p-4 sm:p-8 pb-16 w-full text-white overflow-hidden">
        {/* Content Container */}
        <div className="max-w-3xl w-full flex items-center justify-center z-10 px-4">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-lg sm:max-w-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl flex flex-col items-center border border-cyan-600/30 backdrop-blur-md"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-cyan-400 tracking-tight">
              Let's Connect
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-center text-base sm:text-lg md:text-xl">
              Got a project or idea? Drop me a message, and let's make it happen!
            </p>
            
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 sm:gap-6 w-full"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm sm:text-base font-medium text-gray-200">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="p-3 sm:p-4 rounded-lg w-full bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600 border border-gray-800 hover:border-cyan-600/60 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Saad Abbas"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className ="text-sm sm:text-base font-medium text-gray-200">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="p-3 sm:p-4 rounded-lg w-full bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600 border border-gray-800 hover:border-cyan-600/60 transition-all duration-300 text-sm sm:text-base"
                  placeholder="saad@example.com"
                />
              </div>
              
              <div className="space-y-2 flex-1">
                <label htmlFor="message" className="text-sm sm:text-base font-medium text-gray-200">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={isMobile ? 4 : 6}
                  className="p-3 sm:p-4 rounded-lg w-full bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600 border border-gray-800 hover:border-cyan-600/60 transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-4 p-3 sm:p-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg w-full text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-cyan-600/30 text-sm sm:text-base"
              >
                <FiSend className="text-lg sm:text-xl" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default ContactForm;