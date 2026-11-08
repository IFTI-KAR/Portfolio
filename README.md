# Iftikar Rahaman — Portfolio

Personal portfolio website for Iftikar Rahaman — CSE Student at BRAC University, Full Stack Developer, ML & NLP enthusiast.


## Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion + GSAP + Lenis smooth scroll
- **Contact form**: EmailJS
- **Deploy target**: Vercel

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Accent colours

- `--accent: #ff7a3d` (warm orange) — changed from reference cyan `#00e5ff`
- Background: `#08080d` (same dark editorial base)

Update colours in `src/index.css` (`--accent`, `--accent-dim`, `--accent-soft`, `--accent-line`) and Hero glow/corner ticks in `src/components/Hero.jsx` if you want a different palette.

## Content

- `src/data/profile.js` — single source of truth for name, bio, links, stats, and About cards.
- `src/pages/Work.jsx` — 9 projects (4 Web + 3 ML + 2 Research) with featured spotlight + catalogue + detail modal.
- `src/pages/Research.jsx` — 3 AI threads (Jailbreak, PetSegNet, EpiWatch).
- `public/Picture.jpg` — Hero portrait (from `assets/ifti.jpg`).
- `public/resume.pdf` — resume (from `Iftikar_Rahaman.pdf`).
- `public/project-*.png/jpg` — project preview images.
