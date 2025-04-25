'use client';

import type React from 'react';

import { projects } from '@/config/resume';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './project-card';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Improved Sticky component with better scroll handling
function Sticky({
    children,
    wrapperClass,
    className = '',
    start = 0,
    end = 0,
    target,
    id = 'sticky',
    enabled = true,
    pinType = 'fixed',
}: {
    children: React.ReactNode;
    wrapperClass?: string;
    className?: string;
    start?: number | string;
    end?: number | string;
    target?: string;
    id?: string;
    enabled?: boolean;
    pinType?: string;
}) {
    const pinSpacer = useRef<HTMLDivElement | null>(null);
    const trigger = useRef<HTMLDivElement | null>(null);
    const targetRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!enabled || !pinSpacer.current || !trigger.current) return;

        // Clear any previous properties
        gsap.set(trigger.current, { clearProps: 'all' });

        // Get the target element for end calculation
        if (target) {
            targetRef.current = document.querySelector(target);
        } else {
            targetRef.current =
                pinSpacer.current?.parentElement || document.body;
        }

        const timeline = gsap.timeline({
            scrollTrigger: {
                id,
                enabled,
                pinType,
                pinSpacing: false,
                pinSpacer: pinSpacer.current,
                trigger: trigger.current,
                scrub: true,
                pin: true,
                start: `top top+=${
                    typeof start === 'number'
                        ? start
                        : Number.parseFloat(start as string)
                }px`,
                end: () => {
                    if (!targetRef.current || !trigger.current)
                        return `+=${window.innerHeight}`;

                    const targetRefRect =
                        targetRef.current.getBoundingClientRect();
                    const triggerRect = trigger.current.getBoundingClientRect();
                    return `+=${
                        targetRefRect.bottom -
                        triggerRect.bottom +
                        (typeof end === 'number'
                            ? end
                            : Number.parseFloat(end as string))
                    }`;
                },
                invalidateOnRefresh: true,
                markers: false, // Set to true for debugging
            },
        });

        return () => {
            timeline.kill();
            ScrollTrigger.getById(id)?.kill();
        };
    }, [enabled, id, pinType, start, end, target]);

    return (
        <div ref={pinSpacer} className={wrapperClass}>
            <div ref={trigger} className={className}>
                {children}
            </div>
        </div>
    );
}

export default function SelectedWorks() {


    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            className="min-h-screen w-full overflow-hidden"
            ref={containerRef}
        >
            <div className="screen-max-width mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="flex gap-3 self-stretch mb-12 text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter uppercase leading-tight text-stone-300">
                    <span className="text-2xl md:text-4xl self-start mt-2">
                        Selected Works/
                    </span>
                </h2>
                <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="flex items-start md:col-span-2 lg:col-span-2">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 mr-4 mt-1">
                            <path
                                fill="currentColor"
                                d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"
                            />
                        </svg>
                    </div>
                    <div className="flex gap-6 col-span-5 md:col-span-3 lg:col-span-3">
                        <h2 className="text-sm font-regular tracking-tight leading-8 uppercase text-stone-500">
                            (Projects)
                        </h2>
                        <p className="text-gray-400 max-w-[400px] text-2xl">
                            Featured projects that have been meticulously
                            crafted with passion to drive results and impact.
                        </p>
                    </div>
                </div>
                <div className="sm:order-2 md:gap-8 lg:gap-32 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 md:mt-12 relative">
                    {/* Second column with scrolling cards */}
                    <div
                        className="order-2 md:order-1 grid grid-cols-2 gap-6 projects-grid"
                        id="container"
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>

                    {/* First column with sticky content */}
                    <div className="order-1 md:order-2 w-full relative">
                        <Sticky
                            wrapperClass="h-full top-0 sticky right-0 will-change-[sticky] overflow-hidden transition-all duration-300 ease-out w-full"
                            className=" rounded-lg flex flex-col top-0 sticky right-0 will-change-[sticky] overflow-hidden transition-all duration-300 ease-out w-full"
                            enabled={true}
                            target="#container"
                            id="sticky-content"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <h1 className="text-7xl font-light">
                                    Featured
                                    <br />
                                    Projects
                                </h1>
                                <span className="text-5xl font-light">5</span>
                            </div>
                            <div className="hidden md:inline-flex justify-between items-center mt-8 border border-zinc-800 px-6 py-4">
                                <Link
                                    href="/projects"
                                    className="text-lg hover:text-zinc-300"
                                >
                                    View All
                                </Link>
                                <span className="text-lg">
                                    {projects.length}
                                </span>
                            </div>
                        </Sticky>
                    </div>
                </div>
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
        </section>
    );
}
