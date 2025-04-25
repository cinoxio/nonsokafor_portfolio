'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import RoundedButton1 from '@/common/ChechButton';
import { Circle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BigTextName } from './BigTextName';
import { HeroHeader } from './HeroHeader';

export default function HeroSection() {
    const container = useRef<HTMLElement>(null)

    useGSAP(() => {
        const tl= gsap.timeline()

        tl.to( [container.current, ".line p", '.site-info h2 .line-wrapper span', '.line span'],
                {
                    y: 0,
                    duration: 3,
                    ease: 'power3.inOut',
                    stagger: 0.1,
                    delay: 1.25,
                }
            )

            .to('.cover-img', {
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                duration: 2,
                ease: 'hop',
                delay: -4.75,
            });
    })

    return (
        <section
           data-testid="homeHeroSection"
            ref={container}
            className="w-screen h-dvh relative mx-auto mb-45 overflow-hidden"
        >
            <div className="screen-max-width h-full mx-auto relative mt-10 mb-60">
                <div className="relative flex flex-col h-50">
                  <HeroHeader/>
                    <div className="absolute bottom-0 right-0 flex flex-col justify-end">
                        <div className="mt-4 text-sm">
                            <p className="font-bold">
                                Creative, Frontend Developer
                            </p>
                            <p>(Since — 2024)</p>
                        </div>
                    </div>

                </div>

                {/* <h1 className='text-[10.4vw] whitespace-nowrap font-bold leading-tight tracking-tighter text-balance'>CHINONSO OKAFOR</h1> */}
                {/* Media cards inside the "O" */}
                <div
                    data-scroll
                    data-scroll-speed={0.1}
                    className="absolute top-[35%] left-[20%] text-2xl font-light"
                >
                    <svg
                        className="scale-200 mb-[100px]"
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="dark:fill-black fill-white"
                            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                        />
                    </svg>
                    {/* <p className="m-0 mb-2.5">Freelance</p>
                    <p className="m-0 mb-2.5">Designer & Developer</p> */}
                     <div className="flex flex-col m-0">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
                            Crafting Digital{' '}
                            <span className="font-playfair italic font-normal">
                                Designs
                            </span>{' '}
                            that Elevate Saas And AI Innovators.
                        </h2>
                        {/* <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Crafting Digital <span className={`${playfair.variable} font-playfair italic font-normal`}>Designs</span>{" "}
              that
              <br />
              Elevate SaaS & AI Innovators
            </h2> */}
                        <Link
                            href="#"
                            className="text-lg border-b border-black w-fit pb-1"
                        >
                            See how we transform brands
                        </Link>
                    </div>
                </div>

                <div className="text-lg absolute bottom-20 right-14">
                    (Scroll)
                </div>
            </div>
        </section>
    );
}

// <section
//         className="content grid grid-rows-[100vh_1fr_auto] grid-cols-[100%] w-screen h-[calc(var(--imgRatio)*100vw)] px-8 relative"
//         style={{ "--imgRatio": "1344 / 896" } as React.CSSProperties}
//       >
//         <div
//           className="canvas-wrap absolute top-0 left-0 h-full w-full bg-center bg-cover opacity-0"
//           style={{ backgroundImage: "url('/images/1.jpg')" }}
//         ></div>
//         <div className="content__inner relative justify-self-end self-end pb-8">
//           <h2 className="relative text-[10vw] font-normal text-right m-0 leading-[0.8]">
//             <span>D</span>
//             <span className="text-[10.5vw] font-['lores-9-plus-wide',sans-serif]">A</span>
//             <span>A</span>
//             <span className="text-[10.5vw] font-['lores-9-plus-wide',sans-serif]">K</span>
//             <span>O</span>
//             <br />
//             <span>N</span>
//             <span className="text-[10.5vw] font-['lores-9-plus-wide',sans-serif]">i</span>
//             <span>x</span>
//             <span className="text-[10.5vw] font-['lores-9-plus-wide',sans-serif]">i</span>
//             <span>e</span>
//           </h2>
//           <p className="relative mt-4 text-right max-w-[400px] ml-auto">
//             Introducing the ethereal masterpiece, an epitome of sartorial splendor and avant-garde elegance. Behold, the
//             breathtaking embodiment of haute couture opulence that transcends time and space.
//           </p>
//         </div>
//       </section>

// export default function HeroSection() {

//     const [loaded,setIsLoaded] = useState(true)

//   // Refs for elements we'll animate
//   const bookCallBtnRef = useRef(null)
//   const menuBtnRef = useRef(null)
//   const menuOverlayRef = useRef(null)
//   const menuNavRef = useRef(null)
//   const menuItemsRef = useRef([])
//   const heroTextSmallRef = useRef(null)
//   const heroTextRef = useRef(null)
//   const heroCTARef = useRef(null)
//   const footerRef = useRef(null)

//   // Timeline refs
//   const loadTl = useRef<gsap.core.Timeline | null>(null)

//   // Initialize load animation timeline
//   useGSAP(() => {
//       // Create the main loading timeline
//       const loadTl = gsap.timeline({
//        paused: true,
//        onComplete: () => setIsLoaded(true),
//      })

//     // Add animations to the timeline
//     loadTl.current
//       .from(
//         heroTextSmallRef.current,
//         {
//           opacity: 0,
//           y: 20,
//           duration: 0.8,
//           ease: "power3.out",
//         },
//         0.2,
//       )
//       .from(
//         heroTextRef.current,
//         {
//           opacity: 0,
//           y: 30,
//           duration: 0.8,
//           ease: "power3.out",
//         },
//         0.3,
//       )
//       .from(
//         heroCTARef.current,
//         {
//           opacity: 0,
//           y: 30,
//           duration: 0.8,
//           ease: "power3.out",
//         },
//         0.4,
//       )
//       .from(
//         bookCallBtnRef.current,
//         {
//           opacity: 0,
//           y: -10,
//           duration: 0.5,
//           ease: "power2.out",
//         },
//         0.5,
//       )
//       .from(
//         menuBtnRef.current,
//         {
//           opacity: 0,
//           scale: 0.9,
//           duration: 0.5,
//           ease: "back.out",
//         },
//         0.6,
//       )
//       .from(
//         footerRef.current,
//         {
//           opacity: 0,
//           y: 20,
//           duration: 0.8,
//           ease: "power3.out",
//         },
//         0.6,
//       )

//     }, [loaded])
//     return (

//         <section className="relative min-h-screen flex flex-col">
//           {/* Hero Section */}
//           <div className="flex flex-col items-center justify-center grow text-center px-6 pt-24 pb-32">
//             <p ref={heroTextSmallRef} className="text-neutral-400 mb-8 text-base md:text-lg">
//               (Need an unfair advantage?)
//             </p>

//             <h1 ref={heroTextRef} className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 leading-tight">
//               LET'S MAKE
//               <br />
//               IT HAPPEN
//             </h1>

//             <div ref={heroCTARef}>
//               <a
//                 href="/contact"
//                 className="bg-neutral-800 hover:bg-neutral-700 transition-colors px-8 py-4 rounded-full inline-flex items-center gap-2"
//               >
//                 BOOK A CALL <span className="text-lg">↗</span>
//               </a>
//             </div>
//           </div>

//           {/* Footer */}
//           <div ref={footerRef} className="w-full px-6 py-6 flex justify-between items-center border-t border-neutral-800">
//             <div className="flex items-center gap-4">
//               <div className="bg-transparent border border-neutral-700 p-2 rounded-full w-12 h-12 flex items-center justify-center">
//                 <div className="w-6 h-6 relative">
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-400 to-neutral-600"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="text-sm text-neutral-400">Working Globally</div>
//                 <div className="text-sm text-neutral-400">Available Apr '25</div>
//               </div>
//             </div>

//             <div className="text-right">
//               <div className="text-sm text-neutral-400">FOR FURTHER INQUIRIES</div>
//               <a href="mailto:hello@byhuy.com" className="text-sm hover:text-gray-300 transition-colors">
//                 hello@byhuy.com
//               </a>
//             </div>
//           </div>
//         </section>

//     )
//   }
