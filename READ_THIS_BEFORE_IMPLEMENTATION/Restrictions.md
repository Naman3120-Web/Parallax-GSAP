

## 🛑 `Restrictions.md`

### There is no native HTML/CSS magic bullet that makes the DOM behave perfectly when a user aggressively zooms in on a highly animated scroll-linked page. If you refuse to use Canvas/WebGL (which is a completely understandable decision for an internship portfolio), you must understand exactly what breaks and implement the best known workarounds to mitigate it.
---
### Here is a breakdown of why this is such a notorious problem in front-end development, and the closest solutions we have without leaving standard HTML.


## ⚠️ Why The Browser Hates "Zoom + Parallax"

When you zoom in on a browser (`Ctrl/Cmd` + `+`), the browser doesn't just make the image pixels visually larger. It changes the physical math of the viewport itself.

### 1. The Math Breaks 🧮

If GSAP calculates that an image should start moving when you scroll exactly 800px down the page, and then you zoom in 200%, the page is suddenly twice as tall. That 800px trigger point is now in completely the wrong physical location on the screen.

### 2. The Reflow Nightmare 🔄

Zooming forces a DOM "reflow." The browser has to instantly recalculate the size, margin, and padding of every single `<div>` and text element. When combined with high-resolution images and JavaScript animation loops, this overwhelms the rendering engine and causes visual tearing or blackouts.

### 3. The `vh`/`vw` Trap 📏

We used `vh` (viewport height) and `vw` (viewport width) units to keep elements proportional. However, on some browsers (especially mobile Safari), the `vh` calculation actually changes depending on if the browser's address bar is visible or hidden, creating sudden jarring jumps even when the user isn't zooming.

---

## 🛠️ The Best "Non-Canvas" Solutions

If you are committing to standard React + GSAP, here are the three industry-standard techniques to make the zoom problem manageable.

### 1. The "Resize Debouncer" (Implemented) ⏱️

This is the single most important adjustment. We tell GSAP to wait until the user completely finishes zooming before it attempts to recalculate the animation math.

```javascript
// Implementation in App.jsx
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 250);
});

```

* ✅ **Pros:** Stops the browser from completely crashing or freezing while the user is actively zooming.
* ❌ **Cons:** Causes a split-second flash or layout jump when the 250ms timer finishes and GSAP snaps all elements to the new zoom scale.

### 2. Using CSS `transform: scale` Instead of Native Zoom 🔍

If you are building an incredibly complex web app (like Figma or Miro), you actually disable native browser zooming completely using a meta tag. Instead, you build your own custom UI zoom controls that apply `transform: scale(1.5)` to a massive container `<div>`.

Because CSS transforms are handled directly by the GPU and do not trigger a DOM reflow, the GSAP math stays perfectly intact. *(Note: Disabling native zoom is generally considered an anti-pattern for standard websites due to accessibility concerns).*

### 3. The "Normalize Scroll" Hack 📜

Sometimes the issue isn't the zoom itself, but how the browser's native scrollbar handles the math while zoomed. GSAP has a built-in feature to combat this called `normalizeScroll`.

It forces the browser to scroll on the main thread rather than a separate compositor thread, which keeps the math strictly synchronized. To use this, you add a single line to your `App.jsx` right before your `useGSAP` hook:

```javascript
ScrollTrigger.normalizeScroll(true);

```

> 💡 **Important Note:** If your project is using Lenis for virtual scrolling, you do not need to implement `normalizeScroll`. Lenis already normalizes the scroll math mathematically.
