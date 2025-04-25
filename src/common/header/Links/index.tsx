'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { routes } from '@/constants/data';
import Link from 'next/link';
import { SectionName } from '@/types';

type LinksProps = {
    data: SectionName;
    isActive: boolean;
    setSelectedIndicator: React.Dispatch<React.SetStateAction<SectionName>>;
};

gsap.registerPlugin(useGSAP);

export default function LinkItems({
    data,
    isActive,
    setSelectedIndicator,
}: LinksProps) {
    const linkSlide = useRef(null);
    const scale = useRef(null);

    useGSAP(() => {
        if (!linkSlide.current) return null;
        if (linkSlide.current) {
            gsap.fromTo(
                linkSlide.current,
                {
                    x: 80,
                    duration: 0.8,
                    ease: 'menuEase',
                    delay: 0.05 * index,
                },
                {
                    x: 0,
                    duration: 0.8,
                    ease: 'custom',
                    delay: 0.05 * index,
                }
            );
        } else {
            gsap.to(linkSlide.current, {
                x: 80,
                duration: 0.8,
                ease: 'menuEase',
                delay: 0.05,
            });
        }
    });

    const { title, href, index } = data as SectionName;

    useEffect(() => {
        if (isActive || index === 0) {
            // Adjust the condition to match the correct types
            gsap.to(scale.current, {
                scale: 1,
                duration: 0.3,
            });
        } else {
            gsap.to(scale.current, {
                scale: 0,
                duration: 0.4,
            });
        }
    }, [isActive, index]);
    return (
        <div
            ref={linkSlide}
            className="relative flex items-center"
            onMouseEnter={() => {
                setSelectedIndicator(data);
            }}
        >
            <div
                ref={scale}
                style={{
                    transform: isActive ? 'scale(1)' : 'scale(0) duration-300',
                }}
                className="w-[10px] h-[10px] will-change-transform rounded-[50%] active:scale-100 scale-0 duration-300 transition-all absolute left-[-30px]"
            ></div>
            <Link href={href}>{title}</Link>
        </div>
    );
}

// export const menuSlide = {
//     initial: { x: "calc(100% + 100px)" },
//     enter: {
//         x: "0",
//         duration: 0.8,
//         ease: "menuEase"
//     },
//     exit: {
//         x: "calc(100% + 100px)",
//         duration: 0.8,
//         ease: "menuEase"
//     }
// };

// export const slide = {
//     initial: { x: 80 },
//     enter: (i) => ({
//         x: 0,
//         duration: 0.8,
//         ease: "menuEase",
//         delay: 0.05 * i
//     }),
//     exit: (i) => ({
//         x: 80,
//         duration: 0.8,
//         ease: "menuEase",
//         delay: 0.05 * i
//     })
// };

// export const scale = {
//     open: {
//         scale: 1,
//         duration: 0.3
//     },
//     closed: {
//         scale: 0,
//         duration: 0.4
//     }
// };
