import type { APIRoute } from "astro";

function normalizePath(path: string) {
  // Ensure leading slash
  if (!path.startsWith("/")) path = `/${path}`;
  // Remove trailing slash (except root)
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path;
}

function buildLoc(site: string, path: string) {
  const cleanSite = site.replace(/\/+$/, "");
  const cleanPath = normalizePath(path);
  return `${cleanSite}${cleanPath === "/" ? "/" : cleanPath}`;
}

function routeFromFileKey(key: string) {
  // key example: "./blog/index.astro" or "./solutions/ai-underwriting.astro"
  let route = key
    .replace(/^\.\//, "/")
    .replace(/index\.astro$/, "")
    .replace(/\.astro$/, "");

  route = normalizePath(route);

  // Convert "/blog/" -> "/blog"
  if (route !== "/" && route.endsWith("/")) route = route.slice(0, -1);

  return route;
}

function guessMeta(path: string) {
  // Simple, predictable SEO defaults
  if (path === "/") return { priority: "1.0", changefreq: "weekly" };
  if (path.startsWith("/blog")) return { priority: "0.8", changefreq: "weekly" };
  if (path.startsWith("/solutions")) return { priority: "0.8", changefreq: "monthly" };
  if (path.startsWith("/about")) return { priority: "0.6", changefreq: "monthly" };
  if (path.startsWith("/privacy-policy") || path.startsWith("/terms-of-service"))
    return { priority: "0.3", changefreq: "yearly" };
  return { priority: "0.7", changefreq: "monthly" };
}

export const GET: APIRoute = async () => {
  const site = import.meta.env.SITE || "https://mentyx.ai"; // uses astro.config.mjs "site"
  const today = new Date().toISOString().split("T")[0];

  // ✅ Auto-discover ALL pages in src/pages
  const pageFiles = import.meta.glob("./**/*.astro", { eager: true });

  const routes = Object.keys(pageFiles)
    .map(routeFromFileKey)
    .filter((r) => r !== "/404" && r !== "/500" && !r.includes("[") && !r.includes("]")); // ignore error/dynamic routes

  // ✅ Ensure the homepage exists in case it isn't picked up (it should be)
  if (!routes.includes("/")) routes.unshift("/");

  // ✅ Deduplicate + stable order
  const uniqueRoutes = Array.from(new Set(routes)).sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map((path) => {
    const { priority, changefreq } = guessMeta(path);
    const loc = buildLoc(site, path);

    // NOTE: lastmod set to build-date for now (safe + not "future")
    // Later we can upgrade to real per-page lastmod from content frontmatter.
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
};
