export type Locale = "ko" | "en" | "ja" | "zh";
export const languages: { id: Locale; label: string; lang: string }[] = [
  { id: "ko", label: "한국어", lang: "ko" },
  { id: "en", label: "English", lang: "en" },
  { id: "ja", label: "日本語", lang: "ja" },
  { id: "zh", label: "中文", lang: "zh-Hans" },
];
export const routePaths = [
  "/",
  "/about/",
  "/work/",
  "/projects/",
  "/shop/",
  "/contact/",
  "/en/",
  "/en/shop/",
  "/ja/",
  "/ja/shop/",
  "/zh/",
  "/zh/shop/",
];
export function getRoute(path: string) {
  const pathname = path.split(/[?#]/)[0];
  const normalized = "/" + pathname.split("/").filter(Boolean).join("/") + "/";
  const clean = normalized === "//" ? "/" : normalized;
  const parts = clean.split("/").filter(Boolean);
  const locale: Locale = ["en", "ja", "zh"].includes(parts[0])
    ? (parts[0] as Locale)
    : "ko";
  const page = locale === "ko" ? parts[0] || "home" : parts[1] || "about";
  return { locale, page, path: clean, found: routePaths.includes(clean) };
}
export function languagePath(locale: Locale, page: string) {
  if (locale === "ko")
    return page === "shop" ? "/shop/" : page === "home" ? "/" : "/about/";
  return `/${locale}/${page === "shop" ? "shop/" : ""}`;
}
