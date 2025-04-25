'use client';

import { routes } from '@/constants/data';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import Links from '../Links';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function Nav() {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
    const navRef = useRef(null);
    const linkRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const links = linkRefs.current;

        const navElement = navRef.current;
        // Create a GSAP context for proper cleanup
        const ctx = gsap.context(() => {
            if (navElement) {
                gsap.set(navElement, {
                    xPercent: 100,
                    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
                });

                // Animate sidenav from right with clipPath animation
                gsap.to(navElement, {
                    xPercent: 0,
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    duration: 1.2,
                    ease: 'power4.inOut',
                });

                gsap.to(navElement, {
                    xPercent: '100%',
                    duration: 0.8,
                    ease: 'power3.inOut',
                });

                // Animate in
                gsap.to(navElement, {
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.inOut',
                });

                // Staggered animation for links
                gsap.to(links, {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    delay: 0.4, // Start after the sidenav begins to appear
                    ease: 'power4.out',
                });
            }
        });

        return () => ctx.revert();
    }, []);

    // const t = useTranslations("sidenav");
    return (
        <nav
            ref={navRef}
            className="fixed h-screen w-full md:2/3 lg:w-5/11 top-0 bottom-0 origin-right overflow-hidden right-0 bg-gray-800 flex flex-col z-10 items-start justify-start mx-auto box-border p-[10px]"
            style={{
                transform: 'translateX(100%)',
                clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
            }}
        >
            <div
                onMouseLeave={() => {
                    setSelectedIndicator(pathname);
                }}
                className="block pl-25 mt-2"
            >
                <div className="text-[#a59292] block border-b-[1px] lg:max-w-sm border-b-solid uppercase text-[11px] mb-8">
                    <p>Navigation</p>
                </div>
                <div className="justify-start flex flex-col text-[80px]">
                    {routes.map((data, index) => {
                        return (
                            <Links
                                ref={(el: HTMLDivElement | null) =>
                                    (linkRefs.current[index] = el)
                                }
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator === data.href}
                                setSelectedIndicator={setSelectedIndicator}
                            />
                        );
                    })}
                </div>

                <div className="menu-info mt-35">
                    <div className="menu-info-col">
                        <p className="">info@nonsokafor.com</p>
                        <p>+234 7026 7041 55</p>
                    </div>
                    <div className="text-[#a59292] block mt-6 uppercase text-[11px] mb-12">
                        <div className="flex w-full justify-between text-[12px] gap-10">
                            <div className="menu-info-col text-2xl flex-1 gap-10 flex ">
                                {[
                                    'x/Twitter',
                                    'Behance',
                                    'Github',
                                    'Dribble',
                                ].map((item, index) => (
                                    <a key={index} href="#">
                                        <span className="bg-[#8599]">
                                            {item}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
