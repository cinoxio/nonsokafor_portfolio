"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, GalleryHorizontalEnd, Gauge, Network, Wifi } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FromElementor() {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    panelRefs.current = [];
  }, []);

  const addToRefs = (el) => {
    if (el && !panelRefs.current.includes(el)) {
      panelRefs.current.push(el);
    }
  };

  useEffect(() => {
    const sections = panelRefs.current;

    if (sections.length > 0) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.05,
          },
          end: "+=4500",
          start: "top top",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase">Our Work</h1>
        </div>
      </section>

      <div className="container flex snap-x w-full overflow-x-scroll" ref={containerRef}>
        <div
          className="panel snap-start shrink-0 w-full h-screen flex items-center justify-center bg-cover bg-center text-white text-4xl font-bold"
          style={{ backgroundImage: `url(/placeholder.svg?height=800&width=1200)` }}
          ref={addToRefs}
        >
          Panel 1
        </div>
        <div
          className="panel snap-start shrink-0 w-full h-screen flex items-center justify-center bg-cover bg-center text-white text-4xl font-bold"
          style={{ backgroundImage: `url(/placeholder.svg?height=800&width=1200)` }}
          ref={addToRefs}
        >
          Panel 2
        </div>
        <div
          className="panel snap-start shrink-0 w-full h-screen flex items-center justify-center bg-cover bg-center text-white text-4xl font-bold"
          style={{ backgroundImage: `url(/placeholder.svg?height=800&width=1200)` }}
          ref={addToRefs}
        >
          Panel 3
        </div>
        <div
          className="panel snap-start shrink-0 w-full h-screen flex items-center justify-center bg-cover bg-center text-white text-4xl font-bold"
          style={{ backgroundImage: `url(/placeholder.svg?height=800&width=1200)` }}
          ref={addToRefs}
        >
          Panel 4
        </div>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Let's TALK ABOUT YOU, YOUR COMPANY, YOUR PRODUCT, AND YOUR GOALS.
            </h2>
          </div>
          <Card className="w-full max-w-sm">
            <CardContent className="p-4">
              <div className="grid items-start">
                <div className="text-sm flex items-start md:items-center gap-4 p-4 border rounded-lg">
                  <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
                    <Network className="w-5 h-5" />
                  </div>
                  <div className="grid gap-1">
                    <div>
                      <span className="font-medium">Name</span>:
                    </div>
                    <div className="text-xs text-muted-foreground">Your Name.</div>
                  </div>
                </div>
                <div className="text-sm flex items-start md:items-center gap-4 p-4 rounded-lg">
                  <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div className="grid gap-1">
                    <div>
                      <span className="font-medium">Email</span>:
                    </div>
                    <div className="text-xs text-muted-foreground">Your Email.</div>
                  </div>
                </div>
                <div className="text-sm flex items-start md:items-center gap-4 p-4 rounded-lg">
                  <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div className="grid gap-1">
                    <div>
                      <span className="font-medium">Message</span>:
                    </div>
                    <div className="text-xs text-muted-foreground">Your Message.</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
