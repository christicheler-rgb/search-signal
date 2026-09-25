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
  /** Second derivative one window earlier. */
  priorAccelerationPp: number;
  /**
   * Change in the second derivative, in percentage points.
   * Third derivative — the acceleration of growth.
   */
  jerkPp: number;
  jerkLabel: string;
  jerkHint: string;
  phase: TrendPhase;
  phaseLabel: string;
  phaseHint: string;
};

const STEADY_PP = 1.5;
const TROUGH_PP = -4;
const JERK_PP = 1.5;

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

function rollingAcceleration(mom: number[]): number[] {
  const out: number[] = [];
  for (let i = 5; i < mom.length; i++) {
    const recent = average(mom.slice(i - 2, i + 1));
    const prior = average(mom.slice(i - 5, i - 2));
    out.push(recent - prior);
  }
  return out;
}

function jerkCopy(jerkPp: number): { label: string; hint: string } {
  const cycle =
    Math.abs(jerkPp) >= 15
      ? " A print this large is a cycle tape — a launch or a crash — not a new base."
      : "";
  if (jerkPp >= JERK_PP) {
    return {
      label: "Rising",
      hint: `Acceleration of growth is itself rising — the speed-up is getting stronger.${cycle}`,
    };
  }
  if (jerkPp <= -JERK_PP) {
    return {
      label: "Fading",
      hint: `Acceleration of growth is fading — the change in pace is losing force.${cycle}`,
    };
  }
  return {
    label: "Flat",
    hint: "Acceleration of growth is roughly unchanged. The second derivative is holding.",
  };
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
  const accelPath = rollingAcceleration(mom);
  const priorAccelerationPp = accelPath.length >= 4 ? accelPath[accelPath.length - 4] : 0;
  const jerkPp = accelerationPp - priorAccelerationPp;

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
  const jerk = jerkCopy(jerkPp);
  return {
    momRecent,
    momPrior,
    accelerationPp,
    priorAccelerationPp,
    jerkPp,
    jerkLabel: jerk.label,
    jerkHint: jerk.hint,
    phase,
    phaseLabel: copy.label,
    phaseHint: copy.hint,
  };
}

export function momSeries(spark: number[]): number[] {
  return monthOnMonth(spark);
}

export function accelerationSeries(spark: number[]): number[] {
  return rollingAcceleration(monthOnMonth(spark));
}

/**
 * Desk lock: a theme is search-trending when acceleration is positive AND
 * jerk is Rising. Softer screens can use accelerationPp > 0 alone; this flag
 * requires both so the boolean stays crisp for CIO/Lab filters.
 */
export function isThemeSearchTrending(spark: number[], yoyChangePct: number): boolean {
  const motion = trendMotion(spark, yoyChangePct);
  return motion.accelerationPp > 0 && motion.jerkLabel === "Rising";
}

/** Name-level alias: a listed name is search-trending when its theme is. */
export function isNameSearchTrending(theme: {
  spark: number[];
  yoyChangePct: number;
}): boolean {
  return isThemeSearchTrending(theme.spark, theme.yoyChangePct);
}
