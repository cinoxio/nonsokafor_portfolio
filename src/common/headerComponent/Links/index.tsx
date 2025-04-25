'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import type React from 'react';
import { useGSAP } from '@gsap/react';

// import Link from 'next/link';
// import { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import type { SectionName } from '@/types';

// type LinksProps = {
//     data: SectionName;
//     isActive: boolean;
//     setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
// };

// export default function Links({
//     data,
//     isActive,
//     setSelectedIndicator,
// }: LinksProps) {
//     const { title, href, index } = data;
//     const linkRef = useRef(null);
//     const indicatorRef = useRef(null);

//     // Initial slide animation for each link
//     useEffect(() => {
//         const linkElement = linkRef.current;

//         // Set initial position
//         gsap.set(linkElement, { x: 80 });

//         // Animate in with delay based on index
//         gsap.to(linkElement, {
//             x: 0,
//             duration: 0.8,
//             ease: 'power3.inOut',
//             delay: 0.05 * index,
//         });

//         // Cleanup function
//         return () => {
//             gsap.to(linkElement, {
//                 x: 80,
//                 duration: 0.8,
//                 ease: 'power3.inOut',
//                 delay: 0.05 * index,
//             });
//         };
//     }, [index]);

//     // Animation for the indicator dot
//     useEffect(() => {
//         const indicatorElement = indicatorRef.current;
//         const ctx = gsap.context(() => {});
//         if (isActive) {
//             gsap.to(indicatorElement, {
//                 scale: 1,
//                 duration: 0.3,
//             });
//         } else {
//             gsap.to(indicatorElement, {
//                 scale: 0,
//                 duration: 0.4,
//             });
//         }

//         // Clean up animations when component unmounts
//         return () => ctx.revert();
//     }, [isActive]);

//     return (
//         <ul className="leading-20">
//             <li
//                 ref={linkRef}
//                 className="relative flex items-center "
//                 onMouseEnter={() => {
//                     setSelectedIndicator(href);
//                 }}
//             >
//                 <div
//                     ref={indicatorRef}
//                     className="size-5 dark:bg-white rounded-full absolute left-[-30px] transform transition scale-0 will-change-[scale]"
//                     style={{ transform: 'scale(0)' }}
//                 />
//                 <Link href={href} className="relative inline-block gap-0">
//                     {title}
//                 </Link>
//             </li>
//         </ul>
//     );
// }



interface LinkProps {
  data: {
    title: string
    href: string
    index: number
  }
  isActive: boolean
  setSelectedIndicator: (href: string) => void
}

export default function Links({ data, isActive, setSelectedIndicator }: LinkProps) {
  const { title, href, index } = data;
  const linkRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [activeLinks, setActiveLinks] = useState(true);

  // Handle enter/exit animations based on activeLinks state
  useGSAP(() => {
        // Set initial position
    gsap.set(linkRef, { x: 80 });

        // Animate in with delay based on index
    if (linkRef.current) {
      if (activeLinks) {
        // Enter animation (equivalent to variants.enter)
        gsap.to(linkRef.current,
          {
            x: 0,
            duration: 0.8,
            stagger: 0.7,
            scrub: true,
            delay: 0.05 * index,
            ease: "power3.inOut", // Custom ease to match [0.76, 0, 0.24, 1]
            clearProps: "x" // Clear properties after animation
          });
           gsap.to(linkRef.current,{
              duration: 0.8,
              y: 0,
              stagger: 0.7,
              delay: 0.05 * index,
              ease: "power4.inOut", // Custom ease to match [0.76, 0, 0.24, 1]
          });
      } else {
        // Exit animation (equivalent to variants.exit)
        gsap.to(linkRef.current, {
          x: 80,
          stagger: 0.075,
          duration: 0.8,
          delay: 0.05 * index,
          ease: "power3.inOut", // Custom ease to match [0.76, 0, 0.24, 1]
        });
      }
    }
  }, [activeLinks, index]);
 // Set first link (index 0) as active by default
  useEffect(() => {
    if (index === 0 && !isActive) {
      setSelectedIndicator(href);
    }
  }, []);
  // Handle indicator animation when active state changes
  useEffect(() => {
    if (indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        scale: isActive ? 1 : 0,
        duration: 0.3,
        ease: "back.out(2)"
      });
    }
  }, [isActive]);

  return (
    <div
      ref={linkRef}
      className="relative inline-flex items-center"
          onMouseEnter={() => setSelectedIndicator(href)}
    >
      <div
        ref={indicatorRef}
        className="size-3 rounded-full absolute left-[-30px] bg-green-600"
        style={{ backgroundColor: isActive ? "green" : "transparent" }}
      />
      <Link className="inline-block gap-0" href={href}>{title}</Link>
    </div>
  );
}
