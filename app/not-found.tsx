"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 65%)" }}
      />

      <div className="relative flex flex-col items-center text-center gap-6">
        {/* 404 */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] text-[#00e5ff] tracking-[0.22em] uppercase"
        >
          erro
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-extrabold text-[clamp(6rem,20vw,12rem)] leading-none tracking-tight text-[#00e5ff]"
          style={{ textShadow: "0 0 60px rgba(0,229,255,0.3)" }}
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-mono text-[13px] text-[#8899bb] max-w-[340px] leading-[1.85]"
        >
          Essa página não existe ou foi removida.
          <br />
          Mas o resto do site está funcionando.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button href="/" variant="primary">
            ← Voltar ao início
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
