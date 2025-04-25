import Link from "next/link"
import { ProjectCard } from "./project-card"

const featuredProjects = [
  {
    id: 1,
    title: "The Banshies",
    year: "2025",
    services: ["Art Direction", "Web Design", "Interaction", "Development"],
    imageUrl:
      "https://cdn.prod.website-files.com/6416fc1e04ae8a3c2ac1339e/67c4d03e3b53ebcc8ebf9b73_Cover-Lemma-min.png",
    videoUrl:
      "https://cdn.prod.website-files.com/630534398d9471ade12fc55f%2F67c4d16a48c0b0cfd87cc37d_Dribbble%20Post%2001%20%284%29-transcode.mp4",
    link: "https://www.behance.net/gallery/219987597/The-Banshies",
  },
  {
    id: 2,
    title: "Pasha Ink",
    year: "2025",
    services: ["Art Direction", "Web Design", "3D", "Development"],
    imageUrl:
      "https://cdn.prod.website-files.com/6416fc1e04ae8a3c2ac1339e/67a8c2eef1bad601fe30d928_PashaInk%20Cover-min.jpg",
    videoUrl:
      "https://cdn.prod.website-files.com/630534398d9471ade12fc55f%2F67a8c0b6392b5a9461af53a2_Launch%20Dribbble%20%28w%20Music%29-transcode.mp4",
    link: "https://www.behance.net/gallery/218659317/Pasha-Ink",
  },
  {
    id: 3,
    title: "Travel Next Level",
    year: "2024",
    services: ["Art Direction", "Web Design", "3D", "Development"],
    imageUrl:
      "https://cdn.prod.website-files.com/6416fc1e04ae8a3c2ac1339e/673260f519e039e542d605a4_Travel%20Next%20Level%20Cover%20(1).png",
    videoUrl:
      "https://cdn.prod.website-files.com/630534398d9471ade12fc55f%2F673261a443dd6355500ca339_Post%20%28Tw%2C%20Th%2C%20LinkedIn%29-transcode.mp4",
    link: "https://www.behance.net/gallery/212143975/Travel-Next-Level",
  },
  {
    id: 4,
    title: "Q Refinish",
    year: "2024",
    services: ["Art Direction", "Web Design", "3D", "Development"],
    imageUrl:
      "https://cdn.prod.website-files.com/6416fc1e04ae8a3c2ac1339e/6745b9ce7be268a67c55bae5_Lemma%20Cover-min.png",
    videoUrl:
      "https://cdn.prod.website-files.com/630534398d9471ade12fc55f%2F6745b7c32e1c64e8087d8d74_Home%20Desktop%20%281%29-transcode.mp4",
    link: "https://www.behance.net/gallery/213249483/Q-Refinish",
  },
]

export function FeaturedProjects() {
  return (
    <section>
      <div className="wrapper__c">
        <div className="flex__featured">
          <div className="inside__h_in featured_sticky">
            <div className="featured_headline">
              <h1 className="h2">
                <span className="p__g">F</span>
                eatured
                <br />
                <span className="p__g">P</span>
                rojects
              </h1>
              <div className="number_projects">11</div>
            </div>
            <div className="view-all_desktop">
              <Link href="/work" className="view-all w-inline-block">
                <div>View All</div>
                <div>31</div>
              </Link>
            </div>
          </div>
          <div className="featured_projects">
            <div className="grid_featured">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          <div className="view-all_mobile">
            <Link href="/work" className="view-all w-inline-block">
              <div>View All</div>
              <div>31</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

