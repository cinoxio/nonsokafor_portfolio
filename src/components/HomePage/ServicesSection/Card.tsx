"use client"

import { cn } from "@/lib/utils"
import type { CardData } from "@/types"
import { motion, useScroll } from "motion/react"
import { useRef } from "react"

interface CardProps extends CardData {
  i: number
}

const Card = ({ i, number, title, description, services }: CardProps) => {
  const container = useRef(null)

  // Keep the scroll tracking for potential future use, but we won't use it for scaling
  useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

      // Calculate vertical position based on card index with more dramatic differences
//   const getVerticalPosition = () => {
//     if (i === 0) return "calc(-5vh)"
//     if (i === 1) return "calc(-5vh + 120px)" // Much more downward
//     if (i === 2) return "calc(-5vh + 240px)" // Even more downward
//     return `calc(-5vh + ${i * 80}px)` // Fallback for any additional cards
//   }
// box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)
  return (
    <div ref={container} className="h-screen w-full flex items-center justify-center mb-6 sticky top-0">
      <motion.div
        style={{
        //   backgroundColor: color,
            // top: `calc(-5vh + ${i * 25}px)`,
          top: `calc(-5vh + ${i * 100}px)`,
        }}
        className={cn("flex w-full flex-col relative h-[600px] rounded-2xl origin-top bg-white dark:bg-[#121212] dark:shadow-card pb-10")}>
        <div className="w-full mx-auto border-t border-zinc-800 mt-1 py-2">
          <div className="grid grid-cols-[80px_1fr] md:grid-cols-[600px_1fr] lg:grid-cols-[600px_1fr] gap-4 md:gap-0 mt-8">
            <span className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 md:mb-0">{number}</span>
                      <div className="w-full">
                          <div className='flex justify-between items-center mb-10'>
                              <h1 className="text-4xl md:text-5xl lg:text-6xl whitespace-nowrap font-medium ">{title}</h1>
                              <div className='hidden xl:block'>@</div>
                          </div>
                          <div className='md:w-3/4'>
              <p className="text-xl text-zinc-400 leading-relaxed mb-16 max-w-3xl">{description}</p>
              {/* Services */}
              <div className="space-y-1">
                {services.map((service) => (
                  <div key={service.id} className="border-t border-zinc-800 py-6 flex">
                    <div className="text-zinc-500 w-16">{service.id}</div>
                    <div className="text-2xl font-light">{service.title}</div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card;



