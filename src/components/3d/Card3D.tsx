"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Text3D, Center, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedText() {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <Center>
        <mesh ref={textRef}>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhysicalMaterial
            color="#8352FD"
            metalness={0.9}
            roughness={0.1}
            transmission={0.3}
            thickness={0.5}
            clearcoat={1}
          />
        </mesh>
      </Center>
    </Float>
  );
}

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className }: Card3DProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden opacity-30">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedText />
        </Canvas>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
