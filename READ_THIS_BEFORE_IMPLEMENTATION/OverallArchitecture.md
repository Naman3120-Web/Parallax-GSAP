## **`Architecture.md`**

# React (The Skeleton):

## Handles the component logic and data mapping. It allows you to write your layout once (ParallaxSection.jsx) and reuse it infinitely by just passing in different data from App.jsx.

---

# GSAP & ScrollTrigger (The Muscle):

## The animation math engine. It calculates exactly where elements are on the screen and moves them at different speeds (yPercent) or slides them in from the sides (x) based on the scroll position.

---

# Lenis (The Nervous System):

## The virtual scrollbar. It hijacks the clunky hardware mouse-wheel and replaces it with a mathematical curve. This ensures your GSAP animations never stutter and your scrolling feels identical on a $10 mouse, an Apple Trackpad, or a mobile phone.
