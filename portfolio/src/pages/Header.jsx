import React, { useMemo, useState, useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Link } from "react-scroll";

// CORRECT dynamic import syntax (removed the _c = assignment)
const ParticlesBackground = dynamic(
  () => import("../components/ParticlesBackground"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />,
  }
);

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "/path/to/your/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Saad_Abbas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = useMemo(
    () => (
      <div className="flex gap-6 text-2xl justify-center md:justify-start">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-cyan-500 transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-cyan-500 transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>
      </div>
    ),
    []
  );

  return (
    <header
      id="home"
      className="relative h-screen flex items-center px-4 sm:px-6 bg-black text-white overflow-hidden"
    >
      {!isMobile && <ParticlesBackground />}

      <div className="w-full max-w-6xl mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 lg:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h5 className="text-sm sm:text-base md:text-lg mb-2 text-white/70">
              Hello, I'm
            </h5>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3">
              SAAD ABBAS
            </h1>
            <h5 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-white/70">
              Full Stack Developer
            </h5>

            <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Passionate developer with expertise in modern web technologies.
              Creating efficient, scalable, and user-friendly applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 justify-center md:justify-start">
              <a
                href="contact"
                className="bg-transparent text-cyan-500 font-medium px-4 py-2 sm:px-5 sm:py-3 rounded-md border border-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Contact Me
              </a>
              <button
                onClick={handleDownloadCV}
                className="bg-transparent text-cyan-500 font-medium px-4 py-2 sm:px-5 sm:py-3 rounded-md border border-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Download CV
              </button>
            </div>

            {socialLinks}
          </div>

          <div className="flex-1 flex justify-center items-center mb-8 sm:mb-10 md:mb-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <div className="absolute w-full h-full rounded-full overflow-hidden z-10 border-4 border-cyan-500/30">
                <img
                  src="/images/profile.webp"
                  alt="Saad Abbas Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={320}
                  height={320}
                />
              </div>
              <div className="absolute top-[-5%] left-[-5%] w-[110%] h-[110%] border-2 border-dashed border-cyan-500 rounded-full animate-spin-slow z-0 will-change-transform"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
