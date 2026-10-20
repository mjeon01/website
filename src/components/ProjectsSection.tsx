import React, { useState } from 'react';
import { ArrowUpRight, Calendar, MapPin, Award, ExternalLink, X, Tag } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/content';
import {
  GyeongjuSunriseVisual,
  LanternFestivalVisual,
  LightForestVisual,
  MoonJarVisual,
} from './visuals/HeritageVisuals';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('전체');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterOptions = ['전체', '2026', '2025', '세계유산', '축제', '행사', '체험'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === '전체') return true;
    if (activeFilter === '2026' || activeFilter === '2025') return proj.year === activeFilter;
    return proj.type === activeFilter;
  });

  const getVisualForProject = (id: string) => {
    if (id.includes('shilla')) {
      return <LightForestVisual className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />;
    }
    if (id.includes('lantern') || id.includes('wonhyo')) {
      return <LanternFestivalVisual className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />;
    }
    if (id.includes('goun')) {
      return <MoonJarVisual className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />;
    }
    return <GyeongjuSunriseVisual className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />;
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#2D5A4C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-2">
              PORTFOLIO ARCHIVE · 지금까지 맡은 일
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#142E25] font-normal tracking-tight">
              대표 프로젝트 실적
            </h2>
            <p className="mt-2 text-xs text-stone-500 font-light">
              각 사업에서 성림조형원이 맡은 역할을 크레딧 그대로 투명하게 기록했습니다.
            </p>
          </div>

          {/* Filter Controls (Clean segmented tabs) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4F0E8] rounded-sm">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors ${
                  activeFilter === f
                    ? 'bg-[#142E25] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Editorial Destination Grid (Like Rihla's "Where we take you") */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer flex flex-col bg-[#FBF9F5] rounded-sm overflow-hidden border border-[#E8E3DA] hover:border-[#2D5A4C] transition-all hover:shadow-lg"
            >
              {/* Image Aspect ratio container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                {getVisualForProject(proj.id)}
                
                {/* Visual Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Role Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-xs border border-white/20">
                    성림 역할: {proj.role}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="text-[11px] text-[#F8E2B2] font-semibold uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    <span>{proj.type}</span>
                    <span className="text-white/60">·</span>
                    <span>{proj.year}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#F8E2B2] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta & Summary */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#2D5A4C] shrink-0" />
                    <span className="truncate">{proj.location}</span>
                  </div>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-light">
                    {proj.summary}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-light truncate max-w-[190px]">
                    {proj.period.split(' ')[0]}
                  </span>
                  <span className="font-semibold text-[#142E25] group-hover:text-[#2D5A4C] flex items-center gap-1">
                    <span>기록 보기</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#FFFDF8] max-w-2xl w-full max-h-[92vh] overflow-y-auto rounded-sm shadow-2xl border border-[#D5C9B8]">
            {/* Modal Media Banner */}
            <div className="relative aspect-[16/9] w-full bg-stone-900 overflow-hidden">
              {getVisualForProject(selectedProject.id)}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <div className="flex items-center gap-2 text-xs text-[#F8E2B2] font-semibold mb-1">
                  <span>{selectedProject.type}</span>
                  <span>·</span>
                  <span>{selectedProject.year}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Specs Definition Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F4F0E8] rounded-sm text-xs border border-[#E3DACB]">
                <div>
                  <span className="block text-stone-500 text-[10px] uppercase tracking-wider mb-0.5">성림 역할</span>
                  <span className="font-bold text-[#142E25]">{selectedProject.role}</span>
                </div>
                <div>
                  <span className="block text-stone-500 text-[10px] uppercase tracking-wider mb-0.5">유형</span>
                  <span className="font-semibold text-stone-800">{selectedProject.type}</span>
                </div>
                <div>
                  <span className="block text-stone-500 text-[10px] uppercase tracking-wider mb-0.5">행사 장소</span>
                  <span className="font-semibold text-stone-800 truncate block">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="block text-stone-500 text-[10px] uppercase tracking-wider mb-0.5">주최/주관</span>
                  <span className="font-semibold text-stone-800 truncate block">{selectedProject.host}</span>
                </div>
              </div>

              {/* Story Narrative */}
              <div>
                <h4 className="font-serif font-bold text-base text-[#142E25] mb-2">
                  기획 및 수행 내용
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              {/* Specific Highlights / Gates */}
              {selectedProject.highlightDetails && (
                <div className="p-4 bg-[#EAF2EE]/60 rounded-sm border border-[#2D5A4C]/20">
                  <h5 className="font-serif text-xs font-bold text-[#142E25] mb-3 uppercase tracking-wider">
                    {selectedProject.id.includes('since-553') ? '황룡사 Since 553 — 여섯 관문 여정' : '주요 실행 내역'}
                  </h5>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {selectedProject.highlightDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A4C] mt-1.5 shrink-0" />
                        <span className="font-light">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Official Notice / Grant Statement */}
              {selectedProject.notice && (
                <p className="text-[11px] text-stone-500 italic bg-stone-50 p-3 rounded border border-stone-200">
                  {selectedProject.notice}
                </p>
              )}

              {/* Action Links */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
                <div className="text-xs text-stone-500">
                  행사 기간: {selectedProject.period}
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2D5A4C] hover:bg-[#142E25] text-white text-xs font-semibold rounded-sm transition-colors"
                    >
                      <span>공식 아카이브 사이트</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-xs text-stone-600 hover:text-stone-900 border border-stone-300 rounded-sm font-medium"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
