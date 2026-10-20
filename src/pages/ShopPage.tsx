import { ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "../data/content";
import { PageIntro, Photo, TextLink } from "../components/SiteElements";
const bricks = [
  ["brick-seokga", "석가탑", "KY01 · 535개"],
  ["brick-crown", "금관", "KY02 · 157개"],
  ["brick-tile", "신라 수막새", "KY03 · 38개"],
  ["brick-dabo", "다보탑", "KY04 · 912개"],
  ["brick-observatory", "첨성대 & 대릉원", "KY05 · 95개"],
];
export function ShopPage() {
  return (
    <>
      <PageIntro
        eyebrow="JOGAK STORE · 조각상점"
        title={
          <>
            경주의 국가유산,
            <br />
            손으로 직접 만들 수 있습니다.
          </>
        }
        description="우리가 다루던 것을, 누구나 손으로 만들 수 있는 크기로 옮깁니다."
      />
      <section className="shop-feature wrap">
        <Photo
          name="shop-lantern"
          alt="조립해 불을 밝히는 월월등과 수박등 제품"
          priority
        />
        <div>
          <p className="eyebrow">경주를 쌓는 소품샵</p>
          <h2>
            만들며 알아가는
            <br />
            우리의 유산.
          </h2>
          <p>
            전통의 형태를 쌓아 올리는 브릭.
            <br />
            조각을 맞추어 불을 밝히는 전통등.
            <br />
            손끝으로 만나는 경주의 이야기를 담았습니다.
          </p>
          <a
            className="solid-link store-purchase"
            href={COMPANY_INFO.smartstoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            네이버 스토어에서 구매하기{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="shop-note">
            상품별 판매 여부와 가격은 스마트스토어에서 확인해 주세요.
          </p>
        </div>
      </section>
      <section className="product-section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LIGHT & CRAFT</p>
            <h2>직접 밝히는 전통의 빛</h2>
          </div>
          <p>빛조각 전통등 · 월월등</p>
        </div>
        <div className="product-grid lantern-products">
          {[
            ["moon-jar", "빛조각 달항아리등", "달항아리의 곡선에 담긴 빛"],
            [
              "celadon",
              "빛조각 고려청자등",
              "청자의 문양을 빛으로 만나는 시간",
            ],
            [
              "pagoda-kit",
              "빛조각 구층목탑등",
              "한 층씩 조립해 밝히는 황룡사 구층목탑",
            ],
          ].map(([photo, title, description]) => (
            <article key={photo}>
              <div className="product-photo">
                <Photo name={photo} alt={`${title} 제품 사진`} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="product-section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">K-HERITAGE BRICK</p>
            <h2>한 조각씩 쌓는 국가유산</h2>
          </div>
          <p>호환 브릭으로 만나는 신라</p>
        </div>
        <div className="product-grid brick-products">
          {bricks.map(([photo, title, code]) => (
            <article key={photo}>
              <div className="product-photo">
                <Photo name={photo} alt={`K헤리티지 브릭 ${title} 완성품`} />
              </div>
              <p>{code}</p>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="shop-visit wrap">
        <div>
          <p className="eyebrow">ONLINE & OFFLINE</p>
          <h2>조각상점에서 만나요.</h2>
          <p>경상북도 경주시 북정로 13-3</p>
        </div>
        <a
          className="solid-link"
          href={COMPANY_INFO.smartstoreUrl}
          target="_blank"
          rel="noreferrer"
        >
          스마트스토어에서 상품 보기
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </section>
    </>
  );
}
