import { ArrowDown, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, PROJECTS } from "../data/content";
import { Photo, TextLink, ContactInvitation } from "../components/SiteElements";

const disciplines = [
  {
    image: "planning",
    alt: "여러 체험 공간과 관람 동선으로 구성한 행사장 전경",
    number: "01",
    title: "기획합니다",
    text: "장소의 이야기를 찾고, 함께 누릴 경험을 설계합니다.",
    tags: "축제 · 행사 · 국가유산 활용",
  },
  {
    image: "craft",
    alt: "전통등에 불을 켜고 손으로 채색을 마무리하는 작업",
    number: "02",
    title: "직접 만듭니다",
    text: "도안에서 마지막 붓질까지, 생각을 손으로 옮깁니다.",
    tags: "조형물 · 전통등 · 공예 제품",
  },
  {
    image: "education",
    alt: "가족이 함께 월월등을 만드는 체험 현장",
    number: "03",
    title: "함께 운영합니다",
    text: "준비한 것이 사람을 만나는 순간까지 함께합니다.",
    tags: "현장 운영 · 체험 · 교육",
  },
];
export function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <Photo
          name="hero-lanterns"
          alt="섬세한 전통 문양으로 제작한 대형 종등과 용등이 밤을 밝히는 전시 현장"
          priority
          className="hero-photo"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">국가유산 · 전통예술</p>
          <h1 id="hero-title">
            유산의 기억을
            <br />
            함께 되살립니다.
          </h1>
          <p className="hero-description">
            기획하고, 만들고, 운영하는 사람들.
            <br />
            성림조형원 사회적협동조합
          </p>
          <TextLink href="/projects/" light>
            우리의 작업 보기
          </TextLink>
        </div>
        <div className="hero-bottom">
          <span>성림의 작업 · 대형 전통등 야간 전시</span>
          <button
            onClick={() =>
              document.getElementById("home-story")?.scrollIntoView({
                behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "instant"
                  : "smooth",
              })
            }
            aria-label="성림 소개로 내려가기"
          >
            SCROLL TO EXPLORE <ArrowDown size={15} aria-hidden="true" />
          </button>
        </div>
      </section>

      <section id="home-story" className="home-intro wrap">
        <div>
          <p className="eyebrow">전통을 이어, 오늘의 경험으로</p>
          <h2>
            국가유산을 다루던 손으로,
            <br />
            새로운 만남을 만듭니다.
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            성림조형원은 국가유산과 전통예술을 바탕으로
            <br className="desktop-break" /> 축제와 체험을 기획하고, 필요한 것을
            직접 만들고,
            <br className="desktop-break" /> 현장에서 사람들과 만납니다.
          </p>
          <TextLink href="/about/">성림의 이야기</TextLink>
        </div>
      </section>

      <section className="disciplines wrap" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR WORK · 하는 일</p>
            <h2 id="work-title">하나의 생각이 현장이 되기까지</h2>
          </div>
          <TextLink href="/work/">사업분야 자세히 보기</TextLink>
        </div>
        <div className="discipline-grid">
          {disciplines.map((item) => (
            <a className="discipline-card" key={item.number} href="/work/">
              <div className="photo-frame">
                <Photo name={item.image} alt={item.alt} />
              </div>
              <div className="discipline-title">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <ArrowUpRight size={23} aria-hidden="true" />
              </div>
              <p>{item.text}</p>
              <span className="discipline-tags">{item.tags}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="home-projects">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM OUR FIELD · 현장의 기록</p>
              <h2>
                손으로 만든 것들이
                <br />
                풍경이 되는 순간
              </h2>
            </div>
            <TextLink href="/projects/">프로젝트 둘러보기</TextLink>
          </div>
          <div className="field-grid">
            <a href="/projects/" className="field-card field-large">
              <div className="photo-frame">
                <Photo
                  name="festival"
                  alt="전통 조형물과 관람객이 어우러진 신라문화제 청년거리의 밤"
                />
              </div>
              <div className="field-caption">
                <div>
                  <span>축제 · 공간 연출</span>
                  <h3>빛으로 이어지는 축제의 밤</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </a>
            <a href="/projects/" className="field-card field-small">
              <div className="photo-frame">
                <Photo
                  name="bridge-lantern"
                  alt="월정교의 야경 앞에서 손에 든 월월등"
                  position="50% 60%"
                />
              </div>
              <div className="field-caption">
                <div>
                  <span>전통등 · 문화 경험</span>
                  <h3>손에 담아가는 경주의 빛</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </a>
          </div>
          <div className="recent-projects">
            <p className="eyebrow">최근 프로젝트</p>
            {PROJECTS.slice(0, 3).map((project) => (
              <a key={project.id} href={`/projects/?project=${project.id}`}>
                <span>
                  {project.year} · {project.type}
                </span>
                <strong>{project.title}</strong>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-shop wrap">
        <div className="shop-image">
          <Photo
            name="shop-lantern"
            alt="월월등과 수박등, 직접 조립해 사용하는 전통등 제품"
          />
        </div>
        <div className="shop-copy">
          <p className="eyebrow">JOGAK STORE · 조각상점</p>
          <h2>
            경주의 한 조각을
            <br />
            일상 가까이에.
          </h2>
          <p>
            손으로 조립하고, 쌓고, 불을 밝히는 시간.
            <br />
            빛조각 전통등과 K헤리티지 브릭으로
            <br />
            우리의 유산을 조금 더 가까이 만나보세요.
          </p>
          <TextLink href="/shop/">조각상점 둘러보기</TextLink>
          <a
            className="home-store-link"
            href={COMPANY_INFO.smartstoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            네이버 스토어에서 구매 <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
      <ContactInvitation />
    </>
  );
}
