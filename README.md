# Loopwork — AI automation for small businesses (landing page)

Lead-gen landing page: scenario-based use cases showing how an AI assistant
running on a small business's *own* accounts can handle their social media,
with a "request a fit check" contact form. Implementation work only happens
for businesses that respond — nothing is built or sold until there's real
demand.

**Business model:** this is a one-time setup/onboarding service, not an
ongoing managed-posting service. The client ends up with their own accounts
— Grok/X, a scheduler, their social accounts, and/or their accounting
platform — all connected and configured, then they run it themselves from
their own chat going forward. Loopwork's job is the setup and handoff, not
sitting in the loop day-to-day (an ongoing retainer can be a separate,
optional offer — see "Business-model note" below).

Two service lines:

- **Social media** — drafts and schedules posts from an AI assistant
  connected to the client's own social accounts. See
  [`ONBOARDING.md`](ONBOARDING.md).
- **Financial visibility / MI** — connects an AI assistant read-only to the
  client's own accounting platform (Xero, QuickBooks, Sage) so they can ask
  plain questions about cash flow, debtors, margin, etc. This is a
  materially higher-trust setup than social media — see
  [`ONBOARDING-MI.md`](ONBOARDING-MI.md), which defaults every connection
  to read-only and flags that AI-generated financial summaries can be
  wrong and aren't a substitute for a bookkeeper/accountant.

"Loopwork" is a placeholder working name — check domain/trademark availability
before using it publicly.

## Status

- Static HTML/CSS/JS, no build step, no dependencies.
- The lead form now accepts optional photo/video uploads (up to 6 files,
  25MB each) and uploads them client-side straight to Cloudinary's free
  tier — no backend server needed for that part.
- Form submission itself still just shows a client-side thank-you message.
  Before this goes live, wire it to a real backend (e.g. Formspree, Tally, or
  a simple serverless function) so the lead's details and their uploaded
  file URLs actually arrive somewhere — requires its own account sign-up.
- No domain registered, no hosting account created, nothing deployed.

## What's still manual before a client is actually running this

Uploading files here (an optional way for a lead to share samples before
onboarding) does not post them anywhere by itself, and nothing is automated
end-to-end yet. The realistic path is:

1. Create a free Cloudinary account and an **unsigned** upload preset, then
   put the cloud name + preset name into `script.js` (`CLOUDINARY_CLOUD_NAME`
   / `CLOUDINARY_UPLOAD_PRESET`). Until then, uploads are skipped.
2. Wire the lead form to a real backend (Formspree/Tally/etc.) so leads
   actually reach you.
3. For each client who signs up, walk them through `ONBOARDING.md`: their
   own Grok/X access, their own scheduler account, their own social
   accounts, all connected to each other.
4. Seed their assistant with brand voice and any sample media they shared.
5. Hand off — from there, the client runs it themselves from their own
   chat. You're not the approval gate; they are.

## Business-model note

A pure one-time setup fee has no recurring revenue — worth deciding whether
to also offer an optional ongoing retainer (maintenance, re-seeding brand
voice, troubleshooting) rather than relying on setup fees alone.

## Running locally

```
python3 -m http.server 8123
```

Then open http://localhost:8123/index.html
