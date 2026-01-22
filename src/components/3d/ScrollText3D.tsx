"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ScrollTextProps {
  scrollProgress: number;
}

function AnimatedScrollText({ scrollProgress }: ScrollTextProps) {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.rotation.y = scrollProgress * Math.PI * 2;
      textRef.current.position.z = Math.sin(scrollProgress * Math.PI * 2) * 2;
      textRef.current.scale.setScalar(0.5 + scrollProgress * 0.5);
    }
  });

  return (
    <Center>
      <mesh ref={textRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          metalness={0.9}
          roughness={0.1}
          transmission={0.5}
          thickness={0.5}
          clearcoat={1}
          ior={1.5}
        />
      </mesh>
    </Center>
  );
}

interface ScrollText3DProps {
  scrollProgress: number;
  className?: string;
}

export default function ScrollText3D({ scrollProgress, className }: ScrollText3DProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#ec4899" intensity={0.5} />
        <AnimatedScrollText scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
