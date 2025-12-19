import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { useInitialTextAnimation } from "../../../utils/useInitialTextAnimation";
import "./ProjectOne.css"
function ProjectOne(){
    const containerRefFirst = useRef(null);
    const containerRefSecond = useRef(null);
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(SplitText);
    
    useInitialTextAnimation(containerRefFirst);
    useInitialTextAnimation(containerRefSecond);

    useGSAP(() => {
        gsap.from(".image", {
            delay: 0.2,
            duration: 1,
            x: 3000,
            ease: "power2.out",
            stagger: 0.2 
        })
        
    })
   
    return (
        <>
            <div>
                <h1 ref={containerRefSecond} >
                    <span className="split">PAUL</span>
                    <br />
                    <span className="split">COLLINS</span>
                </h1>
                <div ref={containerRefFirst} className="middleSection2">
                    <div className="techStack">
                        <p className="split">TECH STACK</p>
                        <ul>
                            <li className="split">REACT</li>
                            <li className="split">NODE.JS</li>
                            <li className="split">THREE.JS</li>
                            <li className="split">FIGMA</li>
                        </ul>
                    </div>
                    <div className="projectDescription">
                        <p className="split">THIS PROJECT WAS DEVELOPMENT FOR PAUL COLLINS OWN DESIGN AGENCY</p>
                    </div>

                    <div className="date">
                        <p className="split">DATE</p>
                        <p className="split">2025/05/12</p>
                    </div>

                    <div className="firstImage image"></div>
                    <div className="secondImage image"></div>
                    <div className="thirdImage image"></div>
                    <div className="fourthImage image"></div>
                </div>
            </div>
        </>
    )
}

export default ProjectOne
