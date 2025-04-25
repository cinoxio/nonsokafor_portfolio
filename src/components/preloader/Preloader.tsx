"use client"

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  // Set dimensions on mount
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Handle word cycling
  useEffect(() => {
    if (index === words.length - 1) return;

    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);

    return () => clearTimeout(timeout);
  }, [index]);

  // Handle animation setup and cleanup
  useEffect(() => {
      if (dimension.width === 0) return;

      const tl = gsap.timeline()

    // Text fade in animation
    gsap.fromTo(textRef.current,
      { opacity: 0 },
      { opacity: 0.75, duration: 1, delay: 0.2 }
    );

    // Path initial setup
    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height} L0 0`;
      if (pathRef.current) {
          tl.from(pathRef.current, {
              attr: { d: initialPath },
              duration: 1,
          })
              // Path animation
              .to(pathRef.current, {
                  attr: { d: targetPath },
                  duration: 0.7,
                  ease: "power3.inOut",
                  delay: 0.3,
              },"-0.6");
      }
         // Container slide up
      tl.to(containerRef.current, {
        top: "-100vh",
        duration: 0.8,
        ease: "power3.inOut",
        delay: 0.2
      }, "<");

  }, [dimension]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 w-screen h-screen flex items-center justify-center z-50 bg-[#141516]"
    >
      {dimension.width > 0 && (
        <>
          <p ref={textRef} className="flex items-center text-white text-4xl absolute z-10">
            <span className="block w-2.5 h-2.5 bg-white rounded-full mr-2.5"></span>
            {words[index]}
          </p>
          <svg ref={svgRef} className="absolute top-0 w-full h-[calc(100%+300px)]">
            <path ref={pathRef} fill="#141516"></path>
          </svg>
        </>
      )}
    </div>
  );
}
