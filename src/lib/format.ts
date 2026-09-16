export function formatSearchVolume(millions: number): string {
  if (millions >= 1000) {
    const billions = millions / 1000;
    return `${billions >= 10 ? billions.toFixed(1) : billions.toFixed(2)}B`;
  }
  if (millions >= 100) return `${Math.round(millions)}M`;
  if (millions >= 10) return `${millions.toFixed(0)}M`;
  return `${millions.toFixed(1)}M`;
}

export function formatCap(billions: number): string {
  if (billions >= 1000) return `$${(billions / 1000).toFixed(2)}T`;
  if (billions >= 100) return `$${Math.round(billions)}B`;
  if (billions >= 10) return `$${billions.toFixed(0)}B`;
  return `$${billions.toFixed(1)}B`;
}

export function formatPrice(price: number): string {
  if (price >= 1000) {
    return `$${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  }
  return `$${price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function formatPct(value: number, digits = 0): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(digits)}%`;
}

export function formatPe(pe: number | null): string {
  if (pe === null) return "n.m.";
  if (pe >= 1000) return "n.m.";
  if (pe >= 100) return pe.toFixed(0);
  return pe.toFixed(1);
}

export function formatPp(value: number, digits = 0): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(digits)} pp`;
}

export function trendPoints(growthPct: number, sharePct: number): number {
  return (growthPct * sharePct) / 100;
}
