  const projects = [
    { client: "The Banshies", project: "The Banshies", industry: "Music", year: "2025" },
    { client: "Pavlo Pozhidaev", project: "Pasha Ink", industry: "Tattoo", year: "2025" },
    { client: "Goom Gum", project: "Unison", industry: "Music", year: "2024" },
    { client: "Color Factory", project: "Q Refinish", industry: "Industrial", year: "2024" },
    { client: "Kevin Burger", project: "Travel Next Level", industry: "Tourism", year: "2024" },
    { client: "Goom Gum", project: "Darkness", industry: "Music", year: "2024" },
    { client: "Okan Uckun", project: "Monolith Studio", industry: "Tattoo", year: "2024" },
    { client: "Mario Goic", project: "Le Flair Studios", industry: "E-Commerce", year: "2024" },
    { client: "Goom Gum", project: "Desire", industry: "Music", year: "2024" },
    { client: "Meme Club", project: "$Tyrel", industry: "Crypto", year: "2024" },
    { client: "Goom Gum", project: "Don't Wake Up", industry: "Music", year: "2024" },
    { client: "Color Factory", project: "Q Industrial", industry: "Industrial", year: "2024" },
    { client: "Goom Gum", project: "Moonlight", industry: "Music", year: "2024" },
    { client: "Kieran Clarke", project: "KC24", industry: "Cinema", year: "2024" },
    { client: "Goom Gum", project: "Rondo", industry: "Music", year: "2024" },
    { client: "Alexandra Murgu", project: "Armur", industry: "Cinema", year: "2024" },
    { client: "Goom Gum", project: "A Capella", industry: "Music", year: "2024" },
  ]


export default function AllWorks() {
    return (
            <div className="px-6 py-12">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-24">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-6 h-6" />
            <h1 className="text-7xl font-light">All 31</h1>
          </div>
          <div className="text-7xl font-light">Projects</div>
        </div>

        {/* Projects Table */}
        <div className="grid grid-cols-4 gap-4">
          {/* Table Headers */}
          <div className="text-zinc-500 pb-4">Client</div>
          <div className="text-zinc-500 pb-4">Project</div>
          <div className="text-zinc-500 pb-4">Industry</div>
          <div className="text-zinc-500 pb-4 text-right">Year</div>

          {/* Table Content */}
          {projects.map((project, index) => (
            <>
              <div key={`client-${index}`} className="py-2 border-t border-zinc-900">
                {project.client}
              </div>
              <div key={`project-${index}`} className="py-2 border-t border-zinc-900">
                {project.project}
              </div>
              <div key={`industry-${index}`} className="py-2 border-t border-zinc-900">
                {project.industry}
              </div>
              <div key={`year-${index}`} className="py-2 border-t border-zinc-900 text-right">
                {project.year}
              </div>
            </>
          ))}
        </div>
{/* <ProjectShowcase/> */}
      </div>
    )
}
