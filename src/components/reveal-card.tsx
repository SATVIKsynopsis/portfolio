"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You scrolled so far. Here's a gift for you. Just Hover on this card."
        revealText="You’ve arrived at my story so far — continue through the navbar to discover more and check out my projects."
      >
        <TextRevealCardTitle>
          {/* You can add a title here if needed */}
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          {/* You can add a description here if needed */}
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}