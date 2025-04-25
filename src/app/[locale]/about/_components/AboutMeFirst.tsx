import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function AboutMePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-zinc-900">
        <div className="text-lg font-medium">Artemii Lebedev</div>
        <div className="hidden md:block">7:02 PM, CET</div>
        <div className="hidden md:block">hello@artemiilebedev.com</div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-1">
            <Link href="#" className="hover:text-zinc-400">
              Work,
            </Link>
            <Link href="#" className="hover:text-zinc-400">
              Exhibitions,
            </Link>
            <Link href="#" className="hover:text-zinc-400">
              Stories,
            </Link>
            <Link href="#" className="hover:text-zinc-400">
              About.
            </Link>
          </nav>
          <div className="flex items-center gap-1">
            <span>Inquiries</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-12">
        {/* Left Column - Bio */}
        <div className="md:col-span-3 space-y-6">
          <div>
            <div className="text-zinc-400">Art Director</div>
            <div className="text-zinc-400">Visual Designer</div>
          </div>
          <div className="space-y-4 text-sm">
            <p>
              Embarking on my journey in 2017, I initially delved into the world of UI design. However, path soon
              evolved as my passion for design & digital art flourished. Today as an independent designer, I blend
              together expertise in design, development & 3D to craft effective & innovation solutions.
            </p>
            <p>
              At the intersection of effective design and visual artistry, diverge two distinct paths. On one side,
              craft interfaces and web designs for brands and companies, striving to achieve meaningful outcomes. On the
              other, produce visual art for musicians and public figures, infusing each piece with metaphorical
              narratives.
            </p>
          </div>
        </div>

        {/* Middle Column - Image */}
        <div className="md:col-span-5 relative flex justify-center items-center">
          <div className="w-full h-[500px] relative">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Artemii Lebedev profile"
              fill
              className="object-cover object-center"
            />
            <div className="absolute top-1/3 left-0 right-0 flex justify-center">
              <div className="w-64 h-[1px] bg-zinc-700"></div>
            </div>
          </div>
        </div>

        {/* Right Column - Awards & Recognition */}
        <div className="md:col-span-4 space-y-8">
          {/* Awards Section */}
          <div>
            <h3 className="mb-2">Awards</h3>
            <div className="grid grid-cols-2 gap-y-1">
              <div className="text-zinc-400">Behance</div>
              <div className="text-right">29</div>
              <div className="text-zinc-400">Awwwards</div>
              <div className="text-right">37</div>
              <div className="text-zinc-400">CSS Design Awards</div>
              <div className="text-right">68</div>
              <div className="text-zinc-400">CSS Winner</div>
              <div className="text-right">14</div>
              <div className="text-zinc-400">FWA</div>
              <div className="text-right">2</div>
            </div>
          </div>

          {/* Recent Section */}
          <div>
            <h3 className="mb-2">Recent</h3>
            <div className="grid grid-cols-2 gap-y-1">
              <div className="text-zinc-400">Behance</div>
              <div className="text-right">UI Gallery Featured (Mar)</div>
              <div className="text-zinc-400">CSS Design Awards</div>
              <div className="text-right">Site of the Day (Feb)</div>
              <div className="text-zinc-400">CSS Design Awards</div>
              <div className="text-right">Site of the Day (Feb)</div>
              <div className="text-zinc-400">Behance</div>
              <div className="text-right">XD Gallery Featured (Dec)</div>
              <div className="text-zinc-400">CSS Design Awards</div>
              <div className="text-right">Site of the Day (Dec)</div>
              <div className="text-zinc-400">Behance</div>
              <div className="text-right">UI Gallery Featured (Dec)</div>
              <div className="text-zinc-400">Behance</div>
              <div className="text-right">UI Gallery Featured (Nov)</div>
              <div className="text-zinc-400">FWA</div>
              <div className="text-right">FWA of the Day</div>
            </div>
          </div>

          {/* DOTY Section */}
          <div>
            <h3 className="mb-2">DOTY</h3>
            <div className="grid grid-cols-2 gap-y-1">
              <div className="text-zinc-400">CSS Design Awards</div>
              <div className="text-right">Designer of the Year 2024</div>
            </div>
          </div>

          {/* Nominations Section */}
          <div>
            <h3 className="mb-2">Nominations (24/23)</h3>
            <div className="grid grid-cols-2 gap-y-1">
              <div className="text-zinc-400">Awwwards</div>
              <div className="text-right">Independent of the Year</div>
              <div className="text-zinc-400">Awwwards</div>
              <div className="text-right">e-Commerce Website of the Year</div>
              <div className="text-zinc-400">CSS Design Awards</div>
              <div className="text-right">Design of the Year</div>
              <div className="text-zinc-400">Awwwards</div>
              <div className="text-right">Studio of the Year</div>
            </div>
          </div>

          {/* Articles Section */}
          <div>
            <h3 className="mb-2">Articles</h3>
            <div className="grid grid-cols-2 gap-y-1">
              <div className="text-zinc-400">CoDrops</div>
              <div className="text-right">Case Study: Travel Next Level (24)</div>
              <div className="text-zinc-400">CoDrops</div>
              <div className="text-right">Case Study: Monolith (24)</div>
              <div className="text-zinc-400">Communication Arts</div>
              <div className="text-right">Interview (24)</div>
              <div className="text-zinc-400">CoDrops</div>
              <div className="text-right">Case Study: Armur (24)</div>
              <div className="text-zinc-400">CoDrops</div>
              <div className="text-right">Designer Spotlight (24)</div>
              <div className="text-zinc-400">CoDrops</div>
              <div className="text-right">Featured (24)</div>
              <div className="text-zinc-400">Bootcamp</div>
              <div className="text-right">Web Design Inspirations (24)</div>
              <div className="text-zinc-400">TopAgencies</div>
              <div className="text-right">Interview (23)</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

