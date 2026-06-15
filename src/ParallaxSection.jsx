import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection({
  title,
  description,
  bgImage,
  mainMockup,
  bgSpeed,
  fgSpeed,
  leftDecoImg,
  rightDecoImg,
  leftImgStyle,
  rightImgStyle,
}) {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const fgRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useGSAP(
    () => {
      // Background Parallax
      gsap.to(bgRef.current, {
        yPercent: bgSpeed,
        ease: "none",
        // scrub: true locks animation strictly to scroll position (Lenis makes it smooth)
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Foreground Parallax
      gsap.to(fgRef.current, {
        yPercent: fgSpeed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Left Element: Sliding Reveal
      if (leftImgRef.current) {
        gsap.from(leftImgRef.current, {
          x: -1, // Starts off to the left
          opacity: 0, // Starts invisible
          ease: "sine.inOut",
          // Adds organic tilt
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%", // Begins animation when section is 70% down the screen
            end: "top 20%", // Finishes animation when section reaches 20% from the top
            scrub: true,
          },
        });
      }

      // Right Element: Sliding Reveal
      if (rightImgRef.current) {
        gsap.from(rightImgRef.current, {
          x: 150, // Starts off to the right
          opacity: 0,
          rotation: 15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="parallax-window">
      <img ref={bgRef} className="layer-bg" src={bgImage} alt="Background" />

      {leftDecoImg && (
        <img
          ref={leftImgRef}
          className="float-img"
          src={leftDecoImg}
          alt="Deco"
          style={leftImgStyle}
        />
      )}

      {rightDecoImg && (
        <img
          ref={rightImgRef}
          className="float-img"
          src={rightDecoImg}
          alt="Deco"
          style={rightImgStyle}
        />
      )}

      <div ref={fgRef} className="layer-fg">
        <div className="project-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="project-mockup">
          <img src={mainMockup} alt={`${title} Mockup`} />
        </div>
      </div>
    </section>
  );
}
