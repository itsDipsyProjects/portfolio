import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import "./BackArrow.css"
gsap.registerPlugin(useGSAP, SplitText);

export function BackArrow() {
  useGSAP(() => {
   
  }, []);

  const handleBack = () => {
   
    const splitInstances = gsap.utils.toArray(".split").map((el) => {
      const split = new SplitText(el, { type: "chars,words" });
      gsap.set(split.chars, { display: "inline-block" });

      return split;
    });

    const tl = gsap.timeline({
      onComplete: () => {
        document.location.reload();
      },
    });

    tl.to(
      ".image",
      {
        x: 3000,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.3,
      },
      0
    );
    tl.to(
      splitInstances.flatMap((s) => s.chars),
      {
        y: -40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.01,
      },
      0
    );
  };

  return (
    <div className="backArrowContainer split" onClick={handleBack}>
      &#8592;
    </div>
  );
}
