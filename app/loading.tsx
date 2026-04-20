"use client";

import Lottie from "lottie-react";
import animationData from "../public/loader.json";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "min(360px, 100%)",
          padding: "1.4rem",
          borderRadius: "28px",
          border: "1px solid var(--line)",
          background: "var(--surface)",
          boxShadow: "var(--shadow)",
          backdropFilter: "blur(18px)",
        }}
      >
        <Lottie animationData={animationData} loop />
      </div>
    </div>
  );
}
