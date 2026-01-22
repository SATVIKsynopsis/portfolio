"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={groupRef}>
        {/* Abstract 3D Structure */}
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />
          <meshPhysicalMaterial
            color="#00d4ff"
            metalness={0.9}
            roughness={0.1}
            transmission={0.5}
            thickness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Orbiting spheres */}
        {[...Array(3)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i * Math.PI * 2) / 3) * 1.5,
              Math.sin((i * Math.PI * 2) / 3) * 0.5,
              Math.sin((i * Math.PI * 2) / 3) * 1.5,
            ]}
          >
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial
              color={i === 0 ? "#ff00ff" : i === 1 ? "#00ffff" : "#ffff00"}
              emissive={i === 0 ? "#ff00ff" : i === 1 ? "#00ffff" : "#ffff00"}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}
