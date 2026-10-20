import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { PROJECTS, type ProjectItem } from "../data/content";
import { projectPhotos, type ProjectPhoto } from "../data/project-photos";
import {
  PageIntro,
  Photo,
  ContactInvitation,
} from "../components/SiteElements";

function ProjectGallery({ photos }: { photos: ProjectPhoto[] }) {
  const [index, setIndex] = useState(0);
  const photo = photos[index];
  const move = (direction: number) =>
    setIndex(
      (current) => (current + direction + photos.length) % photos.length,
    );
  return (
    <section className="detail-gallery" aria-label="프로젝트 사진">
      <figure>
        <div className="detail-photo">
          <Photo name={photo.name} alt={photo.alt} priority />
        </div>
        <figcaption aria-live="polite">{photo.caption}</figcaption>
      </figure>
      <div className="gallery-controls">
        <div className="gallery-thumbnails">
          {photos.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}번 사진: ${item.caption}`}
              aria-pressed={i === index}
            >
              <Photo name={item.name} alt="" />
            </button>
          ))}
        </div>
        <div className="gallery-paging">
          <button onClick={() => move(-1)} aria-label="이전 사진">
            <ArrowLeft size={18} />
          </button>
          <span aria-live="polite">
            {index + 1} / {photos.length}
          </span>
          <button onClick={() => move(1)} aria-label="다음 사진">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export function ProjectsPage() {
  const [filter, setFilter] = useState("전체");
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("project");
    const project = PROJECTS.find((item) => item.id === id);
    if (project) setSelected(project);
  }, []);
  useEffect(() => {
    if (selected && dialog.current && !dialog.current.open) {
      dialog.current.showModal();
      dialog.current.scrollTop = 0;
    }
  }, [selected]);
  const filtered = PROJECTS.filter(
    (project) =>
      filter === "전체" || project.type === filter || project.year === filter,
  );
  function openProject(project: ProjectItem) {
    setSelected(project);
    window.history.replaceState(null, "", `/projects/?project=${project.id}`);
  }
  return (
    <>
      <PageIntro
        eyebrow="PROJECTS · 프로젝트"
        title={
          <>
            기록으로 남은 현장,
            <br />
            다음으로 이어지는 경험.
          </>
        }
        description="국가유산 축제부터 전통등 전시와 체험까지. 성림조형원이 기획하고 만들고 운영한 일을 소개합니다."
      />
      <div className="project-gallery wrap">
        <figure>
          <Photo
            name="festival"
            alt="신라문화제 청년거리 야간 행사 현장"
            priority
          />
          <figcaption>신라문화제 · 현장 기록</figcaption>
        </figure>
        <figure>
          <Photo
            name="goun-workshop"
            alt="고운사에서 불꽃등에 색을 입히는 체험 현장"
          />
          <figcaption>고운사 · 전통등 만들기 체험</figcaption>
        </figure>
        <figure>
          <Photo name="lanterns" alt="형산강 연등축제에 설치한 대형 용등" />
          <figcaption>형산강 연등축제 · 전통등 전시</figcaption>
        </figure>
      </div>
      <section className="project-archive wrap">
        <div className="archive-heading">
          <h2>프로젝트 기록</h2>
          <div className="filter-list" aria-label="프로젝트 분류">
            {["전체", "2026", "2025", "세계유산", "축제", "행사", "체험"].map(
              (item) => (
                <button
                  key={item}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
        <p className="result-count" aria-live="polite">
          {filtered.length}개의 프로젝트
        </p>
        <div className="project-list">
          {filtered.map((project) => (
            <button
              className="project-row"
              key={project.id}
              onClick={() => openProject(project)}
            >
              <span className="project-thumbnail">
                <Photo name={projectPhotos[project.id][0].name} alt="" />
              </span>
              <span className="project-year">{project.year}</span>
              <span className="project-name">
                <small>
                  {project.type} · {project.role}
                </small>
                <strong>{project.title}</strong>
                <span>{project.location}</span>
              </span>
              <ArrowUpRight size={25} aria-hidden="true" />
            </button>
          ))}
        </div>
      </section>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-detail-title"
        onClose={() => {
          setSelected(null);
          window.history.replaceState(null, "", "/projects/");
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label="프로젝트 상세 닫기"
        >
          <X />
        </button>
        {selected && (
          <article>
            <p className="eyebrow">
              {selected.year} · {selected.type}
            </p>
            <h2 id="project-detail-title">{selected.title}</h2>
            <ProjectGallery
              key={selected.id}
              photos={projectPhotos[selected.id]}
            />
            <p className="detail-summary">{selected.summary}</p>
            <dl>
              <div>
                <dt>기간</dt>
                <dd>{selected.period}</dd>
              </div>
              <div>
                <dt>장소</dt>
                <dd>{selected.location}</dd>
              </div>
              <div>
                <dt>주최·주관</dt>
                <dd>{selected.host}</dd>
              </div>
              <div>
                <dt>성림 역할</dt>
                <dd>{selected.role}</dd>
              </div>
            </dl>
            {selected.notice && (
              <p className="project-notice">{selected.notice}</p>
            )}
            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                프로그램 홈페이지
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            )}
          </article>
        )}
      </dialog>
      <ContactInvitation />
    </>
  );
}
