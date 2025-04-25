"use client"
import { ArrowRight, ArrowUpLeft } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import Link from "next/link"



gsap.registerPlugin(ScrollTrigger);

export default function Description() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    useGSAP(() => {})
    return (
        <section className="w-screen h-full min-h-screen mx-auto overflow-hidden">
            <div className="screen-max-width">
                {/* Main heading */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 w-full border-red-700">
                    <div className='hidden md:block md:col-span-1 lg:col-span-2'>
                    <ArrowRight />
                    </div>

                    <div className="w-full grid grid-cols-1 place-content-end mb-32 col-span-full md:col-span-1 lg:col-span-4">
                        <h2 className="text-6xl md:text-7xl font-bold leading-tight tracking-tighter max-w-5xl text-balance">
                            Defining how brands move, scale, and express
                            themselves across modern media
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-28 max-w-7xl mx-auto">
                            {/* Left column - Label */}
                            <div className="md:col-span-3">
                                <p className="text-lg">(Approach)</p>
                            </div>

                            {/* Right column - Text content */}
                            <div className="md:col-span-8 space-y-8">
                                <h3 className="text-xl font-medium">
                                    Motion is the new frontier of branding and
                                    communication.
                                </h3>

                                <p className="text-gray-600">
                                    The media landscape has evolved, brands are
                                    called to scale beyond static and adapt to
                                    the world of motion. With countless digital
                                    touchpoints and an increasingly saturated
                                    market, they seek consistency across
                                    platforms while striving to uniquely stand
                                    out.
                                </p>

                                <p className="text-gray-600">
                                    We partner with in-house brand teams to
                                    define dynamic motion identities, systems,
                                    and guidelines that enable differentiation
                                    and consistency across digital culture.
                                </p>

                                <p className="text-gray-600">
                                    As a boutique studio, we seamlessly
                                    integrate as an extension of these
                                    teams—gaining a deep understanding of each
                                    brand's essence and goals.
                                </p>
                                <Link
                            href="/about"
                            className="text-lg border-b border-black w-fit pb-1">
                            See how we transform brands
                        </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


// const split = new SplitType(CharacterData, { types: 'words,chars' });


//     // Create SplitType instances
//     const splitSubtitle = new SplitType(subtitleRef.current!, { types: 'words,chars' });
//     const splitParagraphs = paragraphRefs.current.map(
//       ref => ref ? new SplitType(ref, { types: 'words,chars' }) : null
//     );

//     // Animation timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//       }
//     });

//     // Animate main heading
//     tl.fromTo(
//       splitHeading.chars,
//       {
//         opacity: 0,
//         y: 50,
//         rotateX: -90
//       },
//       {
//         opacity: 1,
//         y: 0,
//         rotateX: 0,
//         duration: 0.8,
//         stagger: 0.02,
//         ease: 'back.out(1.7)'
//       }
//     )
//     // Animate subtitle
//     .fromTo(
//       splitSubtitle.chars,
//       {
//         opacity: 0,
//         y: 30
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.01,
//         ease: 'power2.out'
//       },
//       '-=0.4'
//     )
//     // Animate paragraphs
//     .fromTo(
//       splitParagraphs.flatMap(split => split ? split.words : []),
//       {
//         opacity: 0,
//         y: 30,
//         rotateX: 20
//       },
//       {
//         opacity: 1,
//         y: 0,
//         rotateX: 0,
//         duration: 0.7,
//         stagger: 0.02,
//         ease: 'power2.out'
//       },
//       '-=0.3'
//     );

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach(t => t.kill());
//       splitHeading.revert();
//       splitSubtitle.revert();
//       splitParagraphs.forEach(split => split?.revert());
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full min-h-screen bg-white text-black px-12 py-24 overflow-hidden"
//     >
//       {/* Main heading */}
//       <div className="mb-32">
//         <h2
//           ref={headingRef}
//           className="text-6xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto text-center"
//         >
//           Defining how brands move, scale, and express themselves across modern media
//         </h2>
//       </div>
//       {/* Content grid */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
//         {/* Left column - Label */}
//         <div className="md:col-span-3">
//           <p className="text-lg">(Approach)</p>
//         </div>
//         {/* Right column - Text content */}
//         <div className="md:col-span-8 space-y-8">
//           <h3
//             ref={subtitleRef}
//             className="text-xl font-medium"
//           >
//             Motion is the new frontier of branding and communication.
//           </h3>
//           <p
//             ref={el => paragraphRefs.current[0] = el}
//             className="text-gray-600"
//           >
//             The media landscape has evolved, brands are called to scale beyond static and adapt to the world of motion.
//             With countless digital touchpoints and an increasingly saturated market, they seek consistency across
//             platforms while striving to uniquely stand out.
//           </p>
//           <p
//             ref={el => paragraphRefs.current[1] = el}
//             className="text-gray-600"
//           >
//             We partner with in-house brand teams to define dynamic motion identities, systems, and guidelines that
//             enable differentiation and consistency across digital culture.
//           </p>
//           <p
//             ref={el => paragraphRefs.current[2] = el}
//             className="text-gray-600"
//           >
//             As a boutique studio, we seamlessly integrate as an extension of these teams—gaining a deep understanding of
//             each brand's essence and goals.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

