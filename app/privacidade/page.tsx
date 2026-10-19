import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacidade e cookies",
  description: "Como os dados do formulário de contato e os cookies analíticos são tratados neste site.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen px-6 pb-24 pt-32 md:px-12">
      <article className="mx-auto max-w-3xl">
        <p className="section-label font-mono text-[11px] uppercase tracking-[0.22em] text-[#00e5ff]">
          transparência
        </p>
        <h1 className="mt-3 font-sans text-[clamp(2.2rem,6vw,4rem)] font-extrabold tracking-tight text-[#e8f0fe]">
          Privacidade e cookies
        </h1>
        <p className="mt-5 font-sans text-base leading-relaxed text-[#aab7cf]">
          Este aviso explica, de forma simples, quais dados podem ser tratados quando você usa este site.
        </p>

        <div className="mt-12 space-y-10">
          <section aria-labelledby="contact-data">
            <h2 id="contact-data" className="font-sans text-xl font-bold text-[#e8f0fe]">
              Formulário de contato
            </h2>
            <p className="mt-3 font-sans text-[15px] leading-7 text-[#aab7cf]">
              Ao enviar uma mensagem, você fornece nome, e-mail, tipo de projeto e o conteúdo da mensagem.
              Esses dados são usados para responder ao contato e são encaminhados pelo serviço EmailJS.
            </p>
          </section>

          <section aria-labelledby="analytics-data">
            <h2 id="analytics-data" className="font-sans text-xl font-bold text-[#e8f0fe]">
              Analytics opcional
            </h2>
            <p className="mt-3 font-sans text-[15px] leading-7 text-[#aab7cf]">
              O Google Analytics só é carregado depois do seu aceite. Ele ajuda a entender visitas e desempenho
              do site. Recusar essa opção não limita nenhuma funcionalidade.
            </p>
          </section>

          <section aria-labelledby="preferences-data">
            <h2 id="preferences-data" className="font-sans text-xl font-bold text-[#e8f0fe]">
              Sua preferência
            </h2>
            <p className="mt-3 font-sans text-[15px] leading-7 text-[#aab7cf]">
              A escolha entre aceitar ou recusar analytics fica salva apenas no seu navegador. Você pode reabrir
              o painel pelo botão “Cookies” no rodapé e alterar a decisão quando quiser.
            </p>
          </section>

          <section aria-labelledby="rights-data">
            <h2 id="rights-data" className="font-sans text-xl font-bold text-[#e8f0fe]">
              Dúvidas e solicitações
            </h2>
            <p className="mt-3 font-sans text-[15px] leading-7 text-[#aab7cf]">
              Para perguntar sobre seus dados ou solicitar correção ou exclusão de uma mensagem enviada, escreva
              para{" "}
              <a className="text-[#00e5ff] hover:underline" href="mailto:ricardolins97@gmail.com">
                ricardolins97@gmail.com
              </a>.
            </p>
          </section>
        </div>

        <p className="mt-12 border-t border-[rgba(0,229,255,0.12)] pt-6 font-mono text-xs text-[#8899bb]">
          Última atualização: 15 de outubro de 2026.
        </p>
        <Link href="/" className="mt-8 inline-block font-mono text-sm font-bold text-[#00e5ff] hover:underline">
          ← Voltar ao início
        </Link>
      </article>
    </main>
  );
}

