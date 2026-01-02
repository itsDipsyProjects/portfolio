import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { BackArrow } from "../../BackArrow/BackArrow";
import { useInitialTextAnimation } from "../../../utils/useInitialTextAnimation";
import "./ProjectOne.css";


gsap.registerPlugin(useGSAP, SplitText);

function ProjectOne() {
  const mainContainer = useRef(null);
  const containerRefFirst = useRef(null);
  const containerRefSecond = useRef(null);
  const footerRefrence = useRef(null);
  useInitialTextAnimation(containerRefFirst);
  useInitialTextAnimation(containerRefSecond);
  useInitialTextAnimation(footerRefrence);

  useGSAP(
    () => {
      gsap.from(".image", {
        x: 3000,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        clearProps: "transform",
      });
    },
    { scope: mainContainer }
  );

  return (
    <div ref={mainContainer}>
      <h1 className="p1h1" ref={containerRefSecond}>
        <span className="split">PAUL</span>
        <br />
        <span className="split">COLLINS</span>
      </h1>

      <div ref={containerRefFirst} className="p1MiddleSection2">
        <div className="p1TechStack">
          <p className="split">TECH STACK</p>
          <ul>
            <li className="split">REACT</li>
            <li className="split">NODE.JS</li>
            <li className="split">THREE.JS</li>
            <li className="split">FIGMA</li>
          </ul>
        </div>

        <div className="p1ProjectDescription">
          <p className="split">THIS PROJECT WAS DEVELOPMENT FOR PAUL COLLINS OWN DESIGN AGENCY</p>
        </div>

        <div className="date">
          <p className="split">DATE</p>
          <p className="split">2025/05/12</p>
        </div>

        <div className="p1FirstImage image"></div>
        <div className="p1SecondImage image"></div>
        <div className="p1ThirdImage image"></div>
        <div className="p1FourthImage image"></div>
      </div>

      <footer ref={footerRefrence}>
       <BackArrow className="split"></BackArrow>
       <p> <a className="split" href="https://github.com/itsDipsyProjects/portfolio">GITHUB REPO</a></p>
      </footer>
    </div>
  );
}

export default ProjectOne;
