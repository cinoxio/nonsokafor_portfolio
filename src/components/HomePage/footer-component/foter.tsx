"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function PortfolioFooter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black text-white">
      {/* Top quote section */}
      <div className="border-b border-neutral-800 py-6 px-4">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-lg">Some of them appear in museums in various countries.</p>
        </div>
      </div>

      {/* Next/Work navigation */}
      <div className="border-b border-neutral-800 py-12">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <h2 className="text-4xl font-light">Next</h2>
          <h2 className="text-4xl font-light">Work</h2>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Menu column */}
          <div>
            <div className="bg-white text-black py-2 px-4 mb-6">
              <h3 className="font-normal">Menu</h3>
            </div>
            <nav className="flex flex-col space-y-2">
              <Link href="/work" className="hover:underline">
                Work
              </Link>
              <Link href="/exhibitions" className="hover:underline">
                Exhibitions
              </Link>
              <Link href="/stories" className="hover:underline">
                Stories
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/inquiries" className="hover:underline">
                Inquiries
              </Link>
              <div className="h-4"></div>
              <Link href="/cookies-policy" className="hover:underline">
                Cookies Policy
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Social column */}
          <div>
            <div className="bg-white text-black py-2 px-4 mb-6">
              <h3 className="font-normal">Social</h3>
            </div>
            <nav className="flex flex-col space-y-2">
              <Link href="https://instagram.com" target="_blank" className="hover:underline">
                Instagram
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:underline">
                Twitter
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:underline">
                LinkedIn
              </Link>
              <Link href="https://behance.net" target="_blank" className="hover:underline">
                Behance
              </Link>
              <Link href="https://dribbble.com" target="_blank" className="hover:underline">
                Dribbble
              </Link>
              <Link href="https://patreon.com" target="_blank" className="hover:underline">
                Patreon
              </Link>
            </nav>
          </div>

          {/* Newsletter column */}
          <div>
            <div className="bg-white text-black py-2 px-4 mb-6">
              <h3 className="font-normal">Newsletter</h3>
            </div>
            <p className="mb-4">Subscribe to stay up to date with the latest news and projects.</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="bg-black border border-neutral-800 py-3 px-4 w-full focus:outline-none focus:border-white"
                required
              />
              <button
                type="submit"
                className="bg-black border border-neutral-800 border-l-0 py-3 px-4 hover:bg-neutral-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 py-6">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <button onClick={scrollToTop} className="hover:underline mb-4 md:mb-0">
            To top
          </button>
          <div className="text-center mb-4 md:mb-0">New York & Belgrade</div>
          <div>©2025 Artemii Lebedev</div>
        </div>
      </div>

      {/* Header navigation (visible in the screenshot) */}
      <div className="fixed top-0 left-0 right-0 bg-black border-b border-neutral-800 py-4 px-4 z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-sm">
            artemiilebedеv.com
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/work" className="text-sm hover:underline">
              Work
            </Link>
            <Link href="/exhibitions" className="text-sm hover:underline">
              Exhibitions
            </Link>
            <Link href="/stories" className="text-sm hover:underline">
              Stories
            </Link>
            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="/inquiries" className="text-sm hover:underline flex items-center">
              Inquiries
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

