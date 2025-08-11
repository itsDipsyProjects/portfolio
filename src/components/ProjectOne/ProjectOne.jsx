import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import "./ProjectOne.css"
function ProjectOne(){
    
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(SplitText);

    useGSAP(() => {
        const split = new SplitText(".split", { type: "words, chars" });
        gsap.from(split.chars, {
            delay: 0.2,           // ⏳ delay before animation starts
            duration: 1,
            y: 50,
            autoAlpha: 0,
            ease: "power2.out",
            stagger: 0.010     // 🔁 all animate at once
        });
        
    })
    return(
        <>
            <div>
                <h1 className="split">Paul Collins</h1>
            </div>
        </>
    )
}

export default ProjectOne
