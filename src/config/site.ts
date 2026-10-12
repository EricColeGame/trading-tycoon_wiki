export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Trading Tycoon Wiki",
  shortName: "Trading Tycoon",
  logoText: "TT",
  tagline: "Codes, Market Strategies, Upgrades & Progression Guides",
  description: "Your ultimate Trading Tycoon wiki — active codes, beginner guides, market strategies, upgrade tier lists and progression tips for the Roblox trading simulator.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://trading-tycoon.wiki",
  supportEmail: "support@trading-tycoon.wiki",
  gameUrl: "https://www.roblox.com/games/112241277471797/Trading-Tycoon",
  heroVideoId: "m3uxtsjK67s", // "NOOB to PRO Roblox Trading Tycoon" gameplay showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
