"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPinDemo() {
    return (
        <div className="flex flex-row"> 
        <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                title="Quiztie- Adaptable quizzing platform"
                href="quiztie.netlify.app"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        Quiztie
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              A customizable quizzing platform.
            </span>
                    </div>
                   <div className="relative w-full h-64 rounded-xl overflow-hidden">
  <Image
    src="/quiz.png"
    alt="Premium Experience - Test yourself with our intelligent quiz"
    fill
    className="object-cover"
    priority
  />
</div>
                   
                </div>
            </PinContainer>
        </div>

         <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                title="Vendor Sahayak"
                href="https://vendorsahayak.netlify.app"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                       Vendor Sahayak
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              A vendor and supplier connector
            </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
            </PinContainer>
        </div>

        </div>
    );
}
