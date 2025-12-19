import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function useInitialTextAnimation(containerRef) {
  useGSAP(
    (context) => {
      const q = context.selector;
      const split = new SplitText(q(".split"), { type: "words,chars" });

      gsap.from(split.chars, {
        delay: 1.2,
        duration: 1,
        y: 50,
        autoAlpha: 0,
        ease: "power2.out",
        stagger: 0.01,
      });

      return () => {
        split.current?.revert();
        split.current = null;
      };
    },
    { scope: containerRef }
  );
}
