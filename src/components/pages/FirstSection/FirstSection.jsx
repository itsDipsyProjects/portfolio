import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

import ProjectOne from "../ProjectOne/ProjectOne";
import ProjectTwo from "../ProjectTwo/ProjectTwo";
import ProjectThree from "../ProjectThree/ProjectThree";
import { useInitialTextAnimation } from "../../../utils/useInitialTextAnimation";

import "./FirstSection.css";

gsap.registerPlugin(useGSAP, SplitText);

export function FirstSection() {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useInitialTextAnimation(containerRef);

  const switchBetweenProjectsAnimation = (which) => {
    const container = containerRef.current;
    const split = new SplitText(".split", {
      type: "words,chars",
    });

    gsap
      .timeline({
        defaults: { duration: 0.6, ease: "power2.in" },
        onComplete: () => {
          split.revert();         
          setActiveProject(which);
        },
      })
      .to(container.querySelector(".middleSection"), { width: 0, autoAlpha: 0 }, 0)
      .to(split.chars, { y: -50, autoAlpha: 0, stagger: 0.01 }, 0);
  };

  if (activeProject === "one") return <ProjectOne />;
  if (activeProject === "two") return <ProjectTwo />;
  if (activeProject === "three") return <ProjectThree />;

  return (
    <div ref={containerRef} className="firstSectionContainer">
      <div className="logoDiv">
        <h1 className="logoText split">
          ELLIOT<br /> COLLINS
        </h1>
        <nav>
          <ul>
            <li className="split">ABOUT</li>
            <li className="split">CONTACT</li>
          </ul>
        </nav>
      </div>

      <div className="middleSection">
        <div className="projectsContainer">
          <div onClick={() => switchBetweenProjectsAnimation("one")} className="firstProject" />
          <div onClick={() => switchBetweenProjectsAnimation("two")} className="secondProject" />
          <div onClick={() => switchBetweenProjectsAnimation("three")} className="thirdProject" />
          <div className="fourthProject" />
        </div>
      </div>

      <div className="bottomSection">
        <p className="firstInfo split">DEV/DESIGNER BASED IN MALMÖ</p>
        <p className="secondInfo split"><a href="public/CV.PDF">DOWNLOAD RESUME</a></p>
      </div>
    </div>
  );
}
