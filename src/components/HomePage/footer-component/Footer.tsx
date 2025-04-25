"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Paragraph } from '@/components/Text';
import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';
import { HeroHeader } from '../hero-section/HeroHeader';

export const footerLinks = [
    { title: 'Home', url: '#home' },
    { title: 'Services', url: '#services' },
    { title: 'Projects', url: '#projects' },
    { title: 'About', url: '#about' },
    { title: 'Contact', url: '#contact' },
];

export const SocialLinks = [
    { title: 'Twitter', url: 'x.com/nonso' },
    { title: 'Github', url: '#services' },
    { title: 'Linkedn', url: 'linkedn.com/chinonso-okafor' },
    { title: 'Behance', url: 'behance.com/cibonso' },
    { title: 'Dribble', url: 'dribble.com/cibonso' },
    { title: 'Awaaard', url: 'awaaard.com/cibonso' },
];

const Footer = () => {

const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (


// .contact{
//     color: white;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: #141516;
//     position: relative;
//     .body{
//         padding-top: 200px;
//         width: 100%;
//         max-width: 1800px;
//         background-color: #141516;
//    <div
//             className="relative min-h-screen w-full bg-black bg-opacity-90 bg-blend-overlay"
//             style={{ backgroundImage: "url('/background-texture.jpg')" }}
//         >

//         </div>

        <footer style={{y}} ref={container} className="w-screen flex flex-col items-center justify-center relative overflow-hidden bg-opacity-90 bg-blend-overlay">
            <div className="mx-auto pt-12 w-full screen-max-width z-10">
                {/* <div className="border-t border-gray-800 py-10"> */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2">
                        {/* SITEMAP */}

                        <div className="flex gap-24">
                            <div>
                                <h3 className="text-xs font-semibold text-gray-400 mb-4">
                                    SITEMAP
                                </h3>
                                <ul className="space-y-0">
                                    {footerLinks.map((link) => {
                                        return (
                                            <li
                                                id=""
                                                key={link.title}
                                                className=""
                                            >
                                                <Link
                                                    href={link.url}
                                                    className="hover:text-gray-300"
                                                >
                                                    {link.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* COMPANY */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 mb-4">
                                    SOCIAL
                                </h3>
                                <ul className="space-y-0">
                                    {SocialLinks.map((social) => {
                                        return (
                                            <li key={social.title}>
                                                <Link
                                                    href={social.url}
                                                    className="hover:text-gray-300"
                                                >
                                                    {social.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* CONTACT */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 mb-4">
                                    CONTACT
                                </h3>
                                <ul className="space-y-0">
                                    <li>
                                        <Link
                                            href="/faq"
                                            className="hover:text-gray-300"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/support"
                                            className="hover:text-gray-300"
                                        >
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* NEWSLETTER */}
                        <div className="max-w-2xl place-content-end flex flex-col gap-2">
                            <h3 className="text-sm font-semibold text-gray-400 mb-4">
                                NEWSLETTER
                            </h3>
                            <p className="mb-4">
                                You read this far, might as well sign up.
                            </p>
                            <form className="flex gap-2">
                                <Input
                                    type="text"
                                    placeholder="First Name"
                                    className="bg-transparent border-gray-800"
                                />
                                <Input
                                    type="email"
                                    placeholder="john.doe@osmo.supply"
                                    className="bg-transparent border-gray-800"
                                />
                                <Button
                                    variant="outline"
                                    className="whitespace-nowrap"
                                >
                                    Sign up
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-[40vh] pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-gray-400">
                                ©2025 CHINONSO OKAFOR. ALL RIGHTS RESERVED.
                            </p>
                            <div className="flex items-center gap-6">
                                <Link
                                    href="https://linkedin.com"
                                    className="text-sm text-gray-400 hover:text-white"
                                >
                                    LINKEDIN
                                </Link>
                                <Link
                                    href="https://instagram.com"
                                    className="text-sm text-gray-400 hover:text-white"
                                >
                                    INSTAGRAM
                                </Link>
                                <Link
                                    href="https://twitter.com"
                                    className="text-sm text-gray-400 hover:text-white"
                                >
                                    X/TWITTER
                                </Link>
                            </div>
                            <p className="text-xm text-gray-400">
                                a thing by decibon
                            </p>
                        {/* </div> */}
                    </div>
                </div>


                <div className="absolute inset-0  flex items-center justify-center  -z-30 -bottom-0">
                    <HeroHeader />
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <HeroHeader/>
            </div>
        </footer>
    );
};

export default Footer;

//  <main className="relative min-h-screen w-full bg-black bg-opacity-90 bg-blend-overlay"
//      style={{ backgroundImage: "url('/background-texture.jpg')" }}>

//             </main>
