import { ChevronsDown, ChevronsUp, Minus } from "lucide-react";
import { formatPct, formatPp, formatSearchVolume } from "@/lib/format";
import { accelerationSeries, momSeries, trendMotion, type TrendPhase } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { SearchTrend } from "@/data/types";
import { Sparkline, ZeroSpark } from "./sparkline";

const PHASE_TONE: Record<TrendPhase, string> = {
  speeding: "text-up",
  bottoming: "text-up",
  rebounding: "text-up",
  cooling: "text-down",
  sinking: "text-down",
  rolling: "text-down",
  steady: "text-muted",
};

function PhaseIcon({ phase, className }: { phase: TrendPhase; className?: string }) {
  if (phase === "speeding" || phase === "bottoming" || phase === "rebounding") {
    return <ChevronsUp className={className} aria-hidden="true" />;
  }
  if (phase === "cooling" || phase === "sinking" || phase === "rolling") {
    return <ChevronsDown className={className} aria-hidden="true" />;
  }
  return <Minus className={className} aria-hidden="true" />;
}

export function AccelChip({ trend }: { trend: SearchTrend }) {
  const motion = trendMotion(trend.spark, trend.yoyChangePct);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-mono text-xs tabular-nums",
        PHASE_TONE[motion.phase],
      )}
    >
      {motion.phase === "steady" ? null : (
        <PhaseIcon phase={motion.phase} className="size-3.5" />
      )}
      <span>{motion.phaseLabel}</span>
      <span>{formatPp(motion.accelerationPp, 1)}</span>
    </span>
  );
}

export function JerkChip({ trend }: { trend: SearchTrend }) {
  const motion = trendMotion(trend.spark, trend.yoyChangePct);
  const up = motion.jerkPp > 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-mono text-xs tabular-nums",
        motion.jerkLabel === "Flat" ? "text-muted" : up ? "text-up" : "text-down",
      )}
      title="Third derivative — acceleration of growth"
    >
      <span className="text-subtle">3rd</span>
      <span>{motion.jerkLabel}</span>
      <span>{formatPp(motion.jerkPp, 1)}</span>
    </span>
  );
}

export function TrendMotionPanel({ trend }: { trend: SearchTrend }) {
  const motion = trendMotion(trend.spark, trend.yoyChangePct);
  const mom = momSeries(trend.spark);
  const accelPath = accelerationSeries(trend.spark);
  const accelUp = motion.accelerationPp >= 0;
  const jerkUp = motion.jerkPp >= 0;

  return (
    <div className="mt-6 rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-display text-lg font-medium tracking-tight">Derivatives</h3>
        <p className={cn("text-sm", PHASE_TONE[motion.phase])}>{motion.phaseLabel}</p>
      </div>
      <p className="mt-1 max-w-2xl text-sm text-muted">{motion.phaseHint}</p>

      <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-xs font-medium tracking-wide text-subtle uppercase">Level</dt>
          <dd className="mt-1 font-mono text-xl tabular-nums text-fg">
            {formatSearchVolume(trend.monthlySearchesM)}
            <span className="text-sm text-subtle"> /mo</span>
          </dd>
          <p className="mt-1 text-xs text-subtle">Combined monthly searches</p>
          <Sparkline values={trend.spark} className="mt-3 h-8 w-full" />
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-subtle uppercase">Velocity</dt>
          <dd
            className={cn(
              "mt-1 font-mono text-xl tabular-nums",
              trend.yoyChangePct >= 0 ? "text-up" : "text-down",
            )}
          >
            {formatPct(trend.yoyChangePct, 0)}
            <span className="text-sm text-subtle"> YoY</span>
          </dd>
          <p className="mt-1 text-xs text-subtle">First derivative — year-on-year change</p>
          <p className="mt-3 font-mono text-xs tabular-nums text-muted">
            3-mo run-rate {formatPct(motion.momRecent, 1)} · prior {formatPct(motion.momPrior, 1)}
          </p>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-subtle uppercase">
            Acceleration
          </dt>
          <dd
            className={cn(
              "mt-1 font-mono text-xl tabular-nums",
              accelUp ? "text-up" : "text-down",
            )}
          >
            {formatPp(motion.accelerationPp, 1)}
          </dd>
          <p className="mt-1 text-xs text-subtle">
            Second derivative — change in the 3-month run-rate
          </p>
          <ZeroSpark values={mom} className="mt-3 h-8 w-full" />
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-subtle uppercase">
            Accel. of growth
          </dt>
          <dd
            className={cn(
              "mt-1 font-mono text-xl tabular-nums",
              jerkUp ? "text-up" : "text-down",
            )}
          >
            {formatPp(motion.jerkPp, 1)}
          </dd>
          <p className="mt-1 text-xs text-subtle">
            Third derivative — {motion.jerkLabel.toLowerCase()}
          </p>
          <p className="mt-2 text-xs leading-snug text-muted">{motion.jerkHint}</p>
          <ZeroSpark values={accelPath} className="mt-3 h-8 w-full" />
        </div>
      </dl>
    </div>
  );
}
