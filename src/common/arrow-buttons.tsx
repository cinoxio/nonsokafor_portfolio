import { SVGProps } from "react";

// This is a placeholder for the SVG component
// Replace with your actual SVG implementation
export default function Arrow(props: SVGProps<SVGSVGElement>) {
    return (
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1 9L9 1M9 1H1M9 1V9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
}

