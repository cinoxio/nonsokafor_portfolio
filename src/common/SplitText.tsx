"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react";
import {TextPlugin} from "gsap/TextPlugin";"


"use client"

import { gsap } from "gsap"
import SplitType from "split-type";

const SplitText = () => {

    const text = 'GSAP SplitText + React = \uD83D\uDC9A'

    gsap.registerPlugin(SplitText)

    const component = useRef<HTMLDivElement>(null); // a ref for the root-level element; we use selector text for everything else.
    useGSAP(() => {

    let split = SplitType.create("h1", { type: "words" });

        gsap.from(split.words, { // <- selector text, scoped to this component!
            opacity: 0,
            y: 50,
            ease: "power2.out",
            duration: 0.8,
            stagger: 0.1
        });


    }, { scope: component });



    return (
        <div ref={component} className="font-sans text-center text-white bg-black ">
            <h1 className="text-5xl font-bold">{text}</h1>
        </div>
    )

}
