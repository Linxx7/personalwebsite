"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import Button from "@/components/ui/Button";
import { STATS } from "@/lib/constants";

/* ─── Animated stat counter ─────────────────────────────────── */
function StatCounter({
  num,
  prefix = "",
  suffix = "",
}: {
  num: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * num));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, num]);

  return (
    <span ref={ref} className="text-[2.2rem] font-extrabold text-[#39ff85] leading-none tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
}

/* ─── Phone mockup ───────────────────────────────────────────── */
function PhoneMockup() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useTransform(mouseX, [-500, 500], [-14, 14]);
  const rotateX = useTransform(mouseY, [-400, 400], [12, -12]);
  const springRotateX = useSpring(rotateX, { stiffness: 70, damping: 25 });
  const springRotateY = useSpring(rotateY, { stiffness: 70, damping: 25 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div style={{ perspective: "900px" }} className="flex justify-center items-center">
      <motion.div
        style={{ rotateX: springRotateX, rotateY: springRotateY }}
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[200px] h-[400px] md:w-[215px] md:h-[430px]"
      >
        <div
          className="absolute inset-0 rounded-[38px] overflow-hidden"
          style={{
            background: "#0a0e1a",
            border: "1px solid rgba(0,229,255,0.22)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset, 0 30px 80px rgba(0,0,0,0.6), 0 0 50px rgba(0,229,255,0.08)",
          }}
        >
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.5)] to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[18px] bg-[#0a0e1a] rounded-b-[14px] z-20" />

          <div className="absolute inset-[5px] rounded-[34px] bg-[#0c1120] overflow-hidden">
            <div className="px-4 pt-5 pb-1.5 flex justify-between">
              <span className="font-mono text-[8px] text-[#8899bb]">9:41</span>
              <span className="font-mono text-[8px] text-[#8899bb]">◉◉◉</span>
            </div>

            <div className="mx-3 p-2.5 rounded-[12px] mb-2 border border-[rgba(0,229,255,0.12)] bg-[rgba(0,229,255,0.04)]">
              <p className="font-mono text-[7px] text-[#00e5ff] tracking-widest mb-1">{"// receita"}</p>
              <p className="font-sans font-extrabold text-[19px] text-white leading-none">R$ 12.4k</p>
              <p className="font-mono text-[7px] text-[#39ff85] mt-1">↑ +23% este mês</p>
            </div>

            <div className="mx-3 grid grid-cols-2 gap-1.5 mb-2">
              <div className="p-2 rounded-[10px] border border-[rgba(57,255,133,0.1)] bg-[rgba(57,255,133,0.03)]">
                <p className="font-mono text-[6.5px] text-[#8899bb] tracking-wider">USUÁRIOS</p>
                <p className="font-bold text-[14px] text-[#e8f0fe]">200+</p>
              </div>
              <div className="p-2 rounded-[10px] border border-[rgba(123,97,255,0.1)] bg-[rgba(123,97,255,0.03)]">
                <p className="font-mono text-[6.5px] text-[#8899bb] tracking-wider">PROJETOS</p>
                <p className="font-bold text-[14px] text-[#e8f0fe]">4</p>
              </div>
            </div>

            <div className="mx-3 p-2.5 rounded-[10px] border border-[rgba(123,97,255,0.12)] bg-[rgba(123,97,255,0.04)]">
              <p className="font-mono text-[7.5px] leading-[1.7]">
                <span className="text-[#8899bb]">const </span>
                <span className="text-[#00e5ff]">dev</span>
                <span className="text-[#8899bb]"> = </span>
                <span className="text-[#39ff85]">&quot;Ricardo&quot;</span>
              </p>
              <p className="font-mono text-[7.5px] leading-[1.7]">
                <span className="text-[#7b61ff]">buildWith</span>
                <span className="text-white">(</span>
                <span className="text-[#39ff85]">love</span>
                <span className="text-white">)</span>
              </p>
            </div>

            <div className="absolute bottom-3 left-0 right-0 flex justify-around px-3">
              {["⌂", "⊞", "⌕", "◉"].map((icon, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-[8px] flex items-center justify-center text-[13px] ${
                    i === 0 ? "bg-[rgba(0,229,255,0.15)] text-[#00e5ff]" : "text-[#8899bb]"
                  }`}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-28 h-5 rounded-full blur-2xl bg-[rgba(0,229,255,0.18)]" />
      </motion.div>
    </div>
  );
}

/* ─── Hero section ───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-16 pt-24 pb-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-70" />

      {/* Glow orbs */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 68%)" }}
      />
      <div
        className="absolute bottom-[60px] left-[-60px] w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,97,255,0.09) 0%, transparent 68%)" }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">
        {/* ── Left content ── */}
        <div>
          {/* Avatar + available badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-start gap-3 mb-7"
          >
            {/* Circular photo */}
            <div className="relative">
              <div
                className="absolute -inset-[3px] rounded-full"
                style={{ background: "linear-gradient(135deg, #00e5ff, #7b61ff, #39ff85)" }}
              />
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-[#0a0e1a]">
                <img
                  src="/fotoperfil.jpg"
                  alt="Ricardo Duarte"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Glow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full blur-xl bg-[rgba(0,229,255,0.25)]" />
            </div>

            {/* Available badge */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39ff85] animate-pulse" />
              <span className="font-mono text-[11px] text-[#00e5ff] tracking-[0.22em] uppercase">
                disponível para projetos
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <h1 className="mb-6">
            <div className="overflow-hidden mb-1">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.78, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block" }}
                className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-[#e8f0fe]"
              >
                Ricardo
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.78, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block", textShadow: "0 0 40px rgba(0,229,255,0.25)" }}
                className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-[#00e5ff]"
              >
                Duarte.
              </motion.span>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-mono text-[13.5px] text-[#8899bb] max-w-[500px] mb-10 leading-[1.85]"
          >
            Full Stack Developer · React · Node.js · TypeScript
            <br />
            Construindo aplicações escaláveis para o setor público e privado.
            <br />
            <span className="text-[#e8f0fe]">Inglês avançado</span> · Brasília–DF · Remoto ou presencial.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.76 }}
            className="flex gap-3 flex-wrap mb-12"
          >
            <Button href="#pricing" variant="primary">
              ▸ Ver planos & preços
            </Button>
            <Button href="#contact" variant="outline">
              ✉ Falar comigo
            </Button>
            <Button href="/cv-ricardo.pdf" variant="outline" target="_blank">
              ↓ Baixar CV
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-wrap gap-8 pt-6 border-t border-[rgba(0,229,255,0.12)]"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <StatCounter num={s.num} prefix="" suffix={s.suffix} />
                <p className="font-mono text-[11px] text-[#8899bb] tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: phone mockup ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex justify-center"
        >
          <PhoneMockup />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="font-mono text-[10px] text-[#8899bb] tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[rgba(0,229,255,0.5)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
