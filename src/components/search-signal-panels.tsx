import type { RefObject } from "react";
import { AS_OF } from "@/data/trends";
import type { SearchTrend } from "@/data/types";
import { formatPct, formatSearchVolume } from "@/lib/format";
import { isNameSearchTrending, isThemeSearchTrending, trendMotion } from "@/lib/motion";
import { StockCard } from "./stock-card";
import { AccelChip, JerkChip, TrendMotionPanel } from "./trend-motion";

export function TrendDetail({
  trend,
  sectionRef,
}: {
  trend: SearchTrend;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  return (
    <section
      ref={sectionRef}
      className="mt-12 scroll-mt-6"
      aria-labelledby="trend-detail-heading"
    >
      <p className="text-xs font-medium tracking-widest text-subtle uppercase">
        Trend {String(trend.rank).padStart(2, "0")} · {formatSearchVolume(trend.monthlySearchesM)}{" "}
        monthly searches
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <h2
          id="trend-detail-heading"
          className="font-display text-3xl font-medium tracking-tight"
        >
          {trend.name}
        </h2>
        {isThemeSearchTrending(trend.spark, trend.yoyChangePct) ? (
          <span className="inline-flex items-center rounded-full bg-elevated px-2.5 py-1 text-[10px] font-medium tracking-wide text-accent uppercase shadow-border">
            Search-trending
          </span>
        ) : null}
      </div>
      <p className="mt-2 max-w-2xl text-base text-muted">{trend.tagline}</p>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">{trend.thesis}</p>

      <TrendMotionPanel trend={trend} />

      <ul className="mt-5 flex flex-wrap gap-2">
        {trend.queries.map((q) => (
          <li
            key={q}
            className="rounded-full bg-elevated px-3 py-1.5 font-mono text-xs text-muted shadow-border"
          >
            {q}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <h3 className="font-display text-xl font-medium tracking-tight">Fifteen listed names</h3>
        <p className="text-xs text-subtle">Filled bar = share of that growth from this trend</p>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {trend.stocks.map((stock, i) => (
          <StockCard key={stock.ticker} stock={stock} defaultOpen={i === 0} searchTrending={isNameSearchTrending(trend)} />
        ))}
      </div>
    </section>
  );
}

export function Methodology() {
  return (
    <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
      <p>
        <span className="text-fg">Size.</span> Each trend is a bundle of related Google queries, not
        a single keyword. Volume is estimated monthly searches over the trailing year. Linear bars
        make the cliff after smartphones obvious; log scale is only for inspecting the tail.
      </p>
      <p>
        <span className="text-fg">Velocity and acceleration.</span> YoY is the first
        derivative — how fast the theme is growing or shrinking versus a year ago. The
        second derivative is the change in the 3-month search run-rate versus the 3 months
        before that, in percentage points. Speeding up means a rising theme that is rising
        faster; cooling means it is still up year-on-year but the curve has flattened.
        Decline slowing / sinking faster are the same idea when the annual print is negative.
        Rebounding and rolling over flag cycle troughs and peaks (phone launches, crypto tapes)
        so a violent 3-month swing is not read as a new secular boom. Switch the ranking to
        second derivative to sort themes by that acceleration, largest first.
      </p>
      <p>
        <span className="text-fg">Acceleration of growth.</span> The third derivative is the
        change in the second derivative — whether the speed-up itself is rising, fading, or
        flat. It is labeled on every row and in the theme panel. It does not reorder the list.
      </p>
      <p>
        <span className="text-fg">Search-trending.</span> A theme (and every name on it) earns
        the Search-trending flag when acceleration is positive and jerk is Rising — both
        required. Softer screens can use positive acceleration alone; the desk boolean does not.
      </p>
      <p>
        <span className="text-fg">Growth.</span> Past is three-year revenue CAGR. Current is
        trailing-twelve-month revenue versus a year earlier. Future is next-fiscal-year consensus
        revenue growth. P/E uses current (trailing) earnings, not next year’s estimate.
      </p>
      <p>
        <span className="text-fg">Attribution.</span> The solid part of each bar is the share of
        that growth we judge is tied to this search trend. The number in percentage points is
        growth × share — the slice of the print that belongs to the theme. A company can appear on
        more than one trend; the share is taken from that trend’s point of view.
      </p>
    </div>
  );
}
