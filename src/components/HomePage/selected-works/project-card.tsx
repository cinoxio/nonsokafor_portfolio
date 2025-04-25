"use client"
import { ProjectCardProps } from "@/types"
import Image from "next/image"
import { useState } from 'react';



export function ProjectCard({ imageUrl, video, title, type }: ProjectCardProps) {

const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col">
        <div className="relative aspect-[10/14] group md:aspect-[10/16] lg:h-[400px] w-full bg-zinc-900 overflow-hidden">
          <div className="on_hover" style={{ display: isHovered ? "flex" : "none", opacity: isHovered ? 1 : 0 }}>
            <div className="video_on_hover">
              <div className="embed_hover object-cover hidden group-hover:block transition ease-in duration-500 w-full aspect-[16/11] absolute inset-0 top-1/2 -translate-y-1/2 bg-red-800">
                <video
                  className="lazy object-cover"
                  autoPlay={isHovered}
                  muted
                  loop
                  width="100%"
                 height="100%"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <img src={imageUrl || "/placeholder.svg"} loading="lazy" alt={title} className="image" />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-zinc-400">{type}</p>
      </div>
    </div>
  )
}
