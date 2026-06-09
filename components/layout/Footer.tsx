export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(0,229,255,0.1)] py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="font-mono text-[11px] text-[#8899bb] tracking-wider">
        © {currentYear} Ricardo Duarte · Desenvolvedor Full Stack Brasília
      </span>

      <nav aria-label="Links sociais" className="flex items-center gap-5">
        <a
          href="https://github.com/Linxx7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Ricardo Duarte"
          className="font-mono text-[11px] text-[#8899bb] hover:text-[#00e5ff] transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/ricardo-alberto-lins-duarte-913185170"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Ricardo Duarte"
          className="font-mono text-[11px] text-[#8899bb] hover:text-[#00e5ff] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ricardolins97@gmail.com"
          aria-label="Enviar e-mail para Ricardo Duarte"
          className="font-mono text-[11px] text-[#8899bb] hover:text-[#00e5ff] transition-colors"
        >
          Email
        </a>
      </nav>

      <span className="font-mono text-[11px] text-[#8899bb]">
        feito com <span className="text-[#39ff85]" aria-hidden="true">♥</span> em Brasília, DF
      </span>
    </footer>
  );
}
