import Img from "/img/1.jpg"

const Compo = () => {

    const content = [
    {
    title: ["D", "A", "A", "K", "O", "N", "i", "x", "i", "e"],

  },
]
    return (
     <section
          className="content grid grid-rows-[100vh_1fr_auto] grid-cols-[100%] w-screen relative px-8"
          style={{ height: "calc(var(--imgRatio) * 100vw)" }}
        >
          <div
            className="canvas-wrap absolute top-0 left-0 h-full w-full bg-center bg-cover opacity-0"
            style={{ backgroundImage: `url(${Img})` }}
          ></div>
          <div className="content__inner relative justify-self-end self-end pb-8">
            <h2 className="relative text-[10vw] font-normal text-right m-0 leading-[0.8]">
              {content[0].title.slice(0, 5).map((char, i) => (
                <span key={i} className={i % 2 !== 0 ? 'text-[10.5vw] font-["lores-9-plus-wide",sans-serif]' : ""}>
                  {char}
                </span>
              ))}
              <br />
              {content[0].title.slice(5).map((char, i) => (
                <span
                  key={i}
                  className={(i + 5) % 2 !== 0 ? 'text-[10.5vw] font-["lores-9-plus-wide",sans-serif]' : ""}
                >
                  {char}
                </span>
              ))}
            </h2>
                <p className="relative mt-4 text-right max-w-[400px] ml-auto">
                    Introducing the ethereal masterpiece, an epitome of sartorial
                    splendor and avant-garde elegance. Behold, the breathtaking embodiment of haute couture opulence that transcends time and space.
                    As your fingertips caress the luxurious fabric, a symphony of tactile delight unfolds, weaving dreams into reality.
            </p>
          </div>
        </section>
    )
}

export default Compo
