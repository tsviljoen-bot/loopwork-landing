# Client onboarding checklist — financial visibility / MI assistant

This connects an AI assistant to a client's live accounting data (Xero,
QuickBooks, Sage, etc.) so they can ask plain-language questions about cash
flow, debtors, margin and so on. Treat this as a materially higher-trust
setup than the social media assistant — it's bank feeds, customer records
and financial data, not post drafts. Do this live with the client; never ask
them to send passwords, verification codes, or API keys over chat/email.

Confirm current sign-up requirements, pricing, and available permission
scopes for each service below before a session — these change over time.

## 1. Default to read-only, always

Several of the connectors that link Grok/AI agents to accounting platforms
(e.g. Composio's Xero connector) can also take write actions — creating
contacts, drafts, or records. For this service, the client only asked for
visibility, not automation of their bookkeeping. Unless the client
specifically asks for write actions later, scope every connection to
**read-only** at setup time, and say so explicitly to the client so they
know what the assistant can and can't change.

## 2. Discovery (once, ~30–45 min)

- [ ] Which accounting platform they're on (Xero, QuickBooks, Sage, other).
- [ ] What questions they actually want answered — cash flow, aged
      debtors, margin, runway, specific customer/supplier balances.
- [ ] Who at the business should have access to the assistant.
- [ ] Confirm they understand this is read-only reporting, not a
      replacement for their bookkeeper/accountant.

## 3. Accounts (the client creates and owns every one of these)

- [ ] Grok/X access for their business (check current xAI plan
      requirements for Grok Bot access).
- [ ] Their own account with whichever connector bridges Grok to their
      accounting platform (e.g. Composio, Albato, CData) — check current
      options and pricing, this is a fast-moving space.
- [ ] The client authenticates the accounting connection themselves
      (OAuth sign-in to their own Xero/QuickBooks/Sage account) — never
      request or hold their accounting login, and never request a broader
      permission scope than read access unless they've explicitly asked
      for write actions.

## 4. Setup (done together, client driving the actual sign-ins)

- [ ] Connect the accounting platform to the chosen connector, read-only.
- [ ] Connect that connector to their AI assistant.
- [ ] Fill in the financial-visibility section of
      [`HANDOVER-TEMPLATE.md`](HANDOVER-TEMPLATE.md) and feed it to the
      assistant as its starting context, so it knows the read-only
      boundary and the disclaimer line before answering anything real.
- [ ] Run a test question through the full loop — e.g. "what's my cash
      flow this month" — and have the client confirm the answer against
      their own books before trusting it for anything real.
- [ ] Flag plainly: AI-generated financial summaries can be wrong: the
      client should treat this as a faster first read, not a substitute
      for their bookkeeper/accountant's numbers, especially for anything
      that affects tax, compliance, or a real decision.

## 5. Handoff

- [ ] Client has asked the assistant a real question themselves,
      unassisted, before the session ends.
- [ ] Leave them a one-page cheat sheet: what it can answer, what it can't
      (no write actions unless explicitly set up that way), who to
      contact if something looks wrong.
- [ ] Agree whether this is a one-time setup only, or includes an ongoing
      retainer for support.
