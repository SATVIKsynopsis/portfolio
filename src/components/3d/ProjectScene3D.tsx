"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

function ProjectCube({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
      <group>
        <Box ref={meshRef} args={[1, 1, 1]}>
          <meshPhysicalMaterial
            color={color}
            metalness={0.9}
            roughness={0.1}
            transmission={0.3}
            thickness={0.5}
            clearcoat={1}
          />
        </Box>
        <Torus args={[0.8, 0.1, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </Torus>
      </group>
    </Float>
  );
}

export default function ProjectScene3D({ color = "#8b5cf6" }: { color?: string }) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3.5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} color="#ec4899" intensity={0.5} />
        <ProjectCube color={color} />
      </Canvas>
    </div>
  );
}
