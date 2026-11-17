# Validation dry-run — test this once, for real, before promoting

Goal: find out whether the mechanics actually work before a stranger's
business depends on them. This is specifically the part that can't be done
for you — it needs your own accounts and your own OAuth sign-ins. Budget
about 45-60 minutes total, on your own test accounts, not a real client's.

## Pivot based on research — read this first

Don't test xAI's literal "Grok Bot" product first. It turned out to be a
general computer-use agent (browses sites, fills forms — released August
2026, still in beta), gated behind SuperGrok Heavy (cited around
$300/month, with conflicting reports on whether cheaper SuperGrok tiers
include it) or developer-focused Cursor plans. That's not viable per-client
economics for an SME setup service, and sources disagreed with each other
enough that the figure itself needs confirming at grok.com/plans or
x.ai/bot before you rule it in or out for good.

Test the cheaper, more likely-real path instead: a scheduler's own built-in
AI drafting (Postiz, ContentStudio, AdaptlyPost, etc.) connected to a real
social account. If that works, SetupYours' "AI assistant" is built on that
for now, not on xAI's specific computer-use-agent tier — nothing on the
landing page commits to the Grok Bot name specifically, so this doesn't
require changing the pitch.

## Social media line: dry run (~30 min)

1. Pick one low-stakes social account you control (a personal account, or
   a throwaway test account) — not a real client's account for this pass.
2. Sign up for Postiz's (or ContentStudio's/AdaptlyPost's) free or
   cheapest tier.
3. Connect that one social account to it.
4. Use its AI draft feature to generate one caption for something real
   (today's date, an actual photo) — not a canned example.
5. Check: did a draft actually get created? Could you review/edit it?
   Could you schedule or post it without unexpected paywalled steps,
   broken OAuth, or missing permissions?
6. Write down exactly where you got stuck, if anywhere, and how long each
   step actually took — that's the real number to check against
   `ONBOARDING.md`'s ~30-45 minute discovery+setup assumption.

Success looks like: nothing connected → one real draft posted, in well
under the time `ONBOARDING.md` assumes, on a free or cheap tier.

## Financial-visibility line: dry run (~20 min, lighter touch)

Riskier to test with real data, so keep this to confirming the connection
mechanics exist and work, not pulling real numbers yet:

1. Use a sandbox/demo company on Xero/QuickBooks/Sage if you have one, or
   sign up for whichever platform's free trial/demo data — not a real set
   of books.
2. Sign up for one connector's free tier (Composio had the clearest public
   Xero/QuickBooks documentation in the research so far).
3. Connect it to the demo account, read-only.
4. Ask it one simple question ("what's my current bank balance") and see
   if the answer is sane.

Success looks like: the read-only connection works end-to-end on demo
data, without hitting a paid plan you didn't expect.

## After this

Write down what you find, even one line per step, so `ONBOARDING.md` and
`ONBOARDING-MI.md` can be corrected to match what actually happened, not
what was assumed, before a real client sits through either one.
