"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const menu = mobileMenuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const focusFrame = requestAnimationFrame(() => first?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center gap-6 px-6 md:px-8 h-20 transition-all duration-300 bg-surface-obsidian/75 backdrop-blur-xl ${
          scrolled ? "shadow-[0_1px_12px_rgba(0,0,0,0.35)]" : ""
        }`}
      >
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-2">
            <span className="w-9 h-9 rounded bg-surface-elevated flex items-center justify-center text-primary group-hover:text-primary-container transition-colors shadow-[0_0_15px_-3px_rgba(0,229,255,0.2)]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-inter font-semibold text-[18px] text-text-primary tracking-tight group-hover:text-primary transition-colors">
                ricardo<span className="text-primary-container">.dev.br</span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-muted">Full Stack &amp; Games</span>
            </span>
          </Link>
          <div className="hidden xl:flex items-center gap-1 bg-surface-elevated/90 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-status-emerald" />
            </span>
            <span className="font-mono text-[12px] text-text-muted ml-1">Disponível para projetos</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1 bg-surface-obsidian/60 p-1 rounded-full shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1 rounded-full font-inter text-[13px] text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-all duration-200 capitalize"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="/cv-ricardo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-4 py-2 rounded font-mono text-[12px] bg-surface-elevated text-text-primary hover:text-primary transition-all duration-200"
          >
            Baixar CV
          </a>
          <a
            href="#contact"
            className="inline-flex px-4 py-2 rounded font-mono text-[12px] font-semibold bg-gradient-to-r from-primary-container to-secondary text-surface-obsidian hover:shadow-[0_0_25px_-5px_rgba(0,229,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Falar comigo
          </a>
        </div>
        {/* Mobile hamburger */}
        <button
          ref={menuButtonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            aria-hidden="true"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block h-[1.5px] w-full bg-[#00e5ff] origin-center"
          />
          <motion.span
            aria-hidden="true"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[1.5px] w-full bg-[#00e5ff]"
          />
          <motion.span
            aria-hidden="true"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block h-[1.5px] w-full bg-[#00e5ff] origin-center"
          />
        </button>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center bg-[rgba(10,14,26,0.98)] backdrop-blur-2xl"
          >
            <nav aria-label="Navegação mobile" className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-sans font-bold text-3xl text-[#e8f0fe] hover:text-[#00e5ff] transition-colors uppercase tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm font-bold px-8 py-3 bg-[#00e5ff] text-[#0a0e1a] tracking-widest"
                >
                  Falar comigo
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
