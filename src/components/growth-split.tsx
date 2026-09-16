import { formatPct, formatPp, trendPoints } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Horizon } from "@/data/types";

const HORIZON_LABEL: Record<"past" | "current" | "future", { title: string; window: string }> = {
  past: { title: "Past", window: "3-yr revenue CAGR" },
  current: { title: "Current", window: "TTM revenue YoY" },
  future: { title: "Future", window: "Next FY consensus" },
};

type GrowthSplitProps = {
  past: Horizon;
  current: Horizon;
  future: Horizon;
  compact?: boolean;
};

export function GrowthSplit({ past, current, future, compact }: GrowthSplitProps) {
  const rows: Array<{ key: "past" | "current" | "future"; data: Horizon }> = [
    { key: "past", data: past },
    { key: "current", data: current },
    { key: "future", data: future },
  ];
  const maxAbs = Math.max(20, ...rows.map((r) => Math.abs(r.data.growthPct)));

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
      {rows.map(({ key, data }) => {
        const width = Math.min(100, (Math.abs(data.growthPct) / maxAbs) * 100);
        const share = Math.max(0, Math.min(100, data.trendSharePct));
        const down = data.growthPct < 0;
        const points = trendPoints(data.growthPct, data.trendSharePct);
        const labels = HORIZON_LABEL[key];

        return (
          <div key={key} className="min-w-0">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs font-medium tracking-wide text-muted uppercase">
                {labels.title}
              </span>
              <span
                className={cn(
                  "font-mono text-sm tabular-nums",
                  down ? "text-down" : "text-up",
                )}
              >
                {formatPct(data.growthPct, 1)}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-subtle">{labels.window}</p>
            <div className="mt-2 h-2 overflow-hidden rounded-xs bg-faint">
              <div
                className="flex h-full overflow-hidden rounded-xs"
                style={{ width: `${width}%` }}
              >
                <span
                  className={cn("h-full", down ? "bg-down" : "bg-accent")}
                  style={{ width: `${share}%` }}
                />
                <span
                  className={cn("h-full", down ? "bg-down/40" : "bg-accent/35")}
                  style={{ width: `${100 - share}%` }}
                />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between gap-2">
              <span className="text-xs text-muted">{share.toFixed(0)}% from trend</span>
              <span className="font-mono text-xs tabular-nums text-fg">{formatPp(points)}</span>
            </div>
            {!compact ? (
              <p className="mt-2 text-xs leading-snug text-subtle">{data.note}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
