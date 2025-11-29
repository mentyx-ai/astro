import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://mentyx.ai';
  const pages = [
    // Home & Main Pages
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
    { url: '/blog/ai-implementation-checklist/', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog/ai-models-comparison/', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog/api-first-lending/', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog/portfolio-monitoring-case-study/', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog/regional-lender-case-study/', priority: 0.7, changefreq: 'monthly' },
    
    // Contact & Legal
    { url: '/contact/', priority: 0.9, changefreq: 'monthly' },
    { url: '/privacy-policy/', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms-of-service/', priority: 0.3, changefreq: 'yearly' },
    
    // Archive (lower priority)
    { url: '/Archive/bridge-loans/', priority: 0.4, changefreq: 'yearly' },
    { url: '/Archive/collateral-tracking/', priority: 0.4, changefreq: 'yearly' },
    { url: '/Archive/corporate-lending/', priority: 0.4, changefreq: 'yearly' },
    { url: '/Archive/debt-recovery/', priority: 0.4, changefreq: 'yearly' },
    { url: '/Archive/early-warning/', priority: 0.4, changefreq: 'yearly' },
    { url: '/Archive/payment-monitoring/', priority: 0.4, changefreq: 'yearly' },
    { url: '/Archive/portfolio-analytics/', priority: 0.4, changefreq: 'yearly' },
    { url: '/Archive/real-estate-finance/', priority: 0.4, changefreq: 'yearly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};