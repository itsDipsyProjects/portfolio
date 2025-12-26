import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function useInitialTextAnimation(containerRef, { delay = 1.2, onComplete } = {}) {
  useGSAP(
    (context) => {
      const q = context.selector;
      const split = new SplitText(q(".split"), { type: "words,chars" });

      gsap.from(split.chars, {
        delay,
        duration: 1,
        y: 50,
        autoAlpha: 0,
        ease: "power2.out",
        stagger: 0.01,
        onComplete,
      });

      return () => {
        try {
          split.revert();
        } catch (e) {
        }
      };
    },
    { scope: containerRef }
  );
}

