import React from 'react'

function CubatoButton() {
  return (
      <button className='after:bg-black after:content-[""] after:absolute after:w-full after:h-full after:translate-y-full after:rounded-[50%_50%_0_0] after:left-0 after:bottom-0 after:transition-transform duration-[0.5s] ease-[cubic-bezier(0.4,0,0,1)] delay-[cubic-bezier(0.4,0,0,1)]
          hover:translate-y-[0%] hover:rounded-none
            group border h-[150px] w-[250px] overflow-hidden transparent outline-none focus:outline-none transition-transform duration-[0.5s] ease-[cubic-bezier(0.4,0,0,1)] p-5 rounded-[50%] border-solid border-black scale-x-100 hover:animate-[animate-scaleX_0.6s_cubic-bezier(0.4,0,0,1)]'>
        <span className='inline-block text-2xl font-medium overflow-hidden relative text-[black] group-hover:after:-translate-x-2/4 group-hover:after:translate-y-0 after:w-full after:h-full after:transition-transform after:duration-[0.5s]
          after:ease-[cubic-bezier(0.4,0,0,1)] after:content-[attr(data-text)] after:inline-block after:absolute after:z-[1] after:-translate-x-2/4 after:translate-y-full after:text-[white] after:left-2/4 after:bottom-0'
          data-text="Click me">Click me</span>
      </button>

  )
}


export default CubatoButton;





