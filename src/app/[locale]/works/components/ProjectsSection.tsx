// components/ProjectsSection.tsx
'use client';

import { projects, getProjectsByType } from '@/config/resume';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { motion } from 'motion/react';
import Project from './project';


const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
}

const ProjectsSection = () => {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal
  const modalContainer = useRef(null)
  const cursor = useRef(null)
  const cursorLabel = useRef(null)

  const xMoveContainer = useRef<((value: number) => void) | null>(null)
  const yMoveContainer = useRef<((value: number) => void) | null>(null)
  const xMoveCursor = useRef<((value: number) => void) | null>(null)
  const yMoveCursor = useRef<((value: number) => void) | null>(null)
  const xMoveCursorLabel = useRef<((value: number) => void) | null>(null)
  const yMoveCursorLabel = useRef<((value: number) => void) | null>(null)

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
}, [])

// Removed unused ManageModalParams interface
interface MoveFunctions {
    (value: number): void;
}

const moveItems = (x: number, y: number): void => {
    if (xMoveContainer.current) (xMoveContainer.current as MoveFunctions)(x);
    if (yMoveContainer.current) (yMoveContainer.current as MoveFunctions)(y);
    if (xMoveCursor.current) (xMoveCursor.current as MoveFunctions)(x);
    if (yMoveCursor.current) (yMoveCursor.current as MoveFunctions)(y);
    if (xMoveCursorLabel.current) (xMoveCursorLabel.current as MoveFunctions)(x);
    if (yMoveCursorLabel.current) (yMoveCursorLabel.current as MoveFunctions)(y);
};


const manageModal = (isOpen: boolean, index: number, x: number, y: number): void => {
    moveItems(x, y);
    setModal({ active: isOpen, index });
};


  return (
      <section onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY)
      }}
      className="w-screen flex items-center flex-col mt-[70px]"
    >
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center mb-[100px]">
        {projects.map((project, index) => {
          return <Project index={index} title={project.title} manageModal={manageModal} key={index} slug={project.slug} />
        })}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="h-[350px] w-[400px] fixed top-1/2 left-1/2 bg-white pointer-events-none overflow-hidden z-[3]"
              >
          <div
            style={{ top: index * -100 + "%" }}
            className="h-full w-full relative transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          >
            {projects.map((project, index) => {
              const { imageUrl, color } = project
              return (
                <div
                  className="h-full w-full flex items-center justify-center"
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image src={`/images/${imageUrl}`} width={300} height={0} alt="image" />
                </div>
              )
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className="w-[80px] h-[80px] rounded-full bg-[#455CE9] text-white fixed z-[3] flex items-center justify-center pointer-events-none"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className="w-[80px] h-[80px] rounded-full bg-transparent text-white fixed z-[3] flex items-center justify-center text-[14px] font-light pointer-events-none"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
     </section>
  );
};

export default ProjectsSection;
