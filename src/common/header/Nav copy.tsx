'use client';

import { routes } from '@/constants/data';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LinkItems from './LinkItems';
import { menuSlide } from './animation';

export default function Nav() {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex flex-col items-start justify-start mx-auto box-border h-full p-[100px]"
        >
            <div
                onMouseLeave={() => {
                    setSelectedIndicator(pathname);
                }}
                className="flex text-[56px] gap-3 mt-20"
            >
                <div className="text-[#a59292] block border-b-[1px] border-b-solid border-b-[#817575] uppercase text-[11px] mb-8">
                    <p>Navigation</p>
                </div>
                <div className="">
                    {routes.map((data, index) => {
                        return (
                            <LinkItems
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}
                            ></LinkItems>
                        );
                    })}
                </div>

                <div className="menu-info">
                    <div>
                        <div className="menu-info-col flex-1 flex flex-col justify-end">
                            <a href="#">x &#8599;</a>
                            <a href="#">Behance &#8599;</a>

                            <a href="#">Github &#8599;</a>
                            <a href="#">Dribble &#8599;</a>
                        </div>
                        <div className="menu-info-col">
                            <p className="">info@nonsokafor.com</p>
                            <p>+234 7026 7041 55</p>
                        </div>
                    </div>
                    <div className="text-[#a59292] block mt-6 border-b-[1px] border-b-solid border-b-[#817575] uppercase text-[11px] mb-12">
                        <div className="flex w-full justify-between text-[12px] gap-10">
                            <a>Awwwards</a>
                            <a>Instagram</a>
                            <a>Dribble</a>
                            <a>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-preview flex flex-[4] justify-end items-end">
                <p>View Showreel</p>
            </div>

            {/* <Footer /> */}
            {/* <Curve /> */}
        </motion.div>
    );
}
