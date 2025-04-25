'use client';

import { usePathname } from '@/i18n/navigation';
import { useLoadingStore } from '@/lib/store';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Preloader() {
    const { isLoading, setLoading, isFirstLoad, setFirstLoad } =
        useLoadingStore();
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const words = [
        'Hello',
        'Bonjour',
        'Ciao',
        'Olà',
        'やあ',
        'Hallå',
        'Guten tag',
        'Hallo',
    ];

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const containerRef = useRef(null);
    const textRef = useRef(null);
    const svgRef = useRef(null);
    const pathRef = useRef<SVGPathElement | null>(null);

    // Check if we should show the preloader
    const shouldShowPreloader =
        isLoading && (isFirstLoad || dimension.width > 0);

    // Set dimensions and handle first load
    useEffect(() => {
        // Set dimensions
        setDimension({ width: window.innerWidth, height: window.innerHeight });

        // If this is the first load of the site, show preloader
        if (isFirstLoad) {
            setLoading(true);
            // Mark that we've done the first load
            setFirstLoad(false);
        }
    }, [isFirstLoad, setFirstLoad, setLoading]);

    // Handle route changes
    useEffect(() => {
        // When route changes, trigger preloader
        setLoading(true);
    }, [pathname, searchParams, setLoading]);

    // Handle word cycling
    useEffect(() => {
        if (index === words.length - 1) return;

        const timeout = setTimeout(
            () => {
                setIndex(index + 1);
            },
            index === 0 ? 1000 : 150
        );

        return () => clearTimeout(timeout);
    }, [index]);

    useGSAP(() => {
        if (dimension.width === 0 || !isLoading || !pathRef.current) return;

        const tl = gsap.timeline({
            onComplete: () => setLoading(false),
        });





//   const start = `M0 ${dimension.height / 2}S175 ${dimension.height / 4} 500 ${dimension.height / 4}s500 ${dimension.height / 4} 500 ${dimension.height / 2}V0H0Z`;
//   const end = `M0,${dimension.height}S175,${dimension.height - 10},500,${dimension.height - 10}s500,5,500,5V0H0Z`;





        const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
            dimension.height
        } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
            dimension.height
        } L0 0`;
        const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
            dimension.height
        } Q${dimension.width / 2} ${dimension.height} 0 ${
            dimension.height
        } L0 0`;
        // Add all animations to the same timeline
        tl.fromTo(
            textRef.current,
            { opacity: 0 },
            { opacity: 0.75, duration: 1 }
        )
            .to(pathRef.current, {
                attr: {
                    d: initialPath,
                },
                duration: 1,
                ease: 'power2.inOut',
            }) // Start at same time as text fade
            .to(
                pathRef.current,
                {
                    attr: {
                        d: targetPath,
                    },
                    duration: 0.7,
                    top: '-100vh',
                    ease: 'power4.inOut',
                },
                '-=0.5'
            ) // Start 0.6 seconds after the previous animation
            .to(
                containerRef.current,
                {
                    top: '-100vh',
                    duration: 0.8,
                    ease: 'power3.inOut',
                },
                '<'
            ); // Start at the same time as the path animation
    }, [dimension, isLoading, setLoading]);

    // If not loading or no dimensions yet, don't render the preloader
    if (!shouldShowPreloader) return null;

    return (
        <div
            ref={containerRef}
            className="fixed top-0 w-screen h-screen flex items-center justify-center z-50 bg-[#0a0a0a] bgl-[#141516]"
        >
            {dimension.width > 0 && (
                <>
                    <p
                        ref={textRef}
                        className="flex items-center text-white text-4xl absolute z-10"
                    >
                        <span className="block w-2.5 h-2.5 bg-white rounded-full mr-2.5"></span>
                        {words[index]}
                    </p>
                    <svg
                        ref={svgRef}
                        className="absolute top-0 w-full h-[calc(100%+300px)]"
                    >
                        <path ref={pathRef} fill="#0a0a0a"></path>
                    </svg>
                </>
            )}
        </div>
    );
}
