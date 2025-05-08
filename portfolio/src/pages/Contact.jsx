"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const SpinningGlobe = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.8, 64, 64]} />
      <meshStandardMaterial 
        color="#00FFFF" 
        emissive="#00FFFF" 
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
        roughness={0.5}
        metalness={0.5}
      />
    </mesh>
  );
};

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
      <div className={`relative flex items-center justify-center min-h-screen p-4 sm:p-8 w-full text-white overflow-hidden ${isMobile ? 'bg-black' : ''}`}>
        {/* Content Container */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 z-10 px-4">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col items-center bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-cyan-500/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-cyan-400">
              Get In Touch
            </h2>
            <p className="text-gray-400 mb-8 text-center">
              Have a project in mind or want to collaborate? Drop me a message!
            </p>
            
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm text-gray-300">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="p-3 sm:p-4 rounded-lg w-full bg-gray-900/70 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-800 hover:border-cyan-500/50 transition-all"
                  placeholder="Saad Abbas"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm text-gray-300">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="p-3 sm:p-4 rounded-lg w-full bg-gray-900/70 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-800 hover:border-cyan-500/50 transition-all"
                  placeholder="saad@example.com"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  className="p-3 sm:p-4 rounded-lg w-full bg-gray-900/70 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-800 hover:border-cyan-500/50 transition-all"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-2 p-3 sm:p-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 rounded-lg w-full text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
              >
                <FiSend className="text-lg" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* 3D Globe Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-[500px] relative"
          >
            <Canvas className="rounded-xl overflow-hidden bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-cyan-500/20 shadow-2xl">
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1.5} color="#00FFFF" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00FFFF" />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              <SpinningGlobe />
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 3}
              />
            </Canvas>
            <div className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-sm">
              Let's connect from anywhere in the world
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default ContactForm;