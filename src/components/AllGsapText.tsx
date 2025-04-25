'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function AllText() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.box', {
      rotation: 360,
      ease: 'none',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.section.boxes',
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  });

  return (
    <main className="min-h-screen">
      <section className="section h-screen w-screen bg-green-500"></section>
      <section className="section h-screen w-screen boxes bg-blue-300">
        <div className="box gradient-green">Box 1</div>
        <div className="box gradient-purple">Box 2</div>
        <div className="box gradient-red">Box 3</div>
      </section>
      <section className="section h-screen w-screen boxes bg-orange-300"></section>
    </main>
  );
}
