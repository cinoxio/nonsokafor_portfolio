import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Next Js Creative Frontend Portfolio With GSAP, Framer Motion, Tailwind CSS, MongoDB,",
        short_name: "Chinonso-Portfolio",
        description: "Next Js Full Stack Portfolio With gsap, Framer Motion, Tailwind CSS, MongoDB",
        start_url: "/",
        display: "standalone",
        background_color: "#000",
        theme_color: "#000",
        icons: [
            {
                src: "/logo/logo-100.png",
                sizes: "100x100",
                type: "image/png"
            }
        ]
    }
}
