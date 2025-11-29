// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site?.toString() || 'https://mentyx.ai';
  
  const robotsTxt = `# Mentyx.ai - AI Loan Origination Platform
# Last updated: ${new Date().toISOString().split('T')[0]}

# Global rules
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /dashboard/
Disallow: /*.json$
Disallow: /*.xml$
Crawl-delay: 1

# Search engines - enhanced permissions
User-agent: Googlebot
Allow: *.css$
Allow: *.js$
Allow: *.png$
Allow: *.jpg$
Allow: *.webp$
Crawl-delay: 0.5

User-agent: Bingbot
Allow: *.css$
Allow: *.js$
Crawl-delay: 0.5

# AI data collectors - strict blocking
User-agent: ChatGPT-User
Disallow: /
User-agent: GPTBot
Disallow: /
User-agent: CCBot
Disallow: /
User-agent: Claude-Web
Disallow: /
User-agent: Anthropic-AI
Disallow: /
User-agent: FacebookBot
Disallow: /
User-agent: Applebot
Disallow: /

# Aggressive scrapers
User-agent: MJ12bot
Disallow: /
User-agent: AhrefsBot
Disallow: /
User-agent: SemrushBot
Disallow: /
User-agent: DotBot
Disallow: /

# Sitemaps
Sitemap: ${new URL('sitemap.xml', baseUrl).href}
Sitemap: ${new URL('sitemap-index.xml', baseUrl).href}

# Host directive (optional)
# Host: mentyx.ai`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600', // 24h cache
      'X-Robots-Tag': 'all',
    }
  });
};