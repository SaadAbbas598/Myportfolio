import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/ColorTheme"; // ⬅️ added

const Header = () => {
  const { darkMode } = useTheme(); // ⬅️ added

  const handleDownloadCV = () => {
    const cvUrl = "/Saad-Abbas-CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Saad_Abbas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      id="home"
      className={`relative h-screen flex items-center px-4 sm:px-6 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="w-full max-w-6xl mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 lg:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h5 className="text-xs xs:text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-opacity-70">
              Hello, I'm
            </h5>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3">
              SAAD ABBAS
            </h1>
            <h5 className="text-base xs:text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-opacity-70">
              Full Stack Developer
            </h5>

            <p className="text-xs xs:text-sm sm:text-base text-opacity-70 mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-xl mx-auto md:mx-0 px-1">
              Passionate developer with expertise in modern web technologies.
              Creating efficient, scalable, and user-friendly applications.
            </p>

            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-6">
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-60}
                className="flex-1 max-w-[140px] text-center bg-transparent text-cyan-500 font-medium px-3 py-2 rounded-md border border-cyan-500 hover:bg-cyan-500 hover:text-white transition duration-300 text-sm cursor-pointer"
              >
                Contact Me
              </Link>
              <button
                onClick={handleDownloadCV}
                className="flex-1 max-w-[140px] text-center bg-transparent text-cyan-500 font-medium px-3 py-2 rounded-md border border-cyan-500 hover:bg-cyan-500 hover:text-white transition duration-300 text-sm"
              >
                Download CV
              </button>
            </div>

            <div className="flex gap-6 text-xl sm:text-2xl justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/saad-abbas-722b08345"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-cyan-500 transition-colors duration-300"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/SaadAbbas598/"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-cyan-500 transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center mb-6 xs:mb-8 sm:mb-10 md:mb-0">
            <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 group">
              <div className="absolute w-full h-full rounded-full overflow-hidden z-10 border-4 border-cyan-500/30 transform transition duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-cyan-400/40">
                <img
                  src="/images/profile.png"
                  alt="Saad Abbas Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
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
