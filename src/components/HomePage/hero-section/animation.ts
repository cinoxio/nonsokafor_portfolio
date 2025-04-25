export const slideUp = {
    initial: {
        y: 300,
    },
    enter: {
        y: 0,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
    },
};


// const HeroSection = () => {
//     const container = useRef(null);

    // //
    // const beforePath =
    //     'M17.5 28C17.5 43.1878 28.5681 55.5 27.5 55.5C12.3122 55.5 0 43.1878 0 28C0 12.8122 12.3122 0.5 27.5 0.5C27.5 0.5 17.5 12.8122 17.5 28Z';
    // const finalPath =
    //     'M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z';

//     useGSAP(() => {});

//     return <section ref={container} className="w-screen h-dvh"></section>;
// };

// export default HeroSection;
