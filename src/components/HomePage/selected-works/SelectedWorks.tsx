'use client';

import { getFeaturedProjects, ProjectType, projects } from '@/config/resume';
import { Link } from '@/i18n/routing';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
import { ProjectCard } from './project-card';


export interface ProjectSectionProps {
    projects: ProjectType[];
}

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SelectedWorks = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const pinRef = useRef(null);
    const lenisRef = useRef(null);

    useGSAP(
        () => {
            // Create the ScrollTrigger for pinning
            ScrollTrigger.create({
                trigger: container.current,
                start: 'top top',
                end: 'bottom bottom',
                pin: pinRef.current,
                pinSpacing: false,
                anticipatePin: 1,
                markers: false, // Set to true for debugging
            });

        },
        { scope: container }
    );

const datas = getFeaturedProjects();



    return (
        <ReactLenis options={{}} ref={lenisRef}>
            <section ref={container} className="relative w-scren h-fullmx-auto overflow-x-hidden py-12">
                <div className="screen-max-width m-auto">
               <div className="mb-16">
                  <h1 className="text-5xl md:text-7xl font-normal leading-none tracking-tight">
                    <span className="block">
                        Selected
                        </span>
                     Works
                 </h1>
               </div>
                <div className="relative grid grid-cols-1 sm:order-2 md:grid-cols-2 gap-6 md:gap-8 lg:gap-32">
                    <div className="order-2 md:order-1 grid grid-cols-2 gap-6">
                        {datas.map((data, index) => (
                            <ProjectCard key={index} {...data} />
                        ))}

                        <Link
                            href={'/projects'}
                            className="md:hidden w-full flex justify-between items-center mt-8 border border-zinc-800 px-6 py-4"
                        >
                            <span className="text-lg hover:text-zinc-300">
                                View All
                            </span>
                            <span className="text-lg">{projects.length}</span>
                        </Link>
                    </div>

                    <div ref={pinRef} className="order-1 md:order-2">
                        <div className="flex flex-col overflow-hidden">
                            <div className="flex justify-between items-start mb-12">
                                <h1 className="text-7xl font-light">
                                    Featured
                                    <br />
                                    Projects
                                </h1>
                                <span className="text-5xl font-light">{datas.length}</span>
                            </div>

                            <div className="hidden md:flex justify-between items-center mt-8 border border-zinc-800 px-6 py-4">
                                <Link
                                    href="/projects"
                                    className="text-lg hover:text-zinc-300"
                                >
                                    View All
                                </Link>
                                <span className="text-lg">{projects.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </ReactLenis>
    );
};

export default SelectedWorks;
