import {
  Photo,
  PageIntro,
  TextLink,
  ContactInvitation,
} from "../components/SiteElements";
import { COMPANY_INFO } from "../data/content";
export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT SEONGLIM · 성림소개"
        title={
          <>
            국가유산을 다루던 사람들이,
            <br />
            기획하고 만들고 운영합니다.
          </>
        }
        description="지역의 자원으로 콘텐츠를 만들고, 그 콘텐츠로 지역에서 살아갑니다."
      />
      <section className="about-story wrap">
        <Photo
          name="artisan"
          alt="국가유산 건축물의 기둥에 단청을 채색하는 장인"
          priority
        />
        <div>
          <p className="eyebrow">우리의 시작</p>
          <h2>
            오래된 것을 아끼는 마음,
            <br />그 마음에서 시작했습니다.
          </h2>
          <p>
            성림조형원 사회적협동조합은 국가유산과 전통예술만 다루는 비영리
            법인입니다. 2010년부터 국가유산 정비 현장에서 일해온 사람들이 2021년
            경주에서 세웠습니다.
          </p>
          <p>
            국가유산 활용 관광·축제 콘텐츠를 기획하고, 제작하고, 운영합니다.
            기획부터 운영까지 한 곳에서 직접 실행합니다.
          </p>
          <div className="about-dates">
            <div>
              <strong>2010</strong>
              <span>구성원 현장 경력의 시작</span>
            </div>
            <div>
              <strong>2021</strong>
              <span>사회적협동조합 설립</span>
            </div>
          </div>
        </div>
      </section>
      <section className="history-section wrap">
        <div>
          <p className="eyebrow">OUR HISTORY · 걸어온 길</p>
          <h2>현장에서 쌓아온 시간</h2>
        </div>
        <ol>
          {[
            ["2010", "구성원 국가유산 정비 현장 경력 시작"],
            ["2021.01", "성림조형원 사회적협동조합 설립"],
            ["2025.10", "황룡사지 등축제 시행"],
            [
              "2026.08",
              "황룡사 Since 553 운영 · 해파랑길 나이트 힐링트립 주관·시행",
            ],
            ["2026.09", "K헤리티지 브릭 시리즈 와디즈 펀딩 첫 판매"],
            [
              "2026.10",
              "신라문화제 「빛의 숲」 · 원효예술제 · 고운문화제 체험 운영",
            ],
          ].map(([date, description]) => (
            <li key={date}>
              <time>{date}</time>
              <span>{description}</span>
            </li>
          ))}
        </ol>
      </section>
      <section className="color-story">
        <div className="wrap">
          <div>
            <p className="eyebrow">성림의 색, 뇌록</p>
            <h2>
              화려한 그림 아래,
              <br />
              전통을 받치는 자리.
            </h2>
          </div>
          <div>
            <p>{COMPANY_INFO.colorStory}</p>
            <span className="color-name">뇌록 磊綠</span>
          </div>
        </div>
      </section>
      <section className="visit-section wrap">
        <div>
          <p className="eyebrow">VISIT US · 오시는 길</p>
          <h2>경주에서 만나요.</h2>
          <p>{COMPANY_INFO.address}</p>
          <TextLink
            href={`https://map.naver.com/p/search/${encodeURIComponent("경주시 북정로 13-3")}`}
          >
            지도에서 위치 보기
          </TextLink>
        </div>
        <Photo
          name="studio"
          alt="공방에서 집 모양의 전통등을 손으로 제작하는 모습"
        />
      </section>
      <ContactInvitation />
    </>
  );
}
