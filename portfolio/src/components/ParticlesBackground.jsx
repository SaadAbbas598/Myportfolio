import React, { useMemo, useState, useEffect } from "react";

const ParticlesBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Fewer particles on mobile, more on desktop
  const particleShadows = useMemo(() => {
    const count = isMobile ? 5 : 10;
    return Array.from({ length: count }).map(() =>
      generateBoxShadow(isMobile ? 80 : 150) // fewer total points per particle on mobile
    );
  }, [isMobile]);

  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 bg-[#0a0909] grayscale z-0" />

      {/* Particle Layer */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {particleShadows.map((shadows, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-[2px] h-[2px] rounded-full animate-particle${(index % 5) + 1}`}
            style={{
              boxShadow: shadows,
              willChange: "transform",
            }}
          />
        ))}
      </div>

      {/* Keyframe Animation Styles */}
      <style>{`
        @keyframes particleMove1 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-2560px); }
        }
        @keyframes particleMove2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-2200px); }
        }
        @keyframes particleMove3 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-1800px); }
        }
        @keyframes particleMove4 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-3000px); }
        }
        @keyframes particleMove5 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-3500px); }
        }

        /* Slower animations for mobile performance */
        .animate-particle1 { animation: particleMove1 ${isMobile ? '90s' : '60s'} linear infinite; }
        .animate-particle2 { animation: particleMove2 ${isMobile ? '100s' : '70s'} linear infinite; }
        .animate-particle3 { animation: particleMove3 ${isMobile ? '110s' : '80s'} linear infinite; }
        .animate-particle4 { animation: particleMove4 ${isMobile ? '130s' : '100s'} linear infinite; }
        .animate-particle5 { animation: particleMove5 ${isMobile ? '150s' : '120s'} linear infinite; }
      `}</style>
    </>
  );
};

function generateBoxShadow(count) {
  const spacing = 2560;
  const shadows = new Array(count).fill().map(() => {
    const x = Math.floor(Math.random() * spacing);
    const y = Math.floor(Math.random() * spacing);
    return `${x}px ${y}px #fff`;
  });
  return shadows.join(", ");
}

export default ParticlesBackground;
