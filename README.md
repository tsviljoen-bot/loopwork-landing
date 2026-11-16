# Loopwork — AI automation for small businesses (landing page)

Lead-gen landing page: scenario-based use cases showing how AI-drafted,
human-approved social media automation helps small businesses, with a
"request a fit check" contact form. Implementation work only happens for
businesses that respond — nothing is built or sold until there's real demand.

"Loopwork" is a placeholder working name — check domain/trademark availability
before using it publicly.

## Status

- Static HTML/CSS/JS, no build step, no dependencies.
- Form currently just shows a client-side thank-you message (see `script.js`).
  Before this goes live, wire it to a real backend (e.g. Formspree, Tally, or
  a simple serverless function) — requires its own account sign-up.
- No domain registered, no hosting account created, nothing deployed.

## Running locally

```
python3 -m http.server 8123
```

Then open http://localhost:8123/index.html
