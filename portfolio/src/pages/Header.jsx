import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/colorTheme";

const Header = () => {
  const { darkMode } = useTheme();

  const handleDownloadCV = () => {
    const cvUrl = "/Saad-Abbas-Mobile-App-Developer-CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Saad_Abbas_Mobile_App_Developer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      id="home"
      className={`relative min-h-screen pt-20 flex items-center px-4 sm:px-6 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      role="banner"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="w-full max-w-6xl mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs xs:text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-opacity-70">
              Hello, I&apos;m
            </p>

            {/* Main SEO Heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-2xl font-bold mb-2 sm:mb-3">
              Saad Abbas – Mobile App Developer & Android Application Engineer
            </h1>

            {/* Subheading with extra keywords */}
            <h2 className="text-base xs:text-lg sm:text-xl md:text-lg mb-4 sm:mb-6 text-opacity-70">
              Expert in Custom Mobile Application Development • Android App Developer • Cross-Platform App Specialist
            </h2>

            {/* Short SEO intro */}
            <p className="text-xs xs:text-sm sm:text-base text-opacity-70 mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-xl mx-auto md:mx-0 px-1">
              I create high-performance Android and cross-platform mobile applications with seamless UI/UX, optimized performance, and integration with modern mobile application platforms for startups, enterprises, and personal brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-6">
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-60}
                className="flex-1 max-w-[160px] text-center bg-transparent text-cyan-500 font-medium px-3 py-2 rounded-md border border-cyan-500 hover:bg-cyan-500 hover:text-white transition duration-300 text-sm cursor-pointer"
              >
                Hire Mobile App Developer
              </Link>
              <button
                onClick={handleDownloadCV}
                className="flex-1 max-w-[160px] text-center bg-transparent text-cyan-500 font-medium px-3 py-2 rounded-md border border-cyan-500 hover:bg-cyan-500 hover:text-white transition duration-300 text-sm"
              >
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-xl sm:text-2xl justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/saad-abbas-722b08345"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn Profile"
                title="Connect on LinkedIn – Mobile App Development"
                className="hover:text-cyan-500 transition-colors duration-300"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/SaadAbbas598/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub Profile"
                title="View Mobile App Development Projects on GitHub"
                className="hover:text-cyan-500 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/saad__rahi"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram Profile"
                title="Follow Mobile App Projects on Instagram"
                className="hover:text-cyan-500 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/SaadRahi8"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter Profile"
                title="Follow Mobile App Development Updates on Twitter"
                className="hover:text-cyan-500 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 group">
              <div className="absolute w-full h-full rounded-full overflow-hidden z-10 border-4 border-cyan-500/30 transform transition duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-cyan-400/40">
                <img
                  src="/images/profile.png"
                  alt="Saad Abbas – Mobile App Developer and Android Engineer"
                  className="w-full h-full object-cover"
                  width={320}
                  height={320}
                />
              </div>
              <div className="absolute top-[-5%] left-[-5%] w-[110%] h-[110%] border-2 border-dashed border-cyan-500 rounded-full animate-spin z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
