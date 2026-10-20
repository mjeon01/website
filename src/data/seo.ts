import { COMPANY_INFO } from "./content";
import { getRoute, languages, languagePath } from "./routes";
import { translations } from "./translations";

const koreanPages: Record<
  string,
  { label: string; description: string; image: string }
> = {
  home: {
    label: "",
    description:
      "국가유산을 다루던 사람들이, 기획하고 만들고 운영합니다. 국가유산과 전통예술만 다루는 경주의 비영리 법인입니다.",
    image: "hero-lanterns",
  },
  about: {
    label: "성림소개",
    description:
      "2010년부터 국가유산 정비 현장에서 일해온 사람들이 2021년 경주에 세운 사회적협동조합입니다.",
    image: "artisan",
  },
  work: {
    label: "사업분야",
    description:
      "축제·행사 기획부터 조형물·전통등 제작, 현장 운영까지 한 곳에서 직접 실행합니다.",
    image: "craft",
  },
  projects: {
    label: "프로젝트",
    description:
      "황룡사 Since 553, 황룡사지 등축제, 신라문화제 「빛의 숲」 등 성림조형원이 맡은 국가유산 축제와 체험입니다.",
    image: "festival",
  },
  shop: {
    label: "조각상점",
    description:
      "경주를 쌓는 소품샵. 빛조각 전통등 키트와 K헤리티지 브릭으로 경주의 국가유산을 손으로 직접 만들어 보세요.",
    image: "shop-lantern",
  },
  contact: {
    label: "문의하기",
    description:
      "국가유산 축제 기획, 조형물 제작, 전통등 임대, 체험·교육 문의를 남겨 주세요.",
    image: "meeting",
  },
};
export function pageMetadata(pathname: string, siteUrl: string) {
  const route = getRoute(pathname);
  const { page, locale, path, found } = route;
  const t = locale === "ko" ? null : translations[locale];
  const ko = koreanPages[page] || koreanPages.home;
  const label = !found
    ? "페이지를 찾을 수 없습니다"
    : t
      ? page === "shop"
        ? t.shop
        : t.about
      : ko.label;
  const name = t
    ? locale === "en"
      ? COMPANY_INFO.nameEn
      : `${t.brand} ${t.cooperative}`
    : COMPANY_INFO.name;
  const title = label ? `${label} | ${name}` : name;
  const description = !found
    ? "요청하신 페이지를 찾을 수 없습니다."
    : t
      ? page === "shop"
        ? t.shopSeo
        : t.brandDescription
      : ko.description;
  const canonical = new URL(path, siteUrl).href;
  const alternates =
    found && ["about", "shop"].includes(page)
      ? languages.map((language) => ({
          lang: language.lang,
          href: new URL(languagePath(language.id, page), siteUrl).href,
        }))
      : [];
  if (alternates.length)
    alternates.push({
      lang: "x-default",
      href: new URL(page === "shop" ? "/shop/" : "/about/", siteUrl).href,
    });
  return {
    ...route,
    title,
    description,
    canonical,
    alternates,
    lang: locale === "zh" ? "zh-Hans" : locale,
    ogLocale: { ko: "ko_KR", en: "en_US", ja: "ja_JP", zh: "zh_CN" }[locale],
    image: new URL(
      `/images/${t && page !== "shop" ? "hero-lanterns" : ko.image}.webp`,
      siteUrl,
    ).href,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: COMPANY_INFO.name,
        alternateName: COMPANY_INFO.nameEn,
        url: `${siteUrl}/`,
        telephone: "+82-10-3954-0529",
        foundingDate: "2021-01-19",
        address: {
          "@type": "PostalAddress",
          streetAddress: "북정로 13-3",
          addressLocality: "경주시",
          addressRegion: "경상북도",
          addressCountry: "KR",
        },
        sameAs: [
          "https://www.instagram.com/_seonglim_/",
          "https://www.instagram.com/brickstore.gj/",
          COMPANY_INFO.smartstoreUrl,
        ],
      },
      ...(found && page !== "home"
        ? [
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name,
                  item: new URL(locale === "ko" ? "/" : `/${locale}/`, siteUrl)
                    .href,
                },
                ...(locale !== "ko" && page === "about"
                  ? []
                  : [
                      {
                        "@type": "ListItem",
                        position: 2,
                        name: label,
                        item: canonical,
                      },
                    ]),
              ],
            },
          ]
        : []),
    ],
  };
}
