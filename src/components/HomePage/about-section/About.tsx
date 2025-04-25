'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import ProfileImage from './profileImage';
import Title from './header-title';
import Image from 'next/image';
import MainButton from '@/common/mainButton';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        gsap.set('#about-frame', {
            // borderRadius: '10% 10% 36% 39% / 10% 10% 55% 56%', // Curve on the bottom left
            // clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)',
        });
        gsap.from('#about-frame', {
            // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            // borderRadius: '0% 0% 0% 0%',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#about-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            },
        });
    });

    return (
        // color: #dfd3c3;
        // // mix-blend-mode: difference;
        // background-color: #e4e2db;
        // background-color: #171717;

        <section
            id="about-frame"
            className="relative min-h-screen z-50 w-screen h-full dark:text-white mx-auto overflow-hidden"
        >
            <div className="screen-max-width py-8 md:py-16">
                <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="flex items-start md:col-span-2 lg:col-span-2">
                        <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6 rotate-45 hidden md:block"
                        >
                            <path
                                fill="currentColor"
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                            />
                        </svg>
                    </div>
                    <div className="flex gap-6 col-span-5 md:col-span-3 lg:col-span-3">
                        <Title />
                    </div>
                </div>

                <div className="container grid grid-cols-5 gap-8 h-full lg:gap-16 relative mt-20">
                    <div className="col-span-5 md:col-span-2 h-full">
                        <div className="flex flex-col place-content-baseline items-baseline justify-end h-full">
                            <div className="relative w-full max-w-[560px] place-self-end flex justify-center items-baseline h-full overflow-hidden">
                                <ProfileImage />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3 col-span-5">
                        <div className="space-y-14">
                            <p className="text-xl text-[#E5E7EB] max-w-2xl">
                                With a passion for design and development, I
                                take projects from ideation to launch, ensuring
                                a seamless journey that leaves a lasting
                                positive impact on the digital landscape and
                                your business.
                            </p>

                <div className="flex items-start py-20 gap-12 col-span-5 md:col-span-3 lg:col-span-3">
                        <h2 className="text-secondary text-sm lg:text-base uppercase"> (ABOUT ME)</h2>
                        <p className="text-gray-600 text-base lg:text-lg leading-[120%] text-balance max-w-[500px] flex-end">
                        Creating great web experiences is my primary
                                    focus. I ensure each project leaves users
                                    with a feel-good sensation through
                                    meticulous attention to detail and
                                    user-centric design principles. When I'm not
                                    immersed in web development and design, you
                                    can find me sharing insights about my
                                    freelance journey on YouTube, buldering,
                                    playing music, or tending to my cherished
                                    houseplants.
                                <Link className='block hover:underline hover:underline-offset-1' href="/about">Read More</Link>
                           </p>
                       </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
