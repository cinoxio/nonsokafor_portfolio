'use client';

import { createContext, useContext, useEffect, useRef } from 'react';
import Card from './Card';
import { projects } from './data';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScroll } from 'motion/react';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function ServSection() {
    const container = useRef<HTMLElement>(null)
    interface Smoother {
        effects: (selectors: string, options: object) => void;
        scrollTo: (
            target: HTMLElement | null,
            smooth: boolean,
            position: string
        ) => void;
    }

    const SmootherContext = createContext<Smoother | null>(null);

    const smoother = useContext(SmootherContext);
    const serviceCardRef = useRef<HTMLDivElement>(null);
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

    // useGSAP(() => {
    //     ScrollTrigger.create({
    //         trigger: serviceCardRef.current,
    //         pin: true,
    //         start: 'top 15%',
    //         end: 'bottom bottom',
    //         markers: true,
    //     });
    // }, []);

    useEffect(() => {
        if (smoother) {
            smoother.effects('[data-speed], [data-lag]', {});
        }
    }, [smoother]);

    return (
        <section ref={container} className="w-screen min-h-screen h-full space-y-40 mb-30 mx-auto overflow-hidden relative">
            <div id="smooth-content">
                {/* <div
                    className="box box-a flex items-center justify-center size-[500px] bg-blue-500"
                    data-speed="0.5"
                >
                    A
                </div> */}
                <div
                    className="box box-b flex items-center justify-center size-[500px] bg-red-500"
                    data-speed="0.8"
                >
                    B
                </div>
                <div
                    className="space-y-6 w-full"
                    data-speed="1.5"
                    ref={serviceCardRef}
                >
                    {projects.map((project, i) => {
                        return <Card key={`p_${i}`} i={i} {...project} />;
                    })}
                </div>
            </div>
        </section>
    );
}
