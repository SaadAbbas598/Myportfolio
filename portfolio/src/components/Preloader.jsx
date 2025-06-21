import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = [
  { char: "S", color: "text-cyan-400", startPos: { x: -100, y: 0 } },
  { char: "A", color: "text-fuchsia-400", startPos: { x: 0, y: -100 } },
  { char: "A", color: "text-fuchsia-400", startPos: { x: 100, y: 0 } },
  { char: "D", color: "text-cyan-400", startPos: { x: 0, y: 100 } },
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
    scale: 0.5,
  }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
  circle: (i) => ({
    x: Math.cos((i * Math.PI) / 2) * 80,
    y: Math.sin((i * Math.PI) / 2) * 80,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    }
  }),
  assemble: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    }
  }
};

const Preloader = ({ onFinish }) => {
  const [animationStage, setAnimationStage] = useState("enter");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      // Initial entry
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Form circle
      setAnimationStage("circle");
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Assemble to center
      setAnimationStage("assemble");
      await new Promise(resolve => setTimeout(resolve, 800));
      
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
            {letters.map((item, index) => (
              <motion.span
                key={index}
                className={`absolute text-7xl md:text-8xl font-extrabold font-mono ${item.color}`}
                custom={animationStage === "circle" ? index : item.startPos}
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
            
            {/* Glowing circle effect */}
            {animationStage === "circle" && (
              <motion.div 
                className="absolute border-2 border-fuchsia-400 rounded-full"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ 
                  width: 180, 
                  height: 180, 
                  opacity: 0.3,
                  transition: { duration: 0.5 }
                }}
                exit={{ opacity: 0 }}
              />
            )}
            
            {/* Final assembled word */}
            {animationStage === "assemble" && (
              <motion.div 
                className="flex"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1.1,
                  transition: { 
                    type: "spring", 
                    stiffness: 500,
                    damping: 15,
                    delay: 0.3
                  }
                }}
              >
                {letters.map((item, index) => (
                  <motion.span
                    key={index}
                    className={`text-7xl md:text-8xl font-extrabold font-mono ${item.color}`}
                    style={{
                      textShadow: "0 0 15px currentColor",
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.char}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;