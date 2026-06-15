import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react"; // Modern Lenis import
import "lenis/dist/lenis.css"; // Required base styles for Lenis
import "./Parallax.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* lerp: 0.1 -> "Linear Interpolation" determines the friction. Lower = smoother/slower stop.
      duration: 1.5 -> How long the scroll takes to settle.
      syncTouch: true -> Forces mobile touch scrolling to use the exact same math as desktop.
    */}
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, syncTouch: true }}>
      <App />
    </ReactLenis>
  </StrictMode>,
);
