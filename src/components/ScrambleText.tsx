"use client"
// components/TextScramble.jsx
import { useEffect, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
}

export default function TextScramble({ text, className }: TextScrambleProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const originalText = text;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval: number | undefined;
    let iteration = 0;

    clearInterval(interval);

    interval = window.setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          if (letter === ' ') return ' ';
          if (letter === '\n') return '\n';

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1/3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <div ref={elementRef} className={className}>{text}</div>;
}
