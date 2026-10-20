import React from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, Hammer, Users, Package, Clock, ShieldCheck } from 'lucide-react';
import { RENTAL_ITEMS, RENTAL_PROCESS } from '../data/content';

interface WorkPageProps {
  onOpenInquiry: (type: string) => void;
  onNavigate?: (page: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onOpenInquiry, onNavigate }) => {
  return (
    <div className="w-full bg-[#FBF9F5] py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
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
          <div className="border-b border-[#2D5A4C]/20 pb-8 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-2 font-gothic">
              SERVICES & DISCIPLINES · 사업분야
            </span>
            <h1 className="font-myeongjo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142E25] leading-tight mb-4">
              기획부터 운영까지<br />
              한 곳에서 직접 실행합니다
            </h1>
            <p className="text-sm sm:text-base text-stone-600 font-gothic font-light leading-relaxed max-w-2xl">
              국가유산 활용 관광·축제 콘텐츠를 기획·제작·운영합니다. 직접생산확인증명서를 보유하고 있습니다.
            </p>
          </div>

          {/* ========================================================
              기법 5종이 들어가는 자리 (사이트 전체에서 이곳 한 번만!)
              ======================================================== */}
          <div className="p-8 bg-[#162720] text-white rounded-xs">
            <h3 className="font-myeongjo text-xl sm:text-2xl font-bold text-[#F8E2B2] mb-2">
              우리 손으로 만들 수 있는 이유
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-gothic font-light leading-relaxed mb-6">
              단청·탱화·개금·전통등·조형을 구사하는 사람들이 모여 있어, 기획한 것을 남에게 넘기지 않고 끝까지 우리 손으로 만듭니다.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-gothic text-xs">
              {[
                { name: '단청', desc: '전통 색채 채색 및 보존' },
                { name: '탱화', desc: '역사적 불화 및 전통 회화' },
                { name: '개금', desc: '순금박 도금 및 정밀 복원' },
                { name: '전통등', desc: '철골 배접 및 야간 조명' },
                { name: '조형', desc: '입체 구조물 및 전시 연출' },
              ].map((tech) => (
                <div key={tech.name} className="p-3 bg-white/5 border border-white/10 rounded-xs">
                  <span className="font-myeongjo font-bold text-sm text-[#F8E2B2] block mb-1">
                    {tech.name}
                  </span>
                  <span className="text-[11px] text-stone-400 font-light block">
                    {tech.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            4-1. 전통예술 기획·운영 — 기획한다 · 운영한다
            ======================================================== */}
        <section className="p-8 bg-white border border-[#E8E3DA] rounded-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2D5A4C] font-gothic">
            <span>01 기획한다 · 운영한다</span>
          </div>
          <h2 className="font-myeongjo text-2xl font-bold text-[#142E25]">
            전통예술 기획·운영
          </h2>
          <p className="font-myeongjo text-base text-stone-800 font-medium italic">
            “국가유산이 있는 자리에서, 무엇을 보여줄지부터 함께 정합니다.”
          </p>

          <div className="space-y-4 font-gothic text-xs text-stone-700">
            <div>
              <span className="font-bold text-stone-900 block mb-1">하는 일</span>
              <p className="font-light">축제·행사 기획 · 투어 설계 · 체험 프로그램 설계 · 현장 운영</p>
            </div>
            <div>
              <span className="font-bold text-stone-900 block mb-1">대표 사례</span>
              <p className="font-light">
                황룡사 Since 553 · 2025 황룡사지 등축제 · 2026 해파랑길 나이트 힐링트립 · 제30회 원효예술제
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry('기획')}
            className="px-5 py-2.5 bg-[#142E25] hover:bg-[#2D5A4C] text-white text-xs font-semibold rounded-xs transition-colors font-gothic flex items-center gap-1.5"
          >
            <span>기획 문의하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>

        {/* ========================================================
            4-2. 작품 제작 — 만든다
            ======================================================== */}
        <section className="p-8 bg-white border border-[#E8E3DA] rounded-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2D5A4C] font-gothic">
            <span>02 만든다</span>
          </div>
          <h2 className="font-myeongjo text-2xl font-bold text-[#142E25]">
            작품 제작
          </h2>
          <p className="font-myeongjo text-base text-stone-800 font-medium italic">
            “축제·전시 조형물은 도면만 받아 만들지 않습니다. 무엇을 보여줄지부터 함께 정하고, 설계·제작·설치·운영·철수까지 한 팀이 맡습니다.”
          </p>

          <div className="space-y-4 font-gothic text-xs text-stone-700">
            <div>
              <span className="font-bold text-stone-900 block mb-1">하는 일</span>
              <p className="font-light">축제 조형물 · 장엄등·전통등 · 조명 오브제</p>
            </div>
            <div>
              <span className="font-bold text-stone-900 block mb-1">만드는 순서</span>
              <div className="flex items-center gap-2 text-stone-600 font-light pt-1">
                <span>기획 협의</span>
                <span>→</span>
                <span>도안</span>
                <span>→</span>
                <span>제작</span>
                <span>→</span>
                <span>설치</span>
                <span>→</span>
                <span>운영</span>
                <span>→</span>
                <span>철수</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-stone-900 block mb-1">대표 사례</span>
              <p className="font-light">
                2025 황룡사지 등축제 전통등 전시 · 제53회 신라문화제 청년작가존 「빛의 숲」 조명 오브제
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry('제작')}
            className="px-5 py-2.5 bg-[#142E25] hover:bg-[#2D5A4C] text-white text-xs font-semibold rounded-xs transition-colors font-gothic flex items-center gap-1.5"
          >
            <span>제작 문의하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>

        {/* ========================================================
            4-3. 전통등·소품 임대 — 만든다
            ======================================================== */}
        <section className="p-8 bg-white border border-[#E8E3DA] rounded-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2D5A4C] font-gothic">
            <span>03 만든다</span>
          </div>
          <h2 className="font-myeongjo text-2xl font-bold text-[#142E25]">
            전통등·소품 임대
          </h2>
          <p className="font-myeongjo text-base text-stone-800 font-medium italic">
            “직접 만든 장엄등과 조형물을 행사에 빌려 드립니다. 설치와 철수까지 함께 맡습니다.”
          </p>

          {/* 보유 품목 표 */}
          <div>
            <h4 className="font-myeongjo font-bold text-sm text-[#142E25] mb-2">
              보유 품목
            </h4>
            <div className="border border-stone-200 rounded-xs overflow-hidden">
              <table className="w-full text-xs font-gothic text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8F5EE] border-b border-stone-200 text-stone-700">
                    <th className="py-2.5 px-4 w-32 font-bold">분류</th>
                    <th className="py-2.5 px-4 font-bold">품목</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-stone-800 bg-stone-50/50">장엄등</td>
                    <td className="py-2.5 px-4 text-stone-700 font-light">범종등 · 법고등 · 운판등 · 지장삼존등 · 첨성대등 · 소머리등</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-stone-800 bg-stone-50/50">대형 조형물</td>
                    <td className="py-2.5 px-4 text-stone-700 font-light">황룡사 9층 목탑 조형물 (높이 8m)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-stone-800 bg-stone-50/50">행사 소품</td>
                    <td className="py-2.5 px-4 text-stone-700 font-light">A보드(안내판 거치대)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 임대 절차 4단계 */}
          <div>
            <h4 className="font-myeongjo font-bold text-sm text-[#142E25] mb-2">
              임대 절차 4단계
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-gothic text-xs">
              {[
                { step: '1', title: '문의', desc: '행사 날짜, 장소, 원하는 품목' },
                { step: '2', title: '확인', desc: '품목 일정, 설치 여건 확인' },
                { step: '3', title: '견적·계약', desc: '표준 견적서 및 계약 체결' },
                { step: '4', title: '설치·운영·철수', desc: '안전 점등 및 원상복구' },
              ].map((p) => (
                <div key={p.step} className="p-3 bg-[#F8F5EE] border border-stone-200 rounded-xs">
                  <span className="font-myeongjo font-bold text-xs text-[#2D5A4C] block mb-1">
                    {p.step}단계: {p.title}
                  </span>
                  <span className="text-[11px] text-stone-600 font-light block">
                    {p.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry('임대')}
            className="px-5 py-2.5 bg-[#142E25] hover:bg-[#2D5A4C] text-white text-xs font-semibold rounded-xs transition-colors font-gothic flex items-center gap-1.5"
          >
            <span>임대 문의하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>

        {/* ========================================================
            4-4. 체험·교육 — 운영한다
            ======================================================== */}
        <section className="p-8 bg-white border border-[#E8E3DA] rounded-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2D5A4C] font-gothic">
            <span>04 운영한다</span>
          </div>
          <h2 className="font-myeongjo text-2xl font-bold text-[#142E25]">
            체험·교육
          </h2>
          <p className="font-myeongjo text-base text-stone-800 font-medium italic">
            “등갓에 그림을 그리고 불을 밝히는 동안, 유산 이야기가 손에 남습니다.”
          </p>

          {/* 프로그램 표 */}
          <div className="border border-stone-200 rounded-xs overflow-hidden">
            <table className="w-full text-xs font-gothic text-left border-collapse">
              <thead>
                <tr className="bg-[#F8F5EE] border-b border-stone-200 text-stone-700">
                  <th className="py-2.5 px-4 font-bold">프로그램</th>
                  <th className="py-2.5 px-4 font-bold">대상</th>
                  <th className="py-2.5 px-4 font-bold">방식</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-stone-900">손잡이 전통등 만들기</td>
                  <td className="py-2.5 px-4 text-stone-600 font-light">어린이·가족</td>
                  <td className="py-2.5 px-4 text-stone-600 font-light">등갓 그리기 + 손잡이 LED등 완성</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-stone-900">전통등 만들기 (빛조각 키트)</td>
                  <td className="py-2.5 px-4 text-stone-600 font-light">청소년·일반</td>
                  <td className="py-2.5 px-4 text-stone-600 font-light">키트 조립, 집에서 완성 가능</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-stone-900">전통공예 강의</td>
                  <td className="py-2.5 px-4 text-stone-600 font-light">대학·기관</td>
                  <td className="py-2.5 px-4 text-stone-600 font-light">전통등 만들기 전문 강의</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-2 font-gothic text-xs text-stone-700">
            <p>
              <strong className="text-stone-900">신청 절차:</strong> 문의 → 인원·날짜·장소 협의 → 확정 → 현장 진행
            </p>
            <p>
              <strong className="text-stone-900">대표 사례:</strong> 2025 황룡사지 등축제 등 만들기 체험 · 제4회 고운문화제 · 대구가톨릭대 RISE 다문화 경제교육전문가 양성 프로그램 전통공예 강의
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('교육')}
            className="px-5 py-2.5 bg-[#142E25] hover:bg-[#2D5A4C] text-white text-xs font-semibold rounded-xs transition-colors font-gothic flex items-center gap-1.5"
          >
            <span>체험·교육 문의하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>
      </div>
    </div>
  );
};
