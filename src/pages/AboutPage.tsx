import { ArrowLeft, Shield, Award, Sparkles, CheckCircle2, Phone, MapPin, Calendar, Users, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, TRUST_PROOFS, STATS, HISTORY_ITEMS } from '../data/content';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FBF9F5] py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ========================================================
            3-1. 회사 소개 (페이지 첫머리)
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
          <div className="border-b border-[#2D5A4C]/20 pb-8 mb-10">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-2 font-gothic">
              ABOUT US · 성림소개
            </span>
            <h1 className="font-myeongjo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142E25] leading-tight">
              국가유산을 다루던 사람들이,<br />
              기획하고 만들고 운영합니다.
            </h1>
          </div>

          <div className="space-y-6 text-stone-700 font-gothic leading-relaxed text-sm sm:text-base font-light max-w-3xl">
            <p>
              <strong className="text-stone-900 font-semibold">성림조형원 사회적협동조합</strong>은 국가유산과 전통예술만 다루는 비영리 법인입니다.
              2010년부터 국가유산 정비 현장에서 일해온 사람들이 2021년 세웠습니다.
            </p>
            <p>
              국가유산 활용 관광·축제 콘텐츠를 기획·제작·운영하며, 기획부터 운영까지 한 곳에서 직접 실행합니다(직접생산확인증명서 보유).
              지역의 자원으로 콘텐츠를 만들고, 그 콘텐츠로 지역에서 살아갑니다.
            </p>
          </div>

          {/* 신뢰 근거 4가지 */}
          <div className="mt-12">
            <h3 className="font-myeongjo text-xl font-bold text-[#142E25] mb-6">
              성림의 4가지 신뢰 근거
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST_PROOFS.map((proof, i) => (
                <div
                  key={i}
                  className="p-5 bg-white border border-[#EBE6DF] rounded-xs shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#EAF2EE] text-[#2D5A4C] flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-myeongjo font-bold text-sm text-[#142E25]">
                      {proof.title}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-light font-gothic pl-8 leading-relaxed">
                    {proof.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 숫자로 보는 성림 */}
          <div className="mt-12 p-6 bg-white border border-[#E8E3DA] rounded-xs">
            <h4 className="font-myeongjo text-lg font-bold text-[#142E25] mb-4">
              숫자로 보는 성림
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-l-2 border-[#2D5A4C] pl-4">
                <span className="font-myeongjo text-3xl font-bold text-[#142E25] block">2010</span>
                <span className="text-xs text-stone-600 font-gothic">국가유산 정비 현장에서 일을 시작한 해</span>
              </div>
              <div className="border-l-2 border-[#2D5A4C] pl-4">
                <span className="font-myeongjo text-3xl font-bold text-[#142E25] block">2021.01.19</span>
                <span className="text-xs text-stone-600 font-gothic">경주에서 사회적협동조합 설립</span>
              </div>
              <div className="border-l-2 border-[#2D5A4C] pl-4">
                <span className="font-myeongjo text-3xl font-bold text-[#142E25] block">3단계</span>
                <span className="text-xs text-stone-600 font-gothic">기획 · 제작 · 운영을 한 팀이 직접 맡음</span>
              </div>
            </div>
          </div>

          {/* 회사 색 이야기 — 뇌록(磊綠) */}
          <div className="mt-12 p-8 bg-[#EAF2EE]/70 border border-[#2D5A4C]/25 rounded-xs">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2D5A4C] text-[#FFFDF8] rounded-xs flex items-center justify-center font-myeongjo text-xl font-bold shrink-0">
                磊
              </div>
              <div>
                <h4 className="font-myeongjo text-lg font-bold text-[#142E25] mb-2">
                  회사 색 이야기 — 뇌록(磊綠)
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light font-gothic max-w-2xl">
                  {COMPANY_INFO.colorStory}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3-2. 인사말
            ======================================================== */}
        <section className="pt-12 border-t border-stone-200">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-1 font-gothic">
              MESSAGE · 대표 인사말
            </span>
            <h2 className="font-myeongjo text-2xl sm:text-3xl font-bold text-[#142E25]">
              유산의 기억을 함께 되살립니다
            </h2>
          </div>

          <div className="p-8 bg-white border border-[#E3DACB] rounded-xs space-y-5 text-sm font-gothic text-stone-700 leading-relaxed font-light">
            <p>안녕하세요, 성림조형원 사회적협동조합 대표 심재담입니다.</p>
            <p>
              저희는 2010년부터 국가유산 정비 현장에서 단청을 칠하고, 탱화를 그리고, 전통등을 만들어 왔습니다.
              그 일을 해 온 사람들이 모여 2021년 경주에 성림조형원을 세웠습니다.
            </p>
            <p>
              저희는 국가유산과 전통예술만 다룹니다. 무엇을 보여줄지 정하고, 정한 것을 우리 손으로 만들고, 현장에서 직접 운영합니다.
            </p>
            <p>
              유산의 기억을 함께 되살리는 일, 그 곁에 성림조형원이 있겠습니다.
            </p>
            <div className="pt-4 border-t border-stone-200 flex justify-between items-center text-xs">
              <span className="font-myeongjo font-bold text-stone-900 text-sm">
                성림조형원 사회적협동조합 대표 심재담
              </span>
              <span className="text-stone-400 font-mono">경주 북정로 13-3</span>
            </div>
          </div>
        </section>

        {/* ========================================================
            3-3. 연혁
            ======================================================== */}
        <section className="pt-12 border-t border-stone-200">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-1 font-gothic">
              HISTORY · 공식 연혁
            </span>
            <h2 className="font-myeongjo text-2xl sm:text-3xl font-bold text-[#142E25]">
              성림조형원의 발자취
            </h2>
          </div>

          <div className="bg-white border border-[#E8E3DA] rounded-xs overflow-hidden">
            <table className="w-full text-xs font-gothic text-left border-collapse">
              <thead>
                <tr className="bg-[#F8F5EE] border-b border-stone-200 text-stone-700">
                  <th className="py-3 px-4 w-32 font-bold">연도</th>
                  <th className="py-3 px-4 font-bold">내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {HISTORY_ITEMS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-stone-50">
                    <td className="py-3 px-4 font-mono font-bold text-[#2D5A4C] whitespace-nowrap">
                      {item.year}
                    </td>
                    <td className="py-3 px-4 text-stone-700 font-light leading-relaxed">
                      {item.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================
            3-4. 조직
            ======================================================== */}
        <section className="pt-12 border-t border-stone-200">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-1 font-gothic">
              ORGANIZATION · 조직 구성
            </span>
            <h2 className="font-myeongjo text-2xl sm:text-3xl font-bold text-[#142E25]">
              조합원이 함께 꾸려 가는 사회적협동조합
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-[#E8E3DA] rounded-xs">
              <span className="text-xs text-stone-500 font-gothic block mb-1">대표</span>
              <span className="font-myeongjo text-xl font-bold text-[#142E25] block">
                {COMPANY_INFO.representative}
              </span>
              <span className="text-[11px] text-stone-500 font-gothic mt-2 block">
                문화재 정비 총괄 및 사업 기획
              </span>
            </div>

            <div className="p-6 bg-white border border-[#E8E3DA] rounded-xs">
              <span className="text-xs text-stone-500 font-gothic block mb-1">조합원 수</span>
              <span className="font-myeongjo text-xl font-bold text-[#142E25] block">
                9명
              </span>
              <span className="text-[11px] text-stone-500 font-gothic mt-2 block">
                현장 기술 장인 및 기획 전문가
              </span>
            </div>

            <div className="p-6 bg-white border border-[#E8E3DA] rounded-xs">
              <span className="text-xs text-stone-500 font-gothic block mb-1">함께하는 기법</span>
              <span className="font-myeongjo text-base font-bold text-[#2D5A4C] block leading-snug">
                단청 · 탱화 · 개금 · 전통등 · 조형
              </span>
              <span className="text-[11px] text-stone-500 font-gothic mt-2 block">
                직접생산확인증명서 보유
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            3-5. 오시는 길
            ======================================================== */}
        <section className="pt-12 border-t border-stone-200">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-1 font-gothic">
              LOCATION · 오시는 길
            </span>
            <h2 className="font-myeongjo text-2xl sm:text-3xl font-bold text-[#142E25]">
              성림조형원 & 조각상점 매장
            </h2>
          </div>

          <div className="p-6 sm:p-8 bg-white border border-[#E8E3DA] rounded-xs space-y-4 text-xs font-gothic">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-2">
              <div>
                <span className="font-bold text-stone-900 block text-sm mb-1">소재지 주소</span>
                <span className="text-stone-700 text-sm">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://map.naver.com/v5/search/${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#03C75A] text-white font-medium rounded-xs inline-flex items-center gap-1"
                >
                  <span>네이버 지도</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={`https://map.kakao.com/link/search/${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#FEE500] text-stone-900 font-medium rounded-xs inline-flex items-center gap-1"
                >
                  <span>카카오맵</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="font-bold text-stone-900 block mb-1">문의 및 상담 전화</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-stone-700 hover:text-[#2D5A4C] font-medium text-sm">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div>
                <span className="font-bold text-stone-900 block mb-1">인스타그램</span>
                <span className="text-stone-600">
                  성림조형원 {COMPANY_INFO.instagramSeonglim} · 조각상점 {COMPANY_INFO.instagramBrick}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
