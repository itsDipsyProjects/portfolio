import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { BackArrow } from "../../BackArrow/BackArrow";
import { useInitialTextAnimation } from "../../../utils/useInitialTextAnimation";
import { FirstSection } from "../FirstSection/FirstSection";


export function AboutMe(){
    const containerRef = useRef(null);
    useInitialTextAnimation(containerRef);
    return(
        <div ref={containerRef} className="abtmeContainerRef">
            <h1 className="split">HI IM ELLIOT COLLINS</h1>
        </div>
    )
}