"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const FULL_NAME = "JOEDEL LAGONG";
const TAGLINE = "Full Stack Developer";
const TYPE_SPEED = 80;   // ms per character
const PAUSE_AFTER = 600; // ms to hold before fade
const FADE_DURATION = 700;

export default function LoadingScreen() {
  const [displayed, setDisplayed] = useState("");
  const [showTagline, setShowTagline] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let i = 0;

    // Step 1 — type name character by character
    const typer = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i === FULL_NAME.length) {
        clearInterval(typer);

        // Step 2 — show tagline after short pause
        setTimeout(() => setShowTagline(true), 300);

        // Step 3 — fade out after pause
        const holdTime = FULL_NAME.length * TYPE_SPEED + 300 + PAUSE_AFTER;
        setTimeout(() => setFadeOut(true), holdTime);
        setTimeout(() => setVisible(false), holdTime + FADE_DURATION);
      }
    }, TYPE_SPEED);

    return () => clearInterval(typer);
  }, []);

  if (!visible) return null;

  // "JOEDEL " = 7 chars gets emerald, "LAGONG" stays white
  const firstPart = displayed.slice(0, Math.min(displayed.length, 7));
  const secondPart = displayed.length > 7 ? displayed.slice(7) : "";

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      style={{
        transition: `opacity ${FADE_DURATION}ms ease`,
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* Subtle emerald radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(16,185,129,0.10) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
        }}
      />

      {/* Small JL monogram above */}
      <p
        className={`${poppins.className} font-bold text-xs tracking-[0.4em] text-gray-600 uppercase mb-10`}
      >
        <span className="text-emerald-500">J</span>L — Portfolio
      </p>

      {/* Typewriter name */}
      <div className="flex items-baseline">
        <h1
          className={`${poppins.className} font-bold tracking-tight`}
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: 1 }}
        >
          <span className="text-emerald-400">{firstPart}</span>
          <span className="text-black">{secondPart}</span>
        </h1>

        {/* Blinking cursor */}
        <span
          className="ml-[3px] inline-block bg-emerald-400"
          style={{
            width: "3px",
            height: "clamp(2rem, 6vw, 3.8rem)",
            borderRadius: "2px",
            animation: displayed.length >= FULL_NAME.length ? "blink 1s step-end infinite" : "none",
          }}
        />
      </div>

      {/* Tagline */}
      <p
        className={`${poppins.className} mt-4 text-sm font-medium tracking-[0.25em] uppercase text-gray-500`}
        style={{
          opacity: showTagline ? 1 : 0,
          transform: showTagline ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {TAGLINE}
      </p>

      {/* Bottom progress bar that fills as letters type */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-800">
        <div
          className="h-full bg-emerald-500 transition-all"
          style={{
            width: `${(displayed.length / FULL_NAME.length) * 100}%`,
            transitionDuration: `${TYPE_SPEED}ms`,
            transitionTimingFunction: "linear",
            boxShadow: "0 0 10px rgba(16,185,129,0.7)",
          }}
        />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}