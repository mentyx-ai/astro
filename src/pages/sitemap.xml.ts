import type { APIRoute } from 'astro';

type SitemapPage = {
  url: string;
  priority: number;
  changefreq: string;
  lastmod?: string; // optional – falls nicht gesetzt → fallback auf today
};

export const GET: APIRoute = async () => {
  const baseUrl = 'https://mentyx.ai';

  const pages: SitemapPage[] = [
    // Home & Main
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/platform/', priority: 0.9, changefreq: 'monthly' },
    { url: '/demo/', priority: 0.9, changefreq: 'monthly' },
    { url: '/resources/', priority: 0.8, changefreq: 'weekly' },
    { url: '/api-docs/', priority: 0.5, changefreq: 'monthly' },

    // Solutions
    { url: '/solutions/borrower-portal/', priority: 0.8, changefreq: 'monthly' },
    { url: '/solutions/document-intelligence/', priority: 0.8, changefreq: 'monthly' },
    { url: '/solutions/application-management/', priority: 0.8, changefreq: 'monthly' },
    { url: '/solutions/ai-underwriting/', priority: 0.9, changefreq: 'monthly' },
    { url: '/solutions/risk-scoring/', priority: 0.8, changefreq: 'monthly' },
    { url: '/solutions/decision-engine/', priority: 0.8, changefreq: 'monthly' },
    { url: '/solutions/explainable-ai/', priority: 0.8, changefreq: 'monthly' },
    { url: '/solutions/loan-management/', priority: 0.8, changefreq: 'monthly' },
    { url: '/solutions/real-estate-valuator/', priority: 0.8, changefreq: 'monthly' },
    { url: '/solutions/portfolio-reporting/', priority: 0.8, changefreq: 'monthly' },
    { url: '/solutions/multi-affiliate-dashboard/', priority: 0.7, changefreq: 'monthly' },
    { url: '/solutions/consistency-metrics/', priority: 0.7, changefreq: 'monthly' },
    { url: '/solutions/integrations/', priority: 0.7, changefreq: 'monthly' },

    // About
    { url: '/about/company/', priority: 0.7, changefreq: 'monthly' },
    { url: '/about/careers/', priority: 0.6, changefreq: 'weekly' },

    // Blog
    { url: '/blog/', priority: 0.8, changefreq: 'weekly' },
    
    // Blog Posts - NEW GUIDES (December 2025)
    { url: '/blog/fix-and-flip-loan-automation/', priority: 0.8, changefreq: 'monthly', lastmod: '2025-12-16' },
    { url: '/blog/bridge-loan-automation/', priority: 0.8, changefreq: 'monthly', lastmod: '2025-12-09' },
    { url: '/blog/dscr-loan-automation/', priority: 0.8, changefreq: 'monthly', lastmod: '2025-12-04' },
    
    // Blog Posts - Existing
    { url: '/blog/ai-implementation-checklist/', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog/ai-models-comparison/', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog/api-first-lending/', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog/portfolio-monitoring-case-study/', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog/regional-lender-case-study/', priority: 0.7, changefreq: 'monthly' },

    // Contact & Legal
    { url: '/contact/', priority: 0.9, changefreq: 'monthly' },
    { url: '/privacy-policy/', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms-of-service/', priority: 0.3, changefreq: 'yearly' }
  ];

  // Today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const lastmod = page.lastmod ?? today; // fallback to today if no lastmod
    return `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join('')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};