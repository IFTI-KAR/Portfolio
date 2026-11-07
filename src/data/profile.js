// src/data/profile.js
// Single source of truth — consumed by Hero, About, Footer, Contact, etc.

export const profile = {
  name: "Iftikar Rahaman",
  shortName: "IR",
  firstName: "Iftikar",
  heroHeadline: ["Researcher &", "Data Analyst,", "ML Engineer."],
  heroRotation: ["Research", "Data Analysis", "Machine Learning"],
  heroMeta: "RESEARCHER × DATA ANALYST",
  location: "DHAKA, BANGLADESH",
  roles: ["ML Researcher", "Data Analyst", "Machine Learning Engineer", "CSE Graduate"],
  bio: "CSE Graduate from BRAC University (2022–2026, CGPA 3.65/4.00). My work focuses on machine learning research and data analysis. Thesis on cascaded SLM–LLM tutoring and ECCE 2027 flood prediction paper. I am seeking research and data roles.",
  availability: "Available for research and data roles",
  locationTag: "DHAKA, BANGLADESH",
  links: {
    github: "https://github.com/IFTI-KAR",
    linkedin: "https://www.linkedin.com/in/iftikar-rahaman91/",
    facebook: "https://www.facebook.com/share/1CvrUiMG9y",
    email: "iftikar.rahaman@g.bracu.ac.bd",
    phone: "+880 1818 904 360",
    phoneHref: "tel:+8801818904360",
    whatsapp: "https://wa.me/8801818904360",
    resume: "https://drive.google.com/drive/folders/1rXZdnEw7flTl2p-n8tcPSUpNbb0UNd5A?usp=sharing",
  },
  stats: [
    { value: "2", label: "Papers & manuscripts" },
    { value: "20,544", label: "Flood observations" },
    { value: "0.89", label: "Accuracy / F1" },
  ],
};

export const aboutChapters = [
  {
    id: "background",
    kicker: "THE BASICS",
    title: "Graduated in computer science.",
    body: "I graduated with a B.Sc. in Computer Science & Engineering from BRAC University — trained in algorithms, data structures, and the core principles of software engineering.",
    note: "BRAC University · 2022–2026",
  },
  {
    id: "craft",
    kicker: "RESEARCH",
    title: "Applied machine learning.",
    body: "Research focus is evaluation: spatial splits, ablations, and calibration. Thesis work in cascaded SLM–LLM tutoring; ECCE 2027 paper on spatial generalization in flood prediction.",
    note: "Python · ML / NLP · Analysis",
  },
  {
    id: "method",
    kicker: "APPROACH",
    title: "Reliable, maintainable software.",
    body: "Web applications built with React, Node.js, and PostgreSQL, with attention to correctness, accessibility, and measurable performance.",
    note: "React · Node.js · PostgreSQL",
  },
  {
    id: "beyond",
    kicker: "INTERESTS",
    title: "Outside academic work.",
    body: "Fitness, continuous learning, and technical reading.",
    note: "Fitness · Technical reading",
  },
];

export default profile;
