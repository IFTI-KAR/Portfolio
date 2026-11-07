// src/pages/Research.jsx
// Research — ledger style: tab list on the left, animated detail on the right.
// 2 papers from thesis PDFs in public/thesis/ (titles + metrics from the PDFs).
import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import DecryptedText from "../components/DecryptedText";

const papers = [
  {
    id: 1,
    field: "EDGE AI · INTELLIGENT TUTORING",
    title: "Confidence-Governed Hybrid SLM–LLM Tutoring",
    paperTitle: "Confidence-Governed Hybrid SLM-LLM Tutoring: A Cascaded Architecture with Metamorphic Self-Consistency and Metadata-Driven Calibration",
    summary: "A locally deployed Student SLM paired with a selectively invoked Tutor LLM via cascaded routing — MetaQA-style self-consistency estimates epistemic uncertainty and an evolving metadata framework adapts thresholds without retraining. Tested on a prescribed curriculum Socratic QA dataset with high self-handle rates and good calibration over static baselines.",
    statuses: [
      "Thesis accepted · BRAC University, 3 Oct 2026",
      "Approved · Supervisor Dr. Muhammad Iqbal Hossain, Co-Supervisor Md. Fakhruddin Gazzali",
    ],
    metrics: [
      { value: "76.7%", label: "queries directly handled on edge", numeric: 76.7, suffix: "%" },
      { value: "95.0%", label: "groundedness pass rate", numeric: 95.0, suffix: "%" },
      { value: "92.0%", label: "pedagogical soundness · 100 answers reviewed", numeric: 92.0, suffix: "%" },
    ],
    tags: ["Qwen2.5-1.5B", "LoRA", "RAG", "FAISS", "BM25", "Groq"],
    pdfLink: "/thesis/T2530933_G8_final_report.pdf",
    pdfSecondary: "/thesis/T2530933_IEEE.pdf",
  },
  {
    id: 2,
    field: "CLASSICAL ML · SPATIAL GENERALIZATION",
    title: "Flood Risk Prediction Across Regions",
    paperTitle: "Random Splits Overstate Flood Prediction Skill: Held-Out-Region Evidence from Bangladesh Stations and U.S. Gauges",
    summary: "Published results hit over 94% via random splits, but leave-one-region-out drops mean F1 by 0.11–0.15 across Logistic Regression, Random Forest, XGBoost and LightGBM (20,544 station-months, 33 stations, 8 divisions). Loss traces to station memory, not time, shared events, or 100 km neighbours — and replicates on 42 U.S. gauges (held-out F1 0.04–0.09 lower).",
    statuses: [
      "Under review · Submitted to ECCE 2027",
      "U.S. check · Agency flood labels, 42 gauges",
    ],
    metrics: [
      { value: "20,544", label: "Bangladesh station-month observations", numeric: 20544, suffix: "", commas: true },
      { value: "0.11–0.15", label: "F1 drop in held-out-region evaluation", numeric: null, suffix: "" },
      { value: "42", label: "U.S. gauges in the external check", numeric: 42, suffix: "" },
    ],
    tags: ["Classical ML", "LORO Validation", "Python"],
    pdfLink: "/thesis/ECCE2027_Flood.pdf",
  },
];

function AnimatedMetric({ metric }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const initial = metric.numeric === null ? metric.value : (metric.numeric <= 100 && metric.suffix === "%" ? "0%" : "0");
  const [val, setVal] = useState(metric.numeric === null ? metric.value : initial);

  useEffect(() => {
    if (metric.numeric === null || !inView) {
      if (metric.numeric === null) setVal(metric.value);
      return;
    }
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = metric.numeric * eased;
      let formatted;
      if (metric.suffix === "%") formatted = cur.toFixed(1) + "%";
      else if (metric.numeric < 1) formatted = cur.toFixed(2);
      else formatted = (metric.commas ? Math.round(cur).toLocaleString() : Math.round(cur).toString()) + metric.suffix;
      if (metric.prefix) formatted = metric.prefix + formatted.replace(/^~/, "");
      setVal(formatted);
      if (p < 1) raf = requestAnimationFrame(step);
      else setVal(metric.value);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, metric]);

  return (
    <div ref={ref}>
      <p style={{ fontFamily: "var(--display)", fontSize: "clamp(24px,2.8vw,36px)", fontWeight: 700, margin: 0, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums", color: "var(--accent)" }}>{val}</p>
      <p style={{ fontFamily: "var(--mono)", fontSize: 10, lineHeight: 1.55, color: "var(--muted)", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>{metric.label}</p>
    </div>
  );
}

export default function Research() {
  const [active, setActive] = useState(0);
  const paper = papers[active];

  return (
    <section id="research" className="section" aria-label="Papers and writing">
      <div className="kicker" data-reveal>
        <span>RESEARCH</span>
        <span className="k-right">PAPERS &amp; MANUSCRIPTS</span>
      </div>

      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="display-title" style={{ fontSize: "clamp(52px, 7vw, 96px)", margin: "36px 0 8px" }}>
        Research.
      </motion.h2>
      <p style={{ color: "var(--muted)", maxWidth: 420, fontSize: 14, lineHeight: 1.7, marginBottom: 48 }}>
        Two papers. Select a paper to view summary and results.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)", gap: "clamp(20px,3.5vw,52px)", alignItems: "start" }} className="research-grid">
        <div style={{ borderTop: "1px solid var(--line)" }} role="tablist" aria-label="Research papers">
          {papers.map((p, i) => {
            const isActiveTab = i === active;
            return (
              <button
                key={p.id}
                role="tab" aria-selected={isActiveTab}
                onClick={() => setActive(i)}
                style={{
                  width: "100%", display: "block", textAlign: "left", padding: "22px 16px 22px 4px",
                  borderBottom: "1px solid var(--line)", background: isActiveTab ? "rgba(255,122,61,0.05)" : "transparent",
                  borderLeft: isActiveTab ? "3px solid var(--accent)" : "3px solid transparent",
                  cursor: "pointer", color: "#fff", transition: "background .3s, border-color .3s",
                }}
              >
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <span className="index-num">{p.field}</span>
                  <span style={{ color: isActiveTab ? "var(--accent)" : "var(--muted)", fontSize: 16 }}>{isActiveTab ? "●" : "○"}</span>
                </span>
                <span className="display-title" style={{ display: "block", fontSize: "clamp(24px,2.6vw,36px)", lineHeight: 1.08, marginTop: 12, color: isActiveTab ? "#fff" : "rgba(255,255,255,0.72)" }}>{p.title}</span>
                <span style={{ display: "block", fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)", marginTop: 10, lineHeight: 1.6 }}>{p.statuses[0]}</span>
              </button>
            );
          })}
        </div>

        <div style={{ position: "sticky", top: 104 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 0.8, 0.3, 1] }}
              style={{ border: "1px solid var(--line)", padding: "clamp(24px,3.5vw,42px)", background: "rgba(255,255,255,0.014)", position: "relative", overflow: "hidden" }}
            >
              <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, rgba(255,122,61,0.6), transparent)" }} />
              <p className="index-num">{paper.field}</p>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, lineHeight: 1.7, color: "var(--accent)", marginTop: 20 }}>{paper.paperTitle}</p>
              <p style={{ fontSize: 15, lineHeight: 1.78, color: "#c4d3df", marginTop: 16 }}>{paper.summary}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 22 }}>
                {paper.statuses.map((s, i) => (
                  <p key={i} style={{ display: "flex", gap: 10, margin: 0, color: "#cbd5e1", fontSize: 13, lineHeight: 1.6 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>{s}
                  </p>
                ))}
              </div>

              <div className="research-metrics" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 16, marginTop: 30, paddingTop: 22, borderTop: "1px solid var(--line)" }}>
                {paper.metrics.map((m, i) => <AnimatedMetric key={i} metric={m} />)}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
                {paper.tags.map((t) => <span key={t} className="skill-badge" style={{ fontSize: 11 }}>{t}</span>)}
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 28 }}>
                {papers.map((p, i) => (
                  <button key={p.id} onClick={() => setActive(i)} aria-label={`Go to paper ${p.id}`} style={{ flex: 1, height: 3, border: "none", background: i === active ? "var(--accent)" : "rgba(255,255,255,0.14)", cursor: "pointer", transition: "background .3s" }} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .research-grid { grid-template-columns: 1fr !important; }
          .research-grid > div:last-child { position: static !important; }
          #research h2 { font-size: clamp(40px, 10vw, 60px) !important; }
        }
        @media (max-width: 640px) {
          .research-metrics { grid-template-columns: 1fr !important; gap: 14px !important; }
          .research-grid button { min-height: 44px !important; }
        }
      `}</style>
    </section>
  );
}
