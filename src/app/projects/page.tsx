"use client";

import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ProjectNavbar from "@/components/navbar";
import Image from "next/image";

const CustomCursor = dynamic(() => import("@/components/effects/CustomCursor"), { ssr: false });
const Scene3DBackground = dynamic(() => import("@/components/3d/Scene3DBackground"), { ssr: false });
const ProjectScene3D = dynamic(() => import("@/components/3d/ProjectScene3D"), { ssr: false });

const projects = [
  {
    title: "Adaptive Quizzing Platform",
    description:
      "An AI-powered quiz application that adapts in real-time to each learner's performance. The platform dynamically adjusts question difficulty — from Beginner to Expert — based on user accuracy and response history, ensuring a personalized and engaging learning journey. Built as a responsive, mobile-first SPA with React and Tailwind CSS, and deployed globally on Netlify for seamless accessibility and smooth quiz interactions.",
    tech: ["Next.js", "MongoDB", "OpenAI API", "TailwindCSS"],
    link: "https://github.com/SATVIKsynopsis/quiz-adaptable",
    demo: "https://quiztie.netlify.app",
    preview: "/quiztie.png",
    color: "#8b5cf6",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Vendor to Supplier Platform",
    description:
      "A full-stack Next.js application with TypeScript and bilingual support (Hindi/English), designed to help street vendors discover BIS/ISO/MSME certified suppliers through advanced search and filtering. Integrated an AI-powered chatbot (OpenAI GPT-3.5) with custom prompts for real-time guidance on certification requirements and supplier verification, boosting trust and engagement. Features include OTP-based authentication, dynamic routing, detailed supplier profiles, and vendor purchase analytics — delivering seamless business connections and smarter decision-making.",
    tech: ["Next.js", "OpenAI API", "AI Chatbot", "i18n", "TailwindCSS"],
    link: "https://github.com/SATVIKsynopsis/vendor-sahayak",
    demo: "https://vendorsahayak.netlify.app",
    preview: "/vendor.png",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <CustomCursor />
      <ProjectNavbar />
      <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
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
            className="text-center mb-24"
          >
            <h2 className="text-xl text-purple-400 font-medium tracking-wider mb-4">
              MY WORK
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                Featured Projects
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative solutions that combine cutting-edge technology 
              with exceptional user experiences.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  {/* Project Image with 3D Effect */}
                  <div 
                    className="flex-1 relative group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                      {/* 3D Background */}
                      <div className="absolute inset-0 opacity-30">
                        <Suspense fallback={null}>
                          <ProjectScene3D color={project.color} />
                        </Suspense>
                      </div>
                      
                      {/* Project Image */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500">
                        <Image
                          src={project.preview}
                          alt={project.title}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                        <div className="flex gap-4">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
                          >
                            Live Demo →
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
                          >
                            GitHub →
                          </a>
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`} />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <motion.h3 
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${project.gradient}`}>
                          {project.title}
                        </span>
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-300 leading-relaxed text-lg"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Tech Stack */}
                    <motion.div 
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {project.tech.map((tech: string, techIdx: number) => (
                        <span
                          key={techIdx}
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-white/20 text-white text-sm font-medium hover:scale-110 transition-transform duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    {/* Links */}
                    <motion.div 
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-8 py-3 bg-gradient-to-r ${project.gradient} rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105`}
                      >
                        View Live
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-purple-500 rounded-full text-white font-semibold hover:bg-purple-500/20 transition-all duration-300"
                      >
                        Source Code
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative elements */}
                {index === 0 && (
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-[100px] opacity-20 animate-pulse" />
                )}
                {index === 1 && (
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500 rounded-full blur-[100px] opacity-20 animate-pulse" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                Want to see more?
              </span>
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              Check out my GitHub for additional projects and open-source contributions.
            </p>
            <a
              href="https://github.com/SATVIKsynopsis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
            >
              Visit GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
