import { useEffect, useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "../data/content";
import { PageIntro, Photo } from "../components/SiteElements";
function initialType(type?: string) {
  if (type?.includes("기획")) return "기획";
  if (type?.includes("제작")) return "제작";
  if (type?.includes("임대")) return "임대";
  if (type?.includes("체험") || type?.includes("교육")) return "교육";
  return "기획";
}
export function ContactPage({
  inquiryPrefill = {},
}: {
  inquiryPrefill?: { type?: string };
}) {
  const [type, setType] = useState(initialType(inquiryPrefill.type));
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("type");
    if (query) setType(initialType(query));
  }, []);
  return (
    <>
      <PageIntro
        eyebrow="CONTACT · 소식·문의"
        title={
          <>
            기획 · 제작 · 운영,
            <br />
            함께 이야기 나눠요.
          </>
        }
        description="행사 날짜와 장소, 하고 싶은 일을 알려주시면 함께 방법을 찾아갑니다."
      />
      <section className="contact-layout wrap">
        <aside>
          <Photo
            name="meeting"
            alt="공방에서 프로젝트 계획을 함께 논의하는 모습"
            priority
          />
          <h2>성림조형원에 문의하기</h2>
          <a href={`tel:${COMPANY_INFO.phone}`} className="contact-phone">
            <Phone size={20} aria-hidden="true" />
            {COMPANY_INFO.phone}
          </a>
          <p>기획 · 작품 제작 · 전통등·소품 임대 · 체험·교육</p>
          <a
            href="https://www.instagram.com/_seonglim_/"
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            인스타그램에서 소식 보기
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </aside>
        <div className="contact-form-area">
          <h2>어떤 도움이 필요하신가요?</h2>
          <p className="form-notice">
            온라인 접수는 준비 중입니다. 현재 문의는 전화로 부탁드립니다.
          </p>
          <form onSubmit={(event) => event.preventDefault()}>
            <fieldset>
              <legend>문의 유형</legend>
              <div className="type-options">
                {["기획", "제작", "임대", "교육", "기타"].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="type"
                      value={value}
                      checked={type === value}
                      onChange={() => setType(value)}
                    />
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="form-grid">
              <label>
                성명 또는 기관명
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="성함 또는 기관명을 적어주세요"
                />
              </label>
              <label>
                연락처
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="연락 가능한 전화번호"
                />
              </label>
            </div>
            <label>
              이메일 <span className="optional">선택</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="이메일 주소"
              />
            </label>
            <label>
              문의 내용
              <textarea
                name="message"
                rows={6}
                placeholder="행사 날짜와 장소, 원하시는 작업과 규모를 자유롭게 적어주세요."
              />
            </label>
            <button className="solid-link" type="submit" disabled>
              온라인 문의 접수 준비 중
            </button>
            <p className="form-help">
              입력한 내용은 전송되거나 저장되지 않습니다.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
