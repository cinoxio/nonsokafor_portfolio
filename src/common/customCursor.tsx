"use client"


// components/CustomCursor.jsx
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Show cursor after first mouse movement
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Handle elements that should enlarge the cursor
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => setIsActive(true));
      el.addEventListener('mouseleave', () => setIsActive(false));
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', () => setIsActive(true));
        el.removeEventListener('mouseleave', () => setIsActive(false));
      });
    };
  }, [isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
      animate={{
        x: position.x,
        y: position.y,
        scale: isActive ? 1.5 : 1,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5
      }}
      style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
      }}
    />
  );
}
