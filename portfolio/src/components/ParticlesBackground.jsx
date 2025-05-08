import React from "react";

const ParticlesBackground = () => {
  return (
    <>
      {/* Background Color Layer */}
      <div className="fixed inset-0 bg-[#0a0909] grayscale z-0" />

      {/* Particle Container */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-[2px] h-[2px] rounded-full animate-particle${(index % 5) + 1}`}
            style={{ boxShadow: generateBoxShadow(150) }}
          />
        ))}
      </div>

      {/* Custom Styles */}
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

        .animate-particle1 { animation: particleMove1 60s linear infinite; }
        .animate-particle2 { animation: particleMove2 70s linear infinite; }
        .animate-particle3 { animation: particleMove3 80s linear infinite; }
        .animate-particle4 { animation: particleMove4 100s linear infinite; }
        .animate-particle5 { animation: particleMove5 120s linear infinite; }
      `}</style>
    </>
  );
};

function generateBoxShadow(count) {
  const spacing = 2560;
  let shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * spacing);
    const y = Math.floor(Math.random() * spacing);
    shadows.push(`${x}px ${y}px #fff`);
  }
  return shadows.join(", ");
}

export default ParticlesBackground;
