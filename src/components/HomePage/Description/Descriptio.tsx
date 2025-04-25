import Link from "next/link"
import { ArrowRight } from "lucide-react"

const IntroSection = () => {
  return (
    <section className="w-screen h-screen bg-[#1C1F1C] text-white py-24">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="max-w-5xl">
          <div className="inline-block px-4 py-1 border border-white/20 rounded-full text-sm mb-8">Over Strakk</div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-16">
             Imagine your swimming big in an ocean and then you found huge piles of Dollars and Gold, and Imagine you finally made it all by yourself comfortably as along the Ocean waves. Despite this, congratulations because you just woke and realized malaria can be defeated.
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-lg font-medium mb-4">DE KEUKEN- EN TOTAALINRICHTINGEN VAN STRAKK</h3>
            </div>
            <div>
              <p className="text-white/80 mb-8">
                Of je nu kiest voor een trap, deur, keuken of totaalinterieur: alle materialen en kleuren worden met
                zorg geselecteerd en perfect op elkaar afgestemd. Het zijn de details die het verschil maken tussen goed
                en perfect. Wij streven naar perfectie in onze ontwerpen en dat is wat een interieur van Strakk een
                Strakk interieur maakt.
              </p>
              <Link
                href="/over-strakk"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F4EFE5] text-black rounded-full text-sm hover:bg-white transition-colors"
              >
                Over Strakk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
