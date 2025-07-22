export interface CaseStudy {
  slug: string;
  title: string;
  year: number;
  hero: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
  externalUrl?: string; // ссылка на внешний сайт/приложение
}

export const cases: CaseStudy[] = [
  {
    slug: "herbix-vitamin-marketplace",
    title: "Herbix: Vitamin Marketplace",
    year: 2024,
    hero: "/img/cases/herbix/hero.png",
    stack: ["FlutterFlow","Firebase","Python","OpenAI function-calling"],
    problem: "Visitors needed alternative to iHerb; support overloaded",
    solution: "LLM dynamic pricing API, chatbot, marketplace",
    result: "• Support load down 18%\n• Average order value up 9%\n• First 300 orders processed without manual help",
    externalUrl: "https://herbix.ai/"
  },
  {
    slug: "flatt-property-insights",
    title: "Flatt: Property Management",
    year: 2025,
    hero: "/img/cases/flatt/hero.png",
    stack: ["FlutterFlow","Firebase","Stripe","OpenAI","Typescript"],
    problem: "Owners, tenants and contractors had scattered comms.",
    solution: "Super-app plus AI rent insights and auto chat for tenants",
    result: "• MVP launched in 10 weeks\n• ~120 monthly users\n• 60% chats handled by AI",
    externalUrl: "https://flatt.ae/"
  },
  {
    slug: "trusted-real-estate-website",
    title: "Trusted Real Estate",
    year: 2024,
    hero: "/img/cases/tre/hero.png",
    stack: ["Tilda","Python","OpenAI","PDFKit"],
    problem: "Manual lead forms and contract drafting slowed agents.",
    solution: "Site chatbot pre‑qualifies buyers and generates PDF contracts",
    result: "• Lead to call time down 17%\n• SEO traffic up 21%\n• Agents saved ~12% weekly time",
    externalUrl: "https://trustedrealestate.ae/"
  },
  {
    slug: "coinyfarm-yield-strategist",
    title: "CoinyFarm: AI Yield Strategist",
    year: 2023,
    hero: "/img/cases/coinyfarm/hero.png",
    stack: ["Tilda","Airtable","Subgraph","OpenAI"],
    problem: "Users confused by DeFi yield options.",
    solution: "Dashboard ranks farms, GPT explains risk in plain English.",
    result: "• TVL up 9% in a month\n• Bounce rate down 8%\n• Avg session length +42 sec",
    externalUrl: "https://coinyfarm.com/"
  },
  {
    slug: "suvorin-ai-configurator",
    title: "Suvorin.Mebel: AI Configurator",
    year: 2023,
    hero: "/img/cases/mebel/hero.png",
    stack: ["Tilda","StableDiffusion","Stripe","Notion CMS"],
    problem: "Clients couldn't visualise custom furniture online.",
    solution: "Text to render previews via SD, instant cart and checkout",
    result: "• Lead to order conversion up 7%\n• 120+ mockups generated in first month\n• Avg response time to brief cut to 5 min",
    externalUrl: "http://suvorin.mebel.tilda.ws/"
  },
  {
    slug: "tensor-oko-trade-whisperer",
    title: "Tensor OKO: Trade Whisperer",
    year: 2022,
    hero: "/img/cases/tensoroko/hero.png",
    stack: ["Python","aiogram","ClickHouse","OpenAI"],
    problem: "Traders drowning in raw whale data.",
    solution: "Real time stream plus GPT TLDR in 60 seconds",
    result: "• Analysis time cut 32% for ~120 traders\n• 5k+ alerts delivered monthly\n• Retention after 30 days 41%",
    externalUrl: "https://t.me/Tensor_oko_bot"
  },
  {
    slug: "p2p-smart-arbitrage",
    title: "P2P Spread Bot: Smart Arbitrage AI",
    year: 2021,
    hero: "/img/cases/p2p/hero.png",
    stack: ["Python","Selenium","bs4","Prophet","OpenAI"],
    problem: "Manual P2P price scanning across 25 exchanges.",
    solution: "Async scraper predicts spread and explains risk",
    result: "• ROE up ~6 pp for pilot group\n• 25 exchanges scanned every 3 min\n• Manual checks reduced to near zero",
    externalUrl: "https://t.me/Crypto_USDT_bot"
  },
  {
    slug: "anxiety-destroyer-cbt-coach",
    title: "Anxiety Destroyer: CBT-Coach LLM",
    year: 2021,
    hero: "/img/cases/anxiety/hero.png",
    stack: ["Python","aiogram","SQLite","Anthropic Claude"],
    problem: "Therapy homework compliance was low.",
    solution: "Bot asks personalised CBT questions and replies empathetically",
    result: "• Daily streaks grew 3 → 5 days avg\n• 2.1k messages processed in month one\n• Dropout rate fell by ~14%",
    externalUrl: "https://t.me/anxiety_destroyer_bot"
  },
  {
    slug: "mint-checker-bot",
    title: "Mint Checker: NFT Intel Bot 2.0",
    year: 2022,
    hero: "/img/cases/mintchecker/hero.png",
    stack: ["Python","aiogram","Solana RPC","OpenAI"],
    problem: "Collectors lacked quick context on mint wallets.",
    solution: "Bot analyses holders and GPT summarises trends",
    result: "• ~2 800 active users\n• Avg session 2 min 20 sec\n• 9 chains supported at peak",
    externalUrl: "https://t.me/mint_checker_bot"
  },
  {
    slug: "marathon-bot-mindfulness-mentor",
    title: "Marathon Bot: Mindfulness Mentor",
    year: 2020,
    hero: "/img/cases/marathon/hero.png",
    stack: ["Python","aiogram","Whisper-cpp","GPT-4o"],
    problem: "Course owners wanted richer engagement.",
    solution: "Speech to text journaling and dynamic GPT feedback",
    result: "• Completion rate up 11%\n• Upsell about 1.6×\n• 400+ audio notes transcribed",
    externalUrl: "https://t.me/Forgiveness_marathon_bot"
  },
  {
    slug: "convert_to_txt",
    title: "VASTscribe Landing: AI Transcription SaaS Page",
    year: 2024,
    hero: "/img/cases/convert_to_txt/hero.png",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    problem: "No modern, premium landing page for AI transcription SaaS.",
    solution: "Responsive, animated landing with upload, pricing, and dashboard sections.",
    result: "• Fast, mobile-first UI\n• Glassmorphism design\n• Ready for SaaS launch",
    externalUrl: "https://vastscribe-landing.vercel.app/en"
  },
  {
    slug: "lumee",
    title: "lumee: Women's Community Landing Page",
    year: 2024,
    hero: "/img/cases/lumee/hero.png",
    stack: ["HTML5", "CSS3", "JavaScript", "AOS", "Google Apps Script", "Vercel"],
    problem: "No modern, safe, and beautiful landing for a women's community.",
    solution: "Responsive, animated landing with Google Sheets integration and warm design.",
    result: "• Fast, mobile-friendly site\n• Secure form handling\n• Community growth",
    externalUrl: "https://lumee.vercel.app"
  },
  {
    slug: "kaito_mindshare_parser",
    title: "Mindshare Analyzer: Kaito AI Project Growth",
    year: 2024,
    hero: "/img/cases/kaito_mindshare_parser/hero.png",
    stack: ["Python", "FastAPI", "requests", "openpyxl", "Jinja2"],
    problem: "No automated way to track mindshare growth of project leaders.",
    solution: "Script analyzes top-100 leaders, tracks mindshare growth, and generates Excel/JSON reports.",
    result: "• Automated mindshare analytics\n• Excel and JSON reports\n• Supports 50+ projects",
    externalUrl: "https://kaito-mindshare-analyzer.vercel.app/"
  },
  {
    slug: "LMNFT_new_collections",
    title: "LMNFT New Collections Tracker",
    year: 2024,
    hero: "/img/cases/LMNFT_new_collections/hero.png",
    stack: ["Python", "aiogram", "requests", "sqlite3"],
    problem: "No automated way to track and notify about new NFT collections on LaunchMyNFT.",
    solution: "Telegram bot and script to monitor, store, and alert about new collections and mint activity.",
    result: "• Automated NFT collection tracking\n• Telegram alerts\n• Mint analytics",
    externalUrl: "https://t.me/glitch_LMNFT_tracker_bot"
  },
  {
    slug: "inst_helper",
    title: "Inst Helper: Telegram Bot for Hashtag Video Analytics",
    year: 2024,
    hero: "/img/cases/inst_helper/hero.png",
    stack: ["Python", "python-telegram-bot", "requests"],
    problem: "No easy way to analyze all videos for a hashtag and get analytics in Telegram.",
    solution: "Bot fetches, paginates, and analyzes all hashtag videos using HikerAPI, reporting results in Telegram.",
    result: "• Automated hashtag analytics\n• Telegram chat integration\n• Handles large datasets",
    externalUrl: ""
  },
  {
    slug: "parsing_bullrun_rounds",
    title: "Bullrun Rounds Analytics: Game Data Analysis Toolkit",
    year: 2024,
    hero: "/img/cases/parsing_bullrun_rounds/hero.png",
    stack: ["Python", "pandas", "matplotlib", "seaborn", "numpy"],
    problem: "No easy way to analyze and visualize multi-round game data for player and card performance.",
    solution: "Toolkit loads, processes, and visualizes JSON round data, providing insights and analytics.",
    result: "• Automated leaderboard analysis\n• Card and player stats\n• Visual reports and insights",
    externalUrl: ""
  },
  {
    slug: "eth_restore",
    title: "ETH Restore: Mnemonic Brute-Force Recovery Tool",
    year: 2024,
    hero: "/img/cases/eth_restore/hero.png",
    stack: ["Python", "bip_utils", "multiprocessing"],
    problem: "Lost Ethereum wallet access due to missing mnemonic words.",
    solution: "Script brute-forces missing words, validates mnemonics, and checks for target address match.",
    result: "• Automated mnemonic recovery\n• Parallel processing\n• Logging and progress tracking",
    externalUrl: ""
  },
  {
    slug: "whisper",
    title: "Whisper Userbot: Telegram Voice-to-Text Transcriber",
    year: 2024,
    hero: "/img/cases/whisper/hero.png",
    stack: ["Python", "telethon", "openai-whisper", "ffmpeg", "dotenv"],
    problem: "No easy way to transcribe Telegram voice messages to text automatically.",
    solution: "Userbot downloads, converts, and transcribes voice messages in private chats using Whisper.",
    result: "• Automated voice-to-text\n• Telegram chat integration\n• Multi-user support",
    externalUrl: ""
  },
  {
    slug: "playwright_instagram_uploader",
    title: "Instagram Mass Uploader",
    year: 2025,
    hero: "/img/cases/playwright_instagram_uploader/hero.png",
    stack: ["Python", "Django", "Playwright", "Dolphin", "PostgreSQL"],
    problem: "Manual Instagram video uploading is slow, risky, and hard to scale across accounts.",
    solution: "System automates mass video uploads, simulates human behavior, and manages accounts with real-time web UI.",
    result: "• 3-5x faster uploads\n• Multi-account support\n• Advanced anti-detection",
    externalUrl: ""
  }
  
];

const featuredSlugs = [
  "flatt-property-insights",
  "herbix-vitamin-marketplace",
  "trusted-real-estate-website",
  "coinyfarm-yield-strategist",
  "suvorin-ai-configurator",
  "tensor-oko-trade-whisperer"
];

export function getTopCases(): CaseStudy[] {
  return featuredSlugs
    .map(slug => cases.find(c => c.slug === slug))
    .filter(Boolean) as CaseStudy[];
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find(caseStudy => caseStudy.slug === slug);
} 