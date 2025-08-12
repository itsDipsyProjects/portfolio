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
            duration: 1.2,
            y: 50,
            autoAlpha: 0,
            ease: "power2.out",
            stagger: 0.005   // 🔁 all animate at once
        });

        gsap.from(".image", {
            delay: 0.2,
            duration: 1,
            x: 3000,
            ease: "power2.out",
            stagger: 0.2  // 🔁 all animate at once
        })
        
    })
   return (
        <>
            <div>
                <h1 className="split">PAUL <br /> COLLINS</h1>
                <div className="middleSection2">
                    <div className="techStack">
                        <p className="split">TECH STACK</p>
                        <ul>
                            <li className="split">REACT</li>
                            <li className="split">NODE.JS</li>
                            <li className="split">THREE.JS</li>
                            <li className="split">GLSL</li>
                            <li className="split">FIGMA</li>
                        </ul>
                    </div>
                    <div className="projectDescription">
                        <p className="split">THIS PROJECT WAS DEVELOPMENT FOR PAUL COLLINS OWN DESIGN AGENCY</p>
                    </div>

                    <div className="date">
                        <p className="split">DATE</p>
                        <p className="split">2025/05/28</p>
                    </div>

                    <div className="firstImage image">
                      
                    </div>

                    <div className="secondImage image">
                
                    </div>

                    
                    <div className="thirdImage image">
                      
                    </div>

                    <div className="fourthImage image">
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectOne
