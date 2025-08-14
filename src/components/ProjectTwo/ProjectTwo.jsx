import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import "./ProjectTwo.css"
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
                <h1 className="split">ELLIOTS <br /> ISLAND</h1>
                <div className="middleSection2">
                    <div className="techStack">
                        <p className="split">TECH STACK</p>
                        <ul>
                            <li className="split">NODE.JS</li>
                            <li className="split">FIGMA</li>
                            <li className="split">TILED</li>
                            <li className="split">JAVASCRIPT</li>
                            <li className="split">CANVAS 2D</li>
                        </ul>
                    </div>
                    <div className="projectDescription">
                        <p className="split">ELLIOTS ISLAND WAS A WEBBASED 2D GAME BASED OF WHERE I LIVE AND ALSO A PORTFOLIOSITE</p>
                    </div>

                    <div className="date">
                        <p className="split">DATE</p>
                        <p className="split">2023/02/18</p>
                    </div>

                    <div className="firstImage2 image">
                      
                    </div>

                    <div className="secondImage2 image">
                
                    </div>

                    
                    <div className="thirdImage2 image">
                      
                    </div>

                    <div className="fourthImage2 image">
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectOne
