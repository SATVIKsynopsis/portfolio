"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";
import AdvancedHand from "./AdvancedHand";
import ParallaxObjects from "./ParallaxObjects";

interface AdvancedScene3DProps {
  scrollProgress: number;
  className?: string;
}

export default function AdvancedScene3D({ scrollProgress, className }: AdvancedScene3DProps) {
  return (
    <div className={className}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        
        {/* Dynamic lighting based on scroll */}
        <ambientLight intensity={0.3 + scrollProgress * 0.3} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1 + scrollProgress} 
          color={`hsl(${scrollProgress * 360}, 70%, 50%)`}
        />
        <pointLight 
          position={[-10, -10, -10]} 
          intensity={0.5} 
          color="#8b5cf6" 
        />
        <pointLight 
          position={[10, 5, 5]} 
          intensity={0.5} 
          color={`hsl(${(scrollProgress * 360 + 180) % 360}, 70%, 50%)`}
        />
        
        <Suspense fallback={null}>
          <AdvancedHand scrollProgress={scrollProgress} />
          <ParallaxObjects scrollProgress={scrollProgress} />
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={scrollProgress > 0.5}
          autoRotateSpeed={scrollProgress * 2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
