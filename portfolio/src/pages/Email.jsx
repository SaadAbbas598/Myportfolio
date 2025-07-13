import { Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmailIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const intervalRef = useRef(null);

  const messages = [
    "Need help with a project?",
    "Let's collaborate!",
    "Get in touch today",
    "iamsaadabbas@gmail.com",
    "Available for freelance work"
  ];

  // Rotate messages every 3 seconds when hovered
  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % messages.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, messages.length]);

  // Handle click effect
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-2">
      {/** Tooltip Box */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-2 rounded-lg bg-white px-4 py-2 shadow-xl"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-medium text-gray-800 whitespace-nowrap"
              >
                {messages[textIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/** Mail Icon */}
      <motion.a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=iamsaadabbas@gmail.com&su=Let's%20Collaborate!&body=Hi%20Saad,"
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full p-3 text-white shadow-lg ${
          isClicked ? "bg-green-500" : "bg-cyan-500 hover:bg-cyan-600"
        }`}
        title="Send Email"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isClicked ? [0, 10, -10, 0] : 0,
          transition: { duration: 0.5 }
        }}
      >
        <Mail size={24} />
      </motion.a>
    </div>
  );
};

export default EmailIcon;