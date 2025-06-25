"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about-section");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsAtTop(scrollY < 50);
      setIsVisible(scrollY < lastScrollY || scrollY < 50);
      setLastScrollY(scrollY);

      const sections = ["about-section", "project", "experience-section", "contact-form"];
      const scrollPosition = scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    { id: "testimonials", label: "Testimonials" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "WorkExperience" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`p-4 transition-all duration-300 fixed top-0 left-0 w-full z-50 shadow-md text-white 
        ${isVisible ? "translate-y-0" : "-translate-y-full"} 
        ${isAtTop ? "bg-transparent" : "bg-black/90 backdrop-blur-sm"}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-cyan-500">SAAD</div>

        <div className="hidden md:flex items-center relative mx-auto">
          {navLinks.map((link) => (
            <div key={link.id} className="relative px-4 py-2">
              <Link
                to={link.id}
                smooth={true}
                duration={800}
                spy={true}
                offset={-80}
                className={`cursor-pointer hover:text-cyan-400 transition-colors ${
                  activeSection === link.id ? "text-cyan-400" : ""
                }`}
              >
                {link.label}
              </Link>
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-cyan-500 text-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col space-y-4 mt-4 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={1000}
              offset={-80}
              spy={true}
              className={`cursor-pointer hover:text-cyan-400 uppercase py-2 ${
                activeSection === link.id ? "text-cyan-400" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="mobile-nav-underline"
                  className="w-1/2 mx-auto h-0.5 bg-cyan-400 mt-1"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
