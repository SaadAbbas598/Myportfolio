import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  const letters = [
    { char: "S", color: "text-cyan-400", from: "top" },
    { char: "A", color: "text-fuchsia-400", from: "right" },
    { char: "A", color: "text-cyan-400", from: "bottom" },
    { char: "D", color: "text-fuchsia-400", from: "left" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const getInitial = (from) => {
    switch (from) {
      case "top": return { y: -320, opacity: 0 };
      case "right": return { x: 320, opacity: 0 };
      case "bottom": return { y: 320, opacity: 0 };
      case "left": return { x: -320, opacity: 0 };
      default: return { opacity: 0 };
    }
  };

  const getCircularPath = (index) => ({
    pathLength: [0, 1],
    rotate: [0, 360],
    x: [
      0,
      Math.cos((index * Math.PI) / 2) * 100,
      Math.cos((index * Math.PI) / 2) * 50,
      0
    ],
    y: [
      0,
      Math.sin((index * Math.PI) / 2) * 100,
      Math.sin((index * Math.PI) / 2) * 50,
      0
    ],
    opacity: [0, 1, 1, 1],
    transition: {
      duration: 2,
      times: [0, 0.3, 0.6, 1],
      ease: ["easeOut", "easeInOut", "easeIn"],
      delay: index * 0.2
    }
  });

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-[999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          style={{ willChange: "opacity" }}
        >
          <motion.div
            className="flex relative"
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className={`text-5xl md:text-7xl font-bold mx-1 ${letter.color}`}
                style={{
                  textShadow: "0 0 8px currentColor",
                  willChange: "transform, opacity"
                }}
                initial={getInitial(letter.from)}
                animate={getCircularPath(i)}
              >
                {letter.char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
