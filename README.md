# Search Signal

The ten largest things people search for — and the listed stocks riding them.

Each theme is sized by **combined monthly Google searches**, then ranked against #1. Open a trend for five public names, with past / current / future revenue growth and how much of each print we attribute to the theme.

**Not investment advice.** Search volumes are combined related-query estimates, not Google’s official Trends index. Prices, market caps and trailing P/E are a compiled snapshot. Trend attribution is an analytical judgment, not an accounting line item.

## What it does

- Ranking of ten search themes by trailing-twelve-month query volume, or by the second derivative (fastest acceleration first)
- **Velocity** — year-on-year search change (first derivative)
- **Acceleration** — change in the 3-month search run-rate versus the 3 months before (second derivative)
- **Acceleration of growth** — change in that acceleration (third derivative): rising, fading, or flat
- Trend detail: thesis, query cluster, level / velocity / second derivative / acceleration of growth
- Five listed names per theme: price, market cap, trailing P/E, past (3-yr CAGR) / current (TTM YoY) / future (next FY consensus) growth, with the share of each print tied to the theme
- Methodology fold at the bottom of the desk

As of **8 September 2026**. Auth and the database stay off; this is a research desk, not a multi-user product.

## Stack

TanStack Start (React 19, Vite, TanStack Router), Tailwind v4.

Search volumes, sparks, prices and growth prints are compiled in `src/data/trends.ts` — no live vendor is required.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:8080`).

```bash
npm run typecheck
npm run build
```

No `.env` is required.

## Disclaimer

This is a research screen, not a trade signal and not investment, legal, or tax advice.
