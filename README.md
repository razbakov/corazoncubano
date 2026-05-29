# Corazón Cubano

> **Europe's refuge for Cuban culture — in Munich.**

Umbrella brand site for the Corazón Cubano movement. Festival sub-brand is [Agua Pichi](https://aguapichi.com); future year-round home is the Havana City Bar (opening 2028).

- **Live:** corazoncubano.de (pending domain registration), `corazon-cubano.netlify.app` (staging)
- **Status:** mockup circulating for team consent on the umbrella brand decision (see [aguapichi#1](https://github.com/razbakov/aguapichi/issues/1) and `~/Orgs/AguaPichi/coordination/proposals/2026-05-28-vision-reframe.md`)
- **Stack:** static HTML, no build step, Netlify-hosted, EN/DE/ES toggle via vanilla JS

## Structure

```
index.html        ← single-page landing
hero.png          ← Gemini-generated hero image (Munich + Cuban balcony fusion)
netlify.toml      ← deploy config
```

## Deploy

Auto-deploys on push to `main` via Netlify GitHub integration.

## Legal entity

This site represents **Corazón Cubano e.V.** (in formation, Munich) — see the festival's [vision-reframe memo](https://github.com/razbakov/aguapichi/blob/main/coordination/proposals/2026-05-28-vision-reframe.md) for the decision trail.
