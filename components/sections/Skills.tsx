"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Tag from "@/components/ui/Tag";
import { SKILLS, type SkillCategory } from "@/lib/constants";

function SkillCard({ skill, index }: { skill: SkillCategory; index: number }) {
  return (
    <RevealOnScroll delay={index * 0.07} direction="up">
      <motion.div
        whileHover={{ y: -4, borderColor: "rgba(0,229,255,0.4)" }}
        transition={{ duration: 0.2 }}
        className="relative group bg-[rgba(255,255,255,0.02)] border border-[rgba(0,229,255,0.12)] p-5 overflow-hidden h-full"
      >
        {/* Top accent line — appears on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00e5ff] to-[#7b61ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <p className="font-mono text-[10px] text-[#00e5ff] tracking-[0.18em] uppercase mb-3">
          {skill.category}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {skill.items.map((item) => (
            <Tag key={item.name} hot={item.hot}>
              {item.name}
            </Tag>
          ))}
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <RevealOnScroll>
        <p className="section-label font-mono text-[11px] text-[#00e5ff] tracking-[0.22em] uppercase mb-2">
          stack técnico
        </p>
        <h2 className="font-sans font-bold text-[2rem] text-[#e8f0fe] mb-12">
          O que eu construo
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.category} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
