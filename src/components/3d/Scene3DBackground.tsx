"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50;
  }

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3DBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#8352FD" intensity={0.5} />
        
        <ParticleField />
        
        <Sphere args={[1.5, 100, 200]} position={[3, 1, -5]}>
          <MeshDistortMaterial
            color="#ff00aa"
            attach="material"
            distort={0.6}
            speed={2}
            roughness={0.4}
            metalness={0.8}
            transparent
            opacity={0.3}
          />
        </Sphere>
        
        <Sphere args={[1, 100, 200]} position={[-3, -1, -3]}>
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.4}
            metalness={0.8}
            transparent
            opacity={0.3}
          />
        </Sphere>
        
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
