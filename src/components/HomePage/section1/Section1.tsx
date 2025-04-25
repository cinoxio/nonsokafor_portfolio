"use client"

import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import {cn} from "@/lib/utils"
import { ScrollTrigger } from 'gsap/all'
import useWindowWidth from '@/hooks/useWindowWidth'

// Card component
const Card = ({ background, number, text }) => {
  return (
    <div className="bg-[rgba(239,239,239,0.8)] rounded-2xl p-6 md:p-8 flex flex-col h-[220px] w-full md:w-[440px] md:h-[440px]">
      <div className="text-neutral-400 text-xl md:text-3xl mb-4">{number}</div>
      <div className="text-2xl md:text-4xl font-medium mt-auto">{text}</div>
    </div>
  )
}

// Custom hook to get element dimensions
const useRect = () => {
  const ref = useRef(null)
  const [rect, setRect] = useState({ top: 0, left: 0, width: 0, height: 0 })

  useEffect(() => {
    if (!ref.current) return

    const updateRect = () => {
      const { top, left, width, height } = ref.current.getBoundingClientRect()
      setRect({
        top: top + window.scrollY,
        left: left + window.scrollX,
        width,
        height,
      })
    }

    updateRect()
    window.addEventListener("resize", updateRect)
    return () => window.removeEventListener("resize", updateRect)
  }, [ref.current])

  return [ref, rect]
}

// Math utility functions
const clamp = (min, value, max) => Math.min(Math.max(value, min), max)
const mapRange = (inMin, inMax, value, outMin, outMax) =>
  ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin

// Feature Cards Component
export default function FeatureCards() {
  const [ref, rect] = useRect()
  const cardsContainerRef = useRef(null)
  const { height: windowHeight } = useWindowWidth()
  const [current, setCurrent] = useState(0)

  const cards = [
    { text: "Run scroll in the main thread" },
    { text: "Lightweight (under 4kb)" },
    { text: `Made for ${new Date().getFullYear()}+` },
    { text: "Bring your own animation library" },
    { text: "CONTROL THE SCROLL EASING DURATION" },
    { text: "Use any element as scroller" },
    { text: "Enjoy horizontal + vertical support" },
    { text: 'Feel free to use "position: sticky" again' },
    { text: "touch support" },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const handleScroll = () => {
      if (!rect.height || !cardsContainerRef.current) return

      const scroll = window.scrollY
      const start = rect.top - windowHeight * 2
      const end = rect.top + rect.height - windowHeight

      const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)
      const progressForCards = clamp(0, mapRange(rect.top, end, scroll, 0, 1), 1)

      cardsContainerRef.current.style.setProperty("--progress", progressForCards)
      const step = Math.floor(progress * 10)
      setCurrent(step)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [rect, windowHeight])

  useEffect(() => {
    if (!cardsContainerRef.current) return

    // Set up GSAP animations for cards
    const cards = cardsContainerRef.current.querySelectorAll(".feature-card")

    gsap.set(cards, {
      opacity: 0,
      x: "100%",
      y: "100%",
    })

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: `top+=${index * (windowHeight / 9)} center`,
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "expo.out",
          })
        },
        onLeaveBack: () => {
          gsap.to(card, {
            opacity: 0,
            x: "100%",
            y: "100%",
            duration: 1.2,
            ease: "expo.out",
          })
        },
      })
    })
  }, [ref.current, windowHeight])

  return (
    <div ref={ref} className="relative h-[1600vh] md:min-h-screen">
      <div className="sticky top-0 h-screen overflow-hidden p-4 md:p-8">
        <div className="relative h-full">
          {/* Title */}
          <div className="text-right pb-8 md:pb-0 md:absolute md:right-8">
            <div className="text-3xl md:text-4xl font-bold">
              Lenis brings
              <br />
              <span className="text-gray-400">the heat</span>
            </div>
          </div>

          {/* Cards Container */}
          <div ref={cardsContainerRef} className="relative">
            {cards.map((card, index) => (
              <div
                key={index}
                className={cn(
                  "feature-card absolute transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  index <= current ? "opacity-100" : "opacity-0 translate-x-full translate-y-full",
                )}
                style={{
                  top: `calc((100vh - 440px - 64px) / 8 * ${index})`,
                }}
              >
                <Card background="rgba(239, 239, 239, 0.8)" number={index + 1} text={card.text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

