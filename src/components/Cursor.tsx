"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2
      });
    };

    const handleBoxHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const box = target.closest('.box');
      if (!box || !cursor) return;

      const image = box.getAttribute('data-image');
      if (!image) return;

      gsap.to(cursor, {
        width: '470px',
        height: '370px',
        borderRadius: '0',
        backgroundImage: `url(${image})`,
        duration: 0.3
      });
    };

    const handleBoxLeave = () => {
      if (!cursor) return;
      gsap.to(cursor, {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundImage: 'none',
        duration: 0.3
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('.box').forEach(box => {
      box.addEventListener('mouseenter', handleBoxHover);
      box.addEventListener('mouseleave', handleBoxLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('.box').forEach(box => {
        box.removeEventListener('mouseenter', handleBoxHover);
        box.removeEventListener('mouseleave', handleBoxLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor" />;
}