"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Torus, Cone } from "@react-three/drei";
import * as THREE from "three";

interface ScrollReactiveFigureProps {
  scrollProgress: number;
}

export default function ScrollReactiveFigure({ scrollProgress }: ScrollReactiveFigureProps) {
  const groupRef = useRef<THREE.Group>(null);
  const handRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Rotate based on scroll
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
      groupRef.current.position.y = Math.sin(scrollProgress * Math.PI * 2) * 0.5;
    }

    if (handRef.current) {
      // Animate hand gesture
      handRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 2) * 0.3;
      handRef.current.position.x = Math.sin(scrollProgress * Math.PI * 4) * 2;
    }
  });

  // Hand-like structure made of primitive shapes
  const HandGesture = () => (
    <group ref={handRef} position={[-2, 0, 0]}>
      {/* Palm */}
      <Box args={[0.8, 1.2, 0.3]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#fbbf24"
          metalness={0.3}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={0.3}
        />
      </Box>
      
      {/* Fingers */}
      {[0, 1, 2, 3].map((i) => (
        <group key={i} position={[0, 0.6 + i * 0.25, 0]}>
          <Box args={[0.15, 0.6, 0.2]}>
            <meshPhysicalMaterial
              color="#fbbf24"
              metalness={0.3}
              roughness={0.4}
              clearcoat={1}
            />
          </Box>
        </group>
      ))}
      
      {/* Thumb */}
      <Box args={[0.15, 0.5, 0.2]} position={[0.4, -0.2, 0]} rotation={[0, 0, 0.5]}>
        <meshPhysicalMaterial
          color="#fbbf24"
          metalness={0.3}
          roughness={0.4}
          clearcoat={1}
        />
      </Box>
    </group>
  );

  return (
    <group ref={groupRef}>
      <HandGesture />
      
      {/* Emerging figures based on scroll */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <Sphere 
          args={[0.5, 32, 32]} 
          position={[2, Math.sin(scrollProgress * Math.PI * 2) * 2, 0]}
        >
          <meshPhysicalMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.1}
            transmission={0.5}
            thickness={0.5}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <Torus 
          args={[0.6, 0.2, 16, 32]} 
          position={[1, Math.cos(scrollProgress * Math.PI * 2) * 2, -1]}
          rotation={[scrollProgress * Math.PI, 0, 0]}
        >
          <meshPhysicalMaterial
            color="#8b5cf6"
            metalness={0.8}
            roughness={0.2}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.5}>
        <Cone 
          args={[0.5, 1, 4]} 
          position={[-1, Math.sin(scrollProgress * Math.PI * 3) * 1.5, 1]}
          rotation={[0, scrollProgress * Math.PI * 2, 0]}
        >
          <meshPhysicalMaterial
            color="#06b6d4"
            metalness={0.7}
            roughness={0.3}
            clearcoat={1}
          />
        </Cone>
      </Float>

      {/* Additional geometric shapes */}
      {[...Array(5)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.3}>
          <Box 
            args={[0.3, 0.3, 0.3]} 
            position={[
              Math.cos((i / 5) * Math.PI * 2 + scrollProgress * Math.PI) * 3,
              Math.sin((i / 5) * Math.PI * 2 + scrollProgress * Math.PI) * 3,
              Math.sin((i / 5) * Math.PI + scrollProgress * Math.PI) * 2
            ]}
            rotation={[scrollProgress * Math.PI, scrollProgress * Math.PI, 0]}
          >
            <meshStandardMaterial
              color={i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#10b981" : "#3b82f6"}
              metalness={0.8}
              roughness={0.2}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
}
