"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProjectNavbar from "@/components/navbar";

const skills = [
  {
    category: "Frontend Development",
    technologies: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    icon: "💻",
  },
  {
    category: "Backend Development",
    technologies: ["Node.js", "Express", "MongoDB", "PostgresSQL", "REST APIs", "Authentication"],
    icon: "⚙️",
  },
  {
    category: "Tools & Technologies",
    technologies: ["Git", "VS Code", "Figma", "Webstorm", "Pycharm", "Clion"],
    icon: "🛠️",
  },
  {
    category: "DSA",
    technologies: ["C", "C++", "Python"],
    icon: "🛠️",
  }
];

const personalInfo = {
  name: "Satvik Upadhyaya",
  birthPlace: "New Delhi, India",
  education: [
    {
      institution: "Kalinga Institute of Industrial Technology",
      degree: "Bachelor of Technology in Computer Science",
      period: "2024 - 2028",
    },
    {
      institution: "Chinmaya Vidyalaya",
      degree: "Primary to High School Education",
      period: "2008 - 2024",
    },
  ],
  profileImage: "/profilepic.jpg",
  bio: "A passionate software developer with a keen interest in creating innovative web solutions. I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying outdoor activities."
};

// Create a client-side only wrapper for GridBackgroundDemo
const GridBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="absolute inset-0 z-0 bg-black" />
    );
  }

  // Dynamically import GridBackgroundDemo only on client side
  const GridBackgroundDemo = require("@/components/blockbackground").GridBackgroundDemo;
  
  return (
    <div className="absolute inset-0 z-0">
      <GridBackgroundDemo />
    </div>
  );
};

export default function ExperiencePage() {
  return (
    <>  
      <ProjectNavbar />
      <div className="relative min-h-screen w-full bg-black text-neutral-200 overflow-hidden">
        {/* Grid Background for the entire page - Client side only */}
        <GridBackground />
        
        {/* Subtle overlay to match grid theme */}
        <div className="absolute inset-0 bg-black/20 z-1" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          {/* Profile Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8"
          >
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl font-bold mb-4 text-neutral-100"
              >
                About Me
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-neutral-400 mb-6 max-w-2xl"
              >
                From Bokaro to building digital experiences that matter
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-neutral-400 mb-6 max-w-2xl leading-relaxed"
              >
                {personalInfo.bio}
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900/80">
                <Image
                  src={personalInfo.profileImage}
                  alt="Satvik Upadhyaya"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 192px"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-neutral-100 border-b border-neutral-800 pb-4">Education</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-neutral-800"></div>
              
              {personalInfo.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative pl-16 pb-10 last:pb-0"
                >
                  {/* Icon */}
                  <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700">
                    <span className="text-sm">🎓</span>
                  </div>
                  
                  <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-2 text-neutral-100">{edu.institution}</h3>
                    <p className="text-neutral-400 mb-2">{edu.degree}</p>
                    <span className="text-sm font-medium text-neutral-500">{edu.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Expertise Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-neutral-100 border-b border-neutral-800 pb-4">Skills & Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/50 
                            backdrop-blur-md p-6 shadow-lg hover:shadow-xl 
                            hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Background effect */}
                  <div className="absolute inset-0 bg-neutral-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-neutral-100">
                        {skill.category}
                      </h3>
                      <span className="text-2xl">{skill.icon}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold mb-10 text-neutral-100 border-b border-neutral-800 pb-4">My Journey Timeline</h2>
            
            <div className="relative pl-8 space-y-12 max-w-2xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-neutral-800"></div>
              
              {[
                {
                  year: "Birth",
                  text: `Born in Bokaro, India, where my journey began.`,
                  icon: "👶",
                },
                {
                  year: "2008",
                  text: "Started my formal education journey.",
                  icon: "📚",
                },
                {
                  year: "2024",
                  text: "Began college studies in Computer Science.",
                  icon: "🎓",
                },
                {
                  year: "2024 October",
                  text: "Started web development from scratch.",
                  icon: "⚙️",
                },
                {
                  year: "2024 December",
                  text: "Transitioned into full-stack projects with Next.js and Tailwind.",
                  icon: "🌐",
                },
                {
                  year: "2025",
                  text: "Focused on scalable apps, authentication, and API integrations.",
                  icon: "🚀",
                },
                {
                  year: "2025",
                  text: "Started doing DSA concepts in C++ and learning Python",
                  icon: "🚀",
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative flex items-start"
                >
                  {/* Marker */}
                  <div className="absolute -left-9 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700">
                    <span className="text-xs">{item.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm text-neutral-400">
                      <span className="font-semibold text-neutral-300">{item.year}</span> — {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}