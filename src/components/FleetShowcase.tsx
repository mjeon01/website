import React, { useState } from 'react';
import { ArrowRight, Check, Package, Clock, ShieldCheck, Sparkles, ChevronRight, X } from 'lucide-react';
import { BUSINESS_FIELDS, RENTAL_ITEMS, RENTAL_PROCESS } from '../data/content';
import {
  GyeongjuSunriseVisual,
  LanternFestivalVisual,
  LightForestVisual,
  MoonJarVisual,
} from './visuals/HeritageVisuals';

interface FleetShowcaseProps {
  onOpenInquiry: (serviceType: string) => void;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ onOpenInquiry }) => {
  const [selectedRentalModal, setSelectedRentalModal] = useState(false);
  const [activeRentalFilter, setActiveRentalFilter] = useState<'전체' | '장엄등' | '대형 조형물' | '행사 소품'>('전체');

  // Visual component selector for each card
  const getCardVisual = (id: string) => {
    switch (id) {
      case 'planning':
        return <GyeongjuSunriseVisual className="w-full h-full object-cover" />;
      case 'production':
        return <LanternFestivalVisual className="w-full h-full object-cover" />;
      case 'rental':
        return <LightForestVisual className="w-full h-full object-cover" />;
      case 'education':
        return <MoonJarVisual className="w-full h-full object-cover" />;
      default:
        return <LanternFestivalVisual className="w-full h-full object-cover" />;
    }
  };

  const filteredRentalItems =
    activeRentalFilter === '전체'
      ? RENTAL_ITEMS
      : RENTAL_ITEMS.filter((item) => item.category === activeRentalFilter);

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D5A4C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-2">
              SERVICES & FLEET · 사업분야
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#142E25] font-normal tracking-tight">
              기획부터 운영까지 한 곳에서 직접 실행합니다
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-stone-500 font-medium">직접생산확인증명서 보유</span>
            <button
              onClick={() => setSelectedRentalModal(true)}
              className="text-xs font-semibold text-[#2D5A4C] hover:text-[#142E25] underline underline-offset-4"
            >
              전통등·소품 대여 목록 확인
            </button>
          </div>
        </div>

        {/* 4 Full-Bleed Showcase Cards (Directly replicating the luxury layout of Rihla's fleet cards) */}
        <div className="space-y-16">
          {BUSINESS_FIELDS.map((field, idx) => (
            <div
              key={field.id}
              className="relative rounded-sm overflow-hidden border border-[#E5E0D5] bg-[#162720] text-white shadow-lg group"
            >
              {/* Media Visual Container (16:9 / cinematic height) */}
              <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] overflow-hidden">
                {getCardVisual(field.id)}

                {/* Subtle dark gradient overlay across media */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent max-w-3xl" />

                {/* Top Badge: Step Name & Category Kicker */}
                <div className="absolute top-6 left-6 sm:left-10 z-10 flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#F8E2B2] font-semibold">
                    {field.step}
                  </span>
                  <span className="text-white/40">·</span>
                  <span className="text-xs text-white/80 font-medium">
                    {field.accentKey}
                  </span>
                </div>

                {/* Left Bottom Content: Title & Narrative */}
                <div className="absolute bottom-8 left-6 sm:left-10 right-6 lg:right-[380px] z-10">
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-3 tracking-tight">
                    {field.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#F4EFE6] font-light leading-relaxed max-w-xl mb-4 line-clamp-3 sm:line-clamp-none">
                    {field.subtitle}
                  </p>

                  {/* Tasks List */}
                  <div className="hidden sm:flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-300 font-light mb-6">
                    {field.tasks.map((task, tIdx) => (
                      <span key={tIdx} className="inline-flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#E5B558]" />
                        {task}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenInquiry(field.title)}
                      className="px-5 py-2.5 bg-[#FFFDF8] hover:bg-stone-100 text-[#142E25] text-xs font-semibold rounded-sm transition-all shadow-sm flex items-center gap-1.5"
                    >
                      <span>{field.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {field.id === 'rental' && (
                      <button
                        onClick={() => setSelectedRentalModal(true)}
                        className="px-4 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-semibold rounded-sm border border-white/20 transition-all flex items-center gap-1.5"
                      >
                        <Package className="w-3.5 h-3.5" />
                        <span>보유 품목 & 대여 절차</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Bottom Content: High-End Specs Grid Overlay (Replicating Rihla's "Guests / Range / Speed") */}
                <div className="hidden lg:grid grid-cols-3 gap-6 absolute bottom-8 right-10 z-10 p-5 bg-black/45 backdrop-blur-md rounded-sm border border-white/15 max-w-md w-full">
                  {field.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="text-left border-l border-white/20 pl-3">
                      <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-medium mb-1">
                        {spec.label}
                      </span>
                      <span className="block text-xs font-semibold text-white leading-tight">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Traditional Lantern & Prop Rental Catalog Modal */}
      {selectedRentalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#FFFDF8] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl border border-[#D5C9B8] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block">
                  TRADITIONAL LANTERNS & PROPS RENTAL
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#142E25]">
                  전통등·대형 조형물 임대 품목 및 절차
                </h3>
              </div>
              <button
                onClick={() => setSelectedRentalModal(false)}
                className="p-1.5 text-stone-500 hover:text-stone-900 rounded"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 mb-6 border-b border-stone-200 pb-2">
              {(['전체', '장엄등', '대형 조형물', '행사 소품'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveRentalFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors ${
                    activeRentalFilter === cat
                      ? 'bg-[#2D5A4C] text-white'
                      : 'text-stone-600 hover:text-stone-900 bg-stone-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Rental Items Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {filteredRentalItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-[#E5E0D5] rounded-sm hover:border-[#2D5A4C]/60 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-sm text-[#142E25]">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-[#2D5A4C] bg-[#EAF2EE] px-2 py-0.5 rounded-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 4-Step Rental Process */}
            <div className="bg-[#F8F5EE] p-5 rounded-sm border border-[#E3DACB] mb-8">
              <h4 className="font-serif font-bold text-sm text-[#142E25] mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2D5A4C]" />
                <span>임대 진행 4단계</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {RENTAL_PROCESS.map((p) => (
                  <div key={p.step} className="bg-white p-3 rounded-sm border border-[#EAE4D8]">
                    <span className="text-xs font-serif font-bold text-[#2D5A4C] block mb-1">
                      {p.step}. {p.title}
                    </span>
                    <p className="text-[11px] text-stone-600 font-light leading-snug">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={() => setSelectedRentalModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs text-stone-600 hover:text-stone-900 font-medium"
              >
                닫기
              </button>
              <button
                onClick={() => {
                  setSelectedRentalModal(false);
                  onOpenInquiry('전통등·대형조형물 임대');
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#142E25] hover:bg-[#2D5A4C] text-white text-xs font-semibold rounded-sm transition-colors"
              >
                임대 견적 문의하기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
