import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, ExternalLink, Box, Lamp, Sparkles, MapPin, Instagram } from 'lucide-react';
import { JOGAK_SHOP_INFO, LANTERN_KITS, BRICK_SERIES, COMPANY_INFO } from '../data/content';
import { MoonJarVisual, KHeritageBrickVisual } from '../components/visuals/HeritageVisuals';

interface ShopPageProps {
  onNavigate?: (page: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'lantern' | 'brick'>('lantern');

  return (
    <div className="w-full bg-[#FBF9F5] py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ========================================================
            6-1. 브랜드 소개
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
              JOGAK SHOP BRAND · 조각상점
            </span>
            <h1 className="font-myeongjo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142E25] leading-tight mb-4">
              경주의 국가유산,<br />
              손으로 직접 만들 수 있습니다
            </h1>
            <p className="font-myeongjo text-lg text-stone-700 italic">
              {JOGAK_SHOP_INFO.title} · {JOGAK_SHOP_INFO.storeAddress}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-stone-700 font-gothic text-xs sm:text-sm font-light leading-relaxed">
              <p>{JOGAK_SHOP_INFO.substory}</p>
              <div className="p-5 bg-white border border-[#E3DACB] rounded-xs space-y-2">
                <h4 className="font-myeongjo font-bold text-sm text-[#142E25]">
                  ‘조각상점’이라는 이름의 의미
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {JOGAK_SHOP_INFO.story}
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#162720] text-white rounded-xs space-y-4 font-gothic text-xs">
              <h4 className="font-myeongjo text-base font-bold text-[#F8E2B2]">
                오프라인 매장 & 온라인 공식 스토어
              </h4>
              <p className="text-stone-300 font-light leading-relaxed">
                조각상점 매장에 오시면 빛조각 전통등의 따스한 점등 모습과 K헤리티지 브릭 완성품을 직접 확인하실 수 있습니다.
              </p>
              <div className="space-y-2 pt-2 border-t border-white/10 text-stone-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F8E2B2]" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-[#F8E2B2]" />
                  <span>인스타그램 {COMPANY_INFO.instagramBrick}</span>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.smartstoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#FFFDF8] hover:bg-stone-100 text-[#142E25] font-semibold text-xs rounded-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>네이버 스마트스토어에서 구매</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Toggle for Products */}
        <div className="flex items-center gap-2 border-b border-stone-200 pb-3 font-gothic">
          <button
            onClick={() => setActiveTab('lantern')}
            className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors flex items-center gap-2 ${
              activeTab === 'lantern'
                ? 'bg-[#142E25] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 bg-stone-100'
            }`}
          >
            <Lamp className="w-3.5 h-3.5" />
            <span>6-2. 빛조각 전통등 키트</span>
          </button>
          <button
            onClick={() => setActiveTab('brick')}
            className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors flex items-center gap-2 ${
              activeTab === 'brick'
                ? 'bg-[#142E25] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 bg-stone-100'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>6-3. K헤리티지 브릭 시리즈</span>
          </button>
        </div>

        {/* ========================================================
            6-2. 빛조각 전통등 키트
            ======================================================== */}
        {activeTab === 'lantern' && (
          <section className="space-y-8">
            <div>
              <h2 className="font-myeongjo text-2xl font-bold text-[#142E25] mb-1">
                빛조각 — 직접 조립해 불을 밝히는 전통등
              </h2>
              <p className="text-xs text-stone-600 font-gothic font-light">
                유산의 형태미를 현대적 투광 필름과 원목 조명으로 완성하는 프리미엄 공예 키트
              </p>
            </div>

            <div className="border border-stone-200 rounded-xs overflow-hidden bg-white">
              <table className="w-full text-xs font-gothic text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8F5EE] border-b border-stone-200 text-stone-700">
                    <th className="py-3 px-4 font-bold">제품</th>
                    <th className="py-3 px-4 font-bold">첫 줄</th>
                    <th className="py-3 px-4 font-bold">구성</th>
                    <th className="py-3 px-4 font-bold">상태</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {LANTERN_KITS.map((kit) => (
                    <tr key={kit.id} className="hover:bg-stone-50">
                      <td className="py-3 px-4 font-myeongjo font-bold text-stone-900">
                        {kit.name}
                      </td>
                      <td className="py-3 px-4 text-stone-700 font-light">
                        {kit.tagline}
                      </td>
                      <td className="py-3 px-4 text-stone-600 font-light">
                        {kit.contents}
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[11px] font-semibold text-[#2D5A4C] bg-[#EAF2EE] px-2 py-0.5 rounded">
                          {kit.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 하드웨어 공통 스펙 박스 */}
            <div className="p-6 bg-white border border-[#E8E3DA] rounded-xs font-gothic text-xs text-stone-700 space-y-2">
              <h4 className="font-myeongjo font-bold text-sm text-[#142E25]">
                빛조각 공통 사양
              </h4>
              <p>
                <strong>공통 LED 받침:</strong> 원목 원형 지름 10cm · 두께 2cm / USB 선 1m / 버튼으로 켜고 끔
              </p>
              <p>
                <strong>포장:</strong> A4 크기 얇은 고급 지함 상자
              </p>
            </div>
          </section>
        )}

        {/* ========================================================
            6-3. K헤리티지 브릭 시리즈
            ======================================================== */}
        {activeTab === 'brick' && (
          <section className="space-y-8">
            <div>
              <h2 className="font-myeongjo text-2xl font-bold text-[#142E25] mb-1">
                K헤리티지 브릭 — 호환 브릭으로 쌓는 신라의 국가유산
              </h2>
              <p className="text-xs text-stone-600 font-gothic font-light">
                상자에 적힌 부품 수 기준 정밀 블록 키트
              </p>
            </div>

            <div className="border border-stone-200 rounded-xs overflow-hidden bg-white">
              <table className="w-full text-xs font-gothic text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8F5EE] border-b border-stone-200 text-stone-700">
                    <th className="py-3 px-4 font-bold w-20">번호</th>
                    <th className="py-3 px-4 font-bold">제품</th>
                    <th className="py-3 px-4 font-bold">부품 수</th>
                    <th className="py-3 px-4 font-bold">특징 및 설명</th>
                    <th className="py-3 px-4 font-bold w-28">판매 상태</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {BRICK_SERIES.map((brick) => (
                    <tr key={brick.code} className="hover:bg-stone-50">
                      <td className="py-3 px-4 font-mono font-bold text-stone-500">
                        {brick.code}
                      </td>
                      <td className="py-3 px-4 font-myeongjo font-bold text-stone-900">
                        {brick.name}
                      </td>
                      <td className="py-3 px-4 font-mono text-stone-700">
                        {brick.pieces}개
                      </td>
                      <td className="py-3 px-4 text-stone-600 font-light leading-relaxed">
                        {brick.description}
                        {brick.height && (
                          <span className="block text-[11px] text-[#2D5A4C] font-semibold mt-0.5">
                            * {brick.height} (지금 남아 있는 돌사자 한 마리 복원 사자상 포함)
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        {brick.status === '판매중' ? (
                          <span className="text-[11px] font-semibold text-[#2D5A4C] bg-[#EAF2EE] px-2 py-0.5 rounded">
                            구매 가능
                          </span>
                        ) : (
                          <span className="text-[11px] font-medium text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                            곧 판매
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ========================================================
            6-4. 구매 안내
            ======================================================== */}
        <section className="p-8 bg-[#F4F0E8] border border-[#E3DACB] rounded-xs space-y-4 font-gothic text-xs">
          <h3 className="font-myeongjo text-lg font-bold text-[#142E25]">
            구매 및 배송 안내
          </h3>
          <p className="text-stone-700 font-light leading-relaxed">
            결제는 안전한 <strong>네이버 스마트스토어 공식몰</strong>에서 진행됩니다.
            현재 스마트스토어에 정식 등록된 상품은 바로 온라인 결제하실 수 있으며,
            곧 출시 예정인 상품은 입고 즉시 판매로 전환됩니다.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={COMPANY_INFO.smartstoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#142E25] hover:bg-[#2D5A4C] text-white font-semibold rounded-xs transition-colors flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>네이버 스마트스토어에서 구매하기</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
