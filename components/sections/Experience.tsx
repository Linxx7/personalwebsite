"use client";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <RevealOnScroll>
        <p className="section-label font-mono text-[11px] text-[#00e5ff] tracking-[0.22em] uppercase mb-2">
          trajetória
        </p>
        <h2 className="font-sans font-bold text-[2rem] text-[#e8f0fe] mb-12">
          Experiência profissional
        </h2>
      </RevealOnScroll>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#00e5ff] via-[#7b61ff] to-transparent" />

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.1} direction="left">
              <div className="pl-8 relative">
                {/* Timeline dot */}
                <div
                  className="absolute left-[-4px] top-[6px] w-[9px] h-[9px] rounded-full bg-[#00e5ff]"
                  style={{ boxShadow: "0 0 10px rgba(0,229,255,0.6)" }}
                />

                <p className="font-mono text-[11px] text-[#00e5ff] tracking-widest mb-1">
                  {item.period}
                </p>
                <h3 className="font-sans font-bold text-[1.05rem] text-[#e8f0fe] mb-0.5">
                  {item.title}
                </h3>
                <p className="font-mono text-[12px] text-[#8899bb] mb-4">{item.company}</p>

                <ul className="space-y-1.5">
                  {item.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="relative pl-4 font-sans text-[14px] text-[#8899bb] leading-[1.65]"
                    >
                      <span className="absolute left-0 top-[5px] text-[#39ff85] text-[10px]">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
