import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Globe2,
  Menu,
  ShoppingBag,
  X,
} from "lucide-react";
import { COMPANY_INFO } from "../data/content";
import { languagePath, languages, type Locale } from "../data/routes";
import { translations } from "../data/translations";

export function Navbar({
  currentTab,
  locale = "ko",
}: {
  currentTab: string;
  locale?: Locale;
}) {
  const [open, setOpen] = useState(false);
  const languageMenu = useRef<HTMLDetailsElement>(null);
  const t = locale === "ko" ? null : translations[locale];
  const links = t
    ? [["about", `/${locale}/`, t.about]]
    : [
        ["about", "/about/", "성림소개"],
        ["work", "/work/", "사업분야"],
        ["projects", "/projects/", "프로젝트"],
        ["contact", "/contact/", "소식·문의"],
      ];
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (languageMenu.current?.open) {
        languageMenu.current.open = false;
        languageMenu.current.querySelector("summary")?.focus();
      }
      if (open) {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        languageMenu.current &&
        !languageMenu.current.contains(event.target as Node)
      )
        languageMenu.current.open = false;
    };
    window.addEventListener("keydown", close);
    window.addEventListener("pointerdown", outside);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <header
      className={`site-header${locale === "en" ? " english-header" : ""}`}
    >
      <div className="header-inner">
        <a href={locale === "ko" ? "/" : `/${locale}/`} className="brand">
          <strong>{t?.brand || "성림조형원"}</strong>
          <span>{t?.cooperative || "사회적협동조합"}</span>
        </a>
        <nav className="desktop-nav" aria-label={t?.nav || "주 메뉴"}>
          {links.map(([id, href, label]) => (
            <a
              key={id}
              href={href}
              aria-current={currentTab === id ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="header-shop"
            href={languagePath(locale, "shop")}
            aria-current={currentTab === "shop" ? "page" : undefined}
          >
            <ShoppingBag size={17} aria-hidden="true" />
            {t?.shop || "조각상점"}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <details className="language-menu" ref={languageMenu}>
            <summary aria-label={t?.languages || "언어 선택"}>
              <Globe2 size={17} aria-hidden="true" />
              <span>{{ ko: "KO", en: "EN", ja: "JA", zh: "ZH" }[locale]}</span>
              <ChevronDown size={12} aria-hidden="true" />
            </summary>
            <nav aria-label={t?.languages || "언어 선택"}>
              {languages.map((language) => (
                <a
                  href={languagePath(language.id, currentTab)}
                  hrefLang={language.lang}
                  lang={language.lang}
                  key={language.id}
                  aria-current={language.id === locale ? "true" : undefined}
                >
                  {language.label}
                </a>
              ))}
            </nav>
          </details>
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-label={
              open ? t?.menuClose || "메뉴 닫기" : t?.menuOpen || "메뉴 열기"
            }
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label={t?.nav || "모바일 메뉴"}
        >
          {links.map(([id, href, label]) => (
            <a
              key={id}
              href={href}
              aria-current={currentTab === id ? "page" : undefined}
            >
              {label}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          ))}
          <a
            href={COMPANY_INFO.smartstoreUrl}
            className="mobile-store"
            target="_blank"
            rel="noreferrer"
          >
            {t?.store || "네이버 스마트스토어"}
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
