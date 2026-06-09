"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import { PROJECTS, type ProjectItem } from "@/lib/constants";

const FILTERS = [
  { key: "all", label: "Todos" },
  { key: "web", label: "Web App" },
  { key: "game", label: "Jogos" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

const CATEGORY_STYLE = {
  web: {
    badge: "text-[#00e5ff] bg-[#00e5ff]/10 border-[#00e5ff]/25",
    gradient: "from-[#00e5ff]/15 via-[#7b61ff]/8 to-[#0f1628]",
    glow: "rgba(0,229,255,0.08)",
    label: "Web App",
  },
  game: {
    badge: "text-[#39ff85] bg-[#39ff85]/10 border-[#39ff85]/25",
    gradient: "from-[#39ff85]/12 via-[#00e5ff]/8 to-[#0f1628]",
    glow: "rgba(57,255,133,0.08)",
    label: "Jogo",
  },
};

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const style = CATEGORY_STYLE[project.category];
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ duration: 0.28, delay: index * 0.06 }}
    >
      <div
        className="group relative flex flex-col h-full rounded-xl border border-white/5 bg-[#0f1628] overflow-hidden transition-all duration-300 hover:border-white/10"
        style={{ "--glow": style.glow } as React.CSSProperties}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = `0 0 32px ${style.glow}`)
        }
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        {/* Image area */}
        <div className={`relative h-44 bg-gradient-to-br ${style.gradient} overflow-hidden`}>
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,229,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.8) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Project image */}
          {!imgError && (
            <img
              src={project.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              onError={() => setImgError(true)}
            />
          )}

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1628] via-[#0f1628]/20 to-transparent" />

          {/* Category badge */}
          <span
            className={`absolute top-3 right-3 px-2 py-0.5 rounded font-mono text-[10px] tracking-widest uppercase border ${style.badge}`}
          >
            {style.label}
          </span>

          {/* Year */}
          <span className="absolute top-3 left-3 px-2 py-0.5 font-mono text-[10px] text-[#8899bb] bg-[#0a0e1a]/80 rounded tracking-widest">
            {project.year}
          </span>

          {/* Highlight badge */}
          {project.highlight && (
            <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded font-mono text-[9px] tracking-wide text-[#39ff85] bg-[#39ff85]/10 border border-[#39ff85]/20">
              ★ {project.highlight}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3 className="font-sans font-bold text-[0.95rem] text-[#e8f0fe] leading-snug">
            {project.title}
          </h3>
          <p className="font-sans text-[13px] text-[#8899bb] leading-[1.65] flex-1">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded font-mono text-[10px] text-[#8899bb] bg-white/[0.04] border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="flex gap-4 pt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#00e5ff] hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#39ff85] hover:text-white transition-colors"
                >
                  Demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <RevealOnScroll>
        <p className="section-label font-mono text-[11px] text-[#00e5ff] tracking-[0.22em] uppercase mb-2">
          portfólio
        </p>
        <h2 className="font-sans font-bold text-[2rem] text-[#e8f0fe] mb-8">
          Projetos selecionados
        </h2>
      </RevealOnScroll>

      {/* Filter tabs */}
      <RevealOnScroll delay={0.1}>
        <div className="flex gap-2 flex-wrap mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-4 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase transition-all duration-200 border ${
                active === f.key
                  ? "bg-[#00e5ff]/10 text-[#00e5ff] border-[#00e5ff]/40"
                  : "text-[#8899bb] border-white/10 hover:border-white/20 hover:text-[#e8f0fe]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
