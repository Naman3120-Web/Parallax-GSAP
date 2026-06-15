import React from "react";
import ParallaxSection from "./ParallaxSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // The Debouncer: Protects performance during window resize/zooming
  useGSAP(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      // Waits 250ms AFTER the user stops resizing before forcing GSAP to recalculate math
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  });

  const portfolioProjects = [
    {
      id: 1,
      title: "Project Title",
      description: "A brief, compelling description of your role.",
      bgImage: "/bg.svg",
      mainMockup: "/fg.svg",
      bgSpeed: 15, // Positive number moves the background down slowly
      fgSpeed: -25, // Negative number pulls the foreground up faster

      leftDecoImg: "/slide.svg",
      // Using 'vw' (viewport width) ensures the image shrinks proportionally if the user zooms in
      leftImgStyle: {
        width: "12vw",
        minWidth: "100px",
        top: "15%",
        left: "5%",
      },

      rightDecoImg: "/slide.svg",
      rightImgStyle: {
        width: "15vw",
        minWidth: "120px",
        bottom: "10%",
        right: "5%",
      },
    },
    {
      id: 2,
      title: "Project Title",
      description: "A brief, compelling description of your role.",
      bgImage: "/bg.svg",
      mainMockup: "/fg.svg",
      bgSpeed: 15, // Positive number moves the background down slowly
      fgSpeed: -25, // Negative number pulls the foreground up faster

      leftDecoImg: "/slide.svg",
      // Using 'vw' (viewport width) ensures the image shrinks proportionally if the user zooms in
      leftImgStyle: {
        width: "12vw",
        minWidth: "100px",
        top: "15%",
        left: "0%",
      },
    },
    // Add more objects here for more sections
  ];

  return (
    <main className="portfolio-main">
      {portfolioProjects.map((project) => (
        <ParallaxSection key={project.id} {...project} />
      ))}
    </main>
  );
}
