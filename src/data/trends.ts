import type { SearchTrend } from "./types";

/** Compiled 8 Sep 2026. Search volumes are combined related-query estimates. */
export const AS_OF = "8 September 2026";

export const TRENDS: SearchTrend[] = [
  {
    id: "ai",
    rank: 1,
    name: "Generative AI",
    shortName: "AI",
    tagline: "ChatGPT, Gemini, Grok, Claude — the new front door to the internet.",
    monthlySearchesM: 1920,
    yoyChangePct: 64,
    queries: ["chatgpt", "gemini", "grok", "claude", "chat gpt", "openai"],
    spark: [62, 65, 70, 74, 78, 82, 85, 88, 90, 94, 97, 100],
    thesis:
      "ChatGPT alone now draws about 1.12 billion Google searches a month — more than Amazon, more than Instagram. Add Gemini, Grok, Claude and the generic “AI” cluster and this is the largest commercial query theme on earth. Listed markets have priced that attention into chips first, then cloud, then the model platforms themselves.",
    sizeNote:
      "Combined monthly searches for ChatGPT, Gemini, Grok, Claude and close variants. ChatGPT is the second-largest keyword on Google worldwide, behind only YouTube.",
    stocks: [
      {
        ticker: "NVDA",
        name: "NVIDIA",
        listing: "NASDAQ",
        role: "AI accelerators — training and inference GPUs",
        price: 226.3,
        marketCapB: 5540,
        pe: 28.7,
        peNote: "TTM earnings; multiple compressed as EPS caught up with the price.",
        past: {
          growthPct: 110.5,
          trendSharePct: 92,
          note: "Three-year revenue CAGR of 110%. Gaming and auto are rounding error next to data-center GPUs.",
        },
        current: {
          growthPct: 83.4,
          trendSharePct: 94,
          note: "TTM revenue $303B, +83% YoY. Blackwell racks are the entire beat.",
        },
        future: {
          growthPct: 42,
          trendSharePct: 90,
          note: "Consensus still looks for another 40%+ year as inference ramps. Absolute dollars keep rising even as the percentage cools.",
        },
        thesis:
          "Almost a pure-play on this search trend. If generative-AI demand stalls, NVIDIA’s growth stalls with it. If it holds, this remains the tollbooth.",
      },
      {
        ticker: "MSFT",
        name: "Microsoft",
        listing: "NASDAQ",
        role: "OpenAI partner, Copilot, Azure AI capacity",
        price: 509.7,
        marketCapB: 3780,
        pe: 28.3,
        past: {
          growthPct: 14.6,
          trendSharePct: 38,
          note: "Office, Windows and LinkedIn still fund the base. Azure and OpenAI are what bent the growth line up.",
        },
        current: {
          growthPct: 17.8,
          trendSharePct: 44,
          note: "TTM revenue $332B, +18%. Azure growth and Copilot seats are the incremental dollars.",
        },
        future: {
          growthPct: 16,
          trendSharePct: 48,
          note: "Street looks for mid-teens. A larger share of next year’s add is AI infrastructure and Copilot, not Windows.",
        },
        thesis:
          "A conglomerate with a growing AI overlay. Roughly two-fifths of recent growth traces to this trend — enough to move the stock, not enough to be NVIDIA.",
      },
      {
        ticker: "GOOGL",
        name: "Alphabet",
        listing: "NASDAQ",
        role: "Gemini, AI Overviews, AI Mode, TPU cloud",
        price: 342.61,
        marketCapB: 4190,
        pe: 17.2,
        past: {
          growthPct: 11.4,
          trendSharePct: 22,
          note: "Search advertising paid for the AI build. Gemini was not yet a growth engine three years ago.",
        },
        current: {
          growthPct: 20.1,
          trendSharePct: 36,
          note: "TTM revenue $446B, +20%. AI Overviews and cloud TPUs are now visible in the numbers; core search still dominates profit.",
        },
        future: {
          growthPct: 14,
          trendSharePct: 40,
          note: "Street wants another mid-teens year. Gemini and cloud AI take a larger slice of the increment as classic search matures.",
        },
        thesis:
          "Alphabet both owns the old search box and is racing ChatGPT for the new one. Cheapest mega-cap P/E in the group because the market still treats AI as a cost as much as a product.",
      },
      {
        ticker: "META",
        name: "Meta Platforms",
        listing: "NASDAQ",
        role: "Llama models, AI ads, AI-generated content",
        price: 610.6,
        marketCapB: 1550,
        pe: 21.9,
        past: {
          growthPct: 16.2,
          trendSharePct: 28,
          note: "Reels and Advantage+ ads were the 2023–25 recovery. Llama was open-source prestige more than revenue.",
        },
        current: {
          growthPct: 27.7,
          trendSharePct: 42,
          note: "TTM revenue $228B, +28%. AI ranking and creative tools are the main reason ad pricing is still rising.",
        },
        future: {
          growthPct: 18,
          trendSharePct: 46,
          note: "Consensus cools to high-teens. A larger share of that leftover growth is AI-driven ad yield, not new users.",
        },
        thesis:
          "Meta does not sell a chatbot people search for. It uses the same models to make the ads next to those searches more expensive — and that is most of the earnings power.",
      },
      {
        ticker: "AMD",
        name: "Advanced Micro Devices",
        listing: "NASDAQ",
        role: "MI-series AI GPUs, challenger to NVIDIA",
        price: 505.74,
        marketCapB: 826,
        pe: 129.8,
        peNote: "Trailing earnings still thin versus the AI option the market is pricing.",
        past: {
          growthPct: 23.7,
          trendSharePct: 35,
          note: "CPU and gaming carried the base. Instinct GPUs were a small mix until 2025.",
        },
        current: {
          growthPct: 32,
          trendSharePct: 62,
          note: "AI accelerators are now the swing factor. CPU is stable; the beat is data center.",
        },
        future: {
          growthPct: 48,
          trendSharePct: 72,
          note: "Street has AMD as a 2027 inference share-gainer. That is a trend bet, not a PC bet.",
        },
        thesis:
          "A leveraged second source. If generative-AI buyers keep dual-sourcing, AMD’s growth is mostly this trend. If they do not, the multiple has little else to stand on.",
      },
    ],
  },
  {
    id: "video",
    rank: 2,
    name: "Video & streaming",
    shortName: "Video",
    tagline: "YouTube is still the most-typed word on the internet.",
    monthlySearchesM: 1510,
    yoyChangePct: 8,
    queries: ["youtube", "netflix", "what to watch", "prime video", "disney+"],
    spark: [88, 90, 92, 85, 88, 94, 90, 86, 92, 96, 98, 95],
    thesis:
      "YouTube is the single largest search term worldwide at about 1.38 billion monthly queries. “What to watch?” is the most-asked question on Google. Streaming is no longer a growth story in the 2020 sense — it is a mass-attention utility, and the listed names now make money from it.",
    sizeNote:
      "YouTube plus Netflix, Prime Video, Disney+ and “what to watch” variants. YouTube dwarfs every other title in the cluster.",
    stocks: [
      {
        ticker: "GOOGL",
        name: "Alphabet",
        listing: "NASDAQ",
        role: "YouTube — largest video search destination",
        price: 342.61,
        marketCapB: 4190,
        pe: 17.2,
        past: {
          growthPct: 11.4,
          trendSharePct: 24,
          note: "YouTube is a large, growing slice of Alphabet, not the whole company. Search ads still pay most of the bills.",
        },
        current: {
          growthPct: 20.1,
          trendSharePct: 22,
          note: "YouTube ads and Premium are solid mid-teens growers inside a faster cloud/AI year, so the trend’s share of total growth is slightly down.",
        },
        future: {
          growthPct: 14,
          trendSharePct: 20,
          note: "YouTube remains a cash compounder. AI cloud will likely outgrow it, so attribution eases further.",
        },
        thesis:
          "If you want the stock that owns the search term “youtube,” this is it. You are also buying a search-ads business and a TPU foundry.",
      },
      {
        ticker: "NFLX",
        name: "Netflix",
        listing: "NASDAQ",
        role: "Global subscription streaming",
        price: 76.77,
        marketCapB: 320,
        pe: 24.2,
        peNote: "Post-split price. Trailing P/E on current earnings.",
        past: {
          growthPct: 12.6,
          trendSharePct: 96,
          note: "A pure streaming company. Ads and paid sharing were the 2023–25 growth hacks; the product is still video.",
        },
        current: {
          growthPct: 15.4,
          trendSharePct: 95,
          note: "Revenue still mid-teens. Advertising tier and live events add mix, not a new industry.",
        },
        future: {
          growthPct: 11,
          trendSharePct: 92,
          note: "Street cools toward low-teens as penetration matures. Almost all of it is still this trend.",
        },
        thesis:
          "The cleanest listed expression of “what to watch.” Growth is slower than the AI complex, the P/E is not cheap, and almost none of the earnings come from anything else.",
      },
      {
        ticker: "AMZN",
        name: "Amazon",
        listing: "NASDAQ",
        role: "Prime Video, Twitch, MGM library",
        price: 258.77,
        marketCapB: 2790,
        pe: 20.6,
        past: {
          growthPct: 11.2,
          trendSharePct: 8,
          note: "Prime Video is a Prime perk and an ads surface. Retail and AWS dwarf it.",
        },
        current: {
          growthPct: 15.8,
          trendSharePct: 9,
          note: "Sports rights and ads on Prime Video help, but they are a thin slice of a $776B revenue base.",
        },
        future: {
          growthPct: 12,
          trendSharePct: 8,
          note: "Video stays a customer-acquisition and ads tool. Do not buy Amazon for streaming exposure.",
        },
        thesis:
          "You get YouTube-adjacent attention without paying a streaming multiple — and without getting much of the trend in the numbers.",
      },
      {
        ticker: "DIS",
        name: "Walt Disney",
        listing: "NYSE",
        role: "Disney+, ESPN, Hulu, studio library",
        price: 118.4,
        marketCapB: 214,
        pe: 18.6,
        past: {
          growthPct: 5.1,
          trendSharePct: 40,
          note: "Parks funded the streaming losses. Direct-to-consumer is now profitable, so the trend finally shows up in earnings, not just revenue.",
        },
        current: {
          growthPct: 4.8,
          trendSharePct: 38,
          note: "Low-single-digit revenue. Streaming operating income is the swing; parks are the ballast.",
        },
        future: {
          growthPct: 6,
          trendSharePct: 42,
          note: "ESPN streaming and Disney+ ads are where incremental profit is supposed to come from.",
        },
        thesis:
          "A media conglomerate that had to learn this trend the hard way. Streaming is no longer a science project — it is a mid-teens-margin product inside a parks company.",
      },
      {
        ticker: "SPOT",
        name: "Spotify",
        listing: "NYSE",
        role: "Audio streaming, podcasts, video expansion",
        price: 530,
        marketCapB: 109,
        pe: 29.1,
        past: {
          growthPct: 14.2,
          trendSharePct: 70,
          note: "Music subscriptions are the core. Podcasts and audiobooks added hours; video is a toe-dip into YouTube’s world.",
        },
        current: {
          growthPct: 13.5,
          trendSharePct: 68,
          note: "Margin, not hours, is the story now. Video features chase the same “what to play” search intent.",
        },
        future: {
          growthPct: 12,
          trendSharePct: 65,
          note: "Street wants high-teens operating margins. Growth stays mid-teens; a bit less of it is pure streaming volume.",
        },
        thesis:
          "Not YouTube, but it sits on the same “what should I put on” query. A profitable audio network with a modest video ambition.",
      },
    ],
  },
  {
    id: "social",
    rank: 3,
    name: "Social platforms",
    shortName: "Social",
    tagline: "Facebook, Instagram, WhatsApp — still how the world checks in.",
    monthlySearchesM: 1280,
    yoyChangePct: 4,
    queries: ["facebook", "instagram", "whatsapp web", "tiktok", "reddit"],
    spark: [90, 91, 92, 93, 94, 95, 96, 94, 95, 97, 98, 96],
    thesis:
      "Facebook, Instagram and WhatsApp still pull more than a billion branded searches a month. TikTok is the cultural engine but is not a listed US stock. The public market expression is Meta first, then a set of smaller attention networks that live off the leftover queries.",
    sizeNote:
      "Combined branded search for Facebook, Instagram, WhatsApp, TikTok and Reddit. TikTok’s owner is not listed in the US.",
    stocks: [
      {
        ticker: "META",
        name: "Meta Platforms",
        listing: "NASDAQ",
        role: "Facebook, Instagram, WhatsApp, Threads",
        price: 610.6,
        marketCapB: 1550,
        pe: 21.9,
        past: {
          growthPct: 16.2,
          trendSharePct: 88,
          note: "This is the company. Reels stopped the TikTok bleed; ads did the rest.",
        },
        current: {
          growthPct: 27.7,
          trendSharePct: 86,
          note: "Family of apps is still ~98% of revenue. Reality Labs is a cost, not a second trend.",
        },
        future: {
          growthPct: 18,
          trendSharePct: 84,
          note: "User growth is mature. Pricing and AI ads keep the social engine compounding.",
        },
        thesis:
          "If people type “instagram,” the cash shows up here. The P/E is ordinary because the growth is no longer a surprise.",
      },
      {
        ticker: "TCEHY",
        name: "Tencent",
        listing: "OTC",
        role: "WeChat, QQ — China’s social graph",
        price: 56.6,
        marketCapB: 510,
        pe: 22.4,
        past: {
          growthPct: 8.6,
          trendSharePct: 55,
          note: "Games and fintech sit on top of WeChat. Social is the distribution, not the whole P&L.",
        },
        current: {
          growthPct: 11.2,
          trendSharePct: 52,
          note: "Advertising and video accounts on WeChat are healthy. Games still matter.",
        },
        future: {
          growthPct: 10,
          trendSharePct: 50,
          note: "Mid-teens ads, high-single-digit games. Half the growth still rides the social graph.",
        },
        thesis:
          "The non-US version of Meta: a super-app whose search box is WeChat. Regulatory hair is the discount.",
      },
      {
        ticker: "RDDT",
        name: "Reddit",
        listing: "NYSE",
        role: "Forum search, AI training data, ads",
        price: 178.4,
        marketCapB: 33,
        pe: 148,
        peNote: "Newly profitable; trailing P/E is still a debut multiple.",
        past: {
          growthPct: 48,
          trendSharePct: 90,
          note: "A social-search company from birth. Google queries that end in “reddit” are the distribution.",
        },
        current: {
          growthPct: 54,
          trendSharePct: 88,
          note: "Ads and data-licensing both scale off the same corpus people search.",
        },
        future: {
          growthPct: 32,
          trendSharePct: 85,
          note: "Street still models 30%+ as ad load rises. Almost all of it is this trend.",
        },
        thesis:
          "Small, expensive, and tightly bound to search behaviour. When people distrust AI answers, they append “reddit” — and Reddit bills both sides.",
      },
      {
        ticker: "PINS",
        name: "Pinterest",
        listing: "NYSE",
        role: "Visual search and shopping intent",
        price: 34.8,
        marketCapB: 24,
        pe: 19.4,
        past: {
          growthPct: 9.8,
          trendSharePct: 92,
          note: "A visual search engine wearing a social costume. Shopping ads are the business.",
        },
        current: {
          growthPct: 14.2,
          trendSharePct: 90,
          note: "Mid-teens revenue, expanding margin. Users search for ideas, not friends.",
        },
        future: {
          growthPct: 12,
          trendSharePct: 88,
          note: "Steady compounder if retail ad budgets hold. Not a viral-growth story.",
        },
        thesis:
          "The listed stock that actually is a search box. Lower octane than Meta, cleaner than Snap.",
      },
      {
        ticker: "SNAP",
        name: "Snap",
        listing: "NYSE",
        role: "Snapchat — camera-first messaging",
        price: 9.42,
        marketCapB: 16,
        pe: 42.5,
        peNote: "Thin trailing earnings; one decent quarter still moves the multiple a lot.",
        past: {
          growthPct: 4.2,
          trendSharePct: 80,
          note: "User growth stalled in the West. Spotlight was the attempt to capture TikTok-style search-for-entertainment.",
        },
        current: {
          growthPct: 8.6,
          trendSharePct: 78,
          note: "Low-double-digit at best. Direct-response ads work; brand is lumpy.",
        },
        future: {
          growthPct: 10,
          trendSharePct: 75,
          note: "Street has a modest re-acceleration. AR is a call option, not the model.",
        },
        thesis:
          "A real social network with a small listed footprint. Most of whatever growth remains is still this trend — there is not another engine.",
      },
    ],
  },
  {
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
    ],
  },
  {
    id: "phones",
    rank: 5,
    name: "Smartphones",
    shortName: "Phones",
    tagline: "iPhone 18 is the hardware query that still moves a trillion-dollar stock.",
    monthlySearchesM: 310,
    yoyChangePct: 12,
    queries: ["iphone 18", "iphone 18 pro max", "samsung galaxy", "pixel 10", "iphone"],
    spark: [55, 58, 60, 72, 90, 100, 80, 70, 68, 75, 88, 96],
    thesis:
      "Handset names remain among the most-typed product queries on earth. September is peak season: iPhone 18 Pro searches are already lighting up regional trend tables. The listed chain is Apple, then the radio and foundry suppliers that actually build the thing people are googling.",
    sizeNote:
      "iPhone, Galaxy, Pixel and generic “smartphone” queries. The sparkline is a launch calendar, not a demand collapse.",
    stocks: [
      {
        ticker: "AAPL",
        name: "Apple",
        listing: "NASDAQ",
        role: "iPhone, the most-searched consumer gadget",
        price: 327.8,
        marketCapB: 4780,
        pe: 37.1,
        past: {
          growthPct: 2.8,
          trendSharePct: 62,
          note: "iPhone units were flattish; services did the compounding. Three-year revenue CAGR is low-single-digits.",
        },
        current: {
          growthPct: 14.2,
          trendSharePct: 58,
          note: "TTM $467B, +14% — a proper product cycle. Services still grow faster than hardware.",
        },
        future: {
          growthPct: 9,
          trendSharePct: 55,
          note: "Street has high-single-digits. On-device AI is the narrative; the installed base is the earnings.",
        },
        thesis:
          "Every “iphone 18 pro max price” query is this stock. You pay a services multiple for a company that still prints most of its cash from a phone.",
      },
      {
        ticker: "TSM",
        name: "TSMC",
        listing: "NYSE",
        role: "Foundry for iPhone silicon and flagship Androids",
        price: 439,
        marketCapB: 2277,
        pe: 31.7,
        past: {
          growthPct: 26.1,
          trendSharePct: 32,
          note: "Phones were the original customer. AI accelerators have since stolen the growth mix.",
        },
        current: {
          growthPct: 33,
          trendSharePct: 22,
          note: "Smartphone silicon is still a huge absolute dollar amount. It is no longer what is accelerating.",
        },
        future: {
          growthPct: 22,
          trendSharePct: 18,
          note: "N3/N2 for Apple remains strategic. The percentage of growth from handsets keeps shrinking.",
        },
        thesis:
          "You cannot ship an iPhone without TSMC. You can no longer buy TSMC and call it a phone stock — AI foundry is the bigger story.",
      },
      {
        ticker: "QCOM",
        name: "Qualcomm",
        listing: "NASDAQ",
        role: "Snapdragon modems and Android flagship SoCs",
        price: 174.09,
        marketCapB: 186,
        pe: 19.9,
        past: {
          growthPct: 4.6,
          trendSharePct: 74,
          note: "Handset cyclicality defined the decade. Automotive and IoT were the diversification pitch.",
        },
        current: {
          growthPct: 13.7,
          trendSharePct: 70,
          note: "A decent handset year plus a fatter mix of high-end Snapdragon. Apple modem share is the known risk.",
        },
        future: {
          growthPct: 8,
          trendSharePct: 62,
          note: "Street is cautious on the Apple modem loss. Android and auto have to carry more of the number.",
        },
        thesis:
          "The listed radio behind the non-iPhone half of this search trend. Cheapest large-cap P/E in the group because the iPhone content story is shrinking.",
      },
      {
        ticker: "AVGO",
        name: "Broadcom",
        listing: "NASDAQ",
        role: "Custom iPhone RF, wireless, and Apple silicon networking",
        price: 356.55,
        marketCapB: 1700,
        pe: 57.9,
        peNote: "GAAP trailing P/E. Custom AI ASICs, not phones, now set the multiple.",
        past: {
          growthPct: 35.8,
          trendSharePct: 18,
          note: "Wireless was the old Broadcom. VMware and custom AI accelerators rewrote the growth mix.",
        },
        current: {
          growthPct: 24,
          trendSharePct: 12,
          note: "Handset RF is a cash cow. AI custom silicon is the beat-and-raise machine.",
        },
        future: {
          growthPct: 28,
          trendSharePct: 10,
          note: "Almost all of the advertised growth is AI ASICs. Phones are maintenance.",
        },
        thesis:
          "A real iPhone supplier whose stock now trades as an AI company. Phone attribution of growth is in the low teens and falling.",
      },
      {
        ticker: "SONY",
        name: "Sony Group",
        listing: "NYSE",
        role: "Image sensors for iPhone and Android cameras",
        price: 28.4,
        marketCapB: 172,
        pe: 22.1,
        past: {
          growthPct: 6.2,
          trendSharePct: 28,
          note: "Sensors are a profit jewel inside a games-music-studio conglomerate.",
        },
        current: {
          growthPct: 8.4,
          trendSharePct: 30,
          note: "Multi-lens iPhones still pull sensor dollars. PlayStation mix moves around it.",
        },
        future: {
          growthPct: 7,
          trendSharePct: 28,
          note: "Sensor content per phone rises slowly. Games remain the bigger swing.",
        },
        thesis:
          "Every “iphone camera” query has Sony silicon behind it. Only about a third of Sony’s growth is that story.",
      },
    ],
  },
  {
    id: "glp1",
    rank: 6,
    name: "Weight-loss medicine",
    shortName: "GLP-1",
    tagline: "Ozempic, Wegovy, Mounjaro, Zepbound — a consumer brand that became a drug class.",
    monthlySearchesM: 85,
    yoyChangePct: -7,
    queries: ["ozempic", "wegovy", "mounjaro", "zepbound", "semaglutide", "tirzepatide"],
    spark: [100, 98, 95, 92, 88, 85, 82, 84, 86, 88, 87, 85],
    thesis:
      "A rare case of a prescription class becoming a household search term. Volume has cooled from the 2024 peak as supply caught up and oral pills arrived, but Mounjaro and Zepbound still printed nearly $15B in a single quarter. Search interest has plateaued, not vanished — and the listed winners have diverged violently.",
    sizeNote:
      "Brand plus molecule queries. Off the 2024 peak, still many times larger than any other drug class in search.",
    stocks: [
      {
        ticker: "LLY",
        name: "Eli Lilly",
        listing: "NYSE",
        role: "Mounjaro, Zepbound, oral GLP-1 Foundayo",
        price: 1123.91,
        marketCapB: 1058,
        pe: 38.2,
        past: {
          growthPct: 32,
          trendSharePct: 78,
          note: "Oncology and immunology still exist. The three-year explosion is tirzepatide.",
        },
        current: {
          growthPct: 48,
          trendSharePct: 85,
          note: "Q2 revenue $23.0B, +48%. Mounjaro + Zepbound were 65% of the quarter. FY26 guide $85–87B.",
        },
        future: {
          growthPct: 22,
          trendSharePct: 80,
          note: "Street still has 20%+ as orals scale. Most of that is this class, plus a bit of Alzheimer’s.",
        },
        thesis:
          "The listed company this search trend built. Roughly four-fifths of growth is GLP-1. The P/E is 38× current earnings for a reason.",
      },
      {
        ticker: "NVO",
        name: "Novo Nordisk",
        listing: "NYSE",
        role: "Ozempic, Wegovy, oral Wegovy",
        price: 46.4,
        marketCapB: 206,
        pe: 11.5,
        past: {
          growthPct: 24,
          trendSharePct: 90,
          note: "The company that created the search term. Three-year CAGR is the boom before the share loss.",
        },
        current: {
          growthPct: 3,
          trendSharePct: 88,
          note: "Sales roughly flat at constant currency. Pricing pressure and Lilly share gains are the whole story.",
        },
        future: {
          growthPct: 8,
          trendSharePct: 86,
          note: "A modest 2027 recovery is in the price if CagriSema or orals stabilize the franchise. Still a one-theme company.",
        },
        thesis:
          "Search volume for “ozempic” is still enormous. The stock has already paid for the fact that Lilly is winning. Trailing P/E of 11.5× is the market’s verdict on that loss of control.",
      },
      {
        ticker: "AMGN",
        name: "Amgen",
        listing: "NASDAQ",
        role: "MariTide monthly obesity candidate; Prolia/Repatha cash",
        price: 329.83,
        marketCapB: 223,
        pe: 19.5,
        past: {
          growthPct: 7.4,
          trendSharePct: 6,
          note: "A mature biotech. Obesity was a pipeline headline, not a revenue line.",
        },
        current: {
          growthPct: 9.2,
          trendSharePct: 8,
          note: "Existing franchises do the work. MariTide is still a clinical (and launch) option.",
        },
        future: {
          growthPct: 11,
          trendSharePct: 22,
          note: "If MariTide launches into this search trend, a fifth of next-cycle growth could come from it. Until then, it is option value.",
        },
        thesis:
          "A way to buy the trend without paying Lilly’s multiple — and without much of the trend in the current numbers.",
      },
      {
        ticker: "PFE",
        name: "Pfizer",
        listing: "NYSE",
        role: "Late GLP-1 pipeline, oral candidates, partnerships",
        price: 25.4,
        marketCapB: 144,
        pe: 8.4,
        past: {
          growthPct: -12,
          trendSharePct: 4,
          note: "The Covid cliff defined the three-year print. Obesity was not in the numbers.",
        },
        current: {
          growthPct: -6,
          trendSharePct: 5,
          note: "Still digesting Paxlovid/Comirnaty. GLP-1 is a press-release, not a P&L.",
        },
        future: {
          growthPct: 4,
          trendSharePct: 18,
          note: "Street has a return to growth. A successful oral obesity drug would be a large share of that turn.",
        },
        thesis:
          "Cheap for a reason. This trend is a call option on a company whose current earnings have almost nothing to do with it.",
      },
      {
        ticker: "VKTX",
        name: "Viking Therapeutics",
        listing: "NASDAQ",
        role: "Oral and injectable dual GLP-1/GIP candidates",
        price: 72.3,
        marketCapB: 8.1,
        pe: null,
        peNote: "Pre-profit. Trailing P/E is not meaningful; current earnings are a loss.",
        past: {
          growthPct: 0,
          trendSharePct: 100,
          note: "A development company. Revenue is collaboration crumbs. The entire equity value is this trend.",
        },
        current: {
          growthPct: 0,
          trendSharePct: 100,
          note: "Still pre-commercial. Growth of the stock is not growth of earnings.",
        },
        future: {
          growthPct: 0,
          trendSharePct: 100,
          note: "Any future revenue is this class. Binary on Phase 3 and a partner or launch.",
        },
        thesis:
          "A pure search-trend option. No P/E, no current earnings, no diversification. Size the position like a clinical trial, not like Lilly.",
      },
    ],
  },
  {
    id: "ev",
    rank: 7,
    name: "Electric vehicles",
    shortName: "EVs",
    tagline: "Tesla is still the brand people type. The category is no longer just Tesla.",
    monthlySearchesM: 48,
    yoyChangePct: 3,
    queries: ["tesla", "tesla stock", "cybertruck", "rivian", "byd", "ev charging"],
    spark: [70, 68, 65, 72, 78, 80, 74, 70, 68, 72, 76, 78],
    thesis:
      "“Tesla” remains a top-100 global search term. The broader EV query set has matured: growth is in China, in hybrids, and in the supply chain, not in a straight line through Fremont. Listed US names now split between a cult brand on a 300× earnings multiple and incumbents that actually deliver the metal.",
    sizeNote:
      "Tesla-branded queries dominate the cluster. Category terms (EV, charging, Rivian, BYD) are smaller but less cyclical.",
    stocks: [
      {
        ticker: "TSLA",
        name: "Tesla",
        listing: "NASDAQ",
        role: "EV brand, energy, autonomy option",
        price: 368.16,
        marketCapB: 1454,
        pe: 342,
        peNote: "Trailing P/E on current auto earnings. The multiple is an autonomy and energy story.",
        past: {
          growthPct: 24.6,
          trendSharePct: 82,
          note: "Vehicle sales did the 2021–24 compounding. Energy storage is now a real second line.",
        },
        current: {
          growthPct: 2.7,
          trendSharePct: 70,
          note: "Volume is roughly flat in a price war. Energy and services hold the print together.",
        },
        future: {
          growthPct: 18,
          trendSharePct: 60,
          note: "Street has a re-acceleration on cheaper models. A rising slice of the narrative is robotaxis, which is adjacent to — not the same as — this search trend.",
        },
        thesis:
          "People search “tesla.” They do not search “300 times earnings.” Auto is the trend; the P/E is the autonomy call.",
      },
      {
        ticker: "BYDDY",
        name: "BYD",
        listing: "OTC",
        role: "World’s largest EV maker by volume",
        price: 94.2,
        marketCapB: 138,
        pe: 17.8,
        past: {
          growthPct: 42,
          trendSharePct: 88,
          note: "A vertical EV and hybrid machine. Batteries, cars, buses.",
        },
        current: {
          growthPct: 22,
          trendSharePct: 90,
          note: "Volume still grows; mix and overseas shipments offset China price cuts.",
        },
        future: {
          growthPct: 16,
          trendSharePct: 88,
          note: "Europe and emerging-market exports are the next leg. Almost all of it is this trend.",
        },
        thesis:
          "The volume leader people search less than Tesla. You get the actual EV category at a real earnings multiple.",
      },
      {
        ticker: "GM",
        name: "General Motors",
        listing: "NYSE",
        role: "Chevy/Cadillac EVs, Ultium, hybrids",
        price: 58.4,
        marketCapB: 56,
        pe: 6.8,
        past: {
          growthPct: 4.1,
          trendSharePct: 18,
          note: "Trucks and ICE still pay the dividend. EVs were a mix drag more than a growth engine.",
        },
        current: {
          growthPct: 2.2,
          trendSharePct: 24,
          note: "Ultium ramps help units, not yet the P&L. Hybrids are the quiet winner.",
        },
        future: {
          growthPct: 3,
          trendSharePct: 30,
          note: "A larger share of a still-slow growth number is electric. The cheap P/E is the ICE franchise.",
        },
        thesis:
          "You are not buying a search trend. You are buying an incumbent that has to respond to one, at 7× earnings.",
      },
      {
        ticker: "TM",
        name: "Toyota",
        listing: "NYSE",
        role: "Hybrids first, BEVs second — the volume path most buyers actually take",
        price: 198.5,
        marketCapB: 268,
        pe: 9.4,
        past: {
          growthPct: 10.2,
          trendSharePct: 35,
          note: "Hybrid demand is the electrification people search for when they are not ready for a Tesla.",
        },
        current: {
          growthPct: 6.4,
          trendSharePct: 38,
          note: "Hybrids keep taking mix. Pure BEV is cautious by design.",
        },
        future: {
          growthPct: 5,
          trendSharePct: 40,
          note: "Electrified mix rises. This trend’s share of growth ticks up even if the BEV share does not.",
        },
        thesis:
          "The grown-up expression of “electric car” search intent: not a Cybertruck query, a Camry hybrid one.",
      },
      {
        ticker: "RIVN",
        name: "Rivian",
        listing: "NASDAQ",
        role: "Adventure EVs, Volkswagen joint venture, Amazon vans",
        price: 13.8,
        marketCapB: 16.4,
        pe: null,
        peNote: "Still loss-making on a trailing basis. No current-earnings P/E.",
        past: {
          growthPct: 48,
          trendSharePct: 95,
          note: "From near-zero. Every dollar of revenue is this trend.",
        },
        current: {
          growthPct: 38,
          trendSharePct: 94,
          note: "Deliveries grow; cash burn is the constraint. VW JV is the 2026–27 capacity story.",
        },
        future: {
          growthPct: 32,
          trendSharePct: 92,
          note: "Street needs the midsize platform. Attribution stays near 100% — there is no other product.",
        },
        thesis:
          "A brand people actually search, without the earnings to match. Treat it as a volume option on this trend.",
      },
    ],
  },
  {
    id: "crypto",
    rank: 8,
    name: "Cryptocurrency",
    shortName: "Crypto",
    tagline: "Bitcoin, Coinbase, “how to buy crypto” — a cycle that never leaves the search bar.",
    monthlySearchesM: 42,
    yoyChangePct: 18,
    queries: ["bitcoin", "crypto", "coinbase", "ethereum", "how to buy bitcoin"],
    spark: [45, 52, 60, 70, 85, 100, 80, 65, 58, 62, 70, 74],
    thesis:
      "Crypto search is a heartbeat, not a secular climb. It is still large enough, and listed enough, to matter: spot ETFs, a public exchange, a broker that makes money when retail trades, and the derivatives house that clears the futures. The sparkline is the cycle.",
    sizeNote:
      "Bitcoin, Ethereum, Coinbase and “buy crypto” queries. Highly cyclical — the bar is a 12-month pulse, not a slope.",
    stocks: [
      {
        ticker: "COIN",
        name: "Coinbase",
        listing: "NASDAQ",
        role: "Primary US crypto exchange and custody",
        price: 268.4,
        marketCapB: 68,
        pe: 24.6,
        past: {
          growthPct: 8,
          trendSharePct: 96,
          note: "A 2022 wipeout and a 2024–25 ETF boom average out to a modest three-year CAGR. All of it is this trend.",
        },
        current: {
          growthPct: 22,
          trendSharePct: 95,
          note: "Trading plus subscription/custody. Stablecoin and USDC take-rate help the non-transaction line.",
        },
        future: {
          growthPct: 14,
          trendSharePct: 94,
          note: "Street’s number is a cycle guess. Almost none of Coinbase is anything but crypto.",
        },
        thesis:
          "When people search “coinbase,” this is the till. Earnings swing with volume; the P/E is only as stable as the tape.",
      },
      {
        ticker: "HOOD",
        name: "Robinhood",
        listing: "NASDAQ",
        role: "Retail brokerage — crypto, options, equities",
        price: 123,
        marketCapB: 110,
        pe: 51.2,
        past: {
          growthPct: 22,
          trendSharePct: 34,
          note: "Crypto was a mix spike inside a broader retail-trading recovery.",
        },
        current: {
          growthPct: 38,
          trendSharePct: 40,
          note: "Crypto trading and event contracts are a fat slice of a very good year. Equities and options still matter.",
        },
        future: {
          growthPct: 18,
          trendSharePct: 32,
          note: "If crypto volumes cool, HOOD still has options and net interest. Trend share of growth should ease.",
        },
        thesis:
          "A way to buy “how to buy bitcoin” without owning an exchange multiple — and without getting a pure-play.",
      },
      {
        ticker: "MSTR",
        name: "Strategy (MicroStrategy)",
        listing: "NASDAQ",
        role: "Levered listed bitcoin proxy",
        price: 328,
        marketCapB: 86,
        pe: 7.2,
        peNote: "GAAP earnings include BTC fair-value swings. Treat this P/E as noisy.",
        past: {
          growthPct: 12,
          trendSharePct: 90,
          note: "Software is a footnote. The equity is a bitcoin balance sheet.",
        },
        current: {
          growthPct: 18,
          trendSharePct: 92,
          note: "Operating software barely moves the needle. Mark-to-market on BTC is the P&L.",
        },
        future: {
          growthPct: 10,
          trendSharePct: 92,
          note: "Future “growth” is bitcoin’s path plus more issuance to buy more coins.",
        },
        thesis:
          "Not an operating company in any useful sense. If the search trend is bitcoin, this is a levered warehouse of it.",
      },
      {
        ticker: "BLK",
        name: "BlackRock",
        listing: "NYSE",
        role: "iShares Bitcoin Trust (IBIT) and digital-asset products",
        price: 1084,
        marketCapB: 168,
        pe: 22.8,
        past: {
          growthPct: 9.4,
          trendSharePct: 6,
          note: "A $10T+ asset manager. Crypto ETFs are a new product line, not the firm.",
        },
        current: {
          growthPct: 11.2,
          trendSharePct: 10,
          note: "IBIT fees are visible and high-margin. They are still a thin slice of total revenue.",
        },
        future: {
          growthPct: 10,
          trendSharePct: 9,
          note: "AUM mix helps. Do not buy BlackRock for bitcoin; do notice that bitcoin now buys BlackRock a little growth.",
        },
        thesis:
          "The grown-up tollbooth on “bitcoin ETF” search. High-quality earnings, low trend purity.",
      },
      {
        ticker: "CME",
        name: "CME Group",
        listing: "NASDAQ",
        role: "Bitcoin and ether futures and options",
        price: 268,
        marketCapB: 96,
        pe: 25.4,
        past: {
          growthPct: 8.1,
          trendSharePct: 8,
          note: "Rates, equity index and commodities dwarf crypto. BTC futures are a nice extra.",
        },
        current: {
          growthPct: 7.6,
          trendSharePct: 11,
          note: "Crypto derivatives had a loud year. The core franchise is still Treasuries and ES.",
        },
        future: {
          growthPct: 7,
          trendSharePct: 10,
          note: "A steady compounder. Crypto remains a high-margin sidecar.",
        },
        thesis:
          "When traders search “bitcoin futures,” CME often gets paid. The P/E is a rates-and-index multiple, not a crypto one.",
      },
    ],
  },
  {
    id: "semis",
    rank: 9,
    name: "Semiconductors",
    shortName: "Chips",
    tagline: "People search “NVIDIA stock” and “AMD share price” because chips became a consumer story.",
    monthlySearchesM: 38,
    yoyChangePct: 41,
    queries: ["nvidia stock", "amd share price", "semiconductor", "tsmc", "asml"],
    spark: [60, 64, 70, 75, 80, 85, 82, 78, 84, 90, 95, 100],
    thesis:
      "Chip stocks are now searched like sports scores. “AMD share price” shows up on daily Google Trends tables; NVIDIA is a household ticker. The investable chain is the foundry, the lithography monopoly, and the wafer-fab equipment names that turn AI and phone demand into capital cycles.",
    sizeNote:
      "Ticker queries plus “semiconductor,” “GPU,” “chip stock.” Smaller than ChatGPT, but one of the fastest-growing financial query clusters.",
    stocks: [
      {
        ticker: "TSM",
        name: "TSMC",
        listing: "NYSE",
        role: "Makes the leading-edge chips everyone else designs",
        price: 439,
        marketCapB: 2277,
        pe: 31.7,
        past: {
          growthPct: 26.1,
          trendSharePct: 70,
          note: "AI and high-performance compute took over the incremental wafer. Phones are the base load.",
        },
        current: {
          growthPct: 33,
          trendSharePct: 78,
          note: "Advanced-node utilization is an AI story. CoWoS packaging is the bottleneck people actually google.",
        },
        future: {
          growthPct: 22,
          trendSharePct: 76,
          note: "Capex guide $52–56B. Most of the next dollar of growth is this theme.",
        },
        thesis:
          "The factory behind the tickers people search. A 32× current-earnings multiple for the only leading-edge foundry.",
      },
      {
        ticker: "ASML",
        name: "ASML",
        listing: "NASDAQ",
        role: "EUV lithography monopoly",
        price: 1764.85,
        marketCapB: 686,
        pe: 47.2,
        past: {
          growthPct: 11,
          trendSharePct: 55,
          note: "EUV adoption was a logic-and-foundry story before it was an AI story. China export rules cut the easy growth.",
        },
        current: {
          growthPct: 21,
          trendSharePct: 62,
          note: "FY26 outlook raised to €43–45B. AI-driven logic and memory both need more EUV.",
        },
        future: {
          growthPct: 18,
          trendSharePct: 65,
          note: "Capacity additions into 2027. High-NA is the next search term inside this trend.",
        },
        thesis:
          "There is no second source. Chip-search interest eventually becomes an ASML order — with a long lag and a 47× earnings sticker.",
      },
      {
        ticker: "AMAT",
        name: "Applied Materials",
        listing: "NASDAQ",
        role: "Wafer-fab equipment — deposition, implant, inspection",
        price: 472.79,
        marketCapB: 375,
        pe: 40.8,
        past: {
          growthPct: 10.5,
          trendSharePct: 48,
          note: "A broad WFE franchise. Memory winters hurt; foundry/logic AI spend now dominates the cycle.",
        },
        current: {
          growthPct: 18,
          trendSharePct: 58,
          note: "Gate-all-around and advanced packaging tools are the AI tell in the bookings.",
        },
        future: {
          growthPct: 16,
          trendSharePct: 60,
          note: "Street has mid-teens as HBM and 2nm capex stay elevated.",
        },
        thesis:
          "Picks and shovels for the factories people don’t search for — but that the tickers they do search depend on.",
      },
      {
        ticker: "LRCX",
        name: "Lam Research",
        listing: "NASDAQ",
        role: "Etch and deposition, leveraged to 3D NAND and HBM",
        price: 320.42,
        marketCapB: 401,
        pe: 55.7,
        past: {
          growthPct: 8.2,
          trendSharePct: 44,
          note: "Memory cycles defined Lam. HBM for AI GPUs re-rated the growth mix.",
        },
        current: {
          growthPct: 24,
          trendSharePct: 64,
          note: "HBM etch intensity is the 2026 beat. NAND is no longer the whole story.",
        },
        future: {
          growthPct: 18,
          trendSharePct: 66,
          note: "If AI memory capex holds, Lam’s growth is mostly this trend.",
        },
        thesis:
          "A memory-weighted way to buy the chip search trend. Higher beta to HBM than Applied, less monopoly than ASML.",
      },
      {
        ticker: "KLAC",
        name: "KLA",
        listing: "NASDAQ",
        role: "Process control and inspection — yield on advanced nodes",
        price: 188.98,
        marketCapB: 249,
        pe: 51.6,
        past: {
          growthPct: 9,
          trendSharePct: 42,
          note: "Inspection content rises with node difficulty. AI nodes are the hardest nodes.",
        },
        current: {
          growthPct: 16,
          trendSharePct: 55,
          note: "Foundry logic at 2/3nm plus HBM is a process-control gold rush.",
        },
        future: {
          growthPct: 14,
          trendSharePct: 58,
          note: "A compounder. More of each wafer’s cost shows up as KLA tools when yields get harder.",
        },
        thesis:
          "The quality-control booth on the line that makes the chips people search. Quiet, expensive, tightly bound to leading-edge spend.",
      },
    ],
  },
  {
    id: "cloud",
    rank: 10,
    name: "Cloud & data centers",
    shortName: "Cloud",
    tagline: "AWS, Azure, GCP — the warehouses behind every other trend on this list.",
    monthlySearchesM: 31,
    yoyChangePct: 22,
    queries: ["aws", "azure", "google cloud", "data center", "oracle cloud"],
    spark: [72, 74, 76, 78, 80, 84, 86, 88, 90, 93, 96, 100],
    thesis:
      "Nobody searches “cloud” the way they search ChatGPT — and that is the point. This is the industrial layer: hyperscaler capex heading toward ~$700B in 2026, power and racks becoming scarce, and the listed landlords and networks that rent the floor. Search volume is smaller; the dollar volume is not.",
    sizeNote:
      "AWS, Azure, Google Cloud, Oracle Cloud and “data center” queries. A professional-intent cluster, not a consumer one.",
    stocks: [
      {
        ticker: "MSFT",
        name: "Microsoft",
        listing: "NASDAQ",
        role: "Azure, the #2 cloud, now an AI factory",
        price: 509.7,
        marketCapB: 3780,
        pe: 28.3,
        past: {
          growthPct: 14.6,
          trendSharePct: 42,
          note: "Azure was already the growth story before generative AI. AI made it louder.",
        },
        current: {
          growthPct: 17.8,
          trendSharePct: 48,
          note: "Intelligent Cloud is the beat. Office is the cash. Azure AI capacity is the constraint.",
        },
        future: {
          growthPct: 16,
          trendSharePct: 50,
          note: "Capex stays elevated. Half of next year’s growth is this trend in a Microsoft-shaped bottle.",
        },
        thesis:
          "The listed stock people mean when they search “Azure.” A 28× current-earnings cloud compounder, not a software multiple that forgot hardware.",
      },
      {
        ticker: "AMZN",
        name: "Amazon",
        listing: "NASDAQ",
        role: "AWS — still the largest cloud",
        price: 258.77,
        marketCapB: 2790,
        pe: 20.6,
        past: {
          growthPct: 11.2,
          trendSharePct: 36,
          note: "AWS margins paid for a lot of retail. Growth cooled in 2023, then re-accelerated with AI instances.",
        },
        current: {
          growthPct: 15.8,
          trendSharePct: 40,
          note: "AWS is back to a high-teens run-rate. That is a large share of Amazon’s incremental profit.",
        },
        future: {
          growthPct: 12,
          trendSharePct: 42,
          note: "Trainium/Inferentia and GPU capacity are the 2027 story. Retail still dominates revenue, not profit growth.",
        },
        thesis:
          "The original cloud. Cheaper than Microsoft on trailing earnings because you also own a grocery chain.",
      },
      {
        ticker: "GOOGL",
        name: "Alphabet",
        listing: "NASDAQ",
        role: "Google Cloud, TPUs, data-center build",
        price: 342.61,
        marketCapB: 4190,
        pe: 17.2,
        past: {
          growthPct: 11.4,
          trendSharePct: 18,
          note: "Cloud was subscale. It is now a real third engine, but search ads still dwarf it.",
        },
        current: {
          growthPct: 20.1,
          trendSharePct: 28,
          note: "Google Cloud is a high-20s grower inside a 20% company. TPUs are the differentiator.",
        },
        future: {
          growthPct: 14,
          trendSharePct: 32,
          note: "A larger share of Alphabet’s increment should keep coming from cloud as search matures.",
        },
        thesis:
          "Cloud is no longer a footnote. It is still not the reason Alphabet is cheap — search is.",
      },
      {
        ticker: "ORCL",
        name: "Oracle",
        listing: "NYSE",
        role: "OCI, database, multi-cloud AI capacity deals",
        price: 162.52,
        marketCapB: 468,
        pe: 27.9,
        past: {
          growthPct: 8.4,
          trendSharePct: 28,
          note: "License was the old Oracle. Cloud RPO is the new one, turbocharged by a handful of AI training deals.",
        },
        current: {
          growthPct: 11,
          trendSharePct: 52,
          note: "Remaining performance obligations jumped on AI cloud contracts. That is this trend showing up as backlog more than as current revenue.",
        },
        future: {
          growthPct: 18,
          trendSharePct: 60,
          note: "Street’s re-acceleration thesis is OCI. If the AI capacity is delayed, the multiple has a long way to fall.",
        },
        thesis:
          "A database company that sold the market a data-center story. High trend leverage, execution risk to match.",
      },
      {
        ticker: "ANET",
        name: "Arista Networks",
        listing: "NYSE",
        role: "Ethernet fabrics for AI data centers",
        price: 191.21,
        marketCapB: 241,
        pe: 59.6,
        past: {
          growthPct: 31.2,
          trendSharePct: 48,
          note: "Campus and enterprise were the original franchise. Hyperscale switching took over the growth.",
        },
        current: {
          growthPct: 28,
          trendSharePct: 72,
          note: "AI back-end networks are the 2026 beat. Ethernet vs InfiniBand is the debate.",
        },
        future: {
          growthPct: 22,
          trendSharePct: 74,
          note: "Street still has 20%+ as 800G ramps. Most of that is this trend.",
        },
        thesis:
          "The plumbing inside the buildings people mean when they search “data center.” Expensive, pure, and only as durable as hyperscaler capex.",
      },
    ],
  },
];

export const MAX_SEARCHES = Math.max(...TRENDS.map((t) => t.monthlySearchesM));

