// src/components/VideoDivider.jsx
// Motion interlude — animated gradient field + marquee. No video file required.
// Keeps the reference sticky interlude feel with the new orange theme.
import { memo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const WORDS = ["RESEARCH", "DATA ANALYSIS", "MACHINE LEARNING", "WEB DEVELOPMENT"];

const MarqueeRow = memo(function MarqueeRow({ hidden }) {
  return (
    <div aria-hidden={hidden || undefined} style={{ display: "flex", flexShrink: 0 }}>
      {WORDS.map((w, i) => (
        <span key={i} style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.24em", color: "rgba(255,255,255,0.75)", padding: "0 18px", whiteSpace: "nowrap" }}>
          {w} <span style={{ color: "var(--accent)" }}>✳</span>
        </span>
      ))}
    </div>
  );
});

export default memo(function VideoDivider() {
  const sectionRef = useRef(null);
  const reduced = useRef(typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.8 });
  const bgScale = useTransform(smoothProgress, [0, 0.5, 1], [1.22, 1.04, 1.18]);
  const bgY = useTransform(smoothProgress, [0, 1], ["-6%", "6%"]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0, 1, 1, 0]);
  const marqueeOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="video-divider"
      aria-label="Motion interlude"
      style={{ position: "relative", height: "220vh", background: "#05060a" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", contain: "strict" }}>
        {/* Animated gradient field — no video asset needed */}
        <motion.div style={{ position: "absolute", inset: "-8% 0", scale: bgScale, y: bgY, willChange: "transform" }}>
          <div
            aria-hidden="true"
            style={{
              width: "100%",
              height: "100%",
              background: "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(255,122,61,0.22), transparent 60%), radial-gradient(ellipse 50% 45% at 20% 80%, rgba(255,180,84,0.16), transparent 60%), radial-gradient(ellipse 80% 60% at 50% 50%, rgba(232,90,36,0.12), transparent 70%), linear-gradient(180deg, #0a0503 0%, #120b06 50%, #05060a 100%)",
            animation: reduced.current ? "none" : "divider-drift 14s ease-in-out infinite",
          }}
          />
          <style>{`@keyframes divider-drift { 0%,100%{ transform: translateY(0) scale(1) } 50%{ transform: translateY(-24px) scale(1.03) } }`}</style>
          {/* Grid overlay */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,122,61,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,61,0.05) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)" }} />
          {/* Floating particles */}
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              style={{
                position: "absolute",
                width: i % 3 === 0 ? 5 : 3,
                height: i % 3 === 0 ? 5 : 3,
                borderRadius: "50%",
                background: i % 4 === 0 ? "#ffb454" : "#ff7a3d",
                opacity: 0.5,
                left: `${8 + (i * 7) % 84}%`,
                top: `${12 + (i * 13) % 72}%`,
              }}
              animate={reduced.current ? undefined : { y: [0, -28, 0], x: [0, (i % 2 === 0 ? 12 : -12), 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            />
          ))}
        </motion.div>

        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(180deg, rgba(5,6,10,0.95) 0%, rgba(5,6,10,0.55) 12%, transparent 28%, transparent 72%, rgba(5,6,10,0.55) 88%, rgba(5,6,10,0.95) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at center, transparent 32%, rgba(5,6,10,0.45) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(90deg, rgba(255,122,61,0.06), transparent 22%, transparent 78%, rgba(255,122,61,0.06))" }} />
        <motion.div style={{ position: "absolute", inset: 0, borderTop: "1px solid rgba(255,122,61,0.22)", borderBottom: "1px solid rgba(255,122,61,0.22)", pointerEvents: "none", opacity: fadeIn }} />

        <motion.div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: fadeIn,
          background: "linear-gradient(180deg, #05060a 0%, transparent 18%, transparent 82%, #05060a 100%)" }} />

        <motion.div aria-hidden="true" style={{ position: "absolute", top: 24, left: 0, right: 0, overflow: "hidden", opacity: marqueeOpacity }}>
          <motion.div animate={reduced.current ? undefined : { x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} style={{ display: "flex", width: "max-content" }}>
            <MarqueeRow /><MarqueeRow hidden />
          </motion.div>
        </motion.div>

        <motion.div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", textAlign: "center", opacity: marqueeOpacity, pointerEvents: "none" }}>
          <p className="display-title" style={{ fontSize: "clamp(44px, 7vw, 96px)", margin: 0, color: "#fff", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            Research <span style={{ color: "var(--accent)" }}>×</span> Data Analysis
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.24em", color: "rgba(255,255,255,0.6)", marginTop: 16 }}>
            MACHINE LEARNING · WEB DEVELOPMENT
          </p>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .video-divider { height: 150vh !important; }
          .video-divider .display-title { font-size: clamp(30px, 8vw, 48px) !important; }
        }
      `}</style>
    </section>
  );
});
