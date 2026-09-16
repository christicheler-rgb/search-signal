import { cn } from "@/lib/utils";

type SparklineProps = {
  values: number[];
  className?: string;
};

export function Sparkline({ values, className }: SparklineProps) {
  const width = 120;
  const height = 36;
  const pad = 2;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = Math.max(max - min, 1);
  const points = values
    .map((v, i) => {
      const x = pad + (i / Math.max(values.length - 1, 1)) * (width - pad * 2);
      const y = height - pad - ((v - min) / span) * (height - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("text-accent", className)}
      aria-hidden="true"
      focusable="false"
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
}

/** Zero-centered spark for month-on-month changes (second-derivative input). */
export function ZeroSpark({ values, className }: SparklineProps) {
  const width = 120;
  const height = 36;
  const pad = 2;
  const maxAbs = Math.max(1, ...values.map((v) => Math.abs(v)));
  const mid = height / 2;
  const points = values
    .map((v, i) => {
      const x = pad + (i / Math.max(values.length - 1, 1)) * (width - pad * 2);
      const y = mid - (v / maxAbs) * (mid - pad);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("text-accent", className)}
      aria-hidden="true"
      focusable="false"
    >
      <line
        x1={pad}
        x2={width - pad}
        y1={mid}
        y2={mid}
        className="stroke-faint"
        strokeWidth="1"
      />
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
}
