import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = [
  { char: "S", color: "text-cyan-400", startPos: { x: -100, y: -50 } },
  { char: "A", color: "text-fuchsia-400", startPos: { x: 50, y: -100 } },
  { char: "A", color: "text-cyan-400", startPos: { x: 100, y: 50 } },
  { char: "D", color: "text-fuchsia-400", startPos: { x: -50, y: 100 } },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.5 }
  },
};

const letterVariants = {
  hidden: ({ startPos }) => ({
    x: startPos.x,
    y: startPos.y,
    opacity: 0,
    rotate: -90,
    scale: 0.2,
  }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
  dance: (i) => ({
    y: [0, -30, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
      delay: i * 0.1,
    },
  }),
  assemble: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
};

const Preloader = ({ onFinish }) => {
  const [animationStage, setAnimationStage] = useState("enter");
  const [show, setShow] = useState(true);
  const [displayedLetters, setDisplayedLetters] = useState([]);

  useEffect(() => {
    // For animation, show only unique letters
    const uniqueLetters = letters.filter((letter, index, self) =>
      index === self.findIndex((l) => l.char === letter.char)
    );
    setDisplayedLetters(uniqueLetters);

    const sequence = async () => {
      // Initial entry animation
      setAnimationStage("enter");
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Dancing animation
      setAnimationStage("dance");
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Final assemble with all letters
      setAnimationStage("assemble");
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Finish
      setShow(false);
      if (onFinish) onFinish();
    };

    sequence();
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex items-center justify-center h-screen bg-gray-900 text-white overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <div className="relative flex items-center justify-center">
            {/* Animated letters (only unique during movement) */}
            {animationStage !== "assemble" && displayedLetters.map((item, index) => (
              <motion.span
                key={`${item.char}-${index}`}
                className={`absolute text-7xl md:text-8xl font-extrabold font-mono ${item.color}`}
                custom={index}
                variants={letterVariants}
                animate={animationStage}
                style={{
                  textShadow: "0 0 15px currentColor",
                  zIndex: 10
                }}
              >
                {item.char}
              </motion.span>
            ))}
            
            {/* Final assembled "SAAD" */}
            {animationStage === "assemble" && (
              <motion.div 
                className="flex"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.5
                  }
                }}
              >
                {letters.map((item, index) => (
                  <motion.span
                    key={`full-${index}`}
                    className={`text-7xl md:text-8xl font-extrabold font-mono ${item.color}`}
                    style={{
                      textShadow: "0 0 15px currentColor",
                    }}
                    variants={letterVariants}
                    animate="assemble"
                    custom={index}
                  >
                    {item.char}
                  </motion.span>
                ))}
              </motion.div>
            )}
            
            {/* Background pulse effect */}
            <motion.div 
              className="absolute bg-fuchsia-400 rounded-full mix-blend-screen opacity-10"
              initial={{ width: 0, height: 0 }}
              animate={{ 
                width: 300, 
                height: 300,
                opacity: [0.05, 0.15, 0.05],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;