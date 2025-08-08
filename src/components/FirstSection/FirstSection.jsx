import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import "./FirstSection.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

export function FirstSection() {
    const firstSectionContainer = useRef();

    useGSAP(() => {
        const split = new SplitText(".split", { type: "words, chars" });

        gsap.from(split.chars, {
            delay: 1.2,           // ⏳ delay before animation starts
            duration: 1,
            y: 50,
            autoAlpha: 0,
            ease: "power2.out",
            stagger: 0.001         // 🔁 all animate at once
        });

        return () => split.revert(); // Clean up
    }, { scope: firstSectionContainer });

    return (
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
                <div className="projectDescriptions">
                    <p className="split">// HI Welcome //</p>
                    <div className="firstProjectText split"><span>//****//</span> I LOVE CREATIVE</div>
                    <div className="firstProjectText split"><span>//****//</span> CODING AND DEV</div>
                    <div className="firstProjectText split"><span>//****//</span> CHECK SOME OF MY</div>
                    <div className="firstProjectText split"><span>//****//</span> PROJECTS :D</div>
                </div>
                <div className="projectsContainer">
                    <div className="firstProject"></div>
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
    );
}
