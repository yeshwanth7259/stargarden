// generate-sitemap.js
// Run with: node generate-sitemap.js
// Produces sitemap.xml listing every blog post + core pages.
// Re-run this any time you add a new post to blogPosts.js, then
// re-upload sitemap.xml to your site root and resubmit in Search Console.

import fs from "fs";
import blogPosts from "./src/data/blogPosts.js";

const SITE_URL = "https://www.stargardens.in";
const today = new Date().toISOString().split("T")[0];

const staticPages = [
  "",
  "/about-us",
  "/services-8",
  "/plants-on-hire",
  "/frp-planters-fiber-pots",
  "/office-plants-on-hire",
  "/our-services",
  "/rental-plants-for-contract",
  "/vertical-garden-bio-wall-green-wall-9743030555",
  "/balcony-garden",
  "/terrace-garden",
  "/landscape-design-and-execution",
  "/kitchen-garden",
  "/clients",
  "/plants-details",
  "/contactus",
  "/blog",
];

const urls = [
  ...staticPages.map(
    (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
  </url>`
  ),
  ...blogPosts.map(
    (post) => `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

fs.writeFileSync("sitemap.xml", xml);
console.log(`sitemap.xml generated with ${urls.length} URLs.`);
