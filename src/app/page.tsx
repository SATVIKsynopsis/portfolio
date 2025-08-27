"use client"


import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { IconCloudDemo } from "@/components/ui/iconcloud";
import { ArcTimelineDemo } from "@/components/ui/arctimeline";
import {AnimatedPinDemo} from "@/components/3dpin";
import ProjectNavbar from "@/components/navbar";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextRevealCardPreview } from "@/components/reveal-card";

export default function Home() {
  return (
      <>
        <ProjectNavbar />
        
        {/* Hero Section */}
        <section className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex items-center justify-center antialiased overflow-hidden">
          {/* Main wrapper with flex row */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-8 gap-12">
            {/* Left text content */}
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-6">
                Welcome to the portfolio of{' '}
                <PointerHighlight 
                  containerClassName="inline-block mt-2"
                  rectangleClassName="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600"
                >
                  <span className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                    Satvik Upadhyaya
                  </span>
                </PointerHighlight>
              </h1>
              <p className="text-neutral-400 my-6 text-lg md:text-xl max-w-2xl leading-relaxed">
                I'm a passionate software developer with a focus on building
                user-friendly applications. My goal is to create seamless digital
                experiences that delight users and drive results.
              </p>
            </div>

            <div className="flex items-center justify-center md:w-2/5">
              <IconCloudDemo />
            </div>
          </div>

          <BackgroundBeams />
        </section>

        {/* Divider with subtle effect */}
        <div className="relative  w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-60" />

        {/* Journey Section */}
{/* Journey Section */}
<section className="bg-stone-950 relative py-24">
  <div className="container mx-auto px-8 max-w-6xl">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-6">
        My Journey
      </h2>
      <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
        A timeline of my professional development and key milestones in my career
      </p>
    </div>
    
    <div className="relative overflow-hidden">
      <div className="arc-timeline-wrapper">
        <ArcTimelineDemo />
      </div>
    </div>
  </div>
  
  {/* Add more specific CSS to fix the white line */}
  <style jsx>{`
    .arc-timeline-wrapper :global(path),
    .arc-timeline-wrapper :global(line),
    .arc-timeline-wrapper :global(.timeline-path) {
      stroke: rgba(100, 100, 100, 0.3) !important;
    }
    .arc-timeline-wrapper :global(.vertical-timeline-element-content) {
      background: rgba(30, 30, 30, 0.9) !important;
      border: 1px solid rgba(100, 100, 100, 0.3) !important;
    }
  `}</style>
</section>

        {/* Skills Section */}
        <section className="bg-stone-950 relative py-24 border-t border-neutral-800">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-6">
                My Skills
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Technologies and tools I specialize in to create exceptional digital experiences
              </p>
            </div>
            
            <div className="relative">
              <TextRevealCardPreview />
            </div>
          </div>
        </section>
      </>
  );
}