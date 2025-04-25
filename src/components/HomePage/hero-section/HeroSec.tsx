"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

    //   if (!mounted || !pathRef.current) return

    //   if (theme === "dark") {
    //     // Animate to sun
    //     gsap.to(pathRef.current, {
    //       duration: 0.5,
    //       attr: { d: sunPath },
    //       ease: "power2.inOut",
    //     })

    //     // Move icon position
    //     gsap.to(svgRef.current, {
    //       duration: 0.5,
    //       x: "130%",
    //       rotation: -180,
    //       ease: "power2.inOut",
    //     })
    //   } else {
    //     // Animate to moon
    //     gsap.to(pathRef.current, {
    //       duration: 0.5,
    //       attr: { d: moonPath },
    //       ease: "power2.inOut",
    //     })

    //     // Move icon position
    //     gsap.to(svgRef.current, {
    //       duration: 0.5,
    //       x: "0%",
    //       rotation: 0,
    //       ease: "power2.inOut",
    //     })
    //   }
    // }, [ mounted])

gsap.registerPlugin(useGSAP, ScrollTrigger)



import Link from "next/link"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold">CO</span>
        </div>
        <nav className="hidden md:flex space-x-12">
          <Link href="#work" className="uppercase text-sm font-medium hover:text-gray-300 transition-colors">
            Work
          </Link>
          <Link href="#services" className="uppercase text-sm font-medium hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="#about" className="uppercase text-sm font-medium hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="#testimonials" className="uppercase text-sm font-medium hover:text-gray-300 transition-colors">
            Testimonials
          </Link>
          <Link href="#connect" className="uppercase text-sm font-medium hover:text-gray-300 transition-colors">
            Connect
          </Link>
        </nav>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="relative py-12">
          {/* Profile Card */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded-md z-10">
            <div className="flex flex-col">
              <span className="font-medium">Charlie Osborne</span>
              <span className="text-sm text-gray-600">@charlieosborne.co</span>
            </div>
          </div>

          {/* Giant Text */}
          <h1 className="text-[12vw] leading-none font-extrabold tracking-tighter">
            AboutCharlie
          </h1>
        </section>

        {/* Roles Grid */}
        <section className="grid grid-cols-6 border-t border-gray-800">
          {["FATHER", "COACH", "HIKER", "DESIGNER", "NOMAD", "GAMER"].map((role, index) => (
            <div key={index} className="py-4 text-center border-r border-gray-800 last:border-r-0">
              <span className="uppercase text-sm font-medium">{role}</span>
            </div>
          ))}
        </section>

        {/* Approach Section */}
        <section className="grid grid-cols-3 border-t border-gray-800">
          <div className="py-12 border-r border-gray-800">
            <h2 className="uppercase text-sm font-medium">Approach</h2>
          </div>
          <div className="col-span-2 py-12 pl-12 pr-24">
            <h2 className="text-5xl font-bold mb-4">
              Designing for<br />
              Impact and<br />
              <span className={`${playfair.variable} font-playfair italic font-normal`}>Clarity</span>
            </h2>

            <p className="mt-12 text-lg">
              I believe great design is more than aesthetics. It's about strategy, clarity, and
              growth. Every project I take on starts with a deep understanding of your brand's goals,
              audience, and positioning.
            </p>

            <p className="mt-8 text-lg opacity-70">
              My approach blends strategy and execution, ensuring every design decision serves a
              purpose while creating a visual identity.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

