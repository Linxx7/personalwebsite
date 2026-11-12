"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

const STAT_COLORS = ["text-primary-container", "text-secondary", "text-tertiary-fixed", "text-primary"];

function TerminalCard() {
  return (
    <div className="relative">
      <div className="rounded-xl bg-surface-obsidian/90 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
        <div className="px-4 py-3 bg-surface-container flex items-center justify-between">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#93000a]/80" />
            <span className="w-3 h-3 rounded-full bg-secondary-container/80" />
            <span className="w-3 h-3 rounded-full bg-tertiary-container/80" />
          </div>
          <span className="font-mono text-[12px] text-text-muted">ricardo_profile.ts</span>
          <span className="w-4" />
        </div>

        <div className="p-6 font-mono text-[14px] leading-[22px] flex flex-col gap-1 bg-surface-obsidian">
          <p className="text-text-muted">
            <span className="text-secondary font-semibold">import</span> {"{ Architect, Gamer }"}{" "}
            <span className="text-secondary font-semibold">from</span>{" "}
            <span className="text-tertiary">&apos;@core/mindset&apos;</span>;
          </p>
          <div className="mt-1">
            <p className="text-text-primary">
              <span className="text-secondary font-semibold">const</span>{" "}
              <span className="text-primary-container">engineer</span> = {"{"}
            </p>
            <p className="pl-4 text-text-muted">name: <span className="text-tertiary">&quot;Ricardo Duarte&quot;</span>,</p>
            <p className="pl-4 text-text-muted">role: <span className="text-tertiary">&quot;Full Stack &amp; Game Dev&quot;</span>,</p>
            <p className="pl-4 text-text-muted">stack: [</p>
            <p className="pl-10 text-primary">&quot;React&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;, &quot;Unity&quot;</p>
            <p className="pl-4 text-text-muted">],</p>
            <p className="pl-4 text-text-muted">status: <span className="text-status-emerald">&quot;Pronto para novos desafios&quot;</span>,</p>
            <p className="pl-4 text-text-muted">location: <span className="text-primary">&quot;Brasília - DF&quot;</span></p>
            <p className="text-text-primary">{"};"}</p>
          </div>

          <div className="mt-2 rounded bg-surface-container-low/60 p-2 flex items-center justify-between">
            <span className="text-[13px] text-text-muted">Impacto Mensal</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-status-emerald">
              ↗ +23% prod throughput
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1 mt-1">
            <div className="p-2 bg-surface-elevated/70 rounded flex flex-col">
              <span className="text-[11px] font-semibold tracking-[0.08em] text-text-muted">ACTIVE USERS</span>
              <span className="font-inter text-[16px] font-bold text-text-primary">200+ (Prod)</span>
            </div>
            <div className="p-2 bg-surface-elevated/70 rounded flex flex-col">
              <span className="text-[11px] font-semibold tracking-[0.08em] text-text-muted">CODE DELIVERIES</span>
              <span className="font-inter text-[16px] font-bold text-secondary">100% on-time</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-1.5 bg-surface-container-low flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[0.08em] text-text-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> UTF-8 · Git branch: main
          </span>
          <span className="font-mono text-[12px] text-primary-container">ricardo.dev.br</span>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 bg-surface-container p-3 rounded-lg shadow-xl hidden sm:flex items-center gap-3 backdrop-blur-md">
        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary-container" aria-hidden="true">
          ✓
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-text-primary">Campus Party Speaker</span>
          <span className="font-inter text-[13px] text-text-muted">Apresentação Robótica 3D</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 md:px-8 pt-32 pb-20">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary-container/10 via-secondary-container/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-96 -left-32 w-96 h-96 bg-primary-container/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-[800px] -right-32 w-96 h-96 bg-tertiary-container/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated/80 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)] mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-emerald" />
            </span>
            <span className="font-mono text-[12px] text-status-emerald tracking-wide">
              Disponível para novos projetos · Remoto ou presencial
            </span>
          </motion.div>

          <div className="flex flex-col mb-4">
            <span className="font-mono text-[11px] font-semibold text-primary uppercase tracking-[0.2em] mb-1">
              {"// Portfólio de Engenharia de Software"}
            </span>
            <h1 className="font-sans font-extrabold text-[44px] leading-[48px] md:text-[64px] md:leading-[72px] tracking-[-0.04em] text-text-primary">
              Ricardo{" "}
              <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
                Duarte
              </span>
            </h1>
            <p className="font-sans font-semibold text-[24px] leading-8 text-on-surface-variant mt-1">
              Full Stack Developer &amp; Game Designer
            </p>
          </div>

          <p className="font-inter text-[18px] leading-7 text-text-muted max-w-[620px] mb-10">
            Construindo aplicações web escaláveis e produtos digitais para o setor público e privado. Especialista em{" "}
            <span className="text-text-primary font-medium">React, Node.js e TypeScript</span>, com sólida vivência em{" "}
            <span className="text-text-primary font-medium">Game Dev (Unity/C#)</span>. Inglês avançado · Brasília–DF.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-inter text-[18px] font-semibold bg-gradient-to-r from-primary-container to-secondary text-surface-obsidian hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              ▶ Ver projetos selecionados
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-inter text-[18px] font-semibold bg-surface-elevated text-text-primary hover:text-primary hover:bg-surface-container-high transition-all duration-200"
            >
              ✉ Falar comigo
            </a>
            <a
              href="/cv-ricardo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-3 rounded font-mono text-[13px] text-text-muted hover:text-primary transition-colors"
            >
              [↓ Baixar CV]
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full pt-4">
            {STATS.map((s, i) => (
              <div key={s.label} className="p-4 rounded bg-surface-container-low shadow-sm flex flex-col">
                <span className={`font-sans font-extrabold text-[36px] leading-none mb-1 tabular-nums ${STAT_COLORS[i % STAT_COLORS.length]}`}>
                  {s.num}
                  {s.suffix}
                </span>
                <span className="font-mono text-[12px] uppercase text-text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5 lg:pl-6">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
