'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { opacity, slideUp } from './anim';
import { useLoadingStore } from '@/lib/store';
import { useSearchParams } from 'next/navigation';

const words = [
    'Hello',
    'Bonjour',
    'Ciao',
    'Olà',
    'やあ',
    'Hallå',
    'Guten tag',
    'Hallo',
];

export default function Index() {
    const searchParams = useSearchParams();
    const pathname = searchParams.get('pathname') || '/';
    const { isLoading, setLoading, isFirstLoad, setFirstLoad } = useLoadingStore()
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const shouldShowPreloader = isLoading && (isFirstLoad || dimension.width > 0)

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
        if (isFirstLoad) {
            setLoading(true)
            // Mark that we've done the first load
            setFirstLoad(false)
        }
    }, [isFirstLoad, setFirstLoad, setLoading]);
// Handle route changes
  useEffect(() => {
    // When route changes, trigger preloader
    setLoading(true)
  }, [pathname, searchParams, setLoading])


    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(
            () => {
                setIndex(index + 1);
                setLoading(false);
            },
            index == 0 ? 1000 : 150
        );
    }, [index, setLoading]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
        dimension.height
    } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
        dimension.height
    }  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
        dimension.height
    } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };
  // If not loading or no dimensions yet, don't render the preloader
   if (!shouldShowPreloader) return null

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="fixed top-0 w-screen h-screen flex items-center justify-center z-50 bg-[#141516]"
        >
            {dimension.width > 0 && (
                <>
                    <motion.p
                        className="flex items-center text-white text-4xl absolute z-10"
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                    >
                        <span className="block w-2.5 h-2.5 bg-white rounded-full mr-2.5"></span>
                        {words[index]}
                    </motion.p>
                    <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
                        <motion.path
                            fill="#141516"
                            variants={curve}
                            initial="initial"
                            exit="exit"
                        ></motion.path>
                    </svg>
                </>
            )}
        </motion.div>
    );
}



// //
//   const beforePath =
//   "M17.5 28C17.5 43.1878 28.5681 55.5 27.5 55.5C12.3122 55.5 0 43.1878 0 28C0 12.8122 12.3122 0.5 27.5 0.5C27.5 0.5 17.5 12.8122 17.5 28Z"
//   const finalPath =
//   "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"



