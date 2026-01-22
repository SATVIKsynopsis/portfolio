"use client";

import { useEffect, useState } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TextScramble({ text, className = "", speed = 50 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let frame = 0;
    const maxFrames = text.length * 3;
    
    const animate = () => {
      let newText = "";
      
      for (let i = 0; i < text.length; i++) {
        if (frame > i * 3) {
          newText += text[i];
        } else {
          newText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      setDisplayText(newText);
      frame++;
      
      if (frame <= maxFrames) {
        setTimeout(animate, speed);
      } else {
        setDisplayText(text);
      }
    };
    
    animate();
  }, [text, speed]);

  return <span className={className}>{displayText}</span>;
}
