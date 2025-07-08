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

  const particleShadows = useMemo(() => {
    const count = isMobile ? 4 : 10;
    return Array.from({ length: count }).map(() =>
      generateBoxShadow(isMobile ? 60 : 120)
    );
  }, [isMobile]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Background Color Layer */}
      <div className="absolute inset-0 bg-[#0a0909] grayscale" />

      {/* Particle Layer */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Move styles out of render flow to prevent layout delay */}
      <style>{`
        @keyframes particleMove1 { 0% { transform: translateY(0); } 100% { transform: translateY(-2560px); } }
        @keyframes particleMove2 { 0% { transform: translateY(0); } 100% { transform: translateY(-2200px); } }
        @keyframes particleMove3 { 0% { transform: translateY(0); } 100% { transform: translateY(-1800px); } }
        @keyframes particleMove4 { 0% { transform: translateY(0); } 100% { transform: translateY(-3000px); } }
        @keyframes particleMove5 { 0% { transform: translateY(0); } 100% { transform: translateY(-3500px); } }

        .animate-particle1 { animation: particleMove1 ${isMobile ? '90s' : '60s'} linear infinite; }
        .animate-particle2 { animation: particleMove2 ${isMobile ? '100s' : '70s'} linear infinite; }
        .animate-particle3 { animation: particleMove3 ${isMobile ? '110s' : '80s'} linear infinite; }
        .animate-particle4 { animation: particleMove4 ${isMobile ? '130s' : '100s'} linear infinite; }
        .animate-particle5 { animation: particleMove5 ${isMobile ? '150s' : '120s'} linear infinite; }
      `}</style>
    </div>
  );
};

function generateBoxShadow(count) {
  const spacing = 2560;
  return Array.from({ length: count }).map(() => {
    const x = Math.floor(Math.random() * spacing);
    const y = Math.floor(Math.random() * spacing);
    return `${x}px ${y}px #fff`;
  }).join(", ");
}

export default ParticlesBackground;
