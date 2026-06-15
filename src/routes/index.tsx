import { createFileRoute } from "@tanstack/react-router";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero, About, Projects, Skills, Experience, Contact } from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maddy Le — Designer & Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Maddy Le — product designer and engineer crafting beautiful, fast, accessible interfaces.",
      },
      { property: "og:title", content: "Maddy Le — Designer & Engineer" },
      {
        property: "og:description",
        content: "Portfolio of Maddy Le — designer and engineer crafting beautiful, fast, accessible interfaces.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden animate-fade-in">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
