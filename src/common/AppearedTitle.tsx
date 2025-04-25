"use client"

import { useWindowSize } from "@/hooks/useWindowSize"
import clsx from "clsx"
import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"

// Custom hooks to replace the imported ones
interface UseMediaQuery {
    (query: string): boolean;
}

const useMediaQuery: UseMediaQuery = (query) => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const updateMatch = () => setMatches(media.matches);

        updateMatch();
        media.addEventListener("change", updateMatch);
        return () => media.removeEventListener("change", updateMatch);
    }, [query]);

    return matches;
};

const useRect = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!ref.current) return

    const updateRect = () => {
      const { width, height } = ref.current ? ref.current.getBoundingClientRect() : { width: 0, height: 0 }
      setRect({ width, height })
    }

    updateRect()
    window.addEventListener("resize", updateRect)
    return () => window.removeEventListener("resize", updateRect)
  }, [ref.current])

  return [ref, rect]
}

const useIntersection = (ref: React.RefObject<Element>, options: IntersectionObserverInit) => {
  const [intersection, setIntersection] = useState<IntersectionObserverEntry | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setIntersection(entry)
    }, options)

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref.current, options])

  return intersection
}

interface AppearTitleProps {
  children: React.ReactNode;
  visible?: boolean;
}

export function AppearTitle({ children, visible = true }: AppearTitleProps) {
  const el = useRef<HTMLSpanElement>(null)

  const [intersected, setIntersected] = useState(false)
  const intersection = useIntersection(el, {
    threshold: 1,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setIntersected(true)
    }
  }, [intersection])

  const { width } = useWindowSize()
  const isMobile = useMediaQuery("(max-width: 800px)")

  const [rectRef, rect] = useRect()

  useEffect(() => {
    if (!el.current || isMobile) return

    // Import SplitText dynamically to avoid SSR issues
    import("gsap/SplitText").then(({ SplitText }) => {
      gsap.registerPlugin(SplitText)

      const splitted = new SplitText(el.current, {
        type: "lines",
        lineThreshold: 0.3,
        tag: "span",
        linesClass: "title-line",
      })

      splitted.lines.forEach((line, i) => {
        line.style.setProperty("--i", i)
        const html = line.innerHTML
        line.innerHTML = ""
        const content = document.createElement("span")
        content.innerHTML = html
        line.appendChild(content)
      })

      return () => {
        splitted.revert()
      }
    })
  }, [width, rect, isMobile])

  return (
    <span
      ref={(node) => {
        if (el.current !== node) {
          el.current = node
        }
        rectRef(node)
      }}
      className={clsx("title-wrapper", intersected && visible ? "title-visible" : "")}
    >
      {children}
    </span>
  )
}

