"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere, Box } from "@react-three/drei";
import * as THREE from "three";

interface AdvancedHandProps {
  scrollProgress: number;
}

export default function AdvancedHand({ scrollProgress }: AdvancedHandProps) {
  const handGroupRef = useRef<THREE.Group>(null);
  const fingersRef = useRef<THREE.Group[]>([]);

  // Calculate hand animation based on scroll
  const handAnimation = useMemo(() => {
    const phase = scrollProgress * Math.PI * 4;
    return {
      rotation: scrollProgress * Math.PI * 2,
      spread: Math.sin(phase) * 0.5,
      wave: Math.cos(phase) * 0.3,
      position: {
        x: Math.sin(scrollProgress * Math.PI * 2) * 3,
        y: Math.cos(scrollProgress * Math.PI * 2) * 2,
        z: Math.sin(scrollProgress * Math.PI * 3) * 1,
      }
    };
  }, [scrollProgress]);

  useFrame(({ clock }) => {
    if (handGroupRef.current) {
      handGroupRef.current.rotation.y = handAnimation.rotation;
      handGroupRef.current.position.set(
        handAnimation.position.x,
        handAnimation.position.y,
        handAnimation.position.z
      );
    }

    // Animate individual fingers
    fingersRef.current.forEach((finger, i) => {
      if (finger) {
        finger.rotation.z = Math.sin(clock.getElapsedTime() * 2 + i * 0.5) * 0.2 + handAnimation.spread;
      }
    });
  });

  return (
    <group ref={handGroupRef}>
      {/* Palm */}
      <RoundedBox args={[1.2, 1.5, 0.4]} radius={0.1} smoothness={4} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#fbbf24"
          metalness={0.4}
          roughness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.2}
        />
      </RoundedBox>

      {/* Fingers */}
      {[0, 1, 2, 3].map((i) => (
        <group
          key={i}
          ref={(el) => {
            if (el) fingersRef.current[i] = el;
          }}
          position={[-0.4 + i * 0.3, 0.75, 0]}
        >
          {/* Finger segments */}
          {[0, 1, 2].map((segment) => (
            <RoundedBox
              key={segment}
              args={[0.2, 0.4, 0.3]}
              radius={0.05}
              smoothness={4}
              position={[0, segment * 0.35, 0]}
            >
              <meshPhysicalMaterial
                color="#fcd34d"
                metalness={0.3}
                roughness={0.4}
                clearcoat={1}
              />
            </RoundedBox>
          ))}
        </group>
      ))}

      {/* Thumb */}
      <group
        ref={(el) => {
          if (el) fingersRef.current[4] = el;
        }}
        position={[0.7, 0, 0.1]}
        rotation={[0, 0, -0.5]}
      >
        {[0, 1].map((segment) => (
          <RoundedBox
            key={segment}
            args={[0.25, 0.4, 0.3]}
            radius={0.05}
            smoothness={4}
            position={[0, segment * 0.35, 0]}
          >
            <meshPhysicalMaterial
              color="#fcd34d"
              metalness={0.3}
              roughness={0.4}
              clearcoat={1}
            />
          </RoundedBox>
        ))}
      </group>

      {/* Particle trail following hand movement */}
      {[...Array(10)].map((_, i) => (
        <Float key={i} speed={2 + i * 0.2} rotationIntensity={0.5}>
          <Sphere
            args={[0.1, 16, 16]}
            position={[
              handAnimation.position.x - i * 0.3,
              handAnimation.position.y - i * 0.2,
              handAnimation.position.z - i * 0.1,
            ]}
          >
            <meshStandardMaterial
              color={`hsl(${(scrollProgress * 360 + i * 30) % 360}, 80%, 60%)`}
              emissive={`hsl(${(scrollProgress * 360 + i * 30) % 360}, 80%, 50%)`}
              emissiveIntensity={0.5}
              transparent
              opacity={1 - i * 0.1}
            />
          </Sphere>
        </Float>
      ))}

      {/* Energy rings around hand */}
      {[...Array(3)].map((_, i) => (
        <mesh
          key={i}
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, scrollProgress * Math.PI * 2 + i * (Math.PI / 3)]}
        >
          <torusGeometry args={[1.5 + i * 0.5, 0.05, 16, 32]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6 - i * 0.2}
          />
        </mesh>
      ))}

      {/* Floating objects appearing from hand */}
      {scrollProgress > 0.2 && (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <Box
            args={[0.5, 0.5, 0.5]}
            position={[2, 1, 0]}
            rotation={[scrollProgress * Math.PI, scrollProgress * Math.PI, 0]}
          >
            <meshPhysicalMaterial
              color="#ec4899"
              metalness={0.9}
              roughness={0.1}
              transmission={0.5}
              thickness={0.5}
            />
          </Box>
        </Float>
      )}

      {scrollProgress > 0.4 && (
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.7}>
          <Sphere args={[0.4, 32, 32]} position={[-2, 1.5, 0.5]}>
            <meshPhysicalMaterial
              color="#06b6d4"
              metalness={0.8}
              roughness={0.2}
              emissive="#06b6d4"
              emissiveIntensity={0.3}
            />
          </Sphere>
        </Float>
      )}

      {scrollProgress > 0.6 && (
        <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.9}>
          <mesh
            position={[0, 2, -1]}
            rotation={[0, scrollProgress * Math.PI * 2, 0]}
          >
            <octahedronGeometry args={[0.5, 0]} />
            <meshPhysicalMaterial
              color="#10b981"
              metalness={0.9}
              roughness={0.1}
              clearcoat={1}
            />
          </mesh>
        </Float>
      )}
    </group>
  );
}
