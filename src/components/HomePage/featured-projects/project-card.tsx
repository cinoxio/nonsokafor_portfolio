"use client"

import { useState } from "react"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    year: string
    services: string[]
    imageUrl: string
    videoUrl: string
    link: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      role="listitem"
      className="w-dyn-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project_info_mobile">
        <div className="project_info">
          <div>{project.title}</div>
          <div>{project.year}</div>
        </div>
      </div>
      <a href={project.link} target="_blank" className="featured_pr w-inline-block" rel="noreferrer">
        <div className="cover_featured">
          <div className="featured_info desktop">
            <div className="project_info">
              <div>{project.title}</div>
              <div>{project.year}</div>
            </div>
            <div className="services_info">
              {project.services.map((service, index) => (
                <div key={index}>{service}</div>
              ))}
            </div>
          </div>
          <div className="on_hover" style={{ display: isHovered ? "flex" : "none", opacity: isHovered ? 1 : 0 }}>
            <div className="video_on_hover">
              <div className="embed_hover">
                <video
                  className="lazy"
                  autoPlay={isHovered}
                  muted
                  loop
                  style={{ objectFit: "cover" }}
                  width="100%"
                  height="100%"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <img src={project.imageUrl || "/placeholder.svg"} loading="lazy" alt={project.title} className="image" />
        </div>
      </a>
      <div className="services_chips mobile">
        {project.services.map((service, index) => (
          <div key={index} className="chip">
            <div>{service}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

