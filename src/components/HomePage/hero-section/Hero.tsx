"use client"


import Image from "next/image"
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react"

const HeroBanner =() => {
 const mainRef = useRef<HTMLDivElement | null>(null)

useGSAP((): void => {
    gsap.set(mainRef.current as HTMLDivElement, { y: 100 })

     const tl= gsap.timeline()
 // Initial slideUp animation (replacing Framer Motion)
    gsap.to(mainRef.current as HTMLDivElement,{
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 2.5
    }
 );
})

    return (
    <main ref={mainRef} className="relative flex h-screen overflow-hidden">
      <Image
        src="/images/background.jpg"
        fill={true}
        alt="background"
        className="object-cover"
      />

       <div data-scroll data-scroll-speed={0.1} className="absolute top-[35%] left-[65%] text-lg font-[300]"  >
        <svg className="scale-[2] mb-[100px]" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
          <p className="m-0 mb-[10px]">Freelance</p>
          <p className="m-0 mb-[10px]">Designer & Developer</p>
        </div>
      </main>

    )
}

export default HeroBanner;



