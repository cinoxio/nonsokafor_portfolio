'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RoundedButton from '@/common/RoundedButton';
import Magnetic from '@/common/Magnetic';
import { motion, useScroll, useTransform } from 'motion/react';
import MainButton from '@/common/MainButton';
import Contents from './contents';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
    const container = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    // const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    // const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])


    return (
        <div
            ref={container}
            className="relative grid h-svh w-screen mx-auto  items-center justify-center"
        >
            <div className="h-full w-full screen-max-width mx-auto">
             <Contents/>

                <div
                    className="absolute bottom-2 w-full px-6 pt-6 flex justify-between items-center"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full w-12 h-12 flex items-center justify-center">
                            <div className="w-6 h-6 relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-400 to-neutral-600"></div>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-neutral-400">
                                Working Globally
                            </div>
                            <div className="text-sm text-neutral-400">
                                Available Apr '25
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-sm">FOR FURTHER INQUIRIES</div>
                        <a
                            href="mailto:hello@byhuy.com"
                            className="text-sm hover:text-gray-300 transition-colors"
                        >
                            hello@byhuy.com
                        </a>
                    </div>
                </div>
            </div>
            <motion.div style={{height}} className="w-screen mx-auto relative mt-[100px] overflow-x-hidden">
                <div className="h-[1550%] w-[120%] left-[-10%] rounded-b-[50%] dark:bg-[#141516] z-[2] absolute dark:shadow-[0_60px_50px_rgba(0,0,0,0.748)]"></div>
            </motion.div>
        </div>
    );
}
