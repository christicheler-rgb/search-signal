export type TrendPhase =
  | "speeding"
  | "cooling"
  | "steady"
  | "bottoming"
  | "sinking"
  | "rebounding"
  | "rolling";

export type TrendMotion = {
  /** Average month-on-month % change, latest 3 months of the spark. */
  momRecent: number;
  /** Average month-on-month % change, the 3 months before that. */
  momPrior: number;
  /** Change in that run-rate, in percentage points. The second derivative. */
  accelerationPp: number;
  phase: TrendPhase;
  phaseLabel: string;
  phaseHint: string;
};

const STEADY_PP = 1.5;
const TROUGH_PP = -4;

function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, n) => sum + n, 0) / values.length;
}

function monthOnMonth(spark: number[]): number[] {
  const out: number[] = [];
  for (let i = 1; i < spark.length; i++) {
    const prev = spark[i - 1];
    if (!prev) continue;
    out.push(((spark[i] - prev) / prev) * 100);
  }
  return out;
}

const PHASE_COPY: Record<TrendPhase, { label: string; hint: string }> = {
  speeding: {
    label: "Speeding up",
    hint: "Search interest is still rising, and the 3-month run-rate is faster than the 3 months before.",
  },
  cooling: {
    label: "Cooling",
    hint: "The theme is still growing year-on-year, but the recent 3-month run-rate has eased.",
  },
  steady: {
    label: "Steady",
    hint: "The 3-month run-rate is roughly unchanged. Size is moving, pace is not.",
  },
  bottoming: {
    label: "Decline slowing",
    hint: "Searches are still down year-on-year, but the slide is losing speed.",
  },
  sinking: {
    label: "Sinking faster",
    hint: "Searches are down year-on-year, and the 3-month run-rate has worsened.",
  },
  rebounding: {
    label: "Rebounding",
    hint: "The 3-month run-rate has flipped up after a trough — a cycle inflection, not a new base.",
  },
  rolling: {
    label: "Rolling over",
    hint: "The 3-month run-rate has rolled over after a hot stretch.",
  },
};

export function trendMotion(spark: number[], yoyChangePct: number): TrendMotion {
  const mom = monthOnMonth(spark);
  const momRecent = average(mom.slice(-3));
  const momPrior = average(mom.slice(-6, -3));
  const accelerationPp = momRecent - momPrior;

  let phase: TrendPhase;
  if (momPrior < TROUGH_PP && momRecent > 0 && accelerationPp >= STEADY_PP) {
    phase = "rebounding";
  } else if (momPrior > 4 && momRecent < 1 && yoyChangePct >= 0 && accelerationPp <= -STEADY_PP) {
    phase = "rolling";
  } else if (Math.abs(accelerationPp) < STEADY_PP) {
    phase = "steady";
  } else if (yoyChangePct >= 0) {
    phase = accelerationPp > 0 ? "speeding" : "cooling";
  } else {
    phase = accelerationPp > 0 ? "bottoming" : "sinking";
  }

  const copy = PHASE_COPY[phase];
  return {
    momRecent,
    momPrior,
    accelerationPp,
    phase,
    phaseLabel: copy.label,
    phaseHint: copy.hint,
  };
}

export function momSeries(spark: number[]): number[] {
  return monthOnMonth(spark);
}
