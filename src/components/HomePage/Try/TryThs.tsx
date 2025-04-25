'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import RotatingText from '@/components/svg/RotatingText';
import locomotiveScrub from '@/animations/utils/locomotive-scrub';
import Image from 'next/image';

type SectionThreeProps = {
  scroll: any;
};

const SectionThree: React.FC<SectionThreeProps> = ({ scroll }) => {
  let progress: number;
  const ref = useRef<HTMLDivElement>(null);
  const SVGRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isOnScreen = useIntersectionObserver(ref, 0.125);

  useEffect(() => {
    if (isOnScreen && imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 4,
        ease: 'expo.out',
        clipPath: 'inset(0% 0% 0% 0%)',
      });
    }
  }, [isOnScreen]);

  useEffect(() => {
    if (scroll) {
      const tl = gsap.timeline({ paused: true });
      tl.to(SVGRef.current, {
        duration: 8,
        rotate: 720,
      });
      locomotiveScrub(scroll, 'section-three', progress, tl);
    }
  }, [scroll]);

  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-id="section-three"
    >
      <div className="relative flex bg-[#121212] text-white md:h-screen md:w-[150vh] md:justify-between flex-col md:flex-row">
        <div className="flex flex-col items-center z-10 p-10 md:h-full md:w-[51%] md:p-[20vh_6.44vh_0_13.44vh]">
          <h2 className="font-serif font-semibold text-5xl leading-tight tracking-tighter whitespace-pre-wrap mb-10 md:text-8xl md:mb-[6.3vh]">
            Made from the heart, for you
          </h2>
          <p className="text-[#dddddd] font-medium text-base leading-relaxed text-justify whitespace-pre-wrap md:text-[2.35vh]">
            These days, we are all looking for a place where we feel
            good. Fashion should be an accessory to who you are as
            well as a reflection of your personality. It is not just
            what you put on but it is also how you put it on. It's
            about the details that make all the difference.
          </p>
        </div>
        <div
          ref={ref}
          className="relative h-full w-fit flex justify-end p-6 pb-32 md:p-[20vh_13.33vh_0_0]"
        >
          <div className="overflow-hidden w-full ml-16 md:ml-0 md:h-[71.6vh]">
            <Image
              alt=""
              ref={imageRef}
              className="h-full w-full md:w-auto scale-150 origin-center"
              style={{ clipPath: 'inset(0% 100% 0% 0%)' }}
              src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1642270471/it/2_sakgkt.png"
            />
          </div>
          <div
            ref={SVGRef}
            className="absolute left-6 bottom-16 w-32 h-32 md:left-[-10.12vh] md:bottom-[10vh] md:w-[20.24vh] md:h-[20.24vh]"
          >
            <RotatingText width="100%" height="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
