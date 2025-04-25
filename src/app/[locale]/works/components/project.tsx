"use client"

import Link from 'next/link';

interface ProjectProps {
  index: number;
    title: string;
    slug: string,
  manageModal: (isOpen: boolean, index: number, x: number, y: number) => void;
}

export default function Project({ index, title, slug, manageModal }: ProjectProps) {
    return (
        <Link href={`/projects/${slug}`} className='inline-block w-full'>
        <div
      onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY)
      }}
      onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY)
      }}
      className="flex w-full justify-between items-center border-t border-[rgb(201,201,201)] cursor-pointer transition-all duration-200 last:border-b hover:opacity-50 group"
    >
      <h2 className="text-[60px] m-0 font-normal transition-all duration-400 group-hover:-translate-x-[10px]">
        {title}
      </h2>
      <p className="font-light transition-all duration-400 group-hover:translate-x-[10px]">Design & Development</p>
    </div>
    </Link>
  )
}


