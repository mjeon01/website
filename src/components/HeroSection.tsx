import React, { useState } from 'react';
import { ArrowRight, Sparkles, Calendar, MapPin, Layers, Users, ChevronDown } from 'lucide-react';
import { GyeongjuSunriseVisual, LanternFestivalVisual } from './visuals/HeritageVisuals';
import { MULTI_LANG } from '../data/content';

interface HeroSectionProps {
  lang: 'ko' | 'en' | 'ja' | 'zh';
  onOpenInquiry: (initialData?: { type?: string; location?: string; scale?: string }) => void;
  onExploreProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenInquiry,
  onExploreProjects,
}) => {
  const [activeVisual, setActiveVisual] = useState<'sunrise' | 'lanterns'>('sunrise');
  const [selectedField, setSelectedField] = useState('전통예술 기획·운영');
  const [selectedRegion, setSelectedRegion] = useState('경주 / 경북');
  const [selectedScale, setSelectedScale] = useState('중대형 축제');

  const t = MULTI_LANG[lang];

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenInquiry({
      type: selectedField,
      location: selectedRegion,
      scale: selectedScale,
    });
  };

  return (
    <section className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#162720]">
      {/* Visual Backdrop (Sunrise Cheomseongdae or Twilight Hwangnyongsa Lantern Festival) */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        {activeVisual === 'sunrise' ? (
          <GyeongjuSunriseVisual className="w-full h-full scale-[1.02]" />
        ) : (
          <LanternFestivalVisual className="w-full h-full scale-[1.02]" />
        )}
      </div>

      {/* Gentle Scrim for readability without obscuring art */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/25 to-black/35 pointer-events-none" />

      {/* Visual Switcher Toggle (Top Right pill toggle like high-end editorial) */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 p-1 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-xs">
        <button
          onClick={() => setActiveVisual('sunrise')}
          className={`px-3 py-1 rounded-full transition-all text-xs font-medium ${
            activeVisual === 'sunrise'
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-white/80 hover:text-white'
          }`}
        >
          경주 일출 항공
        </button>
        <button
          onClick={() => setActiveVisual('lanterns')}
          className={`px-3 py-1 rounded-full transition-all text-xs font-medium ${
            activeVisual === 'lanterns'
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-white/80 hover:text-white'
          }`}
        >
          황룡사지 등축제
        </button>
      </div>

      {/* Main Hero Typography Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 w-full">
        <div className="max-w-3xl">
          {/* Small Category Kicker */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-medium tracking-widest text-[#F8E2B2] uppercase">
            <span>국가유산</span>
            <span aria-hidden="true" className="opacity-60">·</span>
            <span>전통예술</span>
            <span aria-hidden="true" className="opacity-60">·</span>
            <span className="text-white/90">경주 사회적협동조합</span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.2] text-[#FFFDF8] tracking-tight text-balance drop-shadow-md">
            {t.heroTitle}
          </h1>

          {/* Slogan */}
          <p className="mt-6 text-lg sm:text-xl text-[#F0EBE1] font-light tracking-wide max-w-xl leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Three Steps Flow Indicator */}
          <div className="mt-8 flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-white/90">
            <span className="px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-sm border border-white/20">
              01 기획
            </span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60" />
            <span className="px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-sm border border-white/20">
              02 제작
            </span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60" />
            <span className="px-2.5 py-1 bg-[#2D5A4C]/80 backdrop-blur-sm rounded-sm border border-[#488775] text-[#E8F5F0]">
              03 현장 운영
            </span>
          </div>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#142E25] bg-[#FFFDF8] hover:bg-stone-100 rounded-sm transition-all shadow-md flex items-center gap-2"
            >
              <span>{t.viewProjects}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenInquiry()}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-white bg-[#2D5A4C]/90 hover:bg-[#244E41] backdrop-blur-sm border border-[#44806E] rounded-sm transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FDE68A]" />
              <span>{t.inquiryBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Container: Quick Filter & Inquiry Bar (Inspired by Rihla's Jet/Yacht Charter Filter Strip) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 w-full mt-12">
        {/* Visual Caption on Bottom Right */}
        <div className="flex justify-between items-end mb-3 text-white/80 text-xs">
          <span className="hidden sm:inline font-light tracking-wider">
            {activeVisual === 'sunrise'
              ? '동양 최고(最古) 천문대 첨성대와 경주 역사유적지구의 아침 햇살'
              : '2025 황룡사지 등축제 · 삼국사기 경문왕 6년 기록 고증 전통등 전시'}
          </span>
          <span className="text-[11px] text-white/60 tracking-widest ml-auto uppercase">
            {activeVisual === 'sunrise' ? 'Gyeongju Historic Area' : 'Hwangnyongsa Site Exhibition'}
          </span>
        </div>

        {/* Quick Inquiry Bar */}
        <div className="bg-[#FFFDF8] rounded-sm shadow-2xl p-2 sm:p-3 border border-[#E3DACB]">
          <form onSubmit={handleQuickInquiry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 items-center text-xs">
            {/* Field 1: Service Field */}
            <div className="p-2.5 hover:bg-stone-50 rounded transition-colors border-b sm:border-b-0 sm:border-r border-stone-200">
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
                <option value="축제 조형물·전통등 제작">작품 제작 (축제등·조형물)</option>
                <option value="전통등·대형조형물 임대">전통등·소품 임대</option>
                <option value="체험·교육 프로그램">체험·교육 프로그램</option>
                <option value="조각상점 대량구매/기념품">조각상점 대량구매·기념품</option>
              </select>
            </div>

            {/* Field 2: Region / Location */}
            <div className="p-2.5 hover:bg-stone-50 rounded transition-colors border-b sm:border-b-0 sm:border-r border-stone-200">
              <label className="block text-[10px] tracking-wider uppercase text-stone-500 font-semibold mb-1">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#2D5A4C]" />
                  행사 지역
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
                <option value="충청 / 전라 / 강원">충청 / 전라 / 강원</option>
                <option value="전국 기타 지역">전국 기타 지역</option>
              </select>
            </div>

            {/* Field 3: Expected Schedule */}
            <div className="p-2.5 hover:bg-stone-50 rounded transition-colors border-b sm:border-b-0 sm:border-r border-stone-200">
              <label className="block text-[10px] tracking-wider uppercase text-stone-500 font-semibold mb-1">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#2D5A4C]" />
                  희망 일정
                </span>
              </label>
              <div className="font-medium text-stone-900">
                2026/2027 시즌 맞춤 협의
              </div>
            </div>

            {/* Field 4: Scale */}
            <div className="p-2.5 hover:bg-stone-50 rounded transition-colors border-b sm:border-b-0 lg:border-r border-stone-200">
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
                <option value="소규모 체험/워크숍 (100명 미만)">소규모 체험 (100명 미만)</option>
                <option value="기념품/전통등 단순 임대">기념품·단순 렌탈</option>
              </select>
            </div>

            {/* Field 5: Action Button */}
            <div className="p-1">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#142E25] hover:bg-[#2D5A4C] text-[#FFFDF8] font-semibold rounded-sm transition-all text-center tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>견적·문의 접수</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
