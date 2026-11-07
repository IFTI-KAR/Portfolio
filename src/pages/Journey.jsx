// src/pages/Journey.jsx
// Experience + Education combined, editorial row style.
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import DecryptedText from "../components/DecryptedText";

const education = [
  { degree: "B.Sc. in Computer Science & Engineering", institution: "BRAC University", year: "2022 – 2026", result: "CGPA 3.65 / 4.00", highlight: true },
  { degree: "Higher Secondary Certificate (HSC)", institution: "Dhaka Residential Model College (DRMC)", year: "Completed", result: "GPA 5.00 / 5.00", highlight: false },
  { degree: "Secondary School Certificate (SSC)", institution: "Monipur High School", year: "Completed", result: "GPA 5.00 / 5.00", highlight: false },
];

export default function Journey() {
  return (
    <section id="experience" className="section" aria-label="Where I've been">
      <div className="kicker" data-reveal>
        <span>EDUCATION</span>
        <span className="k-right">ACADEMIC RECORD</span>
      </div>

      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="display-title" style={{ fontSize: "clamp(44px, 6vw, 80px)", margin: "36px 0 48px" }}>
        Education.
      </motion.h2>

      {/* Current role */}
      <motion.div className="journey-current" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 0.8fr)", gap: "clamp(20px,4vw,48px)", padding: "28px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", alignItems: "start" }}>
        <div>
          <p className="index-num" style={{ marginBottom: 10 }}><strong>GRADUATED</strong> · DHAKA</p>
          <h3 className="display-title" style={{ fontSize: "clamp(28px,3.4vw,44px)", margin: "0 0 8px" }}><span style={{ color: "var(--accent)" }}>BRAC University</span></h3>
          <p style={{ color: "var(--muted)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em" }}>CLASS OF 2026 · B.SC.</p>
          <p style={{ color: "#b9c1cc", lineHeight: 1.75, marginTop: 18, maxWidth: 640 }}>
            {profile.bio}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <img src="/bracu.png" alt="BRAC University" style={{ width: 72, height: 72, objectFit: "contain", background: "#fff", padding: 10, borderRadius: 12, border: "1px solid var(--line)" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "B.Sc. in Computer Science & Engineering (2022–2026), CGPA 3.65 / 4.00",
              "Research focus: ML systems, data analysis & NLP",
              "Two papers: SLM–LLM tutoring and flood prediction",
              "Interests: LLMs, computer vision, applied ML",
            ].map((h, i) => (
              <li key={i} style={{ display: "flex", gap: 10, color: "#cbd5e1", fontSize: 14, lineHeight: 1.65 }}>
                <span style={{ width: 6, height: 6, background: "var(--accent)", borderRadius: "50%", marginTop: 8, flexShrink: 0 }} />{h}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Education rows */}
      <div style={{ marginTop: 48 }}>
        <p className="index-num" style={{ marginBottom: 16 }}>EDUCATION</p>
        <div className="edu-rows">
          {education.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr) auto", gap: 18, padding: "20px 0", borderTop: "1px solid var(--line)", alignItems: "center", borderColor: edu.highlight ? "rgba(255,122,61,0.4)" : "var(--line)" }}>
              <div>
                <p style={{ fontFamily: "var(--display)", fontSize: 17, fontWeight: 700, margin: 0 }}>{edu.degree}</p>
                <p style={{ color: "var(--accent)", fontSize: 13, fontWeight: 600, marginTop: 4 }}>{edu.institution}</p>
              </div>
              <p style={{ color: "var(--muted)", fontSize: 13, fontFamily: "var(--mono)" }}>{edu.year}</p>
              <span style={{ fontFamily: "var(--mono)", fontSize: 12, fontWeight: 700, background: "rgba(255,122,61,0.08)", border: "1px solid rgba(255,122,61,0.2)", padding: "6px 12px", borderRadius: 8, color: "var(--accent)", whiteSpace: "nowrap" }}>{edu.result}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .journey-current { grid-template-columns: 1fr !important; }
          .edu-rows > div { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
        @media (max-width: 640px) {
          .edu-rows > div { padding-left: 4px !important; }
        }
      `}</style>
    </section>
  );
}
