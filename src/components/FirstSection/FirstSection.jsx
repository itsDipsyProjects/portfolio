import React, { useRef, useState} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ProjectOne from "../ProjectOne/ProjectOne";

import "./FirstSection.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

export function FirstSection() {
    const firstSectionContainer = useRef();
    let [project1Clicked, setProject1Clicked] = useState();

    useGSAP(() => {
        const split = new SplitText(".split", { type: "words, chars" });

        gsap.from(split.chars, {
            delay: 1.2,           // ⏳ delay before animation starts
            duration: 1,
            y: 50,
            autoAlpha: 0,
            ease: "power2.out",
            stagger: 0.010     // 🔁 all animate at once
        });
        
        return () => split.revert(); // Clean up
    }, { scope: firstSectionContainer });

    function clearAndShowFirstProject() {
    
        const split = new SplitText(".split", { type: "words, chars" });
        gsap.to(".middleSection", {
            duration: 0.6,
            width: 0,
            autoAlpha:0,
            ease: "power2.in",
            stagger: 0,
        })
        gsap.to(split.chars, {
            duration: 0.6,
            y: -50,
            autoAlpha: 0,
            ease: "power2.in",
            stagger: 0.01,
            onComplete: () => {
                setProject1Clicked(true); 
            }
        });


    }


    if(project1Clicked){
        return(
            <><ProjectOne></ProjectOne></>
        )
    }
    
    else{
        return (
            <>        
                <div ref={firstSectionContainer} className="firstSectionContainer">
                    <div className="logoDiv">
                        <h1 className="logoText split">
                            ELLIOT<br /> COLLINS
                        </h1>
                        <nav>
                            <ul>
                                <li className="split">ABOUT</li>
                                <li className="split">CONTACT</li>
                                <li className="split">FUNSTUFF</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="middleSection">
                        <div className="projectsContainer">
                            <div onClick={clearAndShowFirstProject} className="firstProject"></div>
                            <div className="secondProject"></div>
                            <div className="thirdProject"></div>
                            <div className="fourthProject"></div>
                        </div>
                    </div>
    
                    <div className="bottomSection">
                        <p className="firstInfo split">FRONTEND DEV BASED IN MALMÖ</p>
                        <p className="secondInfo split">DOWNLOAD RESUME</p>
                    </div>
                </div>
            </>
        );

    }

}
