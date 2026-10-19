"use client";

import { ANALYTICS_PREFERENCES_EVENT } from "@/lib/client-protection.mjs";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(ANALYTICS_PREFERENCES_EVENT))}
      className="font-mono text-[11px] text-[#8899bb] hover:text-[#00e5ff] transition-colors"
    >
      Cookies
    </button>
  );
}

