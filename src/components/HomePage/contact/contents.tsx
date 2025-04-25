import MainButton from "@/common/MainButton"

const Contents = () => {
  return (
       <div className="flex flex-col h-full mt-2 w-full items-center justify-center">

             <p
                    className="text-neutral-400 mb-8 text-base md:text-lg"
                >
                    {/* opacity-0 -translate-y-7 */}
                    (Need an unfair advantage?)
                </p>

                <h1
                    className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 leading-tight"
                >
                    LET'S MAKE
                    <br />
                    IT HAPPEN
                </h1>

                <div>
                    <MainButton/>
                </div>
               </div>
  )
}

export default Contents
