'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { menuSlide } from '../animation';
import LinkList from './LinkList';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import LocaleSwitcher from '@/common/switch/LocaleSwitcher';
import ThemeSwitch from '@/components/theme-switch';

type NavLink = {
    href: string;
    title: string;
};

export default function Nav() {
    const t = useTranslations('SideNav');
    const links: NavLink[] = t.raw('links');
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] =
        useState<string>(pathname);

    return (
        <motion.div
            aria-label="side-navigation"
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed grid top-0 right-0 h-screen bg-neutral-800 text-white z-10 transform transition-all duration-500 ease-in-out will-change origin-right"
        >
            <div className="box-border relative h-full p-24 flex flex-col justify-between">
                <div className="flex items-center gap-22 border-b w-fit">
                    <ThemeSwitch />
                    <LocaleSwitcher />
                </div>
                <div
                    onMouseLeave={() => setSelectedIndicator(pathname)}
                    className="flex flex-col text-6xl gap-3 mt-1"
                >
                    {links.map((data, index) => (
                        <LinkList
                            key={index}
                            data={{ ...data, index }}
                            isActive={selectedIndicator === data.href}
                            setSelectedIndicator={setSelectedIndicator}
                        />
                    ))}
                </div>

                <div className="mt-26">
                    <div className="mb-2 text-gray-400">EMAIL ADDRESS</div>
                    <div className="mb-6 text-white">nonsokafor@gmail.com</div>

                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-gray-800 transition"
                        >
                            LINKEDIN
                        </a>
                        <a
                            href="#"
                            className="border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-gray-800 transition"
                        >
                            YOUTUBE
                        </a>
                        <a
                            href=""
                            className="border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-gray-800 transition"
                        >
                            X/TWITTER
                        </a>
                        <a
                            href="#"
                            className="border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-gray-800 transition"
                        >
                            INSTAGRAM
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

//         </div> */}
//                 {/* <div className="flex w-full justify-between text-[12px] gap-6">
//                     <a>Awwwards</a>
//                     <a>Instagram</a>
//                     <a>Dribble</a>
//                     <a>LinkedIn</a>
//                 </div>
//                 <div className="menu-info-col">
//                     <p className="">info@nonsokafor.com</p>
//                     <p>+234 7026 7041 55</p>
//                 </div> */}
//                 {/* <Footer /> */}
//             </div>
//             {/* <Curve /> */}
//         </motion.div>

// import { motion } from 'framer-motion';
// import { links } from './data';
// import { perspective } from './anim';

// export default function Index() {
//   return (
//     <div className="flex flex-col justify-between pt-[100px] pr-[40px] pb-[50px] pl-[40px] h-full">
//       <div className="flex flex-col gap-[10px]">
//         {links.map((link, i) => {
//           const { title, href } = link;
//           return (
//             <div key={`b_${i}`} className="[perspective:120px] [perspective-origin:bottom]">
//               <motion.div
//                 custom={i}
//                 variants={perspective}
//                 initial="initial"
//                 animate="enter"
//                 exit="exit"
//               >
//                 <a href={href} className="no-underline text-black text-[46px]">
//                   {title}
//                 </a>
//               </motion.div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
