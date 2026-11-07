// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { profile } from "../data/profile";
import {
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiReact, SiNodedotjs,
  SiExpress, SiPostgresql, SiTensorflow, SiPytorch, SiScikitlearn,
  SiGit, SiGithub as SiGh, SiVercel,
} from "react-icons/si";

const marqueeIcons = [
  { Icon: SiPython, c: "#3776AB" }, { Icon: SiJavascript, c: "#F7DF1E" },
  { Icon: SiTypescript, c: "#3178C6" }, { Icon: SiHtml5, c: "#E34F26" },
  { Icon: SiReact, c: "#61DAFB" }, { Icon: SiNodedotjs, c: "#339933" },
  { Icon: SiExpress, c: "#FFFFFF" }, { Icon: SiPostgresql, c: "#336791" },
  { Icon: SiTensorflow, c: "#FF6F00" }, { Icon: SiPytorch, c: "#EE4C2C" },
  { Icon: SiScikitlearn, c: "#0099C6" }, { Icon: SiGit, c: "#F05032" },
  { Icon: SiGh, c: "#FFFFFF" }, { Icon: SiVercel, c: "#FFFFFF" },
];

function LogoMarquee() {
  const trackRef = useRef(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let start = performance.now();
    const loop = (timestamp) => {
      const el = (timestamp - start) / 1000;
      const half = track.scrollWidth / 2 || 1;
      const x = -((el * 28) % half);
      if (track) track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  const Group = ({ hidden }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "clamp(28px,4vw,56px)", padding: "0 28px" }} aria-hidden={hidden || undefined}>
      {marqueeIcons.map(({ Icon, c }, i) => <Icon key={i} aria-hidden={hidden} style={{ fontSize: 26, color: c, flexShrink: 0 }} />)}
    </div>
  );
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 62, display: "flex", alignItems: "center", overflow: "hidden", borderTop: "1px solid var(--line)", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }} aria-label="Technologies">
      <div ref={trackRef} style={{ display: "flex", width: "max-content", willChange: "transform" }}>
        <Group /><Group hidden />
      </div>
    </div>
  );
}

const ease = [0.22, 0.61, 0.36, 1];

function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.9, ease }}
      className="hero-photo-wrap"
      style={{
        position: "relative",
        height: "min(520px, 52vh)",
        background: "transparent",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%", height: "100%",
          background: "transparent",
        }}
      >
        <img
          src="/Picture-transparent.png"
          alt="Portrait of Iftikar Rahaman"
          style={{
            width: "100%", height: "100%",
            objectFit: "contain", objectPosition: "50% 100%",
            filter: "drop-shadow(0 12px 28px rgba(0,0,0,0.5))",
          }}
        />
        <div style={{ position: "absolute", left: 14, top: 14, zIndex: 3, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.2)", padding: "6px 10px", borderRadius: 6, background: "rgba(5,6,10,0.55)", backdropFilter: "blur(6px)" }}>
          DHAKA · 2026
        </div>
        <div style={{ position: "absolute", right: 14, bottom: 14, zIndex: 3, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.2)", padding: "6px 10px", borderRadius: 6, background: "rgba(5,6,10,0.55)", backdropFilter: "blur(6px)" }}>
          IFTIKAR RAHAMAN
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const reduced = useRef(typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const socials = [
    { icon: <FaGithub />, href: profile.links.github, label: "GitHub" },
    { icon: <FaLinkedin />, href: profile.links.linkedin, label: "LinkedIn" },
    { icon: <FaFacebook />, href: profile.links.facebook, label: "Facebook" },
  ];

  return (
    <section id="home" aria-labelledby="hero-title" style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "120px var(--gutter) 0", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,122,61,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,61,0.035) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at 30% 40%, #000 30%, transparent 75%)" }} />

      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--muted)" }}>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
          {profile.availability}
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>{profile.locationTag}</motion.span>
      </div>

      <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(240px, 31vw)", gap: "clamp(24px,4vw,64px)", alignItems: "end", paddingBottom: 86 }} className="hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", color: "var(--accent)", margin: 0 }}>
            {profile.heroMeta}
          </p>

          <h1 id="hero-title" className="display-title" style={{ margin: "22px 0 20px", fontSize: "clamp(52px, 7.2vw, 118px)" }}>
            {profile.heroHeadline.map((line, i) => (
              <span key={i} style={{ display: "block", overflow: "hidden" }}>
                <motion.span style={{ display: "block", color: i === 2 ? "var(--accent)" : "#fff" }} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.2 + i * 0.11, duration: 0.85, ease }}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }} style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.08em", color: "var(--muted)", margin: "0 0 20px" }}>
            BRAC UNIVERSITY · CLASS OF 2026 · CGPA 3.65 / 4.00
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} style={{ color: "#b9c1cc", fontSize: 15, lineHeight: 1.7, maxWidth: 520, marginBottom: 30 }}>
            {profile.bio}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }} style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <a href="#work" className="btn-primary">Selected work</a>
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="btn-outline">Resume ↗</a>
            <span style={{ display: "inline-flex", gap: 10 }}>
              {socials.map((s, i) => (
                <motion.a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} whileHover={{ y: -3, color: "var(--accent)", borderColor: "rgba(255,122,61,0.5)" }} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#cbd5e1", fontSize: 16 }}>
                  {s.icon}
                </motion.a>
              ))}
            </span>
          </motion.div>
        </motion.div>

        <HeroPhoto />
      </div>

      <LogoMarquee />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; align-items: start !important; padding-bottom: 76px !important; }
          #home { padding-top: 96px !important; }
          #home h1 { font-size: clamp(40px, 10.5vw, 60px) !important; }
          .hero-photo-wrap { display: block !important; height: 300px !important; }
        }
        @media (max-width: 480px) {
          .hero-photo-wrap { height: 260px !important; }
        }
      `}</style>
    </section>
  );
}
