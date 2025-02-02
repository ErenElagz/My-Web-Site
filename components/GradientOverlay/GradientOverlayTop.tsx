import React from "react";

export default function GradientOverlayTop() {
  return (
    <div
      className="fixed top-0 left-0  top-[-150px] left-0 w-full h-[300px] bg-gradient-to-l from-purple-600 to-blue-600 opacity-50 blur-[400px]"
      style={{
        zIndex: -1,
      }}
    />
  );
}
