import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import "./ProjectThree.css"
function ProjectThree(){
    
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
                <h1 className="split">SMASHER<br />WORLD</h1>
                <div className="middleSection2">
                    <div className="techStack">
                        <p className="split">TECH STACK</p>
                        <ul>
                            <li className="split">NODE.JS</li>
                            <li className="split">RAPIER 3D</li>
                            <li className="split">THREE.js</li>
                            <li className="split">GLSL</li>
                            <li className="split">JavaScript</li>
                        </ul>
                    </div>
                    <div className="projectDescription">
                        <p className="split">THIS PROJECT IS IN THE MAKING AND GOING TO BE A TRANING GROUNDS FIGHTING EXPIRENCE</p>
                    </div>

                    <div className="date">
                        <p className="split">DATE</p>
                        <p className="split">2023/02/18</p>
                    </div>

                    <div className="firstImage3 image">
                      
                    </div>

                    <div className="secondImage3 image">
                
                    </div>

                    
                    <div className="thirdImage3 image">
                      
                    </div>

                    <div className="fourthImage3 image">
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectThree
