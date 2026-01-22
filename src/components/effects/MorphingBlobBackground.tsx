"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function MorphingBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <>
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.8}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.6}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
      <Sphere args={[1, 128, 128]} scale={2.5} position={[2, -1, -2]}>
        <MeshDistortMaterial
          color="#ec4899"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.6}
        />
      </Sphere>
      <Sphere args={[1, 128, 128]} scale={2} position={[-2, 1, -1]}>
        <MeshDistortMaterial
          color="#14b8a6"
          attach="material"
          distort={0.4}
          speed={1.8}
          roughness={0.5}
          metalness={0.6}
          transparent
          opacity={0.5}
        />
      </Sphere>
    </>
  );
}

export default function MorphingBlobBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#ec4899" />
        <pointLight position={[0, 10, -10]} intensity={0.6} color="#14b8a6" />
        <MorphingBlob />
      </Canvas>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
