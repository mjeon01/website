import React, { useState } from 'react';
import { ArrowRight, Compass, Hammer, Users, ShoppingBag, ExternalLink, Sparkles, ChevronRight, MapPin, Calendar, Layers } from 'lucide-react';
import { FullBleedSunriseBg } from '../components/visuals/FullBleedSunriseBg';
import { STATS, COMPANY_INFO, PROJECTS, THREE_STEPS, JOGAK_SHOP_INFO, MULTI_LANG } from '../data/content';
import { MoonJarVisual, LanternFestivalVisual, LightForestVisual } from '../components/visuals/HeritageVisuals';

interface HomePageProps {
  onNavigate: (page: string) => void;
  lang: 'ko' | 'en' | 'ja' | 'zh';
  onQuickInquiry: (data: { type: string; location: string; scale: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, lang, onQuickInquiry }) => {
  const [selectedField, setSelectedField] = useState('전통예술 기획·운영');
  const [selectedRegion, setSelectedRegion] = useState('경주 / 경북');
  const [selectedScale, setSelectedScale] = useState('중대형 축제');

  const t = MULTI_LANG[lang];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickInquiry({
      type: selectedField,
      location: selectedRegion,
      scale: selectedScale,
    });
  };

  return (
    <div className="w-full">
      {/* ========================================================
          ① 첫 화면 (Hero): FULL-BLEED BACKGROUND IMAGE
          - The entire background is the panoramic Gyeongju sunrise photo
          - Authentic Korean Myeongjo typography directly layered over it
          ======================================================== */}
      <section className="relative w-full min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between overflow-hidden bg-[#15231C]">
        {/* Full-bleed background from edge to edge */}
        <FullBleedSunriseBg />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 w-full">
          <div className="max-w-3xl">
            {/* 작은 글씨: 국가유산 · 전통예술 */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-widest text-[#F9E5BA] uppercase font-gothic">
              <span>국가유산</span>
              <span aria-hidden="true" className="opacity-60">·</span>
              <span>전통예술</span>
              <span aria-hidden="true" className="opacity-60">·</span>
              <span className="text-white/80 font-normal">경주 사회적협동조합</span>
            </div>

            {/* 큰 제목: 국가유산을 다루던 사람들이, 기획하고 만들고 운영합니다. */}
            <h1 className="font-myeongjo text-3xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.3] text-[#FFFDF8] tracking-tight drop-shadow-lg text-balance">
              국가유산을 다루던 사람들이,<br />
              기획하고 만들고 운영합니다.
            </h1>

            {/* 슬로건: 유산의 기억을 함께 되살립니다 */}
            <p className="mt-6 font-myeongjo text-lg sm:text-2xl text-[#F2ECE1] font-normal tracking-tight drop-shadow-md">
              유산의 기억을 함께 되살립니다
            </p>

            {/* 세 단계: 기획 → 제작 → 운영 */}
            <div className="mt-8 flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-white/95 font-gothic">
              <span className="px-3 py-1.5 bg-black/35 backdrop-blur-md rounded-xs border border-white/20">
                기획
              </span>
              <span className="text-[#F9E5BA] text-sm">→</span>
              <span className="px-3 py-1.5 bg-black/35 backdrop-blur-md rounded-xs border border-white/20">
                제작
              </span>
              <span className="text-[#F9E5BA] text-sm">→</span>
              <span className="px-3 py-1.5 bg-[#2D5A4C]/85 backdrop-blur-md rounded-xs border border-[#4DA088] text-[#E8F8F2] font-semibold">
                운영
              </span>
            </div>

            {/* 버튼 1 & 버튼 2 */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#142E25] bg-[#FFFDF8] hover:bg-stone-100 rounded-xs transition-all shadow-lg flex items-center gap-2 font-gothic"
              >
                <span>지난 프로젝트 보기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-white bg-[#2D5A4C]/90 hover:bg-[#204439] backdrop-blur-md border border-[#488775] rounded-xs transition-all flex items-center gap-2 font-gothic shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                <span>기획·제작 문의</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Inquiry Bar at the bottom of the hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full mt-16">
          <div className="flex justify-between items-end mb-2.5 text-white/75 text-xs font-gothic">
            <span className="hidden sm:inline font-light tracking-wider">
              2025 황룡사지 등축제 · 전통등 전시 & 경주 역사유적지구 항공 일출
            </span>
            <span className="text-[11px] text-white/60 tracking-widest ml-auto uppercase">
              Gyeongju Heritage Ground
            </span>
          </div>

          <div className="bg-[#FFFDF8] rounded-xs shadow-2xl p-2.5 sm:p-3 border border-[#E3DACB]">
            <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 items-center text-xs font-gothic">
              <div className="p-2 hover:bg-stone-50 rounded transition-colors border-b sm:border-b-0 sm:border-r border-stone-200">
                <label className="block text-[10px] tracking-wider uppercase text-stone-500 font-semibold mb-1">
                  <span className="inline-flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#2D5A4C]" />
                    의뢰 분야
                  </span>
                </label>
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full bg-transparent font-medium text-stone-900 focus:outline-none cursor-pointer"
                >
                  <option value="전통예술 기획·운영">전통예술 기획·운영</option>
                  <option value="축제 조형물·전통등 제작">작품 제작 (조형물·장엄등)</option>
                  <option value="전통등·대형조형물 임대">전통등·소품 임대</option>
                  <option value="체험·교육 프로그램">체험·교육 프로그램</option>
                </select>
              </div>

              <div className="p-2 hover:bg-stone-50 rounded transition-colors border-b sm:border-b-0 sm:border-r border-stone-200">
                <label className="block text-[10px] tracking-wider uppercase text-stone-500 font-semibold mb-1">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#2D5A4C]" />
                    행사 장소
                  </span>
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full bg-transparent font-medium text-stone-900 focus:outline-none cursor-pointer"
                >
                  <option value="경주 / 경북">경주 및 대구·경북</option>
                  <option value="수도권 / 서울">수도권 및 서울</option>
                  <option value="부산 / 경남">부산 및 울산·경남</option>
                  <option value="전국 기타 지역">전국 기타 지역</option>
                </select>
              </div>

              <div className="p-2 hover:bg-stone-50 rounded transition-colors border-b sm:border-b-0 sm:border-r border-stone-200">
                <label className="block text-[10px] tracking-wider uppercase text-stone-500 font-semibold mb-1">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#2D5A4C]" />
                    희망 일정
                  </span>
                </label>
                <div className="font-medium text-stone-900 truncate">
                  시즌 일정 협의 가능
                </div>
              </div>

              <div className="p-2 hover:bg-stone-50 rounded transition-colors border-b sm:border-b-0 lg:border-r border-stone-200">
                <label className="block text-[10px] tracking-wider uppercase text-stone-500 font-semibold mb-1">
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#2D5A4C]" />
                    예상 규모
                  </span>
                </label>
                <select
                  value={selectedScale}
                  onChange={(e) => setSelectedScale(e.target.value)}
                  className="w-full bg-transparent font-medium text-stone-900 focus:outline-none cursor-pointer"
                >
                  <option value="대형 축제 (1,000명 이상)">대형 축제 (1,000명 이상)</option>
                  <option value="기관/지자체 행사 (300~1,000명)">기관·지자체 (300~1,000명)</option>
                  <option value="소규모 체험 (100명 미만)">소규모 체험 (100명 미만)</option>
                </select>
              </div>

              <div className="p-1">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#142E25] hover:bg-[#2D5A4C] text-[#FFFDF8] font-semibold rounded-xs transition-all text-center tracking-wider flex items-center justify-center gap-1.5"
                >
                  <span>견적·문의 접수</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================
          ② 회사 소개 요약
          ======================================================== */}
      <section className="py-20 bg-[#FBF9F5] border-b border-[#2D5A4C]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-3 font-gothic">
            ABOUT SEONGNIM · 회사 소개
          </span>

          <p className="font-myeongjo text-xl sm:text-2xl lg:text-3xl text-[#142E25] font-normal leading-[1.7] tracking-tight text-balance">
            성림조형원 사회적협동조합은 국가유산과 전통예술만 다룹니다.
            축제와 체험 프로그램을 기획하고, 조형물과 전통등과 제품을 직접 만들고, 현장에서 직접 운영합니다.
            2010년부터 국가유산 정비 현장에서 일해온 사람들이 2021년 세운 비영리 법인입니다.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#2D5A4C]/30 hover:border-[#142E25] text-xs font-semibold text-[#142E25] rounded-xs shadow-xs transition-all font-gothic"
            >
              <span>성림소개 더 보기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4 Numeric Stats Bar */}
          <div className="mt-16 pt-12 border-t border-[#2D5A4C]/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {STATS.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-[#2D5A4C]/40 pl-4">
                <div className="font-myeongjo text-3xl sm:text-4xl font-bold text-[#142E25] tabular-nums">
                  {stat.number}
                </div>
                <div className="mt-1 text-xs font-bold text-stone-900 font-gothic">
                  {stat.label}
                </div>
                <div className="text-[11px] text-stone-500 font-gothic">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          ③ 하는 일 세 단계
          ======================================================== */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#2D5A4C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-1 font-gothic">
                THREE DISCIPLINES · 하는 일 세 단계
              </span>
              <h2 className="font-myeongjo text-2xl sm:text-3xl text-[#142E25] font-bold">
                기획하고, 만들고, 운영합니다
              </h2>
            </div>
            <button
              onClick={() => onNavigate('work')}
              className="text-xs font-semibold text-[#2D5A4C] hover:text-[#142E25] flex items-center gap-1 font-gothic"
            >
              <span>사업분야 전체 보기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_STEPS.map((step, idx) => (
              <div
                key={step.num}
                onClick={() => onNavigate('work')}
                className="p-6 bg-[#FBF9F5] border border-[#E8E3DA] rounded-xs hover:border-[#2D5A4C] cursor-pointer transition-all hover:shadow-sm"
              >
                <div className="text-2xl font-myeongjo font-bold text-[#2D5A4C]/70 mb-3">
                  {step.num}
                </div>
                <h3 className="font-myeongjo text-xl font-bold text-[#142E25] mb-1">
                  {step.step}
                </h3>
                <p className="text-xs font-semibold text-[#2D5A4C] mb-2 font-gothic">
                  {step.motto}
                </p>
                <p className="text-xs text-stone-600 font-light leading-relaxed font-gothic">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          ④ 대표 프로젝트 (최근 3~4건)
          ======================================================== */}
      <section className="py-20 bg-[#FBF9F5] border-b border-[#2D5A4C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-1 font-gothic">
                FEATURED PROJECTS · 대표 프로젝트
              </span>
              <h2 className="font-myeongjo text-2xl sm:text-3xl text-[#142E25] font-bold">
                국가유산의 숨결을 되살린 최근 실적
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-semibold text-[#2D5A4C] hover:text-[#142E25] flex items-center gap-1 font-gothic"
            >
              <span>실적 목록 전체 보기 (6건)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                onClick={() => onNavigate('projects')}
                className="bg-white border border-[#E8E3DA] rounded-xs overflow-hidden cursor-pointer hover:border-[#2D5A4C] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-[#2D5A4C] font-semibold mb-2 font-gothic">
                    <span>{proj.type} · {proj.year}</span>
                    <span className="text-stone-400">성림 역할: {proj.role}</span>
                  </div>
                  <h3 className="font-myeongjo text-lg font-bold text-[#142E25] mb-2 leading-snug">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-3 font-gothic">
                    <MapPin className="w-3 h-3 text-[#2D5A4C]" />
                    <span>{proj.location}</span>
                  </div>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-light font-gothic">
                    {proj.summary}
                  </p>
                </div>

                <div className="p-4 bg-stone-50 border-t border-stone-200/80 flex items-center justify-between text-xs font-gothic">
                  <span className="text-stone-500 text-[11px]">{proj.period.split(' ')[0]}</span>
                  <span className="font-semibold text-[#142E25] flex items-center gap-1">
                    <span>상세 보기</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          ⑤ 조각상점 배너
          ======================================================== */}
      <section className="py-20 bg-[#162720] text-white border-b border-[#2D5A4C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-[#F8E2B2] font-semibold block mb-2 font-gothic">
                JOGAK SHOP · 조각상점
              </span>
              <h2 className="font-myeongjo text-2xl sm:text-4xl font-bold text-[#FFFDF8] mb-3 leading-snug">
                경주의 국가유산, 손으로 직접 만들 수 있습니다
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-2xl font-gothic mb-6">
                조각상점 — 경주를 쌓는 소품샵 (경주 북정로 13-3).
                빛조각 전통등 키트(달항아리·고려청자·구층목탑)와 호환 브릭으로 쌓는 K헤리티지 브릭 시리즈를 만나보세요.
              </p>
              <div className="flex flex-wrap items-center gap-3 font-gothic">
                <a
                  href={COMPANY_INFO.smartstoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#FFFDF8] hover:bg-stone-100 text-[#142E25] text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>네이버 스마트스토어에서 구매</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-xs border border-white/20 transition-colors"
                >
                  조각상점 페이지 둘러보기
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-64 bg-white/5 border border-white/15 rounded-xs p-4 flex flex-col justify-between">
                <MoonJarVisual className="w-full h-40 rounded-xs" />
                <div className="text-center pt-2">
                  <span className="text-[11px] text-[#F8E2B2] font-gothic block">
                    빛조각 달항아리등 키트
                  </span>
                  <span className="text-[10px] text-stone-400 font-gothic">
                    원목 LED 받침 포함 · 직접 조립
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ⑥ 소식 & 문의 배너
          ======================================================== */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] bg-[#EAF2EE] text-[#2D5A4C] font-bold px-2 py-0.5 rounded font-gothic">
                공지사항
              </span>
              <span className="text-xs text-stone-500 font-gothic font-mono">2026.10.14</span>
            </div>
            <h3 className="font-myeongjo text-lg font-bold text-[#142E25]">
              성림조형원 홈페이지를 새로 열었습니다
            </h3>
            <p className="text-xs text-stone-600 font-light font-gothic mt-1">
              기획·제작·임대·교육 문의를 온라인에서 간편하게 접수하실 수 있습니다.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#142E25] hover:bg-[#2D5A4C] text-white text-xs font-semibold rounded-xs transition-colors whitespace-nowrap font-gothic"
          >
            소식 확인 및 문의하기
          </button>
        </div>
      </section>
    </div>
  );
};
