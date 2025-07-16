"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "../context/colorTheme"; // ✅ Import theme context

const Footer = () => {
  const { darkMode } = useTheme(); // ✅ Access darkMode value

  return (
    <footer
      className={`w-full py-12 px-4 sm:px-6 relative z-10 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Text and Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <motion.p
            className={`text-lg font-medium text-center md:text-left ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Making the world a better place through constructing elegant hierarchies.
          </motion.p>

          <motion.div
            className="flex space-x-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {[FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`text-xl transition-colors ${
                    darkMode
                      ? "hover:text-cyan-400 text-white"
                      : "hover:text-purple-600 text-gray-700"
                  }`}
                >
                  <Icon />
                </a>
              )
            )}
          </motion.div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {[
            {
              title: "Solutions",
              items: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"],
            },
            {
              title: "Support",
              items: ["Submit ticket", "Documentation", "Guides"],
            },
            {
              title: "Company",
              items: ["About", "Blog", "Jobs", "Press"],
            },
            {
              title: "Legal",
              items: ["Terms of service", "Privacy policy", "License"],
            },
          ].map((section, i) => (
            <div key={i}>
              <h3
                className={`font-semibold mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className={`transition-colors ${
                        darkMode
                          ? "text-gray-400 hover:text-cyan-400"
                          : "text-gray-500 hover:text-purple-500"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          className={`pt-6 text-center text-sm ${
            darkMode
              ? "border-t border-gray-800 text-gray-400"
              : "border-t border-gray-200 text-gray-500"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
