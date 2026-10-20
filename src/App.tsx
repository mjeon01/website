import { useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { WorkPage } from "./pages/WorkPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ShopPage } from "./pages/ShopPage";
import { ContactPage } from "./pages/ContactPage";
import { InternationalPage } from "./pages/InternationalPage";
import { getRoute } from "./data/routes";
import { translations } from "./data/translations";

export default function App({ path = "/" }: { path?: string }) {
  const mainRef = useRef<HTMLElement>(null);
  const { page, locale, found } = getRoute(path);
  const copy = locale === "ko" ? null : translations[locale];
  const inquiry = (type?: string) => {
    window.location.assign(
      `/contact/${type ? "?type=" + encodeURIComponent(type) : ""}`,
    );
  };
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          mainRef.current?.focus();
        }}
      >
        {copy?.skip || "본문으로 바로가기"}
      </a>
      <Navbar currentTab={page} locale={locale} />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        {!found ? (
          <section className="page-intro wrap">
            <p className="eyebrow">404</p>
            <h1>페이지를 찾을 수 없습니다.</h1>
            <p className="intro-description">
              주소를 확인하거나 첫 화면으로 이동해 주세요.
            </p>
            <a className="text-link" href="/">
              첫 화면으로
            </a>
          </section>
        ) : locale !== "ko" ? (
          <InternationalPage locale={locale} shop={page === "shop"} />
        ) : (
          <>
            {page === "home" && <HomePage />}
            {page === "about" && <AboutPage />}
            {page === "work" && <WorkPage onOpenInquiry={inquiry} />}
            {page === "projects" && <ProjectsPage />}
            {page === "shop" && <ShopPage />}
            {page === "contact" && <ContactPage />}
          </>
        )}
      </main>
      <Footer locale={locale} />
    </>
  );
}
