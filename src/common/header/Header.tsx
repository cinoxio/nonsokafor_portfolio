'use client';
import Navigation from '@/common/header/navigation';
import MainButton from '@/common/MainButton';
import RoundedButton from '@/common/RoundedButton';
import ThemeSwitch from '@/components/theme-switch';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import LocaleSwitcher from '../switch/LocaleSwitcher';
import Nav from './Nav';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const pathname = usePathname();

    const [isActive, setIsActive] = useState<boolean>(false);

    const headerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const logo = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useGSAP(() => {
        if (buttonRef.current) {
            gsap.to(buttonRef.current, {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: '0',
                    end: window.innerHeight.toString(),
                    onLeave: () => {
                        if (buttonRef.current && logo.current) {
                            gsap.to([buttonRef.current, logo.current], {
                                scale: 1,
                                duration: 0.25,
                                ease: 'power1.out',
                            });
                        }
                    },
                    onEnterBack: () => {
                        if (buttonRef.current) {
                            gsap.to([buttonRef.current, logo.current], {
                                scale: 0,
                                duration: 0.25,
                                ease: 'power1.out',
                                onComplete: () => setIsActive(false),
                            });
                        }
                    },
                },
            });
        }
    }, []);

    const currentTime = useCurrentTime();

    return (
        <>
            <header
                ref={headerRef}
                className="absolute inset-0 top-0 lg:h-12 h-[100px] w-full z-50 lg:border-b lg:border-neutral-800 py-5 mx-auto lg:px-12 flex justify-between items-center"
            >
                <div>
                    {/* Logo would go here */}
                    <span className="text-40px text-red-500 font-bold">
                        CNnon.
                    </span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <div className="text-sm">{currentTime}</div>

                        <Link
                            href="mailto:cinonsokafor@gmail.com"
                            className="text-sm hover:underline"
                        >
                            cinonsokafor@devxyz.com
                        </Link>

                </div>

                <div className="flex items-center justify-center gap-1.5">
                    <Navigation />
                    <div className="lg:flex hidden items-center justify-center gap-2">
                        <ThemeSwitch />
                        <LocaleSwitcher />
                    </div>
                </div>
                <div
                    id="logo"
                    ref={logo}
                    className="fixed left-5 lg:left-7 top-5 scale-0"
                >
                    {/* Logo would go here */}
                    <span className="text-[30px] z-[40] mix-blend-difference text-red-500 font-bold">
                        CNnon.
                    </span>
                </div>

                <div
                    ref={buttonRef}
                    className="fixed right-3 top-3 scale-0 flex items-center"
                >
                    <MainButton />
                    <RoundedButton
                        aria-label="button open and navigation"
                        className="overflow-hidden relative mix-blend-difference size-[70px] scale-[1] hover:scale-[0.9] bg-gray-200 bg-opacity-20 cursor-pointer  hover:bg-zinc-300 transition-colors rounded-full  flex flex-col items-center justify-center m-3 lg:m-5 z-50 p-5 duration-300 ease-in-out"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <span
                            className={`w-[35px] h-[1px] rounded my-[2px] origin-center z-10 mx-0 bg-black block transition-all duration-300 ${
                                isActive
                                    ? 'rotate-45 translate-y-[0px]'
                                    : 'bg-red-800'
                            }`}
                        ></span>
                        <span
                            className={`w-[35px] h-[1px] rounded my-[2px] origin-center z-10 mx-0 bg-black block transition-all duration-300 ${
                                isActive
                                    ? '-rotate-45 -translate-y-[5px]'
                                    : 'bg-red-800'
                            }`}
                        ></span>
                    </RoundedButton>
                </div>
            </header>

            <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </>
    );
};
export default Header;

// import Link from "next/link"
// import CircularLogo from "@/components/circular-logo"

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="container mx-auto px-6 py-12">
//         <div className="flex flex-col md:flex-row justify-between items-start">
//           <div className="mb-8 md:mb-0">
//             <CircularLogo />
//           </div>
//           <nav className="text-start">
//             <ul className="space-y-1">
//               <li>
//                 <Link href="#projects" className="hover:underline">
//                   projects
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#services" className="hover:underline">
//                   services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#playground" className="hover:underline">
//                   playground
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#about" className="hover:underline">
//                   about
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#journal" className="hover:underline">
//                   journal
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         <div className="mt-24 md:mt-32">
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
//             FRONTEND
//             <br />
//             DEVELOPER &<br />
//             FULL-STACK
//             <br />
//             CAPABLE
//           </h1>
//         </div>
//       </div>
//     </div>
//   )
// }
