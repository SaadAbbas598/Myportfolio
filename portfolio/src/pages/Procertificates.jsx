"use client";
import React, { useState, useEffect } from "react";

const certificates = [
  {
    title: "Foundations of Project Management",
    issuer: "Coursera (Google)",
    date: "2025",
    description: [
      "Learned the foundations of effective project management.",
      "Gained knowledge in project planning, execution, and communication.",
      "Explored Agile and Scrum methodologies.",
    ],
  },
];

const ProfessionalCertificates = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="certificates"
      className={`relative py-16 ${isMobile ? "bg-black" : ""}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-cyan-400">
          Professional Certificates
        </h2>

        <div className="mx-auto max-w-3xl">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="mb-6 rounded-lg border border-[#00ffff30] bg-[#0f0f0f] p-6"
            >
              <div className="mb-4 flex items-start">
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-semibold text-cyan-400">
                    {cert.title}
                  </h3>
                  <h4 className="mb-2 text-base text-gray-300">
                    {cert.issuer}
                  </h4>
                  <p className="mb-4 text-sm text-gray-400">{cert.date}</p>
                </div>
              </div>
              <ul className="list-inside list-disc space-y-2 pl-4 text-gray-300">
                {cert.description.map((desc, i) => (
                  <li key={i} className="leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCertificates;
