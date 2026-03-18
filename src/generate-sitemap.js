const fs = require("fs");
const path = require("path");


// formations (depuis ton code)
const formations = [
  "comptabilite",
  "informatique",
  "bureautique",
  "commerce",
  "gestion",
  "hotesse",
  "infographie",
  "marketing",
  "secretariat"
];

// langues
const langues = [
  "francais",
  "english",
  "espagnol",
  "allemand",
  "italien"
];

const baseUrl = "https://hashtag-academy.com";

// pages statiques
const staticRoutes = [
  "/",
];

// formations routes
const formationRoutes = formations.map(f => `/formations/${f}`);

// langues routes
const langueRoutes = langues.map(l => `/langues/${l}`);

// tests (BONUS SEO)
const testRoutes = [
  "/test/francais",
  "/test/english",
  "/test/espagnol",
  "/test/allemand",
  "/test/italien"
];

const allRoutes = [
  ...staticRoutes,
  ...formationRoutes,
  ...langueRoutes,
  ...testRoutes
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

const path = require("path");

fs.writeFileSync(
  path.join(__dirname, "public", "sitemap.xml"),
  sitemap
);

console.log("✅ Sitemap PRO généré !");