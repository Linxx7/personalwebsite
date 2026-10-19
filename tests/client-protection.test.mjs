import test from "node:test";
import assert from "node:assert/strict";
import {
  CONTACT_COOLDOWN_MS,
  getContactBlockReason,
  parseAnalyticsConsent,
} from "../lib/client-protection.mjs";

test("aceita apenas valores de consentimento conhecidos", () => {
  assert.equal(parseAnalyticsConsent("accepted"), "accepted");
  assert.equal(parseAnalyticsConsent("rejected"), "rejected");
  assert.equal(parseAnalyticsConsent("invalid"), null);
  assert.equal(parseAnalyticsConsent(null), null);
});

test("bloqueia o honeypot preenchido", () => {
  assert.equal(
    getContactBlockReason({ honeypot: "bot.example", lastSubmittedAt: 0, now: 10_000 }),
    "spam",
  );
});

test("aplica intervalo entre envios", () => {
  assert.equal(
    getContactBlockReason({
      honeypot: "",
      lastSubmittedAt: 10_000,
      now: 10_000 + CONTACT_COOLDOWN_MS - 1,
    }),
    "cooldown",
  );
  assert.equal(
    getContactBlockReason({
      honeypot: "",
      lastSubmittedAt: 10_000,
      now: 10_000 + CONTACT_COOLDOWN_MS,
    }),
    null,
  );
});

