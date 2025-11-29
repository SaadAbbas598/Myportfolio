"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "../context/colorTheme";

const Footer = () => {
  const { darkMode } = useTheme();

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/1AiDowF6RB/",
      icon: FaFacebookF,
      title: "Facebook - Saad Abbas",
    },
    {
      href: "https://www.instagram.com/saad__rahi?igsh=MWp2bzNtMzh0bzRiNQ==",
      icon: FaInstagram,
      title: "Instagram - Saad Abbas",
    },
    {
      href: "https://x.com/SaadRahi8?t=5-HTSgadbwboSWF2T5Roxg&s=08",
      icon: FaTwitter,
      title: "Twitter - Saad Abbas",
    },
    {
      href: "https://github.com/SaadAbbas598",
      icon: FaGithub,
      title: "GitHub - Saad Abbas",
    },
    {
      href: "https://www.youtube.com/@saadrahi4925",
      icon: FaYoutube,
      title: "YouTube - Saad Abbas",
    },
  ];

  return (
    <footer
      className={`w-full py-12 px-4 sm:px-6 relative z-10 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro Text + Social Icons */}
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
            Expert Android, iOS, and cross-platform mobile app development —
            delivering scalable, and performance-optimized mobile solutions.
          </motion.p>

          <motion.div
            className="flex space-x-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map(({ href, icon: Icon, title }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                title={title}
                aria-label={title}
                className={`text-xl transition-colors ${
                  darkMode
                    ? "hover:text-cyan-400 text-white"
                    : "hover:text-purple-600 text-gray-700"
                }`}
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer Links */}
        <nav aria-label="Footer navigation" className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {[
            {
              title: "Services",
              items: [
                { label: "Android App Development", href: "/#services" },
                { label: "iOS App Development", href: "/#services" },
                { label: "Cross-Platform App Development", href: "/#services" },
                { label: "Mobile App UI/UX Design", href: "/#services" },
                { label: "App Store Optimization (ASO)", href: "/#services" },
              ],
            },
            {
              title: "Support",
              items: [
                { label: "Contact", href: "/#contact" },
                { label: "FAQs", href: "/#faqs" },
                { label: "Live Chat", href: "#" },
              ],
            },
            {
              title: "About",
              items: [
                { label: "Portfolio", href: "/#projects" },
                { label: "Resume", href: "/Saad-Abbas-CV.pdf" },
                { label: "Client Reviews", href: "/#testimonials" },
              ],
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
              ],
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
                      href={item.href}
                      title={`${item.label} - Saad Abbas Mobile App Developer`}
                      className={`transition-colors ${
                        darkMode
                          ? "text-gray-400 hover:text-cyan-400"
                          : "text-gray-500 hover:text-purple-500"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

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
          &copy; {new Date().getFullYear()} Saad Abbas — Mobile Application Developer. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
