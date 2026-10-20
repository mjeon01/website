import { ArrowUpRight } from "lucide-react";
import { BUSINESS_FIELDS, RENTAL_ITEMS } from "../data/content";
import { PageIntro, Photo } from "../components/SiteElements";
const photos = [
  { name: "planning", alt: "체험 부스와 관람 동선을 설계한 행사장 전경" },
  { name: "craft", alt: "전통등 문양을 손으로 마무리하는 제작 과정" },
  { name: "rental", alt: "단청 문양으로 만든 행사 부스와 소품" },
  { name: "education", alt: "월월등을 함께 만드는 가족 체험 프로그램" },
];
export function WorkPage({
  onOpenInquiry,
}: {
  onOpenInquiry: (type: string) => void;
}) {
  return (
    <>
      <PageIntro
        eyebrow="OUR WORK · 사업분야"
        title={
          <>
            기획부터 운영까지,
            <br />한 팀의 손으로.
          </>
        }
        description="국가유산과 전통예술을 바탕으로 장소에 어울리는 콘텐츠를 만들고, 사람을 만나는 현장까지 함께합니다."
      />
      <div className="work-list wrap">
        {BUSINESS_FIELDS.map((field, index) => (
          <section className="work-row" key={field.id}>
            <Photo
              name={photos[index].name}
              alt={photos[index].alt}
              priority={index === 0}
            />
            <div>
              <p className="eyebrow">
                0{index + 1} / {field.step}
              </p>
              <h2>{field.title}</h2>
              <p className="work-subtitle">{field.subtitle}</p>
              <ul>
                {field.tasks.slice(0, 4).map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
              {field.id === "rental" && (
                <details className="rental-details">
                  <summary>임대 품목 살펴보기</summary>
                  <ul>
                    {RENTAL_ITEMS.map((item) => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ul>
                </details>
              )}
              <button
                className="text-link"
                onClick={() => onOpenInquiry(field.title)}
              >
                {field.buttonText}
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            </div>
          </section>
        ))}
      </div>
      <section className="craft-note wrap">
        <p className="eyebrow">우리 손으로 만들 수 있는 이유</p>
        <h2>단청 · 탱화 · 개금 · 전통등 · 조형</h2>
        <p>
          다섯 가지 기법을 구사하는 사람들이 모여 있어,
          <br />
          기획한 것을 끝까지 우리 손으로 만듭니다.
        </p>
      </section>
    </>
  );
}
