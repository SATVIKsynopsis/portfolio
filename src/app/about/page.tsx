"use client";

import { motion } from "framer-motion";
import React, { Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import ProjectNavbar from "@/components/navbar";
import { CanvasTexture } from "three";

const CustomCursor = dynamic(() => import("@/components/effects/CustomCursor"), { ssr: false });
const ProfileScene3D = dynamic(() => import("@/components/3d/ProfileScene3D"), { ssr: false });
const Scene3DBackground = dynamic(() => import("@/components/3d/Scene3DBackground"), { ssr: false });

const skills = [
  {
    category: "Frontend Development",
    technologies: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    icon: "💻",
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Backend Development",
    technologies: ["Node.js", "Express", "MongoDB", "PostgresSQL", "REST APIs", "Authentication"],
    icon: "⚙️",
    color: "from-cyan-500 to-blue-500",
  },
  {
    category: "Infra",
    technologies: ["Docker", "CI/CD","Linux"],
    icon: "☁️",
    color: "from-green-500 to-teal-500",
  },
  {
    category: "Tools & Technologies",
    technologies: ["Git", "VS Code", "Figma", "Webstorm", "Pycharm", "Clion"],
    icon: "🛠️",
    color: "from-pink-500 to-rose-500",
  },
 
  {
    category: "Currently Learning",
    technologies: ["Rust"],
    icon: "📚",
    color: "from-yellow-500 to-orange-500",
  }
];

const personalInfo = {
  name: "Satvik Upadhyaya",
  birthPlace: "Bokaro, India",
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

export default function AboutPage() {
  return (
    <>  
      <CustomCursor />
      <ProjectNavbar />
      <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
        {/* 3D Background */}
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />}>
          <Scene3DBackground />
        </Suspense>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between mb-32 gap-16"
          >
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-xl text-purple-400 font-medium tracking-wider mb-4">
                  ABOUT ME
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                    {personalInfo.name}
                  </span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="flex items-center gap-2">
                    📍 {personalInfo.birthPlace}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* 3D Profile Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Profile Image Container */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/50 z-10">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* 3D Background Effect */}
                <div className="absolute inset-0 -z-10 scale-110">
                  <Suspense fallback={null}>
                    <ProfileScene3D />
                  </Suspense>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Education Journey
              </span>
            </h2>
            
            <div className="space-y-8">
              {personalInfo.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
                        🎓
                      </div>
                      <span className="px-4 py-1 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                    <p className="text-gray-300 text-lg">{edu.degree}</p>
                  </div>

                  {/* Hover line effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Expertise Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                Skills & Expertise
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-3xl shadow-lg`}>
                        {skill.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {skill.category}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {skill.technologies.map((tech, techIdx) => (
                        <motion.span 
                          key={techIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: techIdx * 0.05 }}
                          className="px-4 py-2 text-sm rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${skill.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                Let's Work Together
              </span>
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              Have a project in mind? Let's create something extraordinary.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}