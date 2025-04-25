import Image from "next/image"
import Link from "next/link"

interface ProjectShowcaseProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  archiveCount?: number
  archiveLink?: string
}

export default function ProjectShowcase({
  title,
  description,
  imageSrc,
  imageAlt,
  archiveCount = 0,
  archiveLink = "#",
}: ProjectShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-73px)]">
      {/* Left side - Project Image */}
      <div className="relative bg-zinc-900 p-6 flex items-center justify-center">
        <div className="relative w-full h-[500px]">
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-contain" />
        </div>
        {/* Decorative line */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px]">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 0 L0 200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Right side - Project Description */}
      <div className="bg-black p-6 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">{title}</h2>
          <p className="text-2xl md:text-3xl font-light leading-snug mb-12">{description}</p>

          {archiveCount > 0 && (
            <Link
              href={archiveLink}
              className="inline-flex items-center justify-between border border-zinc-800 px-6 py-3 hover:bg-zinc-900 transition-colors"
            >
              <span>Archive</span>
              <span className="ml-12">{archiveCount}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

