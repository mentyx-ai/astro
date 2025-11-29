// src/pages/robots.txt.js
export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://mentyx.ai/sitemap.xml

# Crawl-delay: 10
# Uncomment above if you get heavy traffic

# Allow Googlebot to crawl CSS and JS
User-agent: Googlebot
Allow: .css$
Allow: .js$

# Block AI data collectors
User-agent: ChatGPT-User
Disallow: /
User-agent: GPTBot
Disallow: /
User-agent: CCBot
Disallow: /`;

  return {
    body: robotsTxt
  };
}