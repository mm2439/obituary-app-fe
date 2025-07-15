import React from "react";

const BlurryLayer = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full z-10 rounded-lg pointer-events-none"
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(1.5px) saturate(110%) contrast(105%)",
        WebkitBackdropFilter: "blur(1.5px) saturate(110%) contrast(105%)",
        borderRadius: "18px",
        boxShadow: "0 2px 8px 0 rgba(31, 38, 135, 0.07)",
        border: "1px solid rgba(255,255,255,0.10)",
        transition: "backdrop-filter 0.3s",
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.35"
            numOctaves="1"
            stitchTiles="stitch"
            seed="7"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
          opacity="0.025"
        />
      </svg>
    </div>
  );
};

export default BlurryLayer;
