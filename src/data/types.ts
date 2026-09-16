export type Horizon = {
  /** Revenue growth for the window. */
  growthPct: number;
  /** Share of that growth attributed to this search trend, 0–100. */
  trendSharePct: number;
  note: string;
};

export type ListedStock = {
  ticker: string;
  name: string;
  listing: string;
  role: string;
  price: number;
  marketCapB: number;
  /** Trailing P/E on current (TTM) earnings. Null if not meaningful. */
  pe: number | null;
  peNote?: string;
  past: Horizon;
  current: Horizon;
  future: Horizon;
  thesis: string;
};

export type SearchTrend = {
  id: string;
  rank: number;
  name: string;
  shortName: string;
  tagline: string;
  /** Combined monthly Google searches, millions, trailing 12 months. */
  monthlySearchesM: number;
  yoyChangePct: number;
  queries: string[];
  /** 12 monthly search-interest points, own-peak = 100. */
  spark: number[];
  thesis: string;
  sizeNote: string;
  stocks: ListedStock[];
};
