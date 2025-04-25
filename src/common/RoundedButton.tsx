"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from './Magnetic';

interface RoundedButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  [key: string]: any;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });

    if (circle.current) {
      timeline.current
        .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
        .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
    }

    return () => {
      if (timeline.current) {
        timeline.current.kill();
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) {
      timeline.current.tweenFromTo('enter', 'exit');
    }
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="rounded-[3em] border border-gray-400 cursor-pointer relative flex items-center justify-center py-[15px] px-[60px] overflow-hidden"
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              className: "relative z-10 transition-colors duration-400 ease-linear hover:text-white " + (child.props.className || "")
            });
          }
          return child;
        })}
        <div
          ref={circle}
          className="w-full h-[150%] absolute rounded-full top-full"
          style={{ backgroundColor }}
        ></div>
      </div>
    </Magnetic>
  );
};

export default RoundedButton;
