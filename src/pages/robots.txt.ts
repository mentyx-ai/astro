// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site?.toString() || 'https://mentyx.ai';

  const robotsTxt = `# Mentyx.ai - AI Loan Origination Platform
# Last updated: ${new Date().toISOString().split('T')[0]}

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /dashboard/

# Allow assets explicitly
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.webp$
Allow: /*.svg$

Crawl-delay: 1

# Googlebot – allowed more aggressively
User-agent: Googlebot
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.webp$
Allow: /*.svg$
Crawl-delay: 0.2

# Bingbot
User-agent: Bingbot
Allow: /*.css$
Allow: /*.js$
Crawl-delay: 0.5

# Block AI data scrapers
User-agent: GPTBot
Disallow: /
User-agent: ChatGPT-User
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

# Block aggressive scrapers
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

# Host (optional)
# Host: mentyx.ai
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
      'X-Robots-Tag': 'all',
    }
  });
};
