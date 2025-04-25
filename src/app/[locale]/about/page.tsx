// You now have access to the current locale

import StorySection from './_components/Story'
import AboutMePage from './_components/AboutMeFirst'

// e.g. /en-US/products -> `lang` is "en-US"
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  await params
    return (
        <main>
            <AboutMePage/>
            <StorySection/>
      </main>
  )
}
