"use client"
// components/SlidingImages/index.jsx
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const slider1 = [
  {
    color: "#e3e5e7",
    src: "c2.jpg"
  },
  {
    color: "#d6d7dc",
    src: "decimal.jpg"
  },
  {
    color: "#e3e3e3",
    src: "funny.jpg"
  },
  {
    color: "#21242b",
    src: "google.jpg"
  }
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg"
  },
  {
    color: "#e5e0e1",
    src: "panda.jpg"
  },
  {
    color: "#d7d4cf",
    src: "powell.jpg"
  },
  {
    color: "#e1dad6",
    src: "wix.jpg"
  }
];

export default function SlidingImages() {
  const containerRef = useRef(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Create ScrollTrigger
    const ctx = gsap.context(() => {
      // Slider 1 animation - moves right
      gsap.to(slider1Ref.current, {
        x: 150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Slider 2 animation - moves left
      gsap.to(slider2Ref.current, {
        x: -150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Circle height animation
      gsap.to(circleRef.current, {
        height: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "90% top",
          scrub: true
        }
      });
    });

    return () => ctx.revert(); // Clean up animations when component unmounts
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-[3vw] relative mt-[200px] bg-white z-10">
      {/* First slider */}
      <div ref={slider1Ref} className="flex relative gap-[3vw] w-[120vw] left-[-10vw]">
        {slider1.map((project, index) => (
          <div
            key={index}
            className="w-1/4 h-[20vw] flex items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <div className="relative w-4/5 h-4/5">
              <Image
                fill
                alt="project image"
                src={`/images/${project.src}`}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Second slider */}
      <div ref={slider2Ref} className="flex relative gap-[3vw] w-[120vw] left-[-10vw]">
        {slider2.map((project, index) => (
          <div
            key={index}
            className="w-1/4 h-[20vw] flex items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <div className="relative w-4/5 h-4/5">
              <Image
                fill
                alt="project image"
                src={`/images/${project.src}`}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Circle container */}
      <div className="relative mt-[100px] bg-red-500">
        <div
          ref={circleRef}
          className="h-[1550%] w-[120%] left-[-10%] rounded-b-[50%] bg-white z-10 absolute shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"
        ></div>
      </div>
    </div>
  );
}
