'use client';
import Navigation from "@/common/headerComponent/navigation";
import MainButton from "@/common/MainButton";
import RoundedButton from "@/common/RoundedButton";
import LocaleSwitcher from "@/common/switch/LocaleSwitcher";
import ThemeSwitch from '@/components/theme-switch';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Circle } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from 'react';
import Nav from './Nav';


gsap.registerPlugin(ScrollTrigger)

const Header = () => {

    const pathname = usePathname()

    const [isActive, setIsActive] = useState<boolean>(false);

    const headerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const logo = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])



  useGSAP(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: '0',
          end: window.innerHeight.toString(),
          onLeave: () => {
            if (buttonRef.current && logo.current) {
              gsap.to([buttonRef.current, logo.current], { scale: 1, duration: 0.25, ease: "power1.out" });
            }
          },
          onEnterBack: () => {
            if (buttonRef.current ) {
              gsap.to([buttonRef.current, logo.current], {
                scale: 0,
                duration: 0.25,
                ease: "power1.out",
                onComplete: () => setIsActive(false)
              });
            }
          }
        }
      });
    }
  }, []);

  const currentTime = useCurrentTime()

    return (
    <>
        <header ref={headerRef} className="absolute inset-0 top-0 lg:h-12 h-[100px] w-full z-50 lg:border-b lg:border-neutral-800 py-5 mx-auto lg:px-12 flex justify-between items-center">
             <div className="font-bold text-lg dark:text-white">IBONSO™</div>
                <div className="hidden md:flex items-center space-x-8">
                    <div className="text-sm">{currentTime}</div>
                        <Link
                            href="mailto:cinonsokafor@gmail.com"
                            className="text-sm hover:underline"
                        >
                            cinonsokafor@devxyz.com
                        </Link>
                </div>
                  <div className='lg:flex hidden items-center justify-center gap-2.5'>
                    <Navigation/>
                    <ThemeSwitch />
                    <LocaleSwitcher/>
                </div>

            <div id="logo" ref={logo} className="fixed lg:left-4 left-2 top-10 font-bold text-lg scale-0">
                BONSO&#8482;
            </div>


            <div ref={buttonRef} className="fixed right-3 top-3 scale-0 flex items-center">
                <MainButton/>
             <RoundedButton aria-label='button open and navigation' className="overflow-hidden relative mix-blend-difference size-[70px] scale-[1] hover:scale-[0.9] bg-gray-200 bg-opacity-20 cursor-pointer  hover:bg-zinc-300 transition-colors rounded-full  flex flex-col items-center justify-center m-3 lg:m-5 z-50 p-5 duration-300 ease-in-out" onClick={() => setIsActive(!isActive)}>
               <span className={`w-[35px] h-[1px] rounded my-[2px] origin-center z-10 mx-0 bg-black block transition-all duration-300 ${isActive ? "rotate-45 translate-y-[0px]" : "bg-red-800"}`}></span>
               <span className={`w-[35px] h-[1px] rounded my-[2px] origin-center z-10 mx-0 bg-black block transition-all duration-300 ${isActive ? "-rotate-45 -translate-y-[5px]" : "bg-red-800"}`}></span>
           </RoundedButton>
            </div>
            <Circle className='dark:bg-white bg-black rounded-full'/>
        </header>


        <AnimatePresence>
            {isActive && (<Nav/> )}
        </AnimatePresence>
    </>
    );
};
export default Header;



                // <div className="fixed top-0 left-0 w-full h-full bg-neutral-900 bg-opacity-90 z-40 flex justify-center items-center">
                //     <div className="flex flex-col gap-4">
                //         <a href="#about" className="text-white text-2xl">About</a>
                //         <a href="#services" className="text-white text-2xl">Services</a>
                //         <a href="#contact" className="text-white text-2xl">Contact</a>
                //     </div>
                // </div>

