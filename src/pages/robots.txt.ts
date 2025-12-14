// src/pages/robots.txt.ts
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.toString() || "https://mentyx.ai").replace(/\/+$/, "");

  const body = `# Mentyx.ai — AI Loan Origination Platform
# Robots.txt — SEO optimized (full indexing)
# Last updated: ${new Date().toISOString().split("T")[0]}

# ==============================
# Default: allow everything
# ==============================
User-agent: *
Allow: /

# ==============================
# Explicitly allow major search engines
# ==============================
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

# ==============================
# Social / link preview bots
# ==============================
User-agent: FacebookBot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: Twitterbot
Allow: /

# ==============================
# Block AI training / scraping bots
# ==============================
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: Anthropic-AI
Disallow: /

User-agent: CCBot
Disallow: /

# ==============================
# Block aggressive SEO scrapers
# ==============================
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# ==============================
# Sitemap (no trailing slash)
# ==============================
Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
};
