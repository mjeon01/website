import { ArrowUpRight } from "lucide-react";
import { Photo, PageIntro, TextLink } from "../components/SiteElements";
import { translations } from "../data/translations";
import { COMPANY_INFO } from "../data/content";
import type { Locale } from "../data/routes";

export function InternationalPage({
  locale,
  shop,
}: {
  locale: Exclude<Locale, "ko">;
  shop: boolean;
}) {
  const t = translations[locale];
  return (
    <div className={`international-page international-${locale}`}>
      {shop ? (
        <>
          <PageIntro
            eyebrow={t.shopEyebrow}
            title={t.shopTitle}
            description={t.shopDescription}
          />
          <section className="shop-feature wrap">
            <Photo name="shop-lantern" alt={t.shopAlt} priority />
            <div>
              <p className="eyebrow">{t.shopEyebrow}</p>
              <h2>{t.shopDescription}</h2>
              <p>{t.shopStory}</p>
              <p>{t.shopMore}</p>
              <a
                className="solid-link store-purchase"
                href={COMPANY_INFO.smartstoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.store} <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <p className="shop-note">{t.storeNote}</p>
            </div>
          </section>
          <section className="product-section wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">LIGHT & CRAFT</p>
                <h2>{t.kitsTitle}</h2>
              </div>
              <p>{t.kitsIntro}</p>
            </div>
            <div className="product-grid lantern-products">
              {t.kits.map((kit, index) => (
                <article key={kit.title}>
                  <div className="product-photo">
                    <Photo
                      name={["moon-jar", "celadon", "pagoda-kit"][index]}
                      alt={kit.alt}
                    />
                  </div>
                  <h3>{kit.title}</h3>
                  <p>{kit.text}</p>
                </article>
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="international-hero">
            <Photo name="hero-lanterns" alt={t.heroAlt} priority />
            <div className="international-hero-copy">
              <p className="eyebrow">{t.heroEyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <p>{t.heroText}</p>
              <TextLink href={`/${locale}/shop/`} light>
                {t.shop}
              </TextLink>
            </div>
          </section>
          <section className="about-story wrap international-story">
            <Photo name="artisan" alt={t.artisanAlt} />
            <div>
              <p className="eyebrow">{t.storyEyebrow}</p>
              <h2>{t.storyTitle}</h2>
              <p>{t.story}</p>
              <p>{t.storyMore}</p>
            </div>
          </section>
          <section className="disciplines wrap">
            <div className="section-heading">
              <h2>{t.workTitle}</h2>
            </div>
            <div className="discipline-grid">
              {t.work.map((item, index) => (
                <article className="discipline-card" key={item.title}>
                  <div className="photo-frame">
                    <Photo
                      name={["planning", "craft", "education"][index]}
                      alt={item.alt}
                    />
                  </div>
                  <div className="discipline-title">
                    <span>0{index + 1}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="home-shop wrap international-shop">
            <div className="shop-image">
              <Photo name="shop-lantern" alt={t.shopAlt} />
            </div>
            <div className="shop-copy">
              <p className="eyebrow">{t.shopEyebrow}</p>
              <h2>{t.shopTitle}</h2>
              <p>{t.shopMore}</p>
              <TextLink href={`/${locale}/shop/`}>{t.shop}</TextLink>
            </div>
          </section>
        </>
      )}
      <section className="shop-visit wrap">
        <div>
          <p className="eyebrow">{t.contact}</p>
          <h2>{t.visit}</h2>
          <p>{t.address}</p>
          <a className="text-link" href="tel:+821039540529">
            {t.phone}
          </a>
        </div>
        <a
          className="solid-link"
          href={COMPANY_INFO.smartstoreUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.store}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </section>
    </div>
  );
}
