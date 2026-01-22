"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";
import ScrollReactiveFigure from "./ScrollReactiveFigure";

interface InteractiveScene3DProps {
  scrollProgress: number;
  className?: string;
}

export default function InteractiveScene3D({ scrollProgress, className }: InteractiveScene3DProps) {
  return (
    <div className={className}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[10, 5, 5]} intensity={0.5} color="#ec4899" />
        
        <Suspense fallback={null}>
          <ScrollReactiveFigure scrollProgress={scrollProgress} />
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
