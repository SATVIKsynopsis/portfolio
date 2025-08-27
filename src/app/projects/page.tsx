"use client";
import React, { useState } from "react";
import { motion, useSpring } from "framer-motion";
import { GridBackgroundDemo } from "@/components/blockbackground";
import ProjectNavbar from "@/components/navbar";
import Image from "next/image";

const projects = [
  {
    title: "Adaptive quizzing platform",
    description:
      "An AI-powered quiz application that adapts in real-time to each learner's performance. The platform dynamically adjusts question difficulty — from Beginner to Expert — based on user accuracy and response history, ensuring a personalized and engaging learning journey. Built as a responsive, mobile-first SPA with React and Tailwind CSS, and deployed globally on Netlify for seamless accessibility and smooth quiz interactions.",
    tech: ["Next.js", "MongoDB", "OpenAI API Key", "TailwindCSS"],
    link: "https://github.com/SATVIKsynopsis/quiz-adaptable",
    demo: "https://quiztie.netlify.app",
    preview: "/quiztie.png",   // ✅ just path
  },
  {
    title: "Vendor to Supplier connecting platform",
    description:
      "A full-stack Next.js application with TypeScript and bilingual support (Hindi/English), designed to help street vendors discover BIS/ISO/MSME certified suppliers through advanced search and filtering. Integrated an AI-powered chatbot (OpenAI GPT-3.5) with custom prompts for real-time guidance on certification requirements and supplier verification, boosting trust and engagement. Features include OTP-based authentication, dynamic routing, detailed supplier profiles, and vendor purchase analytics — delivering seamless business connections and smarter decision-making..",
    tech: [
      "Next.js",
      "OpenAI API Key",
      "AI Chatbot",
      "Language Support",
      "TailwindCSS",
    ],
    link: "https://github.com/SATVIKsynopsis/vendor-sahayak",
    demo: "https://vendorsahayak.netlify.app",
    preview: "/vendor.png",  // ✅ just path
  },
];


export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <ProjectNavbar />
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Grid */}
        <GridBackgroundDemo />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Foreground Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-6xl">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-5xl md:text-6xl font-black mb-4 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Featured <span className="text-white/60">Projects</span>
              </motion.h2>
              <motion.p
                className="text-lg text-slate-300 max-w-2xl mx-auto mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Explore my latest work in web development, featuring modern
                technologies and innovative solutions that push the boundaries
                of user experience.
              </motion.p>
              <motion.div
                className="w-20 h-0.5 bg-white/60 mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
            </motion.div>

            {/* Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2 w-full">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  isHovered={hoveredIndex === index}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ProjectCard = ({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHovered) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const maxRotation = 15;
    const rotX = ((e.clientY - centerY) / rect.height) * -maxRotation;
    const rotY = ((e.clientX - centerX) / rect.width) * maxRotation;

    rotateX.set(rotX);
    rotateY.set(rotY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    onLeave();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group cursor-pointer relative"
      style={{ perspective: "1000px" }}
    >
      {/* Floating Project Preview Image */}
      <motion.div
        className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-white/20 rounded-xl blur-lg" />

          {/* Image container */}
          <div className="relative rounded-xl overflow-hidden border border-white/30 backdrop-blur-md shadow-2xl">
            <Image
  src={project.preview}
  alt={`${project.title} preview`}
  width={320}
  height={192}
  className="w-80 h-48 object-cover"
/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
              {project.title}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={onHover}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl p-6 h-full overflow-hidden"
      >
        {/* Subtle gradient highlight */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.08) 100%)",
            transform: "translateZ(1px)",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ transform: "translateZ(1px)" }}
        >
          <svg width="100%" height="100%" className="overflow-visible">
            <defs>
              <pattern
                id={`grid-${index}`}
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
          </svg>
        </div>

        {/* Floating dot indicators */}
        <div
          className="absolute top-4 right-4 flex gap-1"
          style={{ transform: "translateZ(2px)" }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-white/40"
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.4, 0.8, 0.4] : 0.4,
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: isHovered ? Infinity : 0,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10" style={{ transform: "translateZ(5px)" }}>
          <motion.h3
            className="text-2xl font-bold text-white mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.1 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-slate-300 mb-6 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.2 }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            {project.tech.map((tech: string, i: number) => (
              <motion.span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-white/10 text-white border border-white/5 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  y: -2,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.2 + 0.4 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Project Links */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 border border-white/10 backdrop-blur-sm overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />

              <span className="relative z-10">View Code</span>
              <motion.span
                className="relative z-10"
                animate={{
                  x: isHovered ? 3 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                ↗
              </motion.span>
            </motion.a>

            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/15 hover:bg-white/25 text-white font-medium transition-all duration-300 border border-white/20 backdrop-blur-sm overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />

              <span className="relative z-10">Live Demo</span>
              <motion.span
                className="relative z-10"
                animate={{
                  x: isHovered ? 3 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
