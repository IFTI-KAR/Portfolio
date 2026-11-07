// src/pages/About.jsx
// About — left headline + right side glimpse of works (friend-style cards).
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { profile } from "../data/profile";
import DecryptedText from "../components/DecryptedText";

const workGlimpse = [
  { name: "BRACU Thesis Portal", tag: "Web · MERN", image: "/project-3.png", live: "https://bracu-research-connect.web.app", code: "https://github.com/IFTI-KAR/BRAC-University-Thesis-Portal" },
  { name: "Fitness Tracker", tag: "Web · MERN", image: "/project-1.png", live: "https://fitness-tracker-faf6f.web.app/", code: "https://github.com/IFTI-KAR/Fitness_Tracker_Client_Server" },
  { name: "Blog Site", tag: "Web · MERN", image: "/project-2.png", live: "https://log-web-34782.web.app/", code: "https://github.com/IFTI-KAR/Blogar-a-blog-site-client" },
  { name: "Jailbreak Classifier", tag: "ML · NLP", image: "/project-4.jpg", live: "http://jailbreak-group.streamlit.app", code: "https://github.com/IFTI-KAR/Jailbreak-Attack-Prompt-Classification-Model" },
  { name: "PetSegNet", tag: "ML · Vision", image: "/project-5.jpg", live: "https://github.com/IFTI-KAR/PetSegNet-Oxford-Pet-Segmentation-using-Deep-Learning", code: "https://github.com/IFTI-KAR/PetSegNet-Oxford-Pet-Segmentation-using-Deep-Learning" },
  { name: "EpiWatch BD", tag: "ML · Full-Stack", image: "/project-6.jpg", live: "https://github.com/IFTI-KAR/EpiWatch-BD-AI-Epidemic-Early-Warning-System", code: "https://github.com/IFTI-KAR/EpiWatch-BD-AI-Epidemic-Early-Warning-System" },
  { name: "SLM–LLM Tutoring", tag: "Research · Thesis", image: "/project-4-old.jpg", live: "#research", code: "https://github.com/IFTI-KAR", isResearch: true },
  { name: "Flood Prediction Skill", tag: "Research · ECCE 2027", image: "/project-6.jpg", live: "#research", code: "https://github.com/IFTI-KAR", isResearch: true },
];

function StatCounter({ value, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = String(value).match(/^([\d.,]+)(.*)$/);
    if (!match) { setDisplay(String(value)); return; }
    const target = parseFloat(match[1].replace(/,/g, ""));
    const suffix = match[2] || "";
    const isDecimal = match[1].includes(".");
    const decimals = isDecimal ? match[1].split(".")[1].length : 0;
    const start = performance.now();
    const dur = 1300;
    let raf = 0;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      setDisplay((isDecimal ? current.toFixed(decimals) : Math.round(current).toLocaleString()) + suffix);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} style={{ border: "1px solid var(--line)", padding: "14px 18px", minWidth: 104, position: "relative", overflow: "hidden" }}>
      <p className="display-title" style={{ fontSize: 28, margin: 0, color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{display}</p>
      <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", color: "var(--muted)", marginTop: 4 }}>{label.toUpperCase()}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section" style={{ paddingTop: 72 }} aria-label="About">
      <div className="kicker" data-reveal>
        <span>ABOUT</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(28px,4vw,68px)", marginTop: 44, alignItems: "start" }} className="about-grid">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="display-title" style={{ fontSize: "clamp(42px, 5.2vw, 74px)", margin: 0, lineHeight: 0.95 }}
          >
            Iftikar
            <br />
            Rahaman.
            <br />
            <span style={{ color: "var(--accent)" }}>Researcher &amp; Analyst.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.7 }} style={{ color: "#b9c1cc", fontSize: 15, lineHeight: 1.75, maxWidth: 520, marginTop: 22 }}>
            {profile.bio}
          </motion.p>

          <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
            {profile.stats.map((s, i) => <StatCounter key={i} value={s.value} label={s.label} />)}
          </div>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.02em", color: "var(--accent)", textTransform: "uppercase" }}>Selected work</span>
            <a href="#work" style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", color: "var(--muted)", textTransform: "uppercase" }}>View all →</a>
          </div>
          <div className="about-glimpse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} role="list" aria-label="Selected works preview">
            {workGlimpse.map((w, i) => (
              <motion.article
                key={w.name}
                role="listitem"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 0.8, 0.3, 1] }}
                whileHover={{ y: -4 }}
                style={{
                  border: "1px solid var(--line)",
                  background: "rgba(255,255,255,0.014)",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: 120, overflow: "hidden", position: "relative" }}>
                  <img src={w.image} alt={w.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "saturate(0.85)" }} />
                </div>
                <div style={{ padding: "12px 14px" }}>
                  <p style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.14em", color: "var(--accent)", textTransform: "uppercase", margin: 0 }}>{w.tag}</p>
                  <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em", lineHeight: 1.15, margin: "6px 0 8px" }}>{w.name}</h3>
                  <div style={{ display: "flex", gap: 12 }}>
                    <a href={w.live} target={w.isResearch ? undefined : "_blank"} rel={w.isResearch ? undefined : "noreferrer"} style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--accent)", fontSize: 11, fontWeight: 700, textDecoration: "none" }}>
                      <FiExternalLink size={11} /> {w.isResearch ? "Research" : "Live"}
                    </a>
                    <a href={w.code} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "#b9c1cc", fontSize: 11, fontWeight: 700, textDecoration: "none" }}>
                      <FiGithub size={11} /> {w.isResearch ? "Profile" : "Code"}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div style={{ display: "grid", gap: 10, marginTop: 18 }} role="list" aria-label="About snapshots">
            {[
              { id: "background", kicker: "BACKGROUND", title: "B.Sc. in Computer Science & Engineering.", body: "BRAC University, 2022–2026. Coursework in algorithms, data structures, databases, and software engineering.", note: "BRAC University · 2022–2026" },
              { id: "craft", kicker: "RESEARCH", title: "Applied machine learning.", body: "Research focus is evaluation: spatial splits, ablations, and calibration. Thesis in cascaded SLM–LLM tutoring; ECCE 2027 paper on spatial generalization.", note: "Python · ML / NLP · Analysis" },
            ].map((c, i) => (
              <motion.article
                key={c.id}
                role="listitem"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 0.8, 0.3, 1] }}
                whileHover={{ y: -4, borderColor: "rgba(255,122,61,0.5)" }}
                style={{
                  border: "1px solid var(--line)",
                  background: "rgba(255,255,255,0.014)",
                  padding: "clamp(18px,2.4vw,26px)",
                  transition: "border-color .25s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.02em", color: "var(--accent)", textTransform: "uppercase" }}>{c.kicker}</span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", color: "var(--muted)", textTransform: "uppercase" }}>{c.note}</span>
                </div>
                <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "clamp(20px,2.2vw,26px)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "10px 0 8px" }}>{c.title}</h3>
                <p style={{ color: "#b9c1cc", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{c.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .about-glimpse { grid-template-columns: 1fr !important; }
          .about-glimpse article > div:first-child { height: 140px !important; }
          .about-grid h2 { font-size: clamp(34px, 9vw, 48px) !important; }
        }
      `}</style>
    </section>
  );
}
