# SetupYours — full site content, for the assistant's reference

Verbatim text from the live site (https://tsviljoen-bot.github.io/loopwork-landing/),
pulled from source rather than scraped, so the FAQ's collapsed answers are
included too. Give this to the assistant alongside
`HANDOVER-LOOPWORK-SELF.md` so anything it drafts or answers stays
consistent with what the site actually says — word-for-word accuracy here
matters more than it would for a generic brief, since visitors can and
will check the page against what the assistant tells them.

## Hero

**Your own AI assistant, running the busywork.**

We set up an AI assistant on your own accounts — your social media, or
your financial numbers — connected, in your voice, answering to you. From
then on, you run it yourself, one conversation at a time. No agency
retainer, no new dashboard.

CTA: "See if it fits your business"

Badge: "Now onboarding our first 3 founding clients — free setup, in
exchange for a testimonial."

## How it works

1. **We set it up** — We configure your own AI assistant on your own
   accounts, connect it to your socials and a scheduler, and seed it with
   your brand voice and media.
2. **You chat, it works** — From then on, you talk to your own assistant
   directly — ask for drafts, approve them, redirect it — just a
   conversation, no new dashboard.
3. **It's yours to keep** — The accounts, the automation and the content
   pipeline belong to you. We're not in the loop day-to-day unless you
   want ongoing support.

## Two things this can run for you

- **Social media** — Connected to your social accounts and a scheduler.
  Drafts posts from what's actually happening in your business, you
  approve from your own chat, it goes out on schedule.
- **Financial visibility** — Connected to your accounting platform (Xero,
  QuickBooks, Sage) read-only. Ask it plain questions — cash flow, who
  owes you, what you're making this month — instead of digging through a
  spreadsheet. *We never see or store your accounting data ourselves —
  it's your own account, connected read-only, end to end.*

## Where this actually helps (scenarios)

- **Running the business on spreadsheets** — Problem: the only view of
  cash flow, debtors and margin is a spreadsheet someone updates when
  they get time to. Fix: your own assistant connects to your accounting
  platform read-only and answers real questions the moment you ask — no
  spreadsheet required.
- **Boutique retail store** — Problem: new stock arrives every week, but
  posting about it consistently always slips. Fix: every new arrival
  becomes a draft post automatically — you approve, it goes out, on
  schedule, every time.
- **Café or restaurant** — Problem: daily specials and events need daily
  posts, but nobody on staff has time. Fix: specials and events feed
  straight into a drafted post queue — approve once in the morning, done
  for the day.
- **Home services business** — Problem: before/after photos pile up on a
  phone and never turn into content that builds trust locally. Fix: job
  photos become before/after posts and local-proof content automatically,
  approved and published on a regular cadence.
- **Small online shop** — Problem: every product drop needs its own promo
  push across three different apps, by hand. Fix: one product drop
  becomes a coordinated post set across platforms — drafted, approved,
  scheduled, done.

## Six ways to run a small business more efficiently with AI

(Standalone educational section, free advice, not gated behind the service)

- **Batch it once a week** — Approve a week's worth of drafts in one
  sitting instead of scrambling for something to post every day. The
  assistant can queue them; you just review.
- **Feed it real photos, not stock** — Drafts built from what actually
  happened this week — real stock, real jobs, real specials — read as
  authentic. Stock photos read as generic, AI or not.
- **Ask it before you post, never after** — The moment an assistant
  publishes without checking first is the moment it stops being useful
  and starts being risky. Keep the approval step, always.
- **Check your numbers before Friday** — A cash flow question answered on
  Monday gives you a week to act on it. The same question answered after
  the fact is just a post-mortem.
- **One real sample beats ten instructions** — "Friendly and
  professional" means nothing to an AI. A real post or email you've
  actually written teaches it your voice far faster than a list of
  adjectives.
- **Start on one platform, not four** — Nail the habit — the approvals,
  the cadence, the voice — on one channel before spreading the same setup
  across three more.

## Why small businesses use this instead of an agency

- No monthly agency retainer — pay for a setup, not a headcount.
- Nothing posts without your approval — you control it yourself, directly.
- No new dashboard to learn — if you can chat, you can run it.
- Built around your actual business activity, not generic content
  calendars.
- It's your account and your setup — no ongoing dependency on us.

## FAQ

**What does this actually cost?**
We're onboarding our first 3 founding clients for free, in exchange for a
testimonial and permission to use your business as a case study. Once
those spots are filled, standard pricing applies: social media setup from
R4,000–R7,000 once-off, financial visibility setup from R7,000–R12,000
once-off, with an optional R500–R1,000/month support retainer for either.
No hidden ongoing fee unless you choose that retainer.

**Is this an official Grok / xAI product?**
No. SetupYours is an independent setup service. We configure AI assistants
(including ones built on Grok) on your own accounts — we're not Grok,
xAI, or any platform we connect you to, and none of them endorse us.

**Is my data safe?**
Every account stays yours — social logins, accounting platform, the AI
assistant itself. We don't hold your passwords or store your data
ourselves. For the financial-visibility service specifically, every
connection is set up read-only by default, so the assistant can see your
numbers but can't change anything in your books.

**Do I need to be technical to run this?**
No. Once it's set up, using it is just chatting with it in plain
language — the technical setup is the part we do with you.

**What happens after the setup session?**
It's yours to run. We're not in the loop day-to-day unless you want an
ongoing support plan for maintenance, troubleshooting, or re-training it
as your business changes.

## Contact

Heading: "Want this set up for your business?"
Sub: "Tell us a bit about your business and we'll get back to you about
whether this is a good fit."
Form fields: name, business name, email, platforms that matter most
(optional), photos/videos (optional, up to 6 files/25MB each).
Lighter option: "Not ready for all that? Just ask us a question instead"
→ mailto:setupyours.za@gmail.com

## Footer

Instagram: https://www.instagram.com/setupyours.za/
X: https://x.com/SetupYours
Facebook: https://www.facebook.com/profile.php?id=61596677700308

"SetupYours is an independent service and is not affiliated with, endorsed
by, or sponsored by any AI platform or model provider whose tools it may
use."

## Known gaps the assistant should be aware of

- [x] Contact email is setupyours.za@gmail.com (the "Just ask us a question"
  mailto, and `CONTACT_EMAIL` in `script.js`).
- No real client, testimonial, or case study exists yet — don't invent or
  imply one exists.
- [x] Public social profiles are linked in the footer: Instagram, X, and
  Facebook. A scheduler is not connected yet, so nothing posts
  automatically — see the note at the bottom of `HANDOVER-LOOPWORK-SELF.md`.
