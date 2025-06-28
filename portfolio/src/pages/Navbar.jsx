"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsAtTop(scrollY < 50);
      setIsVisible(scrollY < lastScrollY || scrollY < 50);
      setLastScrollY(scrollY);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "certificates",
        "contact",
      ];
      const scrollPosition = scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 p-4 shadow-md text-white 
        ${isVisible ? "translate-y-0" : "-translate-y-full"} 
        ${isAtTop ? "bg-transparent" : "bg-black/90 backdrop-blur-sm"}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-xl font-bold text-cyan-500">SAAD</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={700}
              offset={-80}
              className={`cursor-pointer hover:text-cyan-400 transition-colors ${
                activeSection === link.id ? "text-cyan-400 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-cyan-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/90 text-white mt-4 px-4 py-3 space-y-4 text-center z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={700}
              offset={-80}
              className={`block cursor-pointer hover:text-cyan-400 text-base uppercase ${
                activeSection === link.id ? "text-cyan-400 font-semibold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
