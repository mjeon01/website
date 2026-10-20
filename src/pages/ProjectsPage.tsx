import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Calendar, MapPin, Award, ExternalLink, X, Tag } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/content';

interface ProjectsPageProps {
  onNavigate?: (page: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('전체');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterOptions = ['전체', '2026', '2025', '세계유산', '축제', '행사', '체험'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === '전체') return true;
    if (activeFilter === '2026' || activeFilter === '2025') return proj.year === activeFilter;
    return proj.type === activeFilter;
  });

  return (
    <div className="w-full bg-[#FBF9F5] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ========================================================
            페이지 첫머리
            ======================================================== */}
        <section>
          {onNavigate && (
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-[#2D5A4C] mb-6 font-gothic transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>홈으로 돌아가기</span>
            </button>
          )}
          <div className="border-b border-[#2D5A4C]/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-2 font-gothic">
              PORTFOLIO ARCHIVE · 프로젝트
            </span>
            <h1 className="font-myeongjo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142E25]">
              지금까지 맡은 일
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 font-gothic font-light">
              각 사업에서 성림조형원이 맡은 역할을 크레딧 그대로 적었습니다.
            </p>
          </div>

          {/* 거르기 버튼 (전체 / 2026 / 2025 / 세계유산 / 축제 / 행사 / 체험) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F1ECE2] rounded-xs font-gothic">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors ${
                  activeFilter === f
                    ? 'bg-[#142E25] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        </section>

        {/* ========================================================
            실적 목록 (6건)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="bg-white border border-[#E8E3DA] rounded-xs p-6 sm:p-8 cursor-pointer hover:border-[#2D5A4C] transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-gothic text-stone-500 mb-3 pb-3 border-b border-stone-100">
                  <span className="text-[#2D5A4C] font-bold font-mono">
                    {proj.year} · {proj.type}
                  </span>
                  <span className="bg-[#EAF2EE] text-[#2D5A4C] px-2 py-0.5 rounded font-semibold text-[11px]">
                    성림 역할: {proj.role}
                  </span>
                </div>

                <h3 className="font-myeongjo text-xl sm:text-2xl font-bold text-[#142E25] mb-3 leading-snug">
                  {proj.title}
                </h3>

                <div className="space-y-1.5 text-xs font-gothic text-stone-600 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#2D5A4C]" />
                    <span>{proj.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2D5A4C]" />
                    <span>{proj.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light font-gothic line-clamp-3">
                  {proj.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-gothic">
                <span className="text-stone-400 font-light truncate max-w-[200px]">
                  주최: {proj.host}
                </span>
                <span className="font-semibold text-[#142E25] hover:text-[#2D5A4C] flex items-center gap-1">
                  <span>상세 기록 보기</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
          <div className="bg-[#FFFDF8] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xs shadow-2xl border border-[#D5C9B8] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
              <div>
                <span className="text-xs font-bold font-gothic text-[#2D5A4C] block uppercase tracking-wider">
                  {selectedProject.type} · {selectedProject.year}
                </span>
                <h3 className="font-myeongjo text-2xl font-bold text-[#142E25]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-stone-400 hover:text-stone-700 p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6 font-gothic text-xs text-stone-700">
              <div className="grid grid-cols-2 gap-3 p-4 bg-[#F8F5EE] rounded-xs border border-stone-200">
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">기간</span>
                  <span className="font-semibold text-stone-900">{selectedProject.period}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">장소</span>
                  <span className="font-semibold text-stone-900">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">주최·주관</span>
                  <span className="font-semibold text-stone-900">{selectedProject.host}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">성림 역할</span>
                  <span className="font-bold text-[#2D5A4C]">{selectedProject.role}</span>
                </div>
              </div>

              <div>
                <h4 className="font-myeongjo font-bold text-sm text-[#142E25] mb-2">
                  본문
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.highlightDetails && (
                <div className="p-4 bg-[#EAF2EE] rounded-xs border border-[#2D5A4C]/20">
                  <h5 className="font-myeongjo font-bold text-xs text-[#142E25] mb-2">
                    {selectedProject.id.includes('since-553') ? '여섯 관문 여정' : '주요 실행 내역'}
                  </h5>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {selectedProject.highlightDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#2D5A4C] font-bold">·</span>
                        <span className="font-light">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.notice && (
                <p className="text-[11px] text-stone-500 bg-stone-100 p-3 rounded-xs font-light">
                  {selectedProject.notice}
                </p>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                {selectedProject.link ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D5A4C] hover:underline"
                  >
                    <span>공식 웹페이지 아카이브</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] text-stone-400">성림조형원 공식 실적 아카이브</span>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-[#142E25] text-white text-xs font-semibold rounded-xs"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
