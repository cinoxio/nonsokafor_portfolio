import React from "react";

export default function ScrollIndicator() {
  return (
    <div className="top-scroll-wrapper h-7 absolute flex justify-center flex-col items-center left-[50%] top-6 -translate-x-1/2 translate-y-2/2">
      <div className="top-scroll-text rotate-90 opacity-100 whitespace-nowrap text-[13px] tracking-[0.2em] mb-[30px]">
        <span className="top-scroll-txtIn">scroll</span>
      </div>
      <div className="top-scroll-line w-px h-20 bg-[#343434] overflow-hidden">
        <div className="top-scroll-line-in animate-purseY w-px h-full bg-[white]"></div>
      </div>
    </div>
  );
}
// absolute h-7 flex justify-center flex-col items-center absolute absolute -translate-x-2/4 left-2/4 right-[3px] bottom-[50px];


// export default function ScrollIndicator() {
//   return (
//     <div className="top-scroll-wrapper">
//       <div className="top-scroll-text">
//         <span className="top-scroll-txtIn">scroll</span>
//       </div>
//       <div className="top-scroll-line">
//         <div className="top-scroll-line-in"></div>
//       </div>
//     </div>
//   );
// }

