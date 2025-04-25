import Image from 'next/image';
// export default function AboutMe(){
//     return (
//         <div className="h-full z-[999] min-h-screen w-screen m-auto bg-red-500 overflow-hidden">
//             <h1 className="text-2xl">About Me</h1>
//         </div>
//     )
// }




const AboutMe = () => {
  return (
    <div className="min-h-screen w-screen z-[9999] m-auto flex flex-col md:flex-row items-start gap-8 bg-black text-white p-8">
      {/* Left Side - Image */}
      <div className="w-full md:w-2/5 mb-8 md:mb-0">
              <div className="bg-gray-300 rounded-md overflow-hidden">
                  <div className='aspect-[6/8]'>

          <Image
          fill
            src="/api/placeholder/450/600"
            alt="Professional portrait"
            className="w-full grayscale"
          />

                  </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-3/5 flex flex-col gap-8">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting positive impact on the digital landscape and your business.
          </h1>
        </div>

        {/* About Me Section */}
        <div className="mb-8">
          <h2 className="text-gray-400 mb-4 uppercase tracking-wider text-sm">(ABOUT ME)</h2>
          <p className="text-xl font-light leading-relaxed">
            Creating great web experiences is my primary focus. I ensure each project leaves users with a feel-good sensation through meticulous attention to detail and user-centric design principles.
          </p>
        </div>

        {/* Personal Section */}
        <div>
          <p className="text-xl font-light leading-relaxed">
            When I'm not immersed in web development and design, you can find me sharing insights about my freelance journey on YouTube, bouldering, playing music, or tending to my cherished houseplants.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="bg-gray-700 hover:bg-gray-600 transition-colors text-white py-4 px-8 rounded-full flex items-center gap-2">
            BOOK A CALL
            <span className="text-lg">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
