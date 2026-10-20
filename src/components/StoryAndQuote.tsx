import React, { useState } from 'react';
import { Phone, Users, History, Calendar, Check, X } from 'lucide-react';
import { COMPANY_INFO, HISTORY_ITEMS } from '../data/content';

export const StoryAndQuote: React.FC = () => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#2D5A4C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Quote & Contact (Replicating Rihla's quote block) */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-4">
              GREETINGS & PHILOSOPHY · 성림소개
            </span>

            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#142E25] font-light leading-[1.4] mb-6 tracking-tight">
              “유산의 기억을 함께 되살리는 일,<br />
              그 곁에 언제나 성림조형원이 있겠습니다.”
            </blockquote>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-8 max-w-xl">
              저희는 2010년부터 국가유산 정비 현장에서 단청을 칠하고, 탱화를 그리고, 전통등을 만들어 왔습니다.
              그 일을 해 온 사람들이 모여 2021년 경주에 성림조형원을 세웠습니다.
              무엇을 보여줄지 정하고, 정한 것을 우리 손으로 만들고, 현장에서 직접 운영합니다.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-6 border-t border-stone-200">
              <div>
                <span className="block font-serif font-bold text-sm text-[#142E25]">
                  심재담 대표
                </span>
                <span className="block text-xs text-stone-500 font-light">
                  성림조형원 사회적협동조합 대표
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-4 py-2 bg-[#142E25] hover:bg-[#2D5A4C] text-white text-xs font-semibold rounded-sm transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>

                <button
                  onClick={() => setShowHistoryModal(true)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium rounded-sm transition-colors flex items-center gap-1.5"
                >
                  <History className="w-3.5 h-3.5" />
                  <span>연혁 · 조직 보기</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Craft Studio Portrait / Card (Replicating Rihla's side portrait) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden bg-[#FBF9F5] border border-[#E3DACB] p-8 shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-[#E3DACB] mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#2D5A4C] font-semibold block">
                    FOUNDED 2021 · GYEONGJU
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#142E25]">
                    성림조형원 사회적협동조합
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-sm bg-[#2D5A4C] text-[#FFFDF8] flex items-center justify-center font-serif text-xl font-bold">
                  聖林
                </div>
              </div>

              {/* Organization snapshot */}
              <div className="space-y-4 text-xs">
                <div className="flex justify-between py-2 border-b border-stone-200">
                  <span className="text-stone-500 font-light">조직 형태</span>
                  <span className="font-semibold text-stone-900">비영리 사회적협동조합</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-200">
                  <span className="text-stone-500 font-light">조합원 구성</span>
                  <span className="font-semibold text-stone-900">9인의 장인 및 기획자</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-200">
                  <span className="text-stone-500 font-light">보유 전문 기법</span>
                  <span className="font-semibold text-stone-900">단청 · 탱화 · 개금 · 전통등 · 조형</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-stone-500 font-light">본사 및 쇼룸</span>
                  <span className="font-semibold text-stone-900">경주시 북정로 13-3 (황오동)</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E3DACB] bg-[#EAF2EE]/60 p-4 rounded-sm text-[11px] text-[#244E41] leading-relaxed">
                “지역의 자원으로 문화유산 콘텐츠를 만들고, 그 가치 있는 콘텐츠로 지역에서 지속가능하게 살아갑니다.”
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History & Organization Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FFFDF8] max-w-2xl w-full max-h-[88vh] overflow-y-auto rounded-sm shadow-2xl border border-[#D5C9B8] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block">
                  ANNALS & ORGANIZATION · 연혁과 조직
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#142E25]">
                  성림조형원의 발자취
                </h3>
              </div>
              <button onClick={() => setShowHistoryModal(false)} className="text-stone-400 hover:text-stone-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <h4 className="font-serif font-bold text-sm text-[#142E25] mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#2D5A4C]" />
                <span>주요 연혁 (2010 ~ 현재)</span>
              </h4>
              <div className="space-y-3 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-[#2D5A4C]/20 pl-8">
                {HISTORY_ITEMS.map((h, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[26px] top-1.5 w-2 h-2 rounded-full bg-[#2D5A4C]" />
                    <span className="font-serif font-bold text-xs text-[#2D5A4C] block mb-0.5">
                      {h.year}
                    </span>
                    <p className="text-xs text-stone-700 font-light leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Organization info */}
            <div className="p-4 bg-[#F8F5EE] rounded-sm border border-[#E3DACB] mb-6">
              <h4 className="font-serif font-bold text-sm text-[#142E25] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#2D5A4C]" />
                <span>조직 및 운영 원칙</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light mb-3">
                성림조형원은 조합원이 주체적으로 함께 꾸려 가는 사회적협동조합입니다.
                대표 심재담과 9인의 조합원이 기획, 설계, 제작, 교육 등 각 분야를 분담하여
                외주 없이 한 팀으로서 직접생산 기준을 엄격히 준수합니다.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {['단청 장인', '탱화 작가', '개금 기술인', '전통등 기능자', '문화콘텐츠 기획자', '야간 조명 연출가'].map((role, idx) => (
                  <span key={idx} className="bg-white px-2.5 py-1 rounded border border-stone-200 text-stone-700 font-medium text-[11px]">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowHistoryModal(false)}
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
