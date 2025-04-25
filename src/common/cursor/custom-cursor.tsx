// components/CustomCursor.jsx
'use client'; // Use client directive for client-side component
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const trailLength = 10;
    interface Point {
      x: number;
      y: number;
    }

    const trail: Point[] = [];
    let animationFrameId: number;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      trail.push({ x, y });

      if (trail.length > trailLength) {
        trail.shift();
      }
    };

    // Draw cursor function
    const drawCursor = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trail.length > 1) {
        for (let i = 0; i < trail.length - 1; i++) {
          const startPoint = trail[i];
          const endPoint = trail[i + 1];
          const alpha = 1 - i / trail.length;

          ctx.beginPath();
          ctx.moveTo(startPoint.x, startPoint.y);
          ctx.lineTo(endPoint.x, endPoint.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // // Draw a circle at the current mouse position
        // const currentPoint = trail[trail.length - 1];
        // ctx.beginPath();
        // ctx.arc(currentPoint.x, currentPoint.y, 5, 0, Math.PI * 2);
        // ctx.fillStyle = 'white';
        // ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawCursor);
    };

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Start the animation
    drawCursor();

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
    cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-50 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
