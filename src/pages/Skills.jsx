// src/pages/Skills.jsx
// Technologies — grouped, staggered reveal.
import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiTypescript, SiHtml5,
  SiReact, SiNodedotjs, SiExpress, SiPostgresql,
  SiScikitlearn, SiTensorflow, SiPandas, SiNumpy,
  SiPytorch, SiGit, SiGithub, SiVercel,
} from "react-icons/si";
import { FaBrain, FaCode, FaLightbulb } from "react-icons/fa";
import DecryptedText from "../components/DecryptedText";

const skillGroups = [
  { category: "MODELS & DATA", skills: [
    { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
    { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
    { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#0099C6" },
    { name: "Pandas", icon: <SiPandas />, color: "#9575CD" },
    { name: "NumPy", icon: <SiNumpy />, color: "#4D8AB6" },
    { name: "NLP", icon: <FaBrain />, color: "#E91E63" },
    { name: "Machine Learning & AI", icon: <FaBrain />, color: "#00BCD4" },
  ]},
  { category: "CODE & INTERFACE", skills: [
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
  ]},
  { category: "SERVERS & STORAGE", skills: [
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
    { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
  ]},
  { category: "FOUNDATIONS", skills: [
    { name: "Data Structures & Algorithms", icon: <FaCode />, color: "#FF7A3D" },
    { name: "Problem-Solving Skills", icon: <FaLightbulb />, color: "#FFD54F" },
  ]},
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="kicker" data-reveal>
        <span>SKILLS</span>
        <span className="k-right">TECHNOLOGIES</span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="display-title"
        style={{ fontSize: "clamp(52px, 7vw, 96px)", margin: "36px 0 56px" }}
      >
        Skills.
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {skillGroups.map((group, gi) => (
          <motion.div
            key={gi}
            className="technology-group"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
            style={{ display: "grid", gridTemplateColumns: "minmax(180px, 0.3fr) 1fr", gap: 24, padding: "22px 0", borderTop: "1px solid var(--line)" }}
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--muted)", paddingTop: 8 }}>
              <span style={{ color: "var(--accent)", marginRight: 8 }}>0{gi + 1}</span>{group.category}
            </motion.p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px 18px" }}>
              {group.skills.map((skill, si) => (
                <motion.div
                  key={si}
                  variants={{ hidden: { opacity: 0, y: 16, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } } }}
                  whileHover={{ y: -2 }}
                  style={{ display: "flex", alignItems: "center", gap: 10, color: skill.color, padding: "10px 12px", border: "1px solid transparent", transition: "border-color .25s" }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: skill.color, fontSize: 17 }}>{skill.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#e6edf2" }}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .technology-group { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
