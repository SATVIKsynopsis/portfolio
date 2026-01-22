"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Dodecahedron, Octahedron } from "@react-three/drei";
import * as THREE from "three";

interface ParallaxObjectsProps {
  scrollProgress: number;
}

export default function ParallaxObjects({ scrollProgress }: ParallaxObjectsProps) {
  const group1Ref = useRef<THREE.Group>(null);
  const group2Ref = useRef<THREE.Group>(null);
  const group3Ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group1Ref.current) {
      group1Ref.current.position.y = scrollProgress * 10 - 5;
      group1Ref.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
    if (group2Ref.current) {
      group2Ref.current.position.y = scrollProgress * 15 - 7;
      group2Ref.current.rotation.x = clock.getElapsedTime() * 0.2;
    }
    if (group3Ref.current) {
      group3Ref.current.position.y = scrollProgress * 8 - 4;
      group3Ref.current.rotation.z = clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <>
      {/* Layer 1 - Fast moving */}
      <group ref={group1Ref} position={[3, 0, -2]}>
        <Float speed={3} rotationIntensity={0.5} floatIntensity={0.8}>
          <Dodecahedron args={[0.8, 0]}>
            <meshPhysicalMaterial
              color="#ff00ff"
              metalness={0.9}
              roughness={0.1}
              transmission={0.7}
              thickness={0.5}
              opacity={0.8}
              transparent
            />
          </Dodecahedron>
        </Float>
      </group>

      {/* Layer 2 - Medium speed */}
      <group ref={group2Ref} position={[-3, 0, -1]}>
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
          <Octahedron args={[1, 0]}>
            <meshPhysicalMaterial
              color="#00ffff"
              metalness={0.8}
              roughness={0.2}
              emissive="#00ffff"
              emissiveIntensity={0.3}
              opacity={0.7}
              transparent
            />
          </Octahedron>
        </Float>
      </group>

      {/* Layer 3 - Slow moving */}
      <group ref={group3Ref} position={[0, 0, -3]}>
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
          <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.2} smoothness={4}>
            <meshPhysicalMaterial
              color="#ffff00"
              metalness={0.7}
              roughness={0.3}
              clearcoat={1}
              clearcoatRoughness={0.1}
              opacity={0.6}
              transparent
            />
          </RoundedBox>
        </Float>
      </group>

      {/* Small floating particles that react to scroll */}
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={0.2}>
          <mesh
            position={[
              (Math.random() - 0.5) * 20,
              scrollProgress * 20 - 10 + (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={`hsl(${(i * 20 + scrollProgress * 360) % 360}, 100%, 60%)`}
              emissive={`hsl(${(i * 20 + scrollProgress * 360) % 360}, 100%, 40%)`}
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
