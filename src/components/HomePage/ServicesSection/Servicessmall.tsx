import { ChevronLeft, ChevronRight, RefreshCw, Share2, Star, MoreVertical } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Browser chrome header */}
      <div className="bg-[#dce5f7] flex items-center p-2 gap-2">
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-gray-200">
            <ChevronLeft className="w-4 h-4" />
          </button>

{/* <div className="relative w-4 h-4">
      <div
        className={`absolute w-2 h-0.5 bg-black transition-transform duration-300 ${
          isOpen ? 'rotate-45 translate-y-1' : 'rotate-135'
        }`}
      ></div>
      <div
        className={`absolute w-2 h-0.5 bg-black transition-transform duration-300 ${
          isOpen ? '-rotate-45 translate-y-1' : 'rotate-45'
        }`}
      ></div>
    </div> */}

          <div className="w-6 h-6 rounded-full bg-[#d1b67c] flex items-center justify-center text-white text-xs">w</div>
          <button className="p-1 rounded hover:bg-gray-200">
            <span className="text-lg">×</span>
          </button>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center">
            <span className="text-xs">VS</span>
          </div>
          <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center">
            <span className="text-xs">GH</span>
          </div>
          <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center">
            <span className="text-xs">VS</span>
          </div>
          <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center">
            <span className="text-xs">xi</span>
          </div>
          <button className="p-1 rounded hover:bg-gray-200">+</button>
          <button className="p-1 rounded hover:bg-gray-200">−</button>
          <button className="p-1 rounded hover:bg-gray-200">□</button>
          <button className="p-1 rounded hover:bg-gray-200">×</button>
        </div>
      </div>

      {/* Browser address bar */}
      <div className="bg-white border-b flex items-center p-2 gap-2">
        <button className="p-1 rounded hover:bg-gray-100">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="p-1 rounded hover:bg-gray-100">
          <ChevronRight className="w-4 h-4" />
        </button>
        <button className="p-1 rounded hover:bg-gray-100">
          <RefreshCw className="w-4 h-4" />
        </button>
        <button className="p-1 rounded hover:bg-gray-100">
          <Share2 className="w-4 h-4" />
        </button>
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-1 text-sm flex items-center">byhuy.com</div>
        <button className="p-1 rounded hover:bg-gray-100">
          <Star className="w-4 h-4" />
        </button>
        <button className="p-1 rounded hover:bg-gray-100 text-purple-600">
          <span className="text-lg">↓</span>
        </button>
        <button className="p-1 rounded hover:bg-gray-100">
          <span className="w-5 h-5 rounded-full bg-gray-300 inline-block"></span>
        </button>
        <button className="p-1 rounded hover:bg-gray-100">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-black text-white overflow-auto">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-light mb-6">
            HOW I CAN
            <br />
            HELP YOU /
          </h1>

          <h2 className="text-xl text-gray-400 mb-6">(SERVICES)</h2>

          <p className="text-gray-300 text-lg mb-12">
            Frustrated with websites that don't reflect your brand or drive growth? I craft premium web experiences that
            captivate and help you focus on growing your business.
          </p>

          <div className="border-t border-gray-700 my-8"></div>

          <h2 className="text-4xl font-light mb-6">
            <span className="text-gray-400">(01)</span> Web Development
          </h2>

          <p className="text-gray-300 text-lg mb-12">
            A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites
            are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on
            animation —keeping your audience engaged and returning.
          </p>

          <div className="space-y-6">
            <div className="border-t border-gray-700 py-4 flex">
              <span className="text-gray-400 w-12">01</span>
              <span className="text-xl">CMS Integration</span>
            </div>

            <div className="border-t border-gray-700 py-4 flex">
              <span className="text-gray-400 w-12">02</span>
              <span className="text-xl">Motion & Animations</span>
            </div>

            <div className="border-t border-gray-700 py-4 flex">
              <span className="text-gray-400 w-12">03</span>
              <span className="text-xl">3D Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

