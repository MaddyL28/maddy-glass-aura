# Maddy Le — Portfolio

A glassmorphism-themed personal portfolio built with React, TanStack Start, and Tailwind CSS v4.

## Features

- Glassmorphism design system (frosted cards, aurora gradients, backdrop blur)
- Animated particle background (vanilla canvas — no dependencies)
- Typewriter hero text
- Scroll-triggered reveal animations via IntersectionObserver
- Smooth staggered page-load animation
- Fully responsive, mobile-first
- Accessible (semantic landmarks, ARIA, keyboard-friendly nav, reduced-motion aware)
- Sections: Hero, About, Projects, Skills, Experience, Contact

## Getting started

```bash
bun install
bun run dev
```

Then open the preview URL.

## Project structure

```
src/
  routes/index.tsx                       # Single-page portfolio route
  components/portfolio/
    ParticleBackground.tsx               # Canvas particles + aurora blobs
    Navbar.tsx                           # Sticky glass nav with mobile menu
    Typewriter.tsx                       # Cycling typewriter text
    Reveal.tsx                           # Scroll-reveal wrapper
    sections.tsx                         # Hero, About, Projects, Skills, Experience, Contact
  styles.css                             # Design tokens, glass utilities, keyframes
```

## Customizing content

All copy lives in `src/components/portfolio/sections.tsx` — edit the `projects`,
`skills`, and `experience` arrays plus the inline JSX to make it yours.

Colors and the glass aesthetic live in `src/styles.css` (`:root` tokens and
`@utility glass` / `@utility glass-strong`).
