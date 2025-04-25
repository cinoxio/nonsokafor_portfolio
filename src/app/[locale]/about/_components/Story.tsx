import type React from "react"

const Signature: React.FC = () => (
  <svg className="self-start mt-2 md:mt-[0.556vh]" width="100" height="50" viewBox="0 0 100 50">
    {/* Add path data for the signature here */}
    <path d="M10 25 C20 10, 40 10, 90 25" stroke="black" fill="none" />
  </svg>
)

const StorySection: React.FC = () => {
  return (
    <section id="section-two" data-scroll-section className="relative">
      <div className="flex flex-col md:flex-row md:h-screen md:w-[150vh]">
        <div className="flex flex-col items-center justify-center bg-white p-6 md:p-0 md:w-[45%] md:h-full md:px-[13.3vh]">
          <h2 className="font-serif text-4xl md:text-[5.33vh] leading-[98.49%] tracking-[-0.06em] font-medium whitespace-pre-wrap mb-8 md:mb-[7.3vh]">
            The story behind the brand
          </h2>
          <p className="font-sans text-base md:text-[2.35vh] leading-[150%] font-medium whitespace-pre-wrap mb-6 md:mb-[3vh]">
            York & Dante is a fashion brand from France with the vision of making the fashion industry more aware of
            environmental issues and promoting the use of recycled and eco-friendly materials in the fashion world. The
            100% organic cotton dresses are delicately printed using a cutting-edge screen printer and special non-toxic
            inks that will never fade or run even after washing. With a focus on community and great service, we donate
            2% of all our profits to help preserve the world we live in. We know you will love your fashion piece ... we
            certainly do!
          </p>
          <Signature />
          <p className="self-start font-sans text-sm md:text-[1.56vh] leading-[150%] font-medium mt-2 md:mt-[0.77vh]">
            Lead designer
          </p>
        </div>
        <div className="overflow-hidden h-[125vw] md:h-full md:w-[55%]">
          <div className="w-full h-full transform -translate-y-[2vh] md:-translate-x-[2.1vw] md:translate-y-0">
            <div
              data-scroll
              data-scroll-speed="-1"
              className="w-full h-[110%] md:w-[120%] md:h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486753/it/1_qteks0.png')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection



