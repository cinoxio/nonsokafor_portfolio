
import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"

export default function ServiceCard() {
  return (

      <div className="max-w-7xl bg-black text-white mx-auto px-6 mt-8">

        <div className="flex flex-col md:flex-row justify-between mt-8 border-t border-zinc-800 pt-10">
          <div className="text-6xl font-light text-zinc-200 mb-8 md:mb-0">(01)</div>
          <div className="md:w-3/4">
            <h1 className="text-6xl font-light mb-10">Web Development</h1>

            <p className="text-xl text-zinc-400 leading-relaxed mb-16 max-w-3xl">
              A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites
              are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on
              animation—keeping your audience engaged and returning.
            </p>

            {/* Services */}
            <div className="space-y-8">
              <div className="border-t border-zinc-800 py-6 flex">
                <div className="text-zinc-500 w-16">01</div>
                <div className="text-2xl font-light">CMS Integration</div>
              </div>

              <div className="border-t border-zinc-800 py-6 flex">
                <div className="text-zinc-500 w-16">02</div>
                <div className="text-2xl font-light">Motion & Animations</div>
              </div>

              <div className="border-t border-zinc-800 py-6 flex">
                <div className="text-zinc-500 w-16">03</div>
                <div className="text-2xl font-light">3D Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

