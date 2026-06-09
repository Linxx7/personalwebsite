"use client";

import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Button from "@/components/ui/Button";

const EJS_SERVICE  = "service_men6kf8";
const EJS_TEMPLATE = "template_tr0icia";
const EJS_KEY      = "9yvvfkEZ35KPlvLax";

const SOCIAL_LINKS = [
  { icon: "✉", label: "ricardolins97@gmail.com", href: "mailto:ricardolins97@gmail.com" },
  { icon: "☎", label: "(61) 98267-0133", href: "tel:+5561982670133" },
  {
    icon: "in",
    label: "LinkedIn",
    href: "https://linkedin.com/in/ricardo-alberto-lins-duarte-913185170",
  },
  { icon: "⌖", label: "Brasília – DF · Remoto ou presencial", href: null },
];

const PROJECT_TYPES = [
  "Freela Pontual",
  "Projeto Completo (MVP)",
  "Retainer Mensal",
  "Consultoria técnica",
  "Outro",
];

type Status = "idle" | "sending" | "sent" | "error";

const inputBase =
  "w-full bg-[#151d35] border border-[rgba(0,229,255,0.15)] text-[#e8f0fe] px-4 py-3 font-mono text-[13px] outline-none focus:border-[#00e5ff] transition-colors duration-200 placeholder:text-[#8899bb]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EJS_SERVICE, EJS_TEMPLATE, formRef.current!, EJS_KEY);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <RevealOnScroll>
        <p className="section-label font-mono text-[11px] text-[#00e5ff] tracking-[0.22em] uppercase mb-2">
          vamos construir juntos
        </p>
        <h2 className="font-sans font-bold text-[2rem] text-[#e8f0fe] mb-12">
          Contato
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: info */}
        <RevealOnScroll direction="left">
          <p className="font-sans text-[15px] text-[#8899bb] mb-8 leading-[1.85]">
            Tem um projeto em mente? Quer escalar sua plataforma ou precisa de um dev
            confiável no time? Me manda uma mensagem.
          </p>

          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 font-mono text-[13px] text-[#e8f0fe] hover:text-[#00e5ff] transition-colors group"
                >
                  <span className="w-9 h-9 flex items-center justify-center border border-[rgba(0,229,255,0.15)] bg-[rgba(255,255,255,0.02)] text-base group-hover:border-[rgba(0,229,255,0.4)] transition-colors">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ) : (
                <div
                  key={link.label}
                  className="flex items-center gap-3 font-mono text-[13px] text-[#8899bb]"
                >
                  <span className="w-9 h-9 flex items-center justify-center border border-[rgba(0,229,255,0.1)] bg-[rgba(255,255,255,0.02)] text-base">
                    {link.icon}
                  </span>
                  {link.label}
                </div>
              )
            )}
          </div>
        </RevealOnScroll>

        {/* Right: form */}
        <RevealOnScroll direction="right" delay={0.1}>
          <AnimatePresence mode="wait">
            {status === "error" ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center gap-4 py-16 border border-[rgba(255,80,80,0.25)] bg-[rgba(255,80,80,0.03)]"
              >
                <span className="text-red-400 text-4xl">✕</span>
                <p className="font-sans font-bold text-[#e8f0fe] text-lg">Erro ao enviar</p>
                <p className="font-mono text-[12px] text-[#8899bb] text-center">
                  Tente novamente ou me chame pelo WhatsApp.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-mono text-[11px] text-[#00e5ff] hover:underline mt-2 tracking-wider"
                >
                  Tentar novamente
                </button>
              </motion.div>
            ) : status === "sent" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center gap-4 py-16 border border-[rgba(57,255,133,0.25)] bg-[rgba(57,255,133,0.03)]"
              >
                <span className="text-[#39ff85] text-4xl">✓</span>
                <p className="font-sans font-bold text-[#e8f0fe] text-lg">Mensagem enviada!</p>
                <p className="font-mono text-[12px] text-[#8899bb] text-center">
                  Te respondo em breve.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-mono text-[11px] text-[#00e5ff] hover:underline mt-2 tracking-wider"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4"
              >
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-[10px] text-[#8899bb] tracking-widest uppercase mb-1.5">
                    Nome
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                    className={inputBase}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-mono text-[10px] text-[#8899bb] tracking-widest uppercase mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="seu@email.com"
                    className={inputBase}
                  />
                </div>

                <div>
                  <label htmlFor="contact-type" className="block font-mono text-[10px] text-[#8899bb] tracking-widest uppercase mb-1.5">
                    Tipo de projeto
                  </label>
                  <select
                    id="contact-type"
                    name="project_type"
                    required
                    className={`${inputBase} appearance-none cursor-pointer`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione...
                    </option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-[#151d35]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-mono text-[10px] text-[#8899bb] tracking-widest uppercase mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Conte sobre seu projeto..."
                    className={`${inputBase} resize-y min-h-[100px]`}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "sending"}
                  className="w-full justify-center mt-2"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensagem ▸"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </RevealOnScroll>
      </div>
    </section>
  );
}
