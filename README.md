# 🚀 React Parallax Engine (Agency-Grade)

A high-performance, continuously scrolling parallax portfolio engine built with React, GSAP, and Lenis. 

This template bypasses the clunky, hardware-dependent native browser scrollbar and replaces it with a buttery-smooth, mathematically calculated virtual scroll. It is designed to handle complex overlapping animations while remaining highly resilient to viewport resizing and zooming.

## ✨ Features

* **Virtual Scrolling:** Powered by Lenis for cinematic, 60fps scrolling across all devices.
* **Continuous Parallax:** GSAP ScrollTrigger maps foreground and background elements to exact scroll positions with varying speeds (`yPercent`).
* **Zoom-Resistant DOM:** Implements debounced resize listeners and `vh`/`vw` constraints to prevent layout breaks during aggressive browser zooming.
* **Componentized:** Add a new fully animated section just by dropping a new data object into the `App.jsx` array.

## 🛠 Tech Stack

* **Framework:** React 19 + Vite
* **Animation Math:** GSAP (GreenSock) & `@gsap/react`
* **Scroll Hijacking:** Lenis (`lenis/react`)
* **Styling:** Vanilla CSS (Hardware Accelerated via `will-change`)

## 📦 Quick Start

1. **Clone the repository**

```
git clone https://github.com/Naman3120-Web/Parallax-GSAP
```

2. **Install dependencies**

```
npm install
```
3. **Start the development server**
```
npm run dev
```
## 💻 How to Add a Project
### To add a new parallax section, simply open src/App.jsx and add a new object to the portfolioProjects array. The ParallaxSection.jsx engine will handle all the math and animations automatically.

JavaScript
```
{
  id: 4,
  title: "New Project",
  description: "Description goes here.",
  bgImage: "/your-background.jpg",
  mainMockup: "/your-foreground-device.png",
  bgSpeed: 15,   // Positive = moves down
  fgSpeed: -25,  // Negative = moves up faster
  
  // Optional: Floating decorative images that slide in on scroll
  leftDecoImg: "/floating-item.png",
  leftImgStyle: { width: "15vw", minWidth: "120px", top: "15%", left: "5%" },
}
```
## 📂 File Structure
### main.jsx - Initializes React and wraps the app in the Lenis virtual scroll provider.

### App.jsx - The data layer and GSAP resize-debouncer.

### ParallaxSection.jsx - The isolated GSAP animation engine.

### Parallax.css - Global resets and zoom-proof styling boundaries.
