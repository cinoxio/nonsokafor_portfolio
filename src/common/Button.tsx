"use client"

import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"
import Link from "next/link"

// Dynamically import the arrow SVG
const Arrow = dynamic(() => import("./arrow-buttons"), { ssr: false })

import { CSSProperties, ReactNode } from "react"

interface ButtonProps {
  icon?: ReactNode;
  arrow?: boolean;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

export const Button = ({ icon, arrow, children, href, onClick, className, style }: ButtonProps) => {
  const buttonClasses = cn(
    // Base styles
    "flex items-center justify-between relative overflow-hidden uppercase leading-[200%] text-sm text-black group",
    // Responsive text size
    "text-[14px]",
    // Icon specific styles
    icon && "has-icon",
    // Custom class
    className,
  )

  const ButtonContent = () => (
    <>
      {icon && (
        <span className="flex aspect-square z-10 p-3 md:p-3 bg-[var(--theme-primary)] border border-[var(--pink)] transition-colors duration-600 ease-[var(--ease-out-expo)]">
          <span className="m-auto text-[var(--theme-secondary)] transition-colors duration-600 ease-[var(--ease-out-expo)] bg-[var(--theme-primary)] w-6 h-6 md:w-6 md:h-6">
            {icon}
          </span>
        </span>
      )}
      <span className="relative z-10 flex-grow">
        <span className="flex justify-center items-center h-full md:px-6 transition-all duration-600 ease-[var(--ease-out-expo)] origin-bottom scale-y-100 group-hover:scale-y-0 group-hover:opacity-0 group-hover:origin-top">
          {children}{" "}
          {arrow && (
            <Arrow className="relative z-10 aspect-square w-[10px] ml-4 md:ml-4 transition-transform duration-600 ease-[var(--ease-out-expo)] group-hover:translate-x-1/2 group-hover:-translate-y-1/2" />
          )}
        </span>
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 w-full flex justify-center items-center h-full md:px-6 origin-top scale-y-0 opacity-0 transition-all duration-600 ease-[var(--ease-out-expo)] group-hover:scale-y-100 group-hover:opacity-100 group-hover:origin-bottom"
        >
          {children}{" "}
          {arrow && (
            <Arrow className="relative z-10 aspect-square w-[10px] ml-4 md:ml-4 transition-transform duration-600 ease-[var(--ease-out-expo)] translate-x-[-50%] translate-y-[50%] group-hover:translate-x-0 group-hover:translate-y-0" />
          )}
        </span>
      </span>
    </>
  )

  // Pseudo-elements handled with before/after elements
  const PseudoElements = () => (
    <>
      <span className="absolute left-0 top-0 w-full h-full bg-[var(--theme-contrast)]"></span>
      <span className="absolute left-0 top-0 w-full h-full bg-[var(--theme-secondary)] z-0 scale-y-0 origin-top transition-transform duration-600 ease-[var(--ease-out-expo)] group-hover:scale-y-100 group-hover:origin-bottom"></span>
    </>
  )

  return href ? (
    <Link href={href} className={buttonClasses} style={style}>
      <PseudoElements />
      <ButtonContent />
    </Link>
  ) : (
    <button aria-label="button click" className={buttonClasses} style={style} onClick={onClick}>
      <PseudoElements />
      <ButtonContent />
    </button>
  )
}

