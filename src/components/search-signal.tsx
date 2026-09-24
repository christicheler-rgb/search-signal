import { useMemo, useRef, useState, type RefObject } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { AS_OF, MAX_SEARCHES, TRENDS } from "@/data/trends";
import type { SearchTrend } from "@/data/types";
import { formatPct, formatPp, formatSearchVolume } from "@/lib/format";
import { trendMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Sparkline } from "./sparkline";
import { StockCard } from "./stock-card";
import { AccelChip, JerkChip, TrendMotionPanel } from "./trend-motion";

type ScaleMode = "linear" | "log";
type RankMode = "size" | "accel";

export function SearchSignal() {
  const [selectedId, setSelectedId] = useState(TRENDS[0].id);
  const [scale, setScale] = useState<ScaleMode>("linear");
  const [rankBy, setRankBy] = useState<RankMode>("size");
  const [methodOpen, setMethodOpen] = useState(false);
  const detailRef = useRef<HTMLElement>(null);

  const ranked = useMemo(() => {
    if (rankBy === "size") return TRENDS;
    return [...TRENDS].sort(
      (a, b) =>
        trendMotion(b.spark, b.yoyChangePct).accelerationPp -
        trendMotion(a.spark, a.yoyChangePct).accelerationPp,
    );
  }, [rankBy]);

  const maxAbsAccel = useMemo(
    () =>
      Math.max(
        1,
        ...TRENDS.map((t) => Math.abs(trendMotion(t.spark, t.yoyChangePct).accelerationPp)),
      ),
    [],
  );
  const selected = useMemo(
    () => TRENDS.find((t) => t.id === selectedId) ?? TRENDS[0],
    [selectedId],
  );

  function selectTrend(id: string) {
    setSelectedId(id);
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <Hero />

        <section className="mt-10" aria-labelledby="rank-heading">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-widest text-subtle uppercase">
                {rankBy === "size"
                  ? "Ranked by combined monthly search"
                  : "Ranked by second derivative"}
              </p>
              <h2 id="rank-heading" className="mt-1 font-display text-2xl font-medium tracking-tight">
                {rankBy === "size"
                  ? "How big they are — and how fast that is changing"
                  : "Who is speeding up fastest"}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <RankToggle rankBy={rankBy} onChange={setRankBy} />
              {rankBy === "size" ? <ScaleToggle scale={scale} onChange={setScale} /> : null}
            </div>
          </div>

          <ol className="mt-6 flex flex-col gap-1.5">
            {ranked.map((trend, index) => (
              <li key={trend.id}>
                <TrendRow
                  trend={trend}
                  displayRank={index + 1}
                  selected={trend.id === selected.id}
                  scale={scale}
                  rankBy={rankBy}
                  maxAbsAccel={maxAbsAccel}
                  onSelect={() => selectTrend(trend.id)}
                />
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-subtle">
            {rankBy === "size"
              ? scale === "linear"
                ? "Linear bars: #1 is full width. The cliff after smartphones is the point."
                : "Log bars: smaller themes stay readable. Switch back to linear for true size."
              : "Bars are the size of the second derivative — the change in the 3-month run-rate. Sorted fastest acceleration first."}{" "}
            Figures are estimated combined Google queries, trailing twelve months. YoY is
            velocity. The third derivative — acceleration of growth — sits on each row.
          </p>
        </section>

        <TrendDetail trend={selected} sectionRef={detailRef} />

        <section className="mt-16 border-t border-border pt-8">
          <button
            type="button"
            className="flex min-h-11 w-full items-center justify-between text-left"
            onClick={() => setMethodOpen((v) => !v)}
            aria-expanded={methodOpen}
          >
            <h2 className="font-display text-xl font-medium tracking-tight">How to read this</h2>
            <span className="text-sm text-muted">{methodOpen ? "Hide" : "Show"}</span>
          </button>
          {methodOpen ? <Methodology /> : null}
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-subtle">
            Not investment advice. Prices, market caps and trailing P/E as of {AS_OF}. Growth rates
            compile company filings and consensus estimates. Search volumes are combined related-query
            estimates from public keyword databases, not Google’s official Trends index. Trend
            attribution is an analytical judgment of how much of each growth print is tied to this
            search theme, not an accounting line item.
          </p>
        </section>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span
            className="flex size-8 items-center justify-center rounded-sm bg-accent font-display text-sm font-medium text-accent-fg"
            aria-hidden="true"
          >
            S
          </span>
          <div>
            <p className="font-display text-lg leading-none font-medium tracking-tight">
              Search Signal
            </p>
            <p className="mt-1 text-xs text-subtle">Search demand, priced in public markets</p>
          </div>
        </div>
        <p className="hidden text-right text-xs text-subtle sm:block">
          {AS_OF}
          <span className="text-subtle"> · </span>
          Trailing P/E
        </p>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-10 sm:pt-14">
      <p className="text-xs font-medium tracking-widest text-muted uppercase">Desk note</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
        The ten largest things people search for — and the stocks riding them.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        Combined monthly search, sized against each other. Rank by size, or by the
        second derivative. Velocity is year-on-year growth; the third derivative is
        the acceleration of that growth. Five listed names on every trend.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Trends" value="10" />
        <Stat label="Listed stocks" value="50" />
        <Stat label="Top monthly searches" value="1.92B" />
        <Stat label="As of" value="Sep 2026" />
      </dl>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-surface px-4 py-3 shadow-border">
      <dt className="text-xs text-subtle">{label}</dt>
      <dd className="mt-1 font-mono text-lg tabular-nums text-fg">{value}</dd>
    </div>
  );
}

function RankToggle({
  rankBy,
  onChange,
}: {
  rankBy: RankMode;
  onChange: (mode: RankMode) => void;
}) {
  return (
    <div
      className="inline-flex rounded-md bg-surface p-1 shadow-border"
      role="group"
      aria-label="Rank by"
    >
      {(
        [
          ["size", "Size"],
          ["accel", "2nd derivative"],
        ] as const
      ).map(([id, label]) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={cn(
            "min-h-10 rounded-sm px-3 text-sm transition-colors duration-150",
            rankBy === id ? "bg-elevated text-fg" : "text-muted hover:text-fg",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ScaleToggle({
  scale,
  onChange,
}: {
  scale: ScaleMode;
  onChange: (s: ScaleMode) => void;
}) {
  return (
    <div
      className="inline-flex rounded-md bg-surface p-1 shadow-border"
      role="group"
      aria-label="Bar scale"
    >
      {(
        [
          ["linear", "Linear"],
          ["log", "Log"],
        ] as const
      ).map(([id, label]) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={cn(
            "min-h-10 rounded-sm px-3 text-sm transition-colors duration-150",
            scale === id ? "bg-elevated text-fg" : "text-muted hover:text-fg",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function TrendRow({
  trend,
  displayRank,
  selected,
  scale,
  rankBy,
  maxAbsAccel,
  onSelect,
}: {
  trend: SearchTrend;
  displayRank: number;
  selected: boolean;
  scale: ScaleMode;
  rankBy: RankMode;
  maxAbsAccel: number;
  onSelect: () => void;
}) {
  const motion = trendMotion(trend.spark, trend.yoyChangePct);
  const widthPct =
    rankBy === "accel"
      ? (Math.abs(motion.accelerationPp) / maxAbsAccel) * 100
      : scale === "linear"
        ? (trend.monthlySearchesM / MAX_SEARCHES) * 100
        : (() => {
            const lo = Math.log10(20);
            const hi = Math.log10(MAX_SEARCHES);
            return ((Math.log10(trend.monthlySearchesM) - lo) / (hi - lo)) * 100;
          })();
  const shareLabel = `${((trend.monthlySearchesM / MAX_SEARCHES) * 100).toFixed(1)}% of #1`;
  const up = trend.yoyChangePct >= 0;
  const accelUp = motion.accelerationPp >= 0;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "w-full rounded-lg px-3 py-3 text-left transition-[box-shadow,background-color] duration-150 sm:px-4",
        selected ? "bg-elevated shadow-border-hover" : "hover:bg-surface",
      )}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="w-6 shrink-0 font-mono text-xs tabular-nums text-subtle">
          {String(displayRank).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <span className="truncate font-display text-lg font-medium tracking-tight">
              {trend.name}
            </span>
            <span className="shrink-0 font-mono text-sm tabular-nums text-fg">
              {rankBy === "accel" ? (
                <span className={accelUp ? "text-up" : "text-down"}>
                  {formatPp(motion.accelerationPp, 1)}
                </span>
              ) : (
                <>
                  {formatSearchVolume(trend.monthlySearchesM)}
                  <span className="hidden text-subtle sm:inline"> /mo</span>
                </>
              )}
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-xs bg-faint">
            <span
              className={cn(
                "block h-full rounded-xs",
                rankBy === "accel" ? (accelUp ? "bg-up" : "bg-down") : "bg-accent",
              )}
              style={{ width: `${Math.max(widthPct, 1.2)}%` }}
            />
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span
              className={cn(
                "inline-flex items-center gap-1 font-mono text-xs tabular-nums",
                up ? "text-up" : "text-down",
              )}
            >
              {up ? (
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              ) : (
                <ArrowDownRight className="size-3.5" aria-hidden="true" />
              )}
              {formatPct(trend.yoyChangePct, 0)} YoY
            </span>
            <AccelChip trend={trend} />
            <JerkChip trend={trend} />
            {rankBy === "size" ? (
              <span className="hidden text-xs text-subtle sm:inline">{shareLabel}</span>
            ) : (
              <span className="hidden text-xs text-subtle sm:inline">
                Size {String(trend.rank).padStart(2, "0")}
              </span>
            )}
            <Sparkline values={trend.spark} className="ml-auto h-6 w-16 sm:w-20" />
          </div>
        </div>
      </div>
    </button>
  );
}

function TrendDetail({
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
      <h2
        id="trend-detail-heading"
        className="mt-2 font-display text-3xl font-medium tracking-tight"
      >
        {trend.name}
      </h2>
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
        <h3 className="font-display text-xl font-medium tracking-tight">Five listed names</h3>
        <p className="text-xs text-subtle">Filled bar = share of that growth from this trend</p>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {trend.stocks.map((stock, i) => (
          <StockCard key={stock.ticker} stock={stock} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}

function Methodology() {
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
