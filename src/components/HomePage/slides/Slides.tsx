"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

export default function SliderSection() {
  const contentRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])

  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Clear any existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach((st) => st.kill())

    const slides = slidesRef.current

    // Pin the navigation bar
    ScrollTrigger.create({
      trigger: contentRef.current,
      start: "top bottom-=200",
      end: "bottom bottom",
      pin: navRef.current,
      pinSpacing: false,
      pinType: "transform",
      id: "nav",
    })

    // Create the timeline for slides
    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top top",
        end: "+=" + slides.length * 100 + "%",
        pin: true,
        scrub: true,
      },
    })

    // Set initial positions
    gsap.set(slides, {
      yPercent: (i) => (i ? 100 : 0),
    })

    // Animate each slide
    slides.forEach((slide, i) => {
      if (i) {
        tl.to(slide, { yPercent: 0 }, "+=0.15")
      }
    })

  }, [])

  // Add a slide to the slidesRef array
  const addToSlidesRef = (el: HTMLDivElement) => {
    if (el && !slidesRef.current.includes(el)) {
      slidesRef.current.push(el)
    }
  }

  return (
    <>
      <div className="relative h-screen bg-gradient-to-br from-blue-400 to-blue-600"></div>
      <div ref={contentRef} className="relative overflow-hidden">
        <div
          ref={(el) => addToSlidesRef(el as HTMLDivElement)}
          className="slide absolute top-0 left-0 right-0 h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600"
        >
          <h1 className="text-4xl font-bold text-gray-900">First Slide</h1>
        </div>
        <div
          ref={(el) => addToSlidesRef(el as HTMLDivElement)}
          className="slide absolute top-0 left-0 right-0 h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600"
        >
          <h1 className="text-4xl font-bold text-gray-900">Second Slide</h1>
        </div>
        <div
          ref={(el) => addToSlidesRef(el as HTMLDivElement)}
          className="slide absolute top-0 left-0 right-0 h-screen flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600"
        >
          <h1 className="text-4xl font-bold text-gray-900">Third Slide</h1>
        </div>
        <div
          ref={(el) => addToSlidesRef(el as HTMLDivElement)}
          className="slide absolute top-0 left-0 right-0 h-screen flex items-center justify-center bg-gray-300"
        >
          <h1 className="text-4xl font-bold text-gray-900">Fourth Slide</h1>
        </div>
        <div ref={navRef} className="absolute top-0 left-0 right-0 h-[100px] bg-purple-700 z-10"></div>
      </div>

    </>
  )
}

