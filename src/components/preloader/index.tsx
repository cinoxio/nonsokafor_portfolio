'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Index() {
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

    const containerRef = useRef(null);
    const textRef = useRef(null);
    const svgRef = useRef(null);
    const pathRef = useRef<SVGPathElement | null>(null);

    // Set dimensions on mount
    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    // Path initial setup
    const firstPath = `M0 2S${dimension.width * 0.175} 1 ${
        dimension.width / 2
    } 1s${dimension.width / 2} 1 ${dimension.width} 2V0H0Z`;
    pathRef.current?.setAttribute('d', firstPath);

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

    // Handle animation setup and cleanup
    useGSAP(() => {
        if (dimension.width === 0) return;

        // Text fade in animation
        gsap.fromTo(
            textRef.current,
            { opacity: 0 },
            { opacity: 0.75, duration: 1, delay: 0.2 }
        );

        // Exit animation with timeline

        const tl = gsap.timeline();
        const start = `M0 0 L${dimension.width} 0 L${dimension.width} ${
            dimension.height
        } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
            dimension.height
        } L0 0`;
        const end = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} L0 ${dimension.height} L0 0`;
        // Path animation

        tl.to(
            pathRef.current,
            {
                attr: { d: start },
                ease: 'power3.inOut',
            },
            '<'
        ).to(
            pathRef.current,
            {
                attr: {
                    d: end,
                },
                ease: 'power4.inOut',
            },
            '-0.5'
        );

        // Container slide up
        tl.to(containerRef.current, {
            top: '-100vh',
            duration: 0.8,
            ease: 'power3.inOut',
            delay: 0.2,
        });
    }, [dimension]);

    return (
        <div
            ref={containerRef}
            className="fixed top-0 w-screen inset-0 h-screen flex items-center justify-center z-50 bg-[#141516]"
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
                        viewBox="0 0 1000 1000"
                        ref={svgRef}
                        className="absolute top-0 w-full h-full"
                    >
                        <path ref={pathRef} fill="#0a0a0a"></path>
                    </svg>
                </>
            )}
        </div>
    );
}

// import styles from './style.module.scss';
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { opacity, slideUp } from './anim';

// const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

// export default function Index() {
//     const [index, setIndex] = useState(0);
//     const [dimension, setDimension] = useState({width: 0, height:0});

//     useEffect( () => {
//         setDimension({width: window.innerWidth, height: window.innerHeight})
//     }, [])

//     useEffect( () => {
//         if(index == words.length - 1) return;
//         setTimeout( () => {
//             setIndex(index + 1)
//         }, index == 0 ? 1000 : 150)
//     }, [index])

//     const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
//     const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

//     const curve = {
//         initial: {
//             d: initialPath,
//             transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
//         },
//         exit: {
//             d: targetPath,
//             transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
//         }
//     }

//     return (
//         <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
//             {dimension.width > 0 &&
//             <>
//                 <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{words[index]}</motion.p>
//                 <svg>
//                     <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
//                 </svg>
//             </>
//             }
//         </motion.div>
//     )
// }

// function revealAnimation() {
//     const start = `M0 502S175 272 500 272s500 230 500 230V0H0Z`;
//     const end = `M0 1005S175 995 500 995s500 10 500 10V0H0Z`;

//     ease: "power3.inOut",
//     ease: "power4.inOut",
// }

//     const start = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
//     const end = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} L0 ${dimension.height} L0 0`;

//     // Assuming this is used with GSAP for animation
//     gsap.fromTo(
//         pathRef.current,
//         { attr: { d: start } }, // Start state
//         {
//             attr: { d: end },   // End state
//             duration: 2,        // Animation duration in seconds
//             ease: "power3.inOut" // Easing function
//         }
//     );

// function revealAnimation() {
//     const start = `M0 502 L500 502 Q250 802 0 502 Z`; // Adapted with a quadratic curve
//     const end = `M0 1005 L500 1005 L500 0 L0 0 Z`;    // Flat rectangle

//     gsap.fromTo(
//         pathRef.current,
//         { attr: { d: start } },
//         {
//             attr: { d: end },
//             duration: 2,
//             ease: "power3.inOut"
//         }
//     );
// }
