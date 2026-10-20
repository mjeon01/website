import { COMPANY_INFO } from "../data/content";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "../data/routes";
import { translations } from "../data/translations";
export function Footer({ locale = "ko" }: { locale?: Locale }) {
  const t = locale === "ko" ? null : translations[locale];
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a href={locale === "ko" ? "/" : `/${locale}/`}>
              {t?.brand || "성림조형원"}
            </a>
            <span>{t?.cooperative || "사회적협동조합"}</span>
            <p>{t?.footerText || "유산의 기억을 함께 되살립니다."}</p>
          </div>
          <div className="footer-address">
            <p>{t?.address || COMPANY_INFO.address}</p>
            <a href="tel:+821039540529">{t?.phone || COMPANY_INFO.phone}</a>
            <p className="business-info">
              {t?.business ||
                `대표 ${COMPANY_INFO.representative} · 사업자등록번호 ${COMPANY_INFO.registrationNumber}`}
            </p>
          </div>
          <div className="footer-links">
            <a
              href="https://www.instagram.com/_seonglim_/"
              target="_blank"
              rel="noreferrer"
            >
              {t?.instagram || "성림 인스타그램"}{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/brickstore.gj/"
              target="_blank"
              rel="noreferrer"
            >
              {t?.shopInstagram || "조각상점 인스타그램"}{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={COMPANY_INFO.smartstoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t?.store || "네이버 스마트스토어"}{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()}{" "}
            {t ? COMPANY_INFO.nameEn : COMPANY_INFO.name}
          </p>
          {!t && (
            <details className="privacy-details">
              <summary>개인정보 안내</summary>
              <p>
                전화와 외부 채널을 통해 문의하실 수 있습니다. 이 홈페이지의 문의
                작성 내용은 온라인 접수 연결 전까지 서버에 저장되거나 전송되지
                않습니다. 외부 채널의 개인정보 처리는 해당 서비스의 안내를
                따릅니다.
              </p>
            </details>
          )}
        </div>
      </div>
    </footer>
  );
}
