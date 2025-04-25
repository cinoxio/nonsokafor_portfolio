import { stagger } from 'motion';

export const menuSlide = {
    initial: {
        x: "calc(100% + 100px)",
        staggerChildren: 0.1,
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
    },
    enter: {
        x: "0",
        staggerChildren: 0.1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

export const slide = {
    initial: {x: 80},
    enter: (i) => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: (i) => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}


interface SlideInVariants {
    initial: {
        opacity: number;
        y: number;
    };
    enter: (i: number) => {
        opacity: number;
        y: number;
        transition: {
            duration: number;
            delay: number;
            ease: [number, number, number, number];
        };
    };
    exit: {
        opacity: number;
        transition: {
            duration: number;
            type: string;
            ease: string;
        };
    };
}



export const slideIn: SlideInVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        staggerChildren: 0.1,
        transition: {
            duration: 0.5,
            delay: 0.75 + i * 0.1,
            ease: [0.215, 0.61, 0.355, 1],
        },
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' },
    },
};
