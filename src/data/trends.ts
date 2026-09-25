import type { SearchTrend } from "./types";
import { THEME_AI } from "./themes/ai";
import { THEME_VIDEO } from "./themes/video";
import { THEME_SOCIAL } from "./themes/social";
import { THEME_COMMERCE } from "./themes/commerce";
import { THEME_PHONES } from "./themes/phones";
import { THEME_GLP1 } from "./themes/glp1";
import { THEME_EV } from "./themes/ev";
import { THEME_CRYPTO } from "./themes/crypto";
import { THEME_SEMIS } from "./themes/semis";
import { THEME_CLOUD } from "./themes/cloud";

/** Search volumes compiled 8 Sep 2026; listed-stock quotes for names 6–15 refreshed 25 Sep 2026. */
export const AS_OF = "25 September 2026";

export const TRENDS: SearchTrend[] = [
  THEME_AI,
  THEME_VIDEO,
  THEME_SOCIAL,
  THEME_COMMERCE,
  THEME_PHONES,
  THEME_GLP1,
  THEME_EV,
  THEME_CRYPTO,
  THEME_SEMIS,
  THEME_CLOUD,
];

export const MAX_SEARCHES = Math.max(...TRENDS.map((t) => t.monthlySearchesM));
