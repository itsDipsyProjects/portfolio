import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { BackArrow } from "../../BackArrow/BackArrow";
import { useInitialTextAnimation } from "../../../utils/useInitialTextAnimation";
import "./AboutMe.css"



export function AboutMe(){
    const containerRef = useRef(null);
    useInitialTextAnimation(containerRef);

      useGSAP(
        () => {
        gsap.from(".image", {
            x: 3000,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            clearProps: "transform",
        });
        },
        { scope: containerRef }
    );

    return(
        <div ref={containerRef} className="abtmeContainerRef">
            <h1 className="split">HI THERE</h1>
            <div className="abtMeMiddleSection">
                <div className="abtMeImageContainer">
                    <div className="abtMeImageOfMe1 image"></div>
                    <div className="abtMeImageOfMe2 image"></div>
                    <div className="abtMeImageOfMe3 image"></div>
                </div>
                <div className="abtMeTextContainer split"> 
                    <h1 className="split">A LITTLE ABOUT ME</h1>
                    <p className="abtMeText">
                        My name is Elliot Collins im a frontend/UX developer who is based in Malmö/Stockholm.
                    </p>
                    <br />
                    <p className="abtMeText">
                        I recently graduated with a bachelor of science in Media technology: Web based design and development.
                    </p>
                    <br />
                    <p className="abtMeText">
                       I would like to say that my main hobbies are design and programming and really it can be anything i just really enjoy the process.
                    </p>
                    <br />
                    <p className="abtMeText">
                        Otherwise i like producing sound and music. Climbing is also something i am really quite  passionate about so just give me a call if you wanna go out and send some rock.
                    </p>
                </div>
                <footer>
                    <BackArrow></BackArrow>
                </footer>
            </div>
        </div>
    )
}