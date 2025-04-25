'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import ReactLenis from 'lenis/react';
import Link from 'next/link';
import { ProjectType } from '@/config/resume';
import { useEffect, useRef } from 'react';

// In ProjectPage:

// Either change in ProjectsClient:
interface ProjectsClientProps {
    project: ProjectType;
    nextProject: { slug: string; title: string };
    prevProject: { slug: string; title: string }; // Match the prop name from parent
}

// Or change in ProjectPage:

const ProjectsClient = ({
    project,
    nextProject,
    prevProject,
}: ProjectsClientProps) => {
    const projectNextRef = useRef<HTMLAnchorElement>(null);
    const projectBarRef = useRef<HTMLDivElement>(null);
    const projectPrevRef = useRef<HTMLAnchorElement>(null);
    const projectDescriptionRef = useRef<HTMLDivElement>(null);
    const nextProjectProgressBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        //         tl.call(() => (
        //             window.location.href = `/projects/${nextProject.slug}`;
        //     ));
        // }
        // }
    });

    return (
        <ReactLenis root>
            <main className="relative min-h-screen w-full project-page">
                <div className="project-nav z-[999999999] fixed -translate-x-2/4 w-[50vw] justify-between gap-[2em] p-4 left-2/4 top-[10]">
                    <div className="link flex items-center gap-[0.5em] p">
                        <span>&#8592; &nbsp;</span>
                        <Link href={`/projects/${prevProject.slug}`}>
                            Previous
                        </Link>
                    </div>

                    <div
                        className="project-page-scroll-progress"
                        ref={nextProjectProgressBarRef}
                    >
                        <p>{project.title}</p>

                        <div className="project-page-scroll-progress-bar"></div>
                    </div>
                    <div className="link bg-[#cbcbcb] rounded-lg ">
                        <Link href={`/projects/${nextProject.slug}`}>Next</Link>
                        <span>&#8594;&nbsp;</span>
                    </div>
                </div>
                <div className="project-hero">
                    <h1>{project.title}</h1>
                    <p id="project-description">{project.description}</p>
                </div>
                <div className="project-images">
                    {/* {project.images &&
                        project.images.map((image, index) => (
                            <div key={index} className="project-img">
                                <Image
                                    className="size-full object-fit"
                                    src={image}
                                    alt={project.title}
                                />
                            </div>
                        ))} */}
                </div>
                <div className="project-footer">
                    <h1>{nextProject.title}</h1>
                    <div className="project-footer-copy">
                        <p>Next Project</p>
                    </div>
                    
                    <div className="next-project-progress">
                        <div className="next-project-progress-bar"></div>
                    </div>
                </div>
            </main>
        </ReactLenis>
    );
};

export default ProjectsClient;

<style>
    {' '}
    {`
 body: {
 font-family: "P P Neue Montreal", sans-serif;
 color: #1a1a1a;
}
 h1{
 font-size: 7.5vw;
 font-weight: 500;
 }

 a{
 text-decoration: none;
 text-transform: uppercase;
 font-family: "Akkurat Mono", sans-serif;
 font-weight: 600;
 font-size: 14px;
 color: #1a1a1a;
 -webkit-font-smoothing: antialiased;
 }

 span{
 position: relative;
 top: -0.075em;
 font-family: "PP Neue Montreal", sans-serif;
 font-size: 16px;
 font-weight: 600;
 font-size: 14px;
font-weight: 500;
 }

img {
width: 100%;
height: 100%;
object-fit: cover;
 }


 .link {
 display: flex;
 align-items-center;
 gap: 0.5em;
 padding: 0.1em
 }

 .home{
 width: 100vw;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;

 }

 .projects-list{
 position: absolute;
 top: 0;
 left: 0;
 transform: translate(-50%, -50%);
 list-style: none;
 display: flex;
 flex-direction: column;
 gap: 0.5em;
 padding: 1rem;
 }

 .project-nav{
    position: fixed;
    top: 10;
    left: 50%;
    transform: translate(-50%);
    width: 50vw;
    justify-content: space-between;
    gap: 2em;
     padding: 1rem;
 }

 .project-nav .link{
 border-radius: 0.5rem;
 background-color: #cbcbcb;

    }

 .project-page-scroll-progress{
 position: relative;
 flex:2;
 height: 30px;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 0.5rem;
 border: 1px solid #cbcbcb;
 overflow: hidden;
 background-color: rgba(255, 255, 255, 0.25);
 backdrop-filter: blur(20px);
 }

 .project-page-scroll-progress-bar{
 position:absolute;
 top:0;
 left: 0;
 width: 100%;
 height: 1px;
 background-color: #cbc6be;
 }

 .project-hero{
 display: flex;
 flex-direction: column;
 gap: 1rem;
 padding: 1rem;
 }

 .project-images{
 display: flex;
 flex-direction: column;
 gap: 1rem;
 padding: 1rem;
 }

 .project-img{
 display: flex;
 flex-direction: column;
 gap: 1rem;
 padding: 1rem;
 }

 .project-footer{
 display: flex;
 flex-direction: column;
 gap: 1rem;
 padding: 1rem;
 }

    `}
</style>;
// 'use client';

// import Image from 'next/image';
// import {Card} from "@/components/ui/card"

// const ProjectsClient = ({project}) => {

//     return (
//         <main className="relative min-h-screen w-full">
//             <section className="flex flex-col px-8 pt-24 md:pt-32 relative">
//                 <h1 className="text-5xl md:text-7xl font-bold mb-12">
//                     Monolith Studio
//                 </h1>

//                 <Card className="relative w-full h-96 md:h-screen md:max-h-[60vh] flex justify-center">
//                     <div className="relative w-full max-w-4xl h-full">
//                         <Image
//                             src="/monolith-display.jpg"
//                             alt="Monolith Studio Display"
//                             layout="fill"
//                             objectFit="contain"
//                             priority
//                             className="z-0"
//                         />
//                     </div>
//                 </Card>

//                 {/* Description */}
//                 <div className="max-w-lg mt-8">
//                     <p className="text-base leading-relaxed">
//                         Monolith Tattoo Studio is a contemporary studio based in
//                         Brooklyn, NYC, dedicated to crafting timeless, unique
//                         works of art through tattooing.
//                     </p>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="absolute bottom-8 right-8 flex gap-4">
//                 <a
//                     href="https://monolith-studio.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm opacity-80 hover:opacity-100 transition-opacity"
//                 >
//                     Live website
//                 </a>
//                 <a
//                     href="https://behance.net/monolith-studio"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm opacity-80 hover:opacity-100 transition-opacity"
//                 >
//                     Behance
//                 </a>
//             </footer>
//         </main>
//     );
// };

// export default ProjectsClient;

{
    /* <main className="relative min-h-screen w-full bg-black bg-opacity-90 bg-blend-overlay"
            style={{ backgroundImage: "url('/background-texture.jpg')" }}></main> */
}
