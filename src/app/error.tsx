"use client"

import { AnimatePresence } from "motion/react"
import { useState } from "react"

const Error = () => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    //The error layout
    <section className="h-screen w-screen">
      <AnimatePresence mode='wait'>
        {/* {isLoading && <HomeLoader title={'HomePage'} setIsLoading={() => setIsLoading(true)} />} */}
      </AnimatePresence>
      <div className="container h-full w-full flex flex-col items-center justify-center text-bold text-[40vw]">
        <h2>Error</h2>
      </div>
    </section>
  )
}

export default Error
