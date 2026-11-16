# Loopwork — AI automation for small businesses (landing page)

Lead-gen landing page: scenario-based use cases showing how AI-drafted,
human-approved social media automation helps small businesses, with a
"request a fit check" contact form. Implementation work only happens for
businesses that respond — nothing is built or sold until there's real demand.

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

## What's still manual before media reaches "Grok Bot"

Uploading files here does not post them anywhere by itself. The realistic
pipeline once a client submits media is:

1. Create a free Cloudinary account and an **unsigned** upload preset, then
   put the cloud name + preset name into `script.js` (`CLOUDINARY_CLOUD_NAME`
   / `CLOUDINARY_UPLOAD_PRESET`). Until then, uploads are skipped.
2. Wire the form to a real backend (Formspree/Tally/etc.) so you actually
   receive each lead's details + uploaded file URLs.
3. Create your own account with a scheduler that Grok Bot connects to
   (e.g. Postiz) and connect the client's social accounts to it.
4. Draft posts using the client's uploaded media (by hand, or later via a
   script against that scheduler's API) and push them into the scheduler's
   queue.
5. A human still approves before anything actually publishes — same
   approval gate as everywhere else in this plan.

## Running locally

```
python3 -m http.server 8123
```

Then open http://localhost:8123/index.html
