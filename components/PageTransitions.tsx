"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PageTransitions({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const page1 = document.querySelector(".portfolio-page-1");
      const page2 = document.querySelector(".portfolio-page-2");

      if (!page1 || !page2) return;

      // PAGE 1 → fade/scale out
      gsap.fromTo(
        page1,
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        },
        {
          opacity: 0,
          scale: 0.96,
          filter: "blur(4px)",
          ease: "none",
          scrollTrigger: {
            trigger: page1,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // PAGE 2 → fade/scale in
      gsap.fromTo(
        page2,
        {
          opacity: 0,
          scale: 1.04,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: page2,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );
    });

    // Make sure ScrollTrigger knows the page dimensions
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}