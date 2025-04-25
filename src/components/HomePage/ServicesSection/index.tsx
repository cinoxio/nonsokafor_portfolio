'use client';

import Lenis from 'lenis';
import { useScroll } from 'motion/react';
import { useEffect, useRef } from 'react';
import Card from './Card';
import { projects } from './data';

export default function Index() {
  const container = useRef<HTMLDivElement| null>(null)
    const textSpansRef = useRef<(HTMLSpanElement | null)[]>([]);

    const texts = "HOW I CAN HELP YOU /";

  // Keep the scroll tracking for potential future use, but we won't use it for scaling
  useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <section
            ref={container}
            className="relative w-screen h-full m-auto min-h-screen bg-white dark:bg-[#121212] dark:shadow-card"
        >
            <div className="screen-max-width h-full mb-[200px] pb-20">
                <h2 className="heading-primary capitalize text-[8vw] font-bold"  data-speed="0.5">
                     {
                    texts.split(" ").map((text, index)=> {
                        return(
                        <span
                            ref={el => { textSpansRef.current[index] = el; }}
                            key={index}
                            className="inline-block capitalize mr-3"
                        >
                            {text}
                        </span>
                    )})}
                </h2>

                <div className='grid grid-cols-[80px_1fr] md:grid-cols-[600px_1fr] lg:grid-cols-[600px_1fr] items-center gap-4 md:gap-0 mt-8'>
                    <span className='md:opacity-0 md:block hidden'>@</span>

               <div className="flex flex-col md:flex-row w-full items-start gap-5 md:gap-12 py-20" data-speed="0.8">
                <p className="section-title-subtext">(Services)</p>
                <div className="w-1/2 text-xl text-zinc-400 leading-relaxed">
                    <p className="paragraph-standard text-text-secondary">
                        Frustrated with websites that don&apos;t reflect your
                        brand or drive growth? I craft premium web experiences
                        that captivate and help you focus on growing your
                        business.
                    </p>
                </div>
                </div>

            </div>
              <div className="space-y-6 w-full"  data-speed="1.5">
                 {projects.map((project, i) => {
                     // No more scaling calculations needed
                     return <Card key={`p_${i}`} i={i} {...project} />
                    })}
               </div>
             </div>

        </section>
    );
}
