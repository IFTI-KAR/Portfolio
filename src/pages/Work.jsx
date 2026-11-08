// src/pages/Work.jsx
// Work — featured-project showcase: large featured card + list, no pinned horizontal scroll.
// Filter chips preserved. Featured rotates through the filtered set.
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub, FiX, FiFileText, FiArrowRight, FiImage } from "react-icons/fi";

const projects = [
  { id: 1, name: "BRACU Research Thesis Management Portal", category: "Web", tags: "MERN · Role-based dashboards", shortDesc: "Full-stack portal automating the complete thesis lifecycle — proposal, supervisor matching, meetings, and archiving.", description: "Built a full-stack portal automating the complete thesis lifecycle — proposal submission, supervisor matching, meeting scheduling, and archiving — across 3 distinct user roles (Student, Supervisor, Admin) with JWT-protected routes. Integrated the arXiv academic paper API for paper search, saving, and supervisor recommendations, plus admin controls for semester setup, milestone tracking, role management, and supervisor-to-group allocation.", challenges: "Coordinating JWT-protected routes across 3 roles while keeping supervisor matching, meeting scheduling, and arXiv recommendations in sync.", technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "arXiv API"], githubLink: "https://github.com/IFTI-KAR/BRAC-University-Thesis-Portal", liveLink: "https://bracu-research-connect.web.app", year: "2025", image: "/project-3.png" },
  { id: 2, name: "Fitness Tracker", category: "Web", tags: "MERN · Stripe payments", shortDesc: "Multi-role fitness platform (Admin / Trainer / Member) with Stripe bookings, forum votes, and Featured Classes.", description: "Engineered a multi-role fitness platform (Admin / Trainer / Member) with Stripe payment integration for trainer bookings, JWT-protected routes, and real-time CRUD with toast notifications. Includes an admin financial dashboard, trainer approval workflow, a community forum with upvote/downvote, and a Featured Classes section powered by MongoDB aggregation.", challenges: "Securing Stripe payments and keeping real-time CRUD + forum votes consistent across Admin, Trainer, and Member roles.", technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"], githubLink: "https://github.com/IFTI-KAR/Fitness_Tracker_Client_Server", liveLink: "https://fitness-tracker-faf6f.web.app/", year: "2024", image: "/project-1.png" },
  { id: 3, name: "Blog Site", category: "Web", tags: "MERN · Auth CRUD", shortDesc: "Full-stack blogging platform with JWT APIs, wishlist/bookmarks, Featured Blogs, and category filtering.", description: "Developed a full-stack blogging platform with user-authenticated CRUD operations, JWT REST APIs, private route protection, and secure blog ownership enforcement. Features a wishlist/bookmarking system, a Featured Blogs section surfaced via backend aggregation, and pagination with category filtering across a 7-endpoint REST API.", challenges: "Enforcing blog ownership across a 7-endpoint REST API while keeping wishlist and Featured aggregation fast.", technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"], githubLink: "https://github.com/IFTI-KAR/Blogar-a-blog-site-client", liveLink: "https://log-web-34782.web.app/", year: "2024", image: "/project-2.png" },
  { id: 9, name: "Corn — Golden Grain", category: "Web", tags: "React · Vite · Editorial", shortDesc: "Cinematic editorial deep-dive into corn — history, nutrition, varieties, and recipes in a mobile-tuned 4K scroll experience.", description: "Built CORN — From Soil to Sustenance as a responsive single-product frontend (React/Vite, deployed on Netlify) — an editorial deep-dive into the world's most vital grain covering its history, nutrition, varieties, and recipes. Features a cinematic scroll experience tuned for mobile in true 4K with preloaded responsive hero imagery, editorial typography (Playfair Display / Lora / Space Mono), and fast Vite builds.", challenges: "Balancing a cinematic 4K editorial feel with mobile performance — responsive image srcsets, preloaded LCP hero, and edge-to-edge viewports without heavy bundles.", technologies: ["React", "Vite", "CSS", "Netlify"], githubLink: "https://github.com/IFTI-KAR/Corn-golden-grain-A-single-product-frontend-page", liveLink: "https://heartfelt-pika-32c756.netlify.app/", year: "2026", image: "/project-7.jpg" },
  { id: 4, name: "Jailbreak Attack Prompt Classification", category: "ML", tags: "NLP · BERT · LLM Safety", shortDesc: "NLP pipeline classifying 28,000 jailbreak prompts into 16 safety categories — 0.89 accuracy with soft-voting ensemble.", description: "Built an end-to-end NLP pipeline to classify 28,000 adversarial LLM jailbreak prompts into 16 safety-policy categories, benchmarking 10 models across TF-IDF, Word2Vec/GloVe, and fine-tuned BERT. Achieved 0.89 accuracy and Macro-F1 with a soft-voting ensemble, and identified a label-leakage issue through an input-ablation study before deploying as a Streamlit web app.", challenges: "Benchmarking 10 models across TF-IDF, Word2Vec/GloVe, and BERT while catching label leakage via input-ablation study.", technologies: ["Python", "TF-IDF", "BERT", "GRU/LSTM", "Scikit-learn", "Streamlit"], githubLink: "https://github.com/IFTI-KAR/Jailbreak-Attack-Prompt-Classification-Model", liveLink: "http://jailbreak-group.streamlit.app", year: "2025", image: "/project-4.jpg" },
  { id: 5, name: "PetSegNet – Joint Pet Segmentation & Breed Classification", category: "ML", tags: "Deep Learning · Computer Vision", shortDesc: "Shared encoder-decoder U-Net doing simultaneous pet segmentation + 37-class breed classification.", description: "Designed and trained a shared encoder-decoder U-Net performing simultaneous binary pet segmentation and 37-class breed classification on the Oxford-IIIT Pet Dataset (~7,400 images). Implemented and benchmarked a Base U-Net and an Attention U-Net with attention gates at every skip connection, evaluated using Mean IoU, Dice Score, and macro F1.", challenges: "Jointly optimizing segmentation IoU/Dice and 37-class breed accuracy in one shared U-Net with attention gates at every skip.", technologies: ["PyTorch", "Albumentations", "OpenCV", "NumPy"], githubLink: "https://github.com/IFTI-KAR/PetSegNet-Oxford-Pet-Segmentation-using-Deep-Learning", liveLink: "https://github.com/IFTI-KAR/PetSegNet-Oxford-Pet-Segmentation-using-Deep-Learning", year: "2025", image: "/project-5.jpg" },
  { id: 6, name: "EpiWatch BD – AI Epidemic Early-Warning System", category: "ML", tags: "Full-Stack + Applied ML", shortDesc: "District-level outbreak prediction for 64 districts — RandomForest risks + Bangla/English news NLP + live maps.", description: "Built a district-level disease outbreak prediction system for Bangladesh's 64 districts using a Scikit-learn RandomForestRegressor trained on environmental signals. Developed a Python Flask AI microservice for risk scoring and Bangla + English NLP news classification, integrated with a React/Leaflet frontend for real-time epidemic risk maps.", challenges: "Training RandomForest on environmental signals for 64 districts and serving Bangla + English news NLP in real time via Flask.", technologies: ["Python", "Flask", "Scikit-learn", "Node.js", "MongoDB", "React", "Leaflet"], githubLink: "https://github.com/IFTI-KAR/EpiWatch-BD-AI-Epidemic-Early-Warning-System", liveLink: "https://github.com/IFTI-KAR/EpiWatch-BD-AI-Epidemic-Early-Warning-System", year: "2025", image: "/project-6.jpg" },
  { id: 7, name: "Confidence-Governed Hybrid SLM–LLM Tutoring", category: "Research", tags: "Edge AI · Intelligent Tutoring", shortDesc: "Cascaded Student SLM + Tutor LLM with MetaQA self-consistency and metadata calibration — 76.7% edge self-handle, 95.0% groundedness.", description: "A locally deployed Student SLM paired with a selectively invoked Tutor LLM via cascaded routing — MetaQA-style self-consistency estimates epistemic uncertainty and an evolving metadata framework adapts thresholds without retraining. Tested on a prescribed curriculum Socratic QA dataset with high self-handle rates and good calibration over static baselines.", challenges: "Keeping curriculum fidelity on NCTB Physics while cutting cloud calls — 76.7% directly handled on edge, 95.0% groundedness, 92.0% pedagogical soundness.", technologies: ["Qwen2.5-1.5B", "LoRA", "RAG", "FAISS", "BM25", "Groq"], githubLink: "https://github.com/IFTI-KAR", year: "2026", image: "/project-4-old.jpg" },
  { id: 8, name: "Flood Risk Prediction Across Regions", category: "Research", tags: "Classical ML · Spatial Validation", shortDesc: "Random splits hit >94% but leave-one-region-out drops F1 0.11–0.15 — loss is station memory (20,544 rows, 42 U.S. gauges).", description: "Published results hit over 94% via random splits, but leave-one-region-out drops mean F1 by 0.11–0.15 across Logistic Regression, Random Forest, XGBoost and LightGBM (20,544 station-months, 33 stations, 8 divisions). Loss traces to station memory, not time, shared events, or 100 km neighbours — and replicates on 42 U.S. gauges (held-out F1 0.04–0.09 lower).", challenges: "Proving the gap is not time, space, or tuning — buffered LOSO and group-aware re-tuning left it unchanged; station history removal cost 0.107 F1.", technologies: ["Python", "scikit-learn", "XGBoost", "LightGBM", "LORO"], githubLink: "https://github.com/IFTI-KAR", year: "2027", image: "/project-6.jpg" },
];

const CATEGORIES = ["All", "Research", "ML", "Web"];

export default function Work() {
  const [category, setCategory] = useState("All");
  const [featuredId, setFeaturedId] = useState(7);
  const [selected, setSelected] = useState(null);
  const visible = category === "All" ? projects : projects.filter((p) => p.category === category);
  const featured = visible.find((p) => p.id === featuredId) || visible[0];

  const { scrollYProgress } = useScroll();
  const featY = useTransform(scrollYProgress, [0, 1], [0, -18]);

  useEffect(() => {
    if (featured) setFeaturedId(featured.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    if (!selected) return;
    window.__lenis?.stop?.();
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start?.();
      document.documentElement.style.overflow = prevOverflow;
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  const others = visible.filter((p) => p.id !== featured?.id);

  return (
    <section id="work" aria-label="Things I've built" style={{ overflow: "hidden", padding: "90px 0 8px" }}>
      <div style={{ padding: "0 var(--gutter)" }}>
        <div className="kicker" data-reveal>
          <span>SELECTED WORK</span>
          <span className="k-right">RESEARCH · ML · WEB</span>
        </div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="display-title" style={{ fontSize: "clamp(56px, 8vw, 108px)", margin: "36px 0 12px" }}>
          Selected <span style={{ color: "var(--accent)" }}>work.</span>
        </motion.h2>
        <p style={{ color: "var(--muted)", fontSize: 14, maxWidth: 460, marginBottom: 36 }}>
          Research first — the evidence, then the builds. Filter to narrow it down.
        </p>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)} aria-pressed={category === cat} style={{ padding: "6px 12px", borderRadius: 999, border: category === cat ? "1px solid var(--accent)" : "1px solid var(--line)", background: category === cat ? "rgba(255,122,61,0.1)" : "transparent", color: category === cat ? "var(--accent)" : "var(--muted)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
              {cat}{cat !== "All" && <sup style={{ marginLeft: 4, fontSize: 8 }}>{projects.filter((p) => p.category === cat).length}</sup>}
            </button>
          ))}
          <span className="index-num" style={{ marginLeft: "auto", alignSelf: "center" }}>SHOWING {visible.length} OF {projects.length}</span>
        </div>
      </div>

      <div style={{ padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)", gap: "clamp(20px,3vw,36px)", alignItems: "start" }} className="work-grid">
        <AnimatePresence mode="wait">
          {featured && (
            <motion.article
              key={featured.id}
              initial={{ opacity: 0, y: 28, clipPath: "inset(0 0 6% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: [0.22, 0.8, 0.3, 1] }}
              onClick={() => setSelected(featured)}
              style={{ position: "sticky", top: 104, border: "1px solid rgba(255,122,61,0.35)", background: "linear-gradient(150deg, rgba(255,122,61,0.09), rgba(255,255,255,0.02) 55%)", padding: "clamp(22px,3vw,40px)", minHeight: 520, display: "flex", flexDirection: "column", cursor: "pointer", overflow: "hidden" }}
            >
              <motion.div style={{ y: featY, position: "absolute", inset: 0, background: "radial-gradient(ellipse at 18% 0%, rgba(255,122,61,0.14), transparent 55%)", pointerEvents: "none" }} />
              {featured.image && (
                <img
                  src={featured.image}
                  alt={`${featured.name} preview`}
                  style={{ position: "absolute", right: -30, top: 110, width: "58%", height: 220, objectFit: "cover", borderRadius: 14, opacity: 0.28, border: "1px solid rgba(255,122,61,0.3)", transform: "rotate(2deg)", pointerEvents: "none" }}
                />
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
                <span className="index-num">FEATURED PROJECT</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)" }}>{featured.year}</span>
              </div>
              <span style={{ marginTop: 42, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", position: "relative" }}>{featured.category} · {featured.tags}</span>
              <h3 className="display-title" style={{ fontSize: "clamp(38px, 4.6vw, 64px)", margin: "16px 0 16px", lineHeight: 0.96, position: "relative", maxWidth: "62%" }}>{featured.name}</h3>
              <p style={{ color: "rgba(216,231,238,0.78)", fontSize: 15, lineHeight: 1.7, maxWidth: 560, position: "relative" }}>{featured.shortDesc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 20, position: "relative" }}>
                {featured.technologies.map((t) => <span key={t} style={{ fontFamily: "var(--mono)", fontSize: 10, border: "1px solid rgba(255,255,255,0.14)", padding: "5px 9px", color: "var(--muted)" }}>{t}</span>)}
              </div>
              <div style={{ display: "flex", gap: 20, borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 20, marginTop: "auto", position: "relative" }}>
                {featured.liveLink && <a href={featured.liveLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} style={{ fontSize: 14, fontWeight: 700 }}>Live Site <span style={{ color: "var(--accent)" }}>↗</span></a>}
                <a href={featured.githubLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} style={{ fontSize: 14, fontWeight: 700 }}>GitHub <span style={{ color: "var(--accent)" }}>↗</span></a>
                <span style={{ marginLeft: "auto", fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>CLICK FOR DETAILS →</span>
              </div>
            </motion.article>
          )}
        </AnimatePresence>

        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--line)" }}>
          <AnimatePresence mode="popLayout" initial={false}>
            {others.map((p, idx) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => { setFeaturedId(p.id); }}
                whileHover={{ background: "rgba(255,122,61,0.045)", x: 6 }}
                style={{
                  display: "grid", gridTemplateColumns: "auto minmax(0,1fr) auto", gap: 16, alignItems: "center",
                  padding: "20px 14px", borderBottom: "1px solid var(--line)", textAlign: "left", background: "none", cursor: "pointer", color: "#fff",
                }}
                aria-label={`Feature ${p.name}`}
              >
                <span className="index-num" style={{ fontSize: 12 }}><strong>{p.category}</strong></span>
                <span>
                  <span className="display-title" style={{ display: "block", fontSize: 20, lineHeight: 1.1 }}>{p.name}</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: 12, marginTop: 5, lineHeight: 1.55 }}>{p.shortDesc}</span>
                  <span style={{ display: "block", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--accent)", marginTop: 8, textTransform: "uppercase" }}>{p.category} · {p.tags}</span>
                </span>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)" }}>{p.year}</span>
                  <span
                    role="button" tabIndex={0}
                    aria-label={`Open details for ${p.name}`}
                    onClick={(e) => { e.stopPropagation(); setSelected(p); }}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); setSelected(p); } }}
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "var(--accent)" }}
                  >
                    Open <FiArrowRight size={13} />
                  </span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
          {others.length === 0 && (
            <p style={{ padding: "32px 14px", color: "var(--muted)", fontSize: 14 }}>Nothing else in this filter — pick another category.</p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(4,4,8,0.82)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} role="dialog" aria-modal="true" aria-label={selected.name}>
            <motion.div data-lenis-prevent tabIndex={0} initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }} onClick={(e) => e.stopPropagation()} onWheel={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()} style={{ width: "min(720px, 100%)", maxHeight: "86vh", overflowY: "auto", WebkitOverflowScrolling: "touch", overscrollBehavior: "contain", background: "#0d1117", border: "1px solid rgba(255,122,61,0.3)", padding: "clamp(24px,4vw,44px)", scrollbarWidth: "thin", outline: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <span className="index-num">{selected.category}</span>
                <button onClick={() => setSelected(null)} aria-label="Close" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--line)", display: "grid", placeItems: "center", background: "none", color: "#fff", cursor: "pointer" }}><FiX /></button>
              </div>
              {selected.image && (
                <img src={selected.image} alt={`${selected.name} preview`} style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12, marginTop: 18, border: "1px solid var(--line)" }} />
              )}
              <h3 className="display-title" style={{ fontSize: "clamp(32px,4vw,52px)", margin: "18px 0 12px" }}>{selected.name}</h3>
              <p style={{ color: "#b9c1cc", lineHeight: 1.75 }}>{selected.description}</p>
              <p style={{ color: "var(--muted)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", marginTop: 24, textTransform: "uppercase" }}>CHALLENGE</p>
              <p style={{ color: "#cbd5e1", lineHeight: 1.7, marginTop: 8 }}>{selected.challenges}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
                {selected.technologies.map((t) => <span key={t} className="skill-badge" style={{ fontSize: 12 }}>{t}</span>)}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
                {selected.liveLink && <a href={selected.liveLink} target="_blank" rel="noreferrer" className="btn-primary"><FiExternalLink size={14} /> Live Demo</a>}
                <a href={selected.githubLink} target="_blank" rel="noreferrer" className="btn-outline"><FiGithub size={14} /> GitHub</a>
                {selected.reportLink && <a href={selected.reportLink} target="_blank" rel="noreferrer" className="btn-outline"><FiFileText size={14} /> Report</a>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .work-grid { grid-template-columns: 1fr !important; }
          .work-grid > article { position: static !important; min-height: 0 !important; }
          .work-grid > article h3 { max-width: 100% !important; font-size: clamp(30px, 7.5vw, 44px) !important; }
          .work-grid > article img { display: none !important; }
          .work-grid > div button { grid-template-columns: 1fr auto !important; gap: 10px !important; padding: 18px 8px !important; }
          .work-grid > div button > span:first-child { display: none !important; }
        }
        @media (max-width: 640px) {
          #work h2 { font-size: clamp(40px, 10vw, 56px) !important; }
          #work .btn-primary, #work .btn-outline { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
