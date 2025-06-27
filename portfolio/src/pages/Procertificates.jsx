"use client";
import React, { useState, useEffect } from "react";

const certificates = [
  {
    title: "Crash Course on Python",
    issuer: "Coursera (Google)",
    date: "2025",
    description: [
      "Completed Google's Python course via Coursera.",
      "Learned core Python concepts like variables, functions, loops, and data structures.",
      "Gained hands-on experience in writing, debugging, and automating Python scripts.",
    ],
    image: "/images/My Certificate.jpeg", // Make sure the image exists in public/images/
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
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={`${cert.title} Certificate`}
                className="mb-4 w-full rounded-lg border border-cyan-700 shadow-md"
              />

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
