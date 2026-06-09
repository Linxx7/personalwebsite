"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Button from "@/components/ui/Button";
import { PRICING, type PricingPlan } from "@/lib/constants";

function PlanCard({ plan, index }: { plan: PricingPlan; index: number }) {
  return (
    <RevealOnScroll delay={index * 0.1} direction="up">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className={`relative flex flex-col h-full p-8 border overflow-hidden ${
          plan.featured
            ? "border-[rgba(0,229,255,0.5)] bg-gradient-to-br from-[rgba(0,229,255,0.05)] to-[#0f1628]"
            : "border-[rgba(0,229,255,0.12)] bg-[#0f1628]"
        }`}
      >
        {/* Featured ribbon */}
        {plan.featured && (
          <div className="absolute top-4 right-[-28px] rotate-45 bg-[#00e5ff] text-[#0a0e1a] font-mono font-bold text-[8px] tracking-widest px-10 py-1">
            MAIS POPULAR
          </div>
        )}

        <p className="font-mono text-[11px] text-[#00e5ff] tracking-[0.2em] uppercase mb-4">
          {plan.name}
        </p>

        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-mono text-[15px] text-[#8899bb]">{plan.currency}</span>
          <span className="font-sans font-extrabold text-[2.8rem] text-[#e8f0fe] leading-none">
            {plan.price}
          </span>
          <span className="font-mono text-[12px] text-[#8899bb]">{plan.period}</span>
        </div>

        <p className="font-mono text-[12px] text-[#8899bb] mt-3 mb-6 leading-relaxed">
          {plan.description}
        </p>

        <ul className="flex-1 mb-8 space-y-0">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 font-sans text-[13px] text-[#e8f0fe] py-2 border-b border-[rgba(255,255,255,0.04)] last:border-0 leading-snug"
            >
              <span className="text-[#39ff85] text-[11px] mt-0.5 shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <Button
          href="#contact"
          variant={plan.ctaStyle === "fill" ? "primary" : "outline"}
          className="w-full justify-center"
        >
          {plan.cta}
        </Button>
      </motion.div>
    </RevealOnScroll>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <RevealOnScroll>
        <p className="section-label font-mono text-[11px] text-[#00e5ff] tracking-[0.22em] uppercase mb-2">
          investimento
        </p>
        <h2 className="font-sans font-bold text-[2rem] text-[#e8f0fe] mb-12">
          Planos & Preços
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {PRICING.map((plan, i) => (
          <PlanCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>

      <RevealOnScroll delay={0.3} className="mt-6">
        <div className="p-5 border border-[rgba(0,229,255,0.1)] bg-[rgba(255,255,255,0.02)]">
          <p className="font-mono text-[11.5px] text-[#8899bb] leading-[2]">
            <span className="text-[#39ff85]">{"// nota"}</span>
            {"  "}
            Preços em BRL · PIX, transferência ou contrato PJ ·
            Projetos internacionais cotados em USD (a partir de $30/h) ·{" "}
            <span className="text-[#e8f0fe]">10% de desconto</span> para ONGs e projetos de impacto social.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
