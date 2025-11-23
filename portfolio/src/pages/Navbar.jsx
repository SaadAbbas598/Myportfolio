"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/colorTheme";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Tech" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsAtTop(scrollY < 50);
    setIsVisible(scrollY < lastScrollY.current || scrollY < 50);
    lastScrollY.current = scrollY;

    let matched = false;
    for (const section of navLinks.map((l) => l.id)) {
      const el = document.getElementById(section);
      if (el) {
        const offsetTop = el.offsetTop;
        const offsetHeight = el.offsetHeight;
        if (
          scrollY >= offsetTop - 100 &&
          scrollY < offsetTop + offsetHeight - 50
        ) {
          setActiveSection(section);
          matched = true;
          break;
        }
      }
    }

    if (
      !matched &&
      window.innerHeight + scrollY >= document.body.scrollHeight - 10
    ) {
      setActiveSection("contact");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateUnderline = () => {
      const activeEl = document.querySelector(`[data-id='${activeSection}']`);
      if (activeEl) {
        const rect = activeEl.getBoundingClientRect();
        const containerRect = activeEl.parentElement.getBoundingClientRect();
        const left = rect.left - containerRect.left;
        const width = rect.width;

        document.documentElement.style.setProperty(
          "--underline-left",
          `${left}px`
        );
        document.documentElement.style.setProperty(
          "--underline-width",
          `${width}px`
        );
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeSection]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 p-4 shadow-md 
    ${isVisible ? "translate-y-0" : "-translate-y-full"} 
    ${
      isAtTop
        ? "bg-transparent"
        : darkMode
        ? "bg-black/90 backdrop-blur-sm"
        : "bg-white/90 backdrop-blur-sm"
    }
    ${darkMode ? "text-white" : "text-black"}
  `}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link
          to="/"
          className="relative w-16 h-12 group overflow-hidden cursor-pointer block"
        >
          <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-cyan-500 transition-opacity duration-300 group-hover:opacity-0">
            <h1>S.</h1>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-cyan-300 transform -translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            SAAD
          </div>
        </Link>

        {/* Desktop Nav + Icons */}
        <div className="relative hidden md:flex items-center space-x-6">
          {/* Theme Toggle */}
          <div className="flex items-center space-x-2 pr-4 border-r border-white/20 cursor-pointer">
            {darkMode ? (
              <Sun
                className="w-5 h-5 text-yellow-300"
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <Moon
                className="w-5 h-5 text-blue-300"
                onClick={() => setDarkMode(true)}
              />
            )}
          </div>

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={700}
              offset={-80}
              data-id={link.id}
              className={`relative cursor-pointer pb-2 transition-colors ${
                activeSection === link.id
                  ? "text-cyan-400 font-semibold"
                  : darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Underline */}
          <motion.div
            className="absolute bottom-0 h-0.5 bg-white"
            layout
            layoutId="underline"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{
              width: "var(--underline-width)",
              left: "var(--underline-left)",
            }}
          />
        </div>

        {/* Mobile: Theme + Menu */}
        <div className="md:hidden z-50 flex items-center space-x-4">
          <motion.div 
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? (
              <Sun
                className="w-6 h-6 text-yellow-400"
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <Moon
                className="w-6 h-6 text-blue-500"
                onClick={() => setDarkMode(true)}
              />
            )}
          </motion.div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-500 focus:outline-none p-1"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`md:hidden mt-4 px-4 py-6 space-y-3 z-40 backdrop-blur-xl border-t ${
              darkMode ? "bg-black/95 border-white/10" : "bg-white/95 border-black/10"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.id}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className={`block cursor-pointer py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-cyan-400 bg-cyan-500/10 font-semibold"
                      : darkMode
                      ? "text-white hover:text-cyan-400 hover:bg-white/5"
                      : "text-black hover:text-cyan-600 hover:bg-black/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
