import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  const letters = [
    { char: "S", color: "text-cyan-400", from: "top" },
    { char: "A", color: "text-fuchsia-400", from: "right" },
    { char: "A", color: "text-cyan-400", from: "bottom" },
    { char: "D", color: "text-fuchsia-400", from: "left" }
  ];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        onFinish?.();
      }, 500);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onFinish]);

  const getInitial = (from) => {
    switch (from) {
      case "top": return { y: -320, opacity: 0, scale: 0 };
      case "right": return { x: 320, opacity: 0, scale: 0 };
      case "bottom": return { y: 320, opacity: 0, scale: 0 };
      case "left": return { x: -320, opacity: 0, scale: 0 };
      default: return { opacity: 0, scale: 0 };
    }
  };

  const getAnimation = (index) => ({
    x: 0,
    y: 0,
    opacity: [0, 1, 1, 1],
    scale: [0, 1.2, 1, 1],
    rotate: [0, 180, 360, 360],
    transition: {
      duration: 1.5,
      times: [0, 0.3, 0.6, 1],
      ease: "easeInOut",
      delay: index * 0.15
    }
  });

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 0.95,
            transition: { duration: 0.5, ease: "easeInOut" } 
          }}
        >
          {/* Animated background effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, #06b6d4 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, #a855f7 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 80%, #06b6d4 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 20%, #a855f7 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, #06b6d4 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Logo animation */}
          <motion.div
            className="flex relative mb-8"
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className={`text-6xl md:text-8xl lg:text-9xl font-bold mx-1 md:mx-2 ${letter.color}`}
                style={{
                  textShadow: "0 0 20px currentColor, 0 0 40px currentColor",
                }}
                initial={getInitial(letter.from)}
                animate={getAnimation(i)}
              >
                {letter.char}
              </motion.span>
            ))}
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 md:w-80 h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              animate={{
                x: ["-100%", "200%"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="mt-4 text-cyan-400 text-sm md:text-base font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, times: [0, 0.3, 0.7, 1], repeat: Infinity }}
          >
            Loading Amazing Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
