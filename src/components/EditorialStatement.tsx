import React, { useState } from 'react';
import { ArrowRight, Info, CheckCircle2, Shield, Award, Sparkles } from 'lucide-react';
import { STATS, COMPANY_INFO, TRUST_PROOFS } from '../data/content';

interface EditorialStatementProps {
  onLearnMoreAbout: () => void;
}

export const EditorialStatement: React.FC<EditorialStatementProps> = ({ onLearnMoreAbout }) => {
  const [showColorModal, setShowColorModal] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D5A4C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Lead Paragraph - Just like Rihla's large serif introductory passage */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#142E25] font-light leading-[1.6] tracking-tight text-balance">
            <span className="font-semibold text-[#2D5A4C]">성림조형원 사회적협동조합</span>은 국가유산과 전통예술만 다룹니다.
            축제와 체험 프로그램을 기획하고, 조형물과 전통등과 제품을 직접 만들고, 현장에서 직접 운영합니다.
            2010년부터 국가유산 정비 현장에서 일해온 사람들이 2021년 세운 비영리 법인입니다.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onLearnMoreAbout}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2D5A4C] hover:text-[#142E25] font-semibold border-b border-[#2D5A4C]/40 pb-1 hover:border-[#142E25] transition-all"
            >
              <span>성림소개 및 설립 이야기 더 보기</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Quantitative Rigor Stats Row (Like Rihla's 2012 / 569 / 24 / 6 min stats bar) */}
        <div className="mt-20 pt-16 border-t border-[#2D5A4C]/15 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-left border-l-2 border-[#2D5A4C]/30 pl-4 sm:pl-6">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#142E25] tracking-tight tabular-nums">
                {stat.number}
              </div>
              <div className="mt-2 text-xs font-semibold text-stone-900 tracking-wider">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11px] text-stone-500 tracking-normal">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip (Like Rihla's Press / Partner Row) */}
        <div className="mt-20 pt-12 border-t border-[#2D5A4C]/10">
          <div className="text-center mb-8">
            <span className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold">
              공식 자격 및 검증된 현장 신뢰
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PROOFS.map((proof, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF] p-6 rounded-sm border border-[#EBE6DF] shadow-xs hover:border-[#2D5A4C]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#EAF2EE] text-[#2D5A4C] flex items-center justify-center mb-3">
                  {i === 0 && <Shield className="w-4 h-4" />}
                  {i === 1 && <Award className="w-4 h-4" />}
                  {i === 2 && <Sparkles className="w-4 h-4" />}
                  {i === 3 && <CheckCircle2 className="w-4 h-4" />}
                </div>
                <h4 className="font-serif font-semibold text-sm text-[#142E25] mb-1.5 leading-snug">
                  {proof.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {proof.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Color Story Banner (뇌록 磊綠) */}
        <div className="mt-14 p-6 sm:p-8 bg-[#EAF2EE]/60 rounded-sm border border-[#2D5A4C]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#2D5A4C] text-[#FFFDF8] flex items-center justify-center font-serif text-lg font-bold shrink-0 shadow-xs">
              磊
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif text-base font-bold text-[#142E25]">
                  회사 색 이야기 — 뇌록(磊綠)
                </h4>
                <span className="text-[11px] text-[#2D5A4C] font-semibold bg-[#FFFFFF] px-2 py-0.5 rounded-sm border border-[#2D5A4C]/20">
                  단청의 바탕칠 색
                </span>
              </div>
              <p className="mt-1.5 text-xs text-stone-700 leading-relaxed max-w-2xl font-light">
                경북 포항 뇌성산에서 나는 천연 안료로, 불국사 대웅전 단청에도 쓰였습니다.
                화려한 그림 아래에서 보이지 않게 받쳐 주는 색이지요. 성림조형원도 그 자리에서 전통을 받치려 합니다.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowColorModal(true)}
            className="text-xs font-semibold text-[#2D5A4C] hover:text-[#142E25] whitespace-nowrap flex items-center gap-1.5 bg-[#FFFFFF] px-4 py-2 rounded-sm border border-[#2D5A4C]/20 shadow-xs hover:bg-stone-50 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>뇌록 철학 자세히</span>
          </button>
        </div>
      </div>

      {/* Noerok Philosophy Modal */}
      {showColorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FFFDF8] max-w-md w-full p-6 sm:p-8 rounded-sm shadow-2xl border border-[#D5C9B8]">
            <div className="w-12 h-12 bg-[#2D5A4C] text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm mb-4">
              磊綠
            </div>
            <h3 className="font-serif text-xl font-bold text-[#142E25] mb-2">
              가장 밑바닥에서 유산을 지탱하는 색, 뇌록
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {COMPANY_INFO.colorStory}
            </p>
            <div className="p-3 bg-[#EAF2EE] rounded-sm text-xs text-[#244E41] leading-relaxed mb-6 border border-[#2D5A4C]/20">
              <strong>성림조형원의 약속:</strong> 화려한 겉포장이나 일회성 연출에 머무르지 않고,
              유산의 역사적 고증과 장인정신으로 문화유산 축제와 공예의 가장 단단한 바탕이 되겠습니다.
            </div>
            <button
              onClick={() => setShowColorModal(false)}
              className="w-full py-2.5 bg-[#142E25] text-white text-xs font-semibold rounded-sm hover:bg-[#2D5A4C] transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
