"use client";
import React, { useState, useEffect } from "react";

const experience = {
  title: "Software Intern",
  company: "TheDevPort",
  date: "2024 (3 months)",
  description: [
    "Developed and maintained web applications using modern technologies.",
    "Collaborated with team members on various projects.",
    "Gained hands-on experience with software development workflows.",
    "Contributed to real-world projects and solutions.",
  ],
};

const WorkExperience = () => {
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
      id="experience"
      className={`relative ${isMobile ? "bg-black" : ""}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl sm:text-4xl font-bold text-cyan-400">
          Work Experience
        </h2>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border border-[#00ffff30] bg-[#0f0f0f] p-6 sm:p-8">
            <div className="mb-4">
              <h3 className="mb-1 text-lg sm:text-xl font-semibold text-cyan-400">
                {experience.title}
              </h3>
              <h4 className="mb-2 text-sm sm:text-base text-gray-300">
                {experience.company}
              </h4>
              <p className="mb-4 text-sm text-gray-400">{experience.date}</p>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-300">
              {experience.description.map((desc, i) => (
                <li key={i} className="leading-relaxed">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;