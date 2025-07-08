import { Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmailIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const intervalRef = useRef(null);

  const messages = [
    "Need help with a project?",
    "Let's collaborate!",
    "Get in touch today",
    "iamsaadabbas@gmail.com"
  ];

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % messages.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-2">
      {/** Tooltip Box */}
      {isHovered && (
        <motion.div
          key="tooltip"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="mb-2 rounded-lg bg-white px-4 py-2 shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-medium text-gray-800"
            >
              {messages[textIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      )}

      {/** Mail Icon */}
      <motion.a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=iamsaadabbas@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-cyan-400 p-3 text-white shadow-lg transition hover:bg-cyan-500"
        title="Send Email"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Mail size={34} />
      </motion.a>
    </div>
  );
};

export default EmailIcon;
