import React, { useState, useEffect } from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import dynamic from "next/dynamic";

// Dynamically import ParticlesBackground with loading fallback
const ParticlesBackground = dynamic(
  () => import("../components/ParticlesBackground"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />
  }
);

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="about" className={`py-12 sm:py-16 px-4 sm:px-6 text-black ${isMobile ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
      {/* Only render particles on desktop for better performance */}
      {!isMobile && <ParticlesBackground />}

      {/* Content with higher z-index */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h5 className="text-sm sm:text-base text-cyan-400 uppercase tracking-wider">Get to know</h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mt-2">About Me</h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 sm:gap-12 items-start">
          {/* Left: Image */}
          <div className="w-full aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-tr from-transparent via-cyan-500 to-transparent grid place-items-center p-0.5 sm:p-1">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] w-full h-full">
              <img
                src="/images/profile.webp" // Using WebP format for better performance
                alt="Saad Abbas"
                className="object-cover w-full h-full"
                loading="lazy"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="mt-4 sm:mt-0">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Experience Card */}
              <article className="bg-[#0f0f0f] border border-cyan-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:scale-[1.02] hover:border-cyan-500 transition-all duration-300 cursor-default">
                <FaAward className="text-cyan-500 text-2xl sm:text-3xl mb-2 sm:mb-4 mx-auto" />
                <h5 className="text-lg sm:text-xl font-semibold text-white">Experience</h5>
                <small className="text-xs sm:text-sm text-gray-400">1.5 years</small>
              </article>

              {/* Projects Card */}
              <article className="bg-[#0f0f0f] border border-cyan-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:scale-[1.02] hover:border-cyan-500 transition-all duration-300 cursor-default">
                <VscFolderLibrary className="text-cyan-500 text-2xl sm:text-3xl mb-2 sm:mb-4 mx-auto" />
                <h5 className="text-lg sm:text-xl font-semibold text-white">Projects</h5>
                <small className="text-xs sm:text-sm text-gray-400">10+ Completed</small>
              </article>
            </div>

            <p className="text-white mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              1+ years experienced Front End Developer with hands-on experience
              in identifying web-based user interactions along with designing
              and implementing highly-responsive user interface components by
              deploying React concepts. Proficient in translating designs and
              wireframes into high-quality code, and writing application
              interface code via JavaScript and React JS workflows. Adept at
              monitoring and maintaining frontend performance and
              troubleshooting and debugging the same to bolster overall
              performance.
            </p>

            <div className="text-center sm:text-left">
              <a
                href="#contact"
                className="inline-block bg-transparent text-cyan-500 border border-cyan-500 px-4 py-2 sm:px-5 sm:py-3 rounded-md font-medium sm:font-semibold hover:bg-cyan-500 hover:text-blue-950 transition-colors duration-300 text-sm sm:text-base"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Intro);