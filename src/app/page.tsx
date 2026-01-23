"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Float, MeshDistortMaterial, Environment, PerspectiveCamera, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState } from "react";
import { X, Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import ProjectNavbar from "@/components/navbar";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import TextScramble from "@/components/effects/TextScramble";
import MagneticButton from "@/components/effects/MagneticButton";
import Link from "next/link";

const CustomCursor = dynamic(() => import("@/components/effects/CustomCursor"), { ssr: false });

// 3D Floating Sphere with scroll interaction
function FloatingHeroSphere({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2 + scrollProgress * 2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.8}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.6}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <Sphere args={[1.5, 100, 200]} scale={2.8}>
        <meshBasicMaterial color="#8b5cf6" wireframe opacity={0.1} transparent />
      </Sphere>
    </Float>
  );
}

// 3D Tech Orbs
function TechOrb({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.5 + delay;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3 + delay;
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + delay) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
}

// Animated particles
function Particles() {
  const count = 100;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#8b5cf6" transparent opacity={0.6} />
    </points>
  );
}

export default function Home() {
  const { scrollProgress } = useLenisScroll();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const contactInfo = {
    email: "futureiitianisme@gmail.com",
    phone: "+91 9942575131",
    location: "Bokaro, India",
    social: {
      github: "https://github.com/SATVIKsynopsis",
      linkedin: "https://www.linkedin.com/in/satvik-upadhyaya-073978334/",
      twitter: "https://x.com/SatvikUpadhyaya"
    }
  };

  return (
    <>
      <CustomCursor />
      <ProjectNavbar />

      {/* Hero Section with 3D */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* 3D Background Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
            <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={1} color="#06b6d4" />
            <FloatingHeroSphere scrollProgress={scrollProgress} />
            <Particles />
            <Environment preset="night" />
          </Canvas>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="text-sm text-gray-300">Available for new projects</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block text-white">
                  <TextScramble text="Satvik" />
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-teal-400">
                  <TextScramble text="Upadhyaya" speed={60} />
                </span>
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Creative developer building exceptional digital experiences with modern technologies and innovative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/projects">
              <MagneticButton className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-2xl shadow-white/20">
                <span className="flex items-center gap-2">
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </MagneticButton>
              </Link>
              
              <Link href="/about">
              <MagneticButton className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                About me
              </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-sm text-gray-500 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section with 3D Orbs */}
      <section className="relative py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-indigo-950/10 to-black/50" />
        
        {/* 3D Tech Orbs Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={0.8} color="#8b5cf6" />
            <TechOrb position={[-3, 2, 0]} color="#06b6d4" delay={0} />
            <TechOrb position={[3, -1, -2]} color="#8b5cf6" delay={1} />
            <TechOrb position={[-2, -2, -1]} color="#ec4899" delay={2} />
            <TechOrb position={[4, 1, 1]} color="#f59e0b" delay={3} />
            <Particles />
            <Environment preset="sunset" />
          </Canvas>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Modern technologies for building exceptional experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Next.js", "React", "TypeScript", "Three.js", "Tailwind", "Node.js", "MongoDB", "Python"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="relative text-xl font-semibold text-white text-center">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with 3D */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[0, 0, 5]} intensity={1.5} color="#ec4899" />
            <Float speed={1} rotationIntensity={0.5} floatIntensity={0.8}>
              <Sphere args={[2, 100, 200]} scale={1.5}>
                <MeshDistortMaterial
                  color="#06b6d4"
                  distort={0.5}
                  speed={2}
                  roughness={0.1}
                  metalness={0.9}
                  emissive="#06b6d4"
                  emissiveIntensity={0.3}
                />
              </Sphere>
            </Float>
            <Environment preset="sunset" />
          </Canvas>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Let's Build Something
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-teal-400">
                Extraordinary
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>
            <MagneticButton 
              onClick={() => setIsContactOpen(true)}
              className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-2xl shadow-white/20"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <span>→</span>
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Contact Popup Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-neutral-900/95 border border-neutral-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-neutral-400" />
            </button>

            {/* Header */}
            <div className="p-6 border-b border-neutral-800">
              <h2 className="text-2xl font-bold text-neutral-100 mb-2">Get In Touch</h2>
              <p className="text-neutral-400">Let's work together on your next project</p>
            </div>

            {/* Contact Info */}
            <div className="p-6 space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/30">
                <Mail className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-neutral-200 hover:text-neutral-100 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/30">
                <Phone className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-neutral-200 hover:text-neutral-100 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/30">
                <MapPin className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Location</p>
                  <p className="text-neutral-200">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-neutral-800">
              <p className="text-neutral-400 mb-3 text-sm">Follow me on</p>
              <div className="flex space-x-3">
                <a
                  href={contactInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg border border-neutral-700/30 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-neutral-400" />
                </a>
                <a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg border border-neutral-700/30 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-neutral-400" />
                </a>
                <a
                  href={contactInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg border border-neutral-700/30 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-6 border-t border-neutral-800">
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-xl font-medium border border-neutral-700 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10 bg-black z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500">© 2026 Satvik Upadhyaya. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com/SATVIKsynopsis" className="text-gray-500 hover:text-white transition-colors duration-300">GitHub</a>
              <a href="https://www.linkedin.com/in/satvik-upadhyaya-073978334/" className="text-gray-500 hover:text-white transition-colors duration-300">LinkedIn</a>
              <a href="https://x.com/SatvikUpadhyaya" className="text-gray-500 hover:text-white transition-colors duration-300">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

