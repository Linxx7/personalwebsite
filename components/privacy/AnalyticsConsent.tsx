"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Script from "next/script";
import Link from "next/link";
import {
  ANALYTICS_CONSENT_KEY,
  ANALYTICS_PREFERENCES_EVENT,
  parseAnalyticsConsent,
} from "@/lib/client-protection.mjs";

const GA_ID = "G-BWECP6KF1V";
const emptySubscribe = () => () => {};

type Consent = "accepted" | "rejected" | null;

export default function AnalyticsConsent() {
  const hydrated = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [choice, setChoice] = useState<Consent>(null);
  const [editing, setEditing] = useState(false);

  const storedConsent = hydrated
    ? parseAnalyticsConsent(window.localStorage.getItem(ANALYTICS_CONSENT_KEY))
    : null;
  const consent = editing ? null : choice ?? storedConsent;

  useEffect(() => {
    const openPreferences = () => setEditing(true);
    window.addEventListener(ANALYTICS_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(ANALYTICS_PREFERENCES_EVENT, openPreferences);
  }, []);

  function saveConsent(nextConsent: Exclude<Consent, null>) {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, nextConsent);
    setChoice(nextConsent);
    setEditing(false);

    if (nextConsent === "rejected") {
      const analyticsWindow = window as Window & {
        gtag?: (...args: unknown[]) => void;
      };
      analyticsWindow.gtag?.("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script id="ga4-consent" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', { analytics_storage: 'granted' });
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {hydrated && consent === null && (
        <section
          aria-label="Preferências de cookies"
          className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-3xl border border-[rgba(0,229,255,0.28)] bg-[rgba(10,14,26,0.97)] p-5 shadow-2xl backdrop-blur-xl md:flex md:items-center md:gap-6"
        >
          <div className="flex-1">
            <h2 className="font-sans text-base font-bold text-[#e8f0fe]">
              Privacidade e cookies
            </h2>
            <p className="mt-2 font-sans text-sm leading-relaxed text-[#aab7cf]">
              Uso cookies analíticos opcionais para entender o desempenho do site.
              Você pode aceitar ou recusar sem afetar a navegação. Consulte o{" "}
              <Link href="/privacidade" className="text-[#00e5ff] underline-offset-4 hover:underline">
                aviso de privacidade
              </Link>.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-0 md:shrink-0">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="border border-[#00e5ff] px-4 py-2.5 font-mono text-xs font-bold tracking-wider text-[#00e5ff] hover:bg-[rgba(0,229,255,0.08)]"
            >
              Recusar opcionais
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="bg-[#00e5ff] px-4 py-2.5 font-mono text-xs font-bold tracking-wider text-[#0a0e1a] hover:bg-[#33eeff]"
            >
              Aceitar analytics
            </button>
          </div>
        </section>
      )}
    </>
  );
}

