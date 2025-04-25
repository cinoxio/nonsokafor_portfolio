'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const HomePage = () => {
  const container = useRef();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: '.box-c',
        pin: true,
        start: 'center center',
        end: '+=300',
        markers: true,
      });
    },
    {
      scope: container,
    }
  );

  return (
    <main className="home" ref={container}>
      <div className="header">
        <h1 className="title">ScrollSmoother NextJS App Folder</h1>
        <p>
          Simple example for setting up GSAP ScrollSmoother in a NextJS App
          using the{' '}
          <strong>
            <i>App</i>
          </strong>{' '}
          Router
        </p>
      </div>
      <div className="box box-a gradient-blue" data-speed="0.5">
        a
      </div>
      <div className="box box-b gradient-orange" data-speed="0.8">
        b
      </div>
      <div className="box box-c gradient-purple" data-speed="1.5">
        c
      </div>
      <div className="line"></div>
    </main>
  );
};

export default HomePage;


useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          scroller: '.App' or ref,
          start: 'top top',
          scrub: 1,
        },
      });

      tl.to(textColRef.current, {
        x: 200,
        opacity: 0,
      });
      tl.to(
        imageWrapperRef.current,
        {
          x: -200,
          opacity: 0,
        },
        0
      );
    });
    return () => ctx.revert();
  }, []);
