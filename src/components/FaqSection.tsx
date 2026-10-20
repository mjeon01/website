import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D5A4C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Title Column (Replicating Rihla's "Before you book" heading) */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-2">
              FREQUENT QUESTIONS · 의뢰 전 확인
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#142E25] font-normal tracking-tight mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              기획·제작 일정, 공공기관 수의계약, 전국 출강 및 기념품 대량 구매에 관해 가장 자주 확인하시는 사항들을 모았습니다.
            </p>
          </div>

          {/* Right Accordion Column */}
          <div className="lg:col-span-8 divide-y divide-stone-200">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-6 first:pt-0">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  >
                    <span className="font-serif text-base sm:text-lg font-medium text-[#142E25] group-hover:text-[#2D5A4C] transition-colors">
                      {faq.q}
                    </span>
                    <span className="shrink-0 p-1 text-stone-400 group-hover:text-[#2D5A4C] transition-colors">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-6 text-xs sm:text-sm text-stone-600 leading-relaxed font-light transition-all">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
