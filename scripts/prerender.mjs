import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer, loadEnv } from "vite";

// Set SITE_URL and SITE_INDEXABLE=true when launching on the public domain.
const buildEnv = { ...loadEnv("production", process.cwd(), "SITE_"), ...process.env };
const siteUrl = (
  buildEnv.SITE_URL ||
  "https://seonglim-heritage-studio.artful-cocoa-6750.chatgpt.site"
).replace(/\/$/, "");
if (!/^https?:\/\//.test(siteUrl))
  throw new Error("SITE_URL must be an absolute HTTP(S) URL");
const indexable = buildEnv.SITE_INDEXABLE === "true";
const escape = (text) =>
  String(text).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const template = await readFile("dist/index.html", "utf8");
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { render, routePaths, pageMetadata } = await server.ssrLoadModule(
    "/src/entry-server.tsx",
  );
  const pages = routePaths.map((path) => pageMetadata(path, siteUrl));
  for (const page of [...pages, pageMetadata("/404/", siteUrl)]) {
    const robots =
      page.found && indexable ? "index, follow" : "noindex, nofollow";
    const tags = [
      `<title>${escape(page.title)}</title>`,
      `<meta name="description" content="${escape(page.description)}" />`,
      `<meta name="robots" content="${robots}" />`,
      ...(page.found
        ? [`<link rel="canonical" href="${escape(page.canonical)}" />`]
        : []),
      ...page.alternates.map(
        ({ lang, href }) =>
          `<link rel="alternate" hreflang="${lang}" href="${escape(href)}" />`,
      ),
      `<meta property="og:site_name" content="성림조형원 사회적협동조합" />`,
      `<meta property="og:title" content="${escape(page.title)}" />`,
      `<meta property="og:description" content="${escape(page.description)}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:url" content="${escape(page.canonical)}" />`,
      `<meta property="og:locale" content="${page.ogLocale}" />`,
      `<meta property="og:image" content="${escape(page.image)}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${escape(page.title)}" />`,
      `<meta name="twitter:description" content="${escape(page.description)}" />`,
      `<meta name="twitter:image" content="${escape(page.image)}" />`,
      ...page.structuredData.map(
        (data) =>
          `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`,
      ),
    ].join("\n    ");
    const html = template
      .replace('<html lang="ko">', `<html lang="${page.lang}">`)
      .replace(/<!--page-head-start-->[\s\S]*?<!--page-head-end-->/, tags)
      .replace(
        '<div id="root"></div>',
        `<div id="root">${render(page.path)}</div>`,
      );
    const file = page.found
      ? resolve("dist", `.${page.path}`, "index.html")
      : resolve("dist", "404.html");
    await mkdir(resolve(file, ".."), { recursive: true });
    await writeFile(file, html);
  }
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${pages.map((page) => `  <url><loc>${escape(page.canonical)}</loc>${page.alternates.map(({ lang, href }) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${escape(href)}" />`).join("")}</url>`).join("\n")}\n</urlset>\n`;
  await writeFile("dist/sitemap.xml", sitemap);
  await writeFile(
    "dist/robots.txt",
    `User-agent: *\n${indexable ? "Allow: /" : "Disallow: /"}\nSitemap: ${siteUrl}/sitemap.xml\n`,
  );
  console.log(
    `Rendered ${pages.length} pages + 404, sitemap and robots (${indexable ? "public indexing enabled" : "private preview: noindex"}).`,
  );
} finally {
  await server.close();
}
