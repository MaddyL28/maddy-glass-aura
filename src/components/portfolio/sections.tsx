import { Reveal } from "./Reveal";
import { Typewriter } from "./Typewriter";

/** Reusable glass card */
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`glass rounded-3xl p-6 transition duration-500 hover:-translate-y-1 hover:bg-white/10 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}

/* ============ HERO ============ */
export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center px-4 pt-28 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl place-items-center text-center">
        <Reveal delay={0}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px] shadow-accent" />
            Available for new projects
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I'm <span className="text-gradient">Maddy Le</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 text-xl text-muted-foreground sm:text-2xl">
            I build{" "}
            <Typewriter
              className="text-foreground"
              words={["beautiful interfaces.", "fast web experiences.", "accessible products.", "thoughtful design systems."]}
            />
          </p>
        </Reveal>
        <Reveal delay={360}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Full-stack designer & engineer crafting modern, performant interfaces with a love
            for motion, type, and tiny details.
          </p>
        </Reveal>
        <Reveal delay={480}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-primary-foreground shadow-xl shadow-primary/30 transition hover:opacity-90"
            >
              View my work
            </a>
            <a href="#contact" className="glass rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10">
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground animate-pulse">
        Scroll ↓
      </div>
    </section>
  );
}

/* ============ ABOUT ============ */
export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="About" title="A bit about me" />
        <div className="grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <GlassCard className="h-full">
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/30">
                <div className="flex h-full items-center justify-center text-7xl font-display font-bold text-white/70">
                  ML
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "5+", v: "Years" },
                  { k: "40+", v: "Projects" },
                  { k: "12", v: "Awards" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl bg-white/5 p-3">
                    <div className="text-2xl font-bold text-gradient">{s.k}</div>
                    <div className="text-xs text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
          <Reveal delay={120} className="md:col-span-3">
            <GlassCard className="h-full">
              <h3 className="text-2xl font-bold sm:text-3xl">Designer & engineer based in Sydney.</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I'm Maddy — a product-minded developer focused on the seam between design and
                code. Over the past few years I've helped startups and studios ship interfaces
                that feel alive: fast load times, generous motion, and details you only notice
                because they feel right.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                When I'm not at the keyboard you'll find me sketching type, running coastal
                trails, or hunting the city's best matcha latte.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "TypeScript", "Design Systems", "Motion", "Accessibility"].map((t) => (
                  <span key={t} className="glass rounded-full px-3 py-1 text-xs text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ PROJECTS ============ */
const projects = [
  {
    title: "Lumen Analytics",
    tag: "SaaS · Dashboard",
    desc: "A realtime analytics platform with delightful charts and a customizable widget grid.",
    stack: ["React", "TS", "D3"],
    accent: "from-primary/40 to-secondary/30",
  },
  {
    title: "Drift Studio",
    tag: "Agency · Marketing",
    desc: "Award-winning site for a motion design studio with WebGL transitions and case studies.",
    stack: ["Next.js", "GSAP", "WebGL"],
    accent: "from-secondary/40 to-accent/30",
  },
  {
    title: "Pocket Pantry",
    tag: "Mobile · Lifestyle",
    desc: "AI-powered recipe app that learns what's in your fridge and plans your week.",
    stack: ["React Native", "OpenAI"],
    accent: "from-accent/40 to-primary/30",
  },
  {
    title: "Northwind UI",
    tag: "Open Source",
    desc: "A headless component library focused on accessibility and theming-first APIs.",
    stack: ["TypeScript", "Radix"],
    accent: "from-primary/30 to-accent/40",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="A handful of things I'm proud of — more available on request."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <GlassCard className="group h-full">
                <div className={`mb-6 aspect-[16/10] w-full rounded-2xl bg-gradient-to-br ${p.accent} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                  <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 text-xs text-foreground/80">
                    {p.tag}
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-primary transition group-hover:gap-3">
                  View case study <span aria-hidden>→</span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SKILLS ============ */
const skills = [
  { name: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind", "TanStack"] },
  { name: "Design", items: ["Figma", "Design Systems", "Motion", "Prototyping"] },
  { name: "Backend", items: ["Node.js", "Postgres", "tRPC", "Supabase"] },
  { name: "Craft", items: ["Accessibility", "Performance", "SEO", "Testing"] },
];

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Skills" title="Tools of the trade" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g, i) => (
            <Reveal key={g.name} delay={i * 80}>
              <GlassCard className="h-full">
                <div className="mb-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">{g.name}</div>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-foreground/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ EXPERIENCE ============ */
const experience = [
  {
    role: "Senior Product Engineer",
    company: "Northwind Labs",
    period: "2023 — Present",
    desc: "Leading the design-systems team, shipping a unified component library across 6 products.",
  },
  {
    role: "Product Designer & Developer",
    company: "Drift Studio",
    period: "2021 — 2023",
    desc: "Designed and built award-winning marketing experiences for fintech and SaaS clients.",
  },
  {
    role: "Frontend Engineer",
    company: "Lumen",
    period: "2019 — 2021",
    desc: "Built the realtime dashboard from scratch and grew the frontend team from 2 to 8.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />
        <ol className="relative space-y-6 border-l border-white/10 pl-6">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 100} as="li">
              <span className="absolute -left-[7px] mt-3 h-3 w-3 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_14px] shadow-primary/60" />
              <GlassCard>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold">{e.role}</h3>
                  <span className="text-sm text-muted-foreground">{e.period}</span>
                </div>
                <div className="mt-1 text-sm text-primary">{e.company}</div>
                <p className="mt-3 text-muted-foreground">{e.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============ CONTACT ============ */
export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Have a project in mind, or just want to say hi? My inbox is always open."
        />
        <Reveal>
          <GlassCard className="text-center">
            <a
              href="mailto:hello@maddyle.dev"
              className="text-2xl font-bold text-gradient sm:text-4xl"
            >
              hello@maddyle.dev
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                { l: "GitHub", h: "#" },
                { l: "LinkedIn", h: "#" },
                { l: "Twitter", h: "#" },
                { l: "Dribbble", h: "#" },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.h}
                  className="glass rounded-full px-5 py-2 text-sm hover:bg-white/10"
                >
                  {s.l}
                </a>
              ))}
            </div>
          </GlassCard>
        </Reveal>
        <footer className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Maddy Le. Designed & built with care.
        </footer>
      </div>
    </section>
  );
}
