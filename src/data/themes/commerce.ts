import type { SearchTrend } from "../types";

export const THEME_COMMERCE: SearchTrend = {
    id: "commerce",
    rank: 4,
    name: "E-commerce",
    shortName: "Commerce",
    tagline: "Amazon is still how a large share of the planet shops.",
    monthlySearchesM: 620,
    yoyChangePct: 6,
    queries: ["amazon", "walmart", "flipkart", "aliexpress", "shopify"],
    spark: [70, 85, 100, 75, 72, 74, 76, 78, 80, 82, 84, 86],
    thesis:
      "Amazon is the ninth-largest search term worldwide. Add Walmart, Flipkart, Shopee and marketplace queries and you have a durable, seasonal mountain of commercial intent. Growth is no longer explosive — it is the cash register of the consumer internet.",
    sizeNote:
      "Branded marketplace search plus generic shopping queries. Holiday Q4 is the annual spike in the sparkline.",
    stocks: [
      {
        ticker: "AMZN",
        name: "Amazon",
        listing: "NASDAQ",
        role: "Marketplace, 1P retail, ads on-site",
        price: 258.77,
        marketCapB: 2790,
        pe: 20.6,
        past: {
          growthPct: 11.2,
          trendSharePct: 48,
          note: "North America and international stores are still the revenue bulk. AWS and ads took a rising share of profit.",
        },
        current: {
          growthPct: 15.8,
          trendSharePct: 42,
          note: "TTM $776B, +16%. A larger slice of the growth is AWS and ads than three years ago.",
        },
        future: {
          growthPct: 12,
          trendSharePct: 38,
          note: "Stores grow high-single-digits; AWS faster. E-commerce is the ballast, not the afterburner.",
        },
        thesis:
          "You cannot ignore Amazon in this trend, but you are increasingly paying for a cloud company attached to a store.",
      },
      {
        ticker: "WMT",
        name: "Walmart",
        listing: "NYSE",
        role: "US omnichannel, walmart.com, ads",
        price: 107.14,
        marketCapB: 853,
        pe: 37.8,
        past: {
          growthPct: 5.4,
          trendSharePct: 40,
          note: "E-commerce was a low-margin overlay on Supercenters. It is now the reason the multiple re-rated.",
        },
        current: {
          growthPct: 4.8,
          trendSharePct: 52,
          note: "Total sales crawl; e-commerce and ads do the work. Store traffic is the distribution.",
        },
        future: {
          growthPct: 5,
          trendSharePct: 55,
          note: "Street wants another year of e-comm outgrowing the box. Advertising is the margin kicker.",
        },
        thesis:
          "A 4% grower on a 38× earnings multiple only makes sense if you believe the search bar on walmart.com keeps stealing trips from Amazon.",
      },
      {
        ticker: "SHOP",
        name: "Shopify",
        listing: "NASDAQ",
        role: "Checkout and storefronts for independent merchants",
        price: 134.1,
        marketCapB: 160,
        pe: 78,
        past: {
          growthPct: 28.1,
          trendSharePct: 94,
          note: "A picks-and-shovels e-commerce platform. When merchants advertise, Shopify takes a cut.",
        },
        current: {
          growthPct: 26,
          trendSharePct: 93,
          note: "GMV and merchant solutions still mid-20s. Almost none of it is anything but this trend.",
        },
        future: {
          growthPct: 22,
          trendSharePct: 92,
          note: "Consensus stays low-20s. Multiple needs that growth to hold.",
        },
        thesis:
          "The cleanest listed bet on “people typing a store name into Google.” No AWS, no Supercenters — just take-rate on online carts.",
      },
      {
        ticker: "MELI",
        name: "MercadoLibre",
        listing: "NASDAQ",
        role: "Latin America’s Amazon-plus-fintech",
        price: 2145,
        marketCapB: 109,
        pe: 21.6,
        past: {
          growthPct: 36,
          trendSharePct: 70,
          note: "Commerce built the graph; Mercado Pago is now a large profit pool of its own.",
        },
        current: {
          growthPct: 34,
          trendSharePct: 64,
          note: "Still a 30%+ grower. Fintech is outgrowing the marketplace, so commerce’s share of growth eases.",
        },
        future: {
          growthPct: 28,
          trendSharePct: 60,
          note: "Street still has mid-20s. Credit and payments keep diluting the pure e-comm story — in a good way.",
        },
        thesis:
          "The emerging-market version of this trend, with a bank attached. Cheaper than Shopify because the mix is broader.",
      },
      {
        ticker: "SE",
        name: "Sea Limited",
        listing: "NYSE",
        role: "Shopee marketplace, SeaMoney, Garena",
        price: 142.6,
        marketCapB: 84,
        pe: 68,
        past: {
          growthPct: 18.4,
          trendSharePct: 58,
          note: "Shopee is the commerce engine. Garena games and SeaMoney sit beside it.",
        },
        current: {
          growthPct: 31,
          trendSharePct: 62,
          note: "Shopee profitability flipped the story. Commerce is again the growth driver after a gaming lull.",
        },
        future: {
          growthPct: 20,
          trendSharePct: 60,
          note: "Street wants Shopee to keep compounding in SE Asia and Brazil.",
        },
        thesis:
          "If Amazon is how the West searches for stuff, Shopee is how a large slice of SE Asia does. The listed vehicle also owns a games studio.",
      },
    
      {
        ticker: "BABA",
        name: "Alibaba",
        listing: "NYSE",
        role: "China e-commerce marketplaces and cloud",
        price: 110.63,
        marketCapB: 275,
        pe: null,
        peNote: "Trailing P/E unavailable from the quote feed on this refresh.",
        past: {
          growthPct: 4,
          trendSharePct: 70,
          note: "Taobao/Tmall remain the commerce core. Desk estimate — not an audited filing.",
        },
        current: {
          growthPct: 6,
          trendSharePct: 68,
          note: "Domestic commerce plus international. Desk estimate — not an audited filing.",
        },
        future: {
          growthPct: 7,
          trendSharePct: 65,
          note: "Street wants a China consumption re-rating. Desk estimate — not an audited filing.",
        },
        thesis:
          "Alibaba is still the large-cap claim on China online retail search intent.",
      },
      {
        ticker: "PDD",
        name: "PDD Holdings",
        listing: "NASDAQ",
        role: "Temu / Pinduoduo value e-commerce",
        price: 78.2,
        marketCapB: 111,
        pe: null,
        peNote: "Trailing P/E unavailable from the quote feed on this refresh.",
        past: {
          growthPct: 40,
          trendSharePct: 90,
          note: "Hypergrowth from Temu and domestic value commerce. Desk estimate — not an audited filing.",
        },
        current: {
          growthPct: 25,
          trendSharePct: 92,
          note: "Still a commerce pure-play at scale. Desk estimate — not an audited filing.",
        },
        future: {
          growthPct: 18,
          trendSharePct: 90,
          note: "Growth cools but theme share stays extreme. Desk estimate — not an audited filing.",
        },
        thesis:
          "PDD is the aggressive value end of e-commerce search — Temu made it a global retail keyword.",
      },
      {
        ticker: "EBAY",
        name: "eBay",
        listing: "NASDAQ",
        role: "Marketplace for used and specialty goods",
        price: 107.83,
        marketCapB: 48,
        pe: null,
        peNote: "Trailing P/E unavailable from the quote feed on this refresh.",
        past: {
          growthPct: 2,
          trendSharePct: 85,
          note: "Take-rate and ads on a mature marketplace. Desk estimate — not an audited filing.",
        },
        current: {
          growthPct: 3,
          trendSharePct: 86,
          note: "Stable GMV; focus on categories. Desk estimate — not an audited filing.",
        },
        future: {
          growthPct: 3,
          trendSharePct: 85,
          note: "Low-single-digit compounder. Desk estimate — not an audited filing.",
        },
        thesis:
          "eBay is the listed name for “buy used / collectible” search — less growth, high theme purity.",
      },
      {
        ticker: "ETSY",
        name: "Etsy",
        listing: "NASDAQ",
        role: "Handmade and specialty e-commerce",
        price: 68.98,
        marketCapB: 6.3,
        pe: null,
        peNote: "Trailing P/E unavailable from the quote feed on this refresh.",
        past: {
          growthPct: -3,
          trendSharePct: 95,
          note: "Post-stimulus hangover in discretionary GMV. Desk estimate — not an audited filing.",
        },
        current: {
          growthPct: 2,
          trendSharePct: 95,
          note: "Stabilizing marketplace take rate. Desk estimate — not an audited filing.",
        },
        future: {
          growthPct: 5,
          trendSharePct: 94,
          note: "Desk assumes modest re-acceleration. Desk estimate — not an audited filing.",
        },
        thesis:
          "Etsy is almost pure specialty commerce search — cyclical GMV, high attribution.",
      },
      {
        ticker: "CPNG",
        name: "Coupang",
        listing: "NYSE",
        role: "Coupang — Korea e-commerce and logistics",
        price: 13.88,
        marketCapB: 24.9,
        pe: null,
        peNote: "Trailing P/E unavailable from the quote feed on this refresh.",
        past: {
          growthPct: 20,
          trendSharePct: 90,
          note: "Product commerce growth with logistics moat. Desk estimate — not an audited filing.",
        },
        current: {
          growthPct: 15,
          trendSharePct: 92,
          note: "Still a domestic e-commerce compounder. Desk estimate — not an audited filing.",
        },
        future: {
          growthPct: 14,
          trendSharePct: 90,
          note: "Street wants sustained mid-teens. Desk estimate — not an audited filing.",
        },
        thesis:
          "Coupang is Korea’s Amazon analogue — commerce search with a fulfillment edge.",
      },
      {
        ticker: "JD",
        name: "JD.com",
        listing: "NASDAQ",
        role: "JD.com — China retail and logistics",
        price: 26.75,
        marketCapB: 36.1,
        pe: null,
        peNote: "Trailing P/E unavailable from the quote feed on this refresh.",
        past: {
          growthPct: 3,
          trendSharePct: 88,
          note: "Direct retail plus marketplace. Desk estimate — not an audited filing.",
        },
        current: {
          growthPct: 5,
          trendSharePct: 88,
          note: "Category mix and subsidies drive the print. Desk estimate — not an audited filing.",
        },
        future: {
          growthPct: 6,
          trendSharePct: 85,
          note: "Modest recovery case. Desk estimate — not an audited filing.",
        },
        thesis:
          "JD is China e-commerce with owned logistics — high theme share, competitive intensity.",
      },
      {
        ticker: "CART",
        name: "Maplebear (Instacart)",
        listing: "NASDAQ",
        role: "Instacart — grocery marketplace",
        price: 43.26,
        marketCapB: 10,
        pe: null,
        peNote: "Trailing P/E unavailable from the quote feed on this refresh.",
        past: {
          growthPct: 12,
          trendSharePct: 90,
          note: "Grocery delivery GMV and ads. Desk estimate — not an audited filing.",
        },
        current: {
          growthPct: 10,
          trendSharePct: 92,
          note: "Advertising is the margin story. Desk estimate — not an audited filing.",
        },
        future: {
          growthPct: 11,
          trendSharePct: 90,
          note: "Mid-teens desk view on a maturing category. Desk estimate — not an audited filing.",
        },
        thesis:
          "Instacart monetizes “grocery delivery” search — pure commerce, local logistics.",
      },
      {
        ticker: "CHWY",
        name: "Chewy",
        listing: "NYSE",
        role: "Chewy — pet e-commerce",
        price: 18.32,
        marketCapB: 7.4,
        pe: null,
        peNote: "Trailing P/E unavailable from the quote feed on this refresh.",
        past: {
          growthPct: 8,
          trendSharePct: 95,
          note: "Autoship and specialty pet SKUs. Desk estimate — not an audited filing.",
        },
        current: {
          growthPct: 7,
          trendSharePct: 95,
          note: "Loyalty drives repeat GMV. Desk estimate — not an audited filing.",
        },
        future: {
          growthPct: 8,
          trendSharePct: 94,
          note: "Steady mid-single to high-single growth. Desk estimate — not an audited filing.",
        },
        thesis:
          "Chewy is pet commerce search in a box — high attribution, category concentration.",
      },
      {
        ticker: "WSM",
        name: "Williams-Sonoma",
        listing: "NYSE",
        role: "Williams-Sonoma — digitally led home retail",
        price: 228.66,
        marketCapB: 26.9,
        pe: null,
        peNote: "Trailing P/E unavailable from the quote feed on this refresh.",
        past: {
          growthPct: 5,
          trendSharePct: 55,
          note: "E-commerce mix is large for a retailer. Desk estimate — not an audited filing.",
        },
        current: {
          growthPct: 4,
          trendSharePct: 52,
          note: "Housing-sensitive demand. Desk estimate — not an audited filing.",
        },
        future: {
          growthPct: 4,
          trendSharePct: 50,
          note: "Low-single-digit with digital ballast. Desk estimate — not an audited filing.",
        },
        thesis:
          "Williams-Sonoma is premium home commerce — digital demand with retail footprint.",
      },
      {
        ticker: "GLBE",
        name: "Global-e Online",
        listing: "NASDAQ",
        role: "Global-e — cross-border e-commerce enablement",
        price: 40.88,
        marketCapB: 6.9,
        pe: null,
        peNote: "Trailing P/E unavailable from the quote feed on this refresh.",
        past: {
          growthPct: 25,
          trendSharePct: 90,
          note: "Merchants outsourcing international checkout. Desk estimate — not an audited filing.",
        },
        current: {
          growthPct: 28,
          trendSharePct: 92,
          note: "GMV enablement is the print. Desk estimate — not an audited filing.",
        },
        future: {
          growthPct: 24,
          trendSharePct: 90,
          note: "Growth stays tied to cross-border online retail. Desk estimate — not an audited filing.",
        },
        thesis:
          "Global-e is a pick-and-shovel on cross-border shopping searches — not a storefront brand.",
      }
    ],
  };
