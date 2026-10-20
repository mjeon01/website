import React, { useState } from 'react';
import { ExternalLink, Sparkles, Box, Lamp, ShoppingBag, Eye, X } from 'lucide-react';
import {
  JOGAK_SHOP_INFO,
  LANTERN_KITS,
  BRICK_SERIES,
  COMPANY_INFO,
  LanternKit,
  BrickItem,
} from '../data/content';
import { MoonJarVisual, KHeritageBrickVisual } from './visuals/HeritageVisuals';

export const JogakShopBanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lantern' | 'brick'>('lantern');
  const [inspectLantern, setInspectLantern] = useState<LanternKit | null>(null);
  const [inspectBrick, setInspectBrick] = useState<BrickItem | null>(null);

  return (
    <section id="shop" className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#2D5A4C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial 2-Column Showcase (Replicating Rihla's "The part after landing" split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-sm overflow-hidden bg-white border border-[#E3DACB] shadow-xl">
              {/* Product Category Toggle Bar */}
              <div className="flex items-center justify-between p-4 bg-[#FBF9F5] border-b border-[#E3DACB]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('lantern')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5 ${
                      activeTab === 'lantern'
                        ? 'bg-[#142E25] text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 bg-stone-100'
                    }`}
                  >
                    <Lamp className="w-3.5 h-3.5" />
                    <span>빛조각 전통등 키트</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('brick')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5 ${
                      activeTab === 'brick'
                        ? 'bg-[#142E25] text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 bg-stone-100'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>K헤리티지 브릭 시리즈</span>
                  </button>
                </div>

                <span className="text-[11px] text-stone-500 hidden sm:inline">
                  경주 북정로 13-3 쇼룸
                </span>
              </div>

              {/* Main Visual Display */}
              <div className="relative aspect-[4/3] w-full bg-[#EAE5D9] overflow-hidden">
                {activeTab === 'lantern' ? (
                  <MoonJarVisual className="w-full h-full" />
                ) : (
                  <KHeritageBrickVisual className="w-full h-full" />
                )}

                {/* Floating Micro Tag */}
                <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xs text-white text-[11px] border border-white/20">
                  {activeTab === 'lantern'
                    ? '빛조각 달항아리등 · 천연 원목 LED 받침 포함'
                    : 'KY04 다보탑 & KY05 첨성대 미니어처'}
                </div>
              </div>

              {/* Interactive Item Row Below Image */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#E3DACB]">
                <div className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-3">
                  {activeTab === 'lantern' ? '빛조각 키트 라인업' : 'K헤리티지 브릭 모델'}
                </div>

                {activeTab === 'lantern' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {LANTERN_KITS.map((kit) => (
                      <div
                        key={kit.id}
                        onClick={() => setInspectLantern(kit)}
                        className="p-3 bg-[#FBF9F5] rounded-xs border border-stone-200 hover:border-[#2D5A4C] cursor-pointer transition-all"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-serif font-bold text-xs text-[#142E25]">
                            {kit.name}
                          </span>
                          <span className="text-[10px] text-[#2D5A4C] font-semibold bg-[#EAF2EE] px-1.5 py-0.2 rounded">
                            {kit.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-500 truncate">
                          {kit.difficulty}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {BRICK_SERIES.map((brick) => (
                      <div
                        key={brick.code}
                        onClick={() => setInspectBrick(brick)}
                        className="p-2.5 bg-[#FBF9F5] rounded-xs border border-stone-200 hover:border-[#2D5A4C] cursor-pointer transition-all text-center"
                      >
                        <span className="text-[10px] font-mono text-stone-400 block">
                          {brick.code}
                        </span>
                        <span className="font-serif font-bold text-xs text-[#142E25] block truncate">
                          {brick.name}
                        </span>
                        <span className="text-[10px] text-stone-500 block">
                          {brick.pieces} pcs
                        </span>
                        <span
                          className={`text-[9px] mt-1 inline-block px-1 rounded ${
                            brick.status === '판매중'
                              ? 'text-[#2D5A4C] bg-[#EAF2EE]'
                              : 'text-stone-500 bg-stone-100'
                          }`}
                        >
                          {brick.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Brand Story & Links */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-2">
              JOGAK SHOP BRAND · 조각상점
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#142E25] font-normal tracking-tight mb-4 leading-tight text-balance">
              경주의 국가유산,<br />
              손으로 직접 만들 수 있습니다
            </h2>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light mb-6">
              {JOGAK_SHOP_INFO.story}
            </p>

            <div className="p-4 bg-white/80 rounded-sm border border-[#E3DACB] mb-8 space-y-2 text-xs text-stone-600 font-light">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A4C]" />
                <span className="font-medium text-stone-900">빛조각 키트:</span>
                <span>원목 받침(지름 10cm) + USB 일체형 버튼 스위치</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A4C]" />
                <span className="font-medium text-stone-900">K헤리티지 브릭:</span>
                <span>다보탑 돌사자 복원, 석가탑, 금관, 수막새, 첨성대</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A4C]" />
                <span className="font-medium text-stone-900">오프라인 쇼룸:</span>
                <span>경북 경주시 북정로 13-3 (조각상점)</span>
              </div>
            </div>

            {/* Smartstore CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={COMPANY_INFO.smartstoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#142E25] hover:bg-[#2D5A4C] text-[#FFFDF8] text-xs font-semibold rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>네이버 스마트스토어에서 구매</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={`https://instagram.com/${COMPANY_INFO.instagramBrick.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3.5 bg-white hover:bg-stone-50 text-stone-700 text-xs font-semibold rounded-sm border border-stone-300 transition-all text-center"
              >
                조각상점 인스타그램
              </a>
            </div>
            <p className="mt-3 text-[11px] text-stone-500">
              * 결제는 안전한 네이버 스마트스토어 공식몰을 통해 진행됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* Inspect Lantern Modal */}
      {inspectLantern && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FFFDF8] max-w-md w-full p-6 rounded-sm shadow-2xl border border-[#D5C9B8]">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <h3 className="font-serif text-lg font-bold text-[#142E25]">
                {inspectLantern.name}
              </h3>
              <button onClick={() => setInspectLantern(null)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#2D5A4C] font-semibold mb-4">
              {inspectLantern.tagline}
            </p>
            <div className="space-y-3 text-xs text-stone-700 mb-6 bg-[#F8F5EE] p-4 rounded-sm">
              <div>
                <span className="font-bold block text-stone-900 mb-0.5">제품 구성:</span>
                <span>{inspectLantern.contents}</span>
              </div>
              <div>
                <span className="font-bold block text-stone-900 mb-0.5">조립 소요 / 난이도:</span>
                <span>{inspectLantern.difficulty}</span>
              </div>
              <div>
                <span className="font-bold block text-stone-900 mb-0.5">LED 받침 사양:</span>
                <span>{inspectLantern.baseSpecs}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={COMPANY_INFO.smartstoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-[#142E25] text-white text-xs font-semibold text-center rounded-sm hover:bg-[#2D5A4C]"
              >
                스마트스토어 구매하기
              </a>
              <button
                onClick={() => setInspectLantern(null)}
                className="px-4 py-2.5 border border-stone-300 text-stone-600 text-xs rounded-sm hover:bg-stone-50"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inspect Brick Modal */}
      {inspectBrick && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FFFDF8] max-w-md w-full p-6 rounded-sm shadow-2xl border border-[#D5C9B8]">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#2D5A4C] bg-[#EAF2EE] px-2 py-0.5 rounded">
                  {inspectBrick.code}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#142E25]">
                  {inspectBrick.name}
                </h3>
              </div>
              <button onClick={() => setInspectBrick(null)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-700 leading-relaxed mb-4">
              {inspectBrick.description}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs bg-[#F8F5EE] p-3 rounded-sm mb-6">
              <div>
                <span className="text-stone-500 block text-[10px]">부품 수</span>
                <span className="font-bold text-stone-900">{inspectBrick.pieces} pcs</span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">판매 상태</span>
                <span className="font-bold text-[#2D5A4C]">{inspectBrick.status}</span>
              </div>
              {inspectBrick.height && (
                <div className="col-span-2">
                  <span className="text-stone-500 block text-[10px]">완성 높이</span>
                  <span className="font-bold text-stone-900">{inspectBrick.height}</span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              {inspectBrick.status === '판매중' ? (
                <a
                  href={COMPANY_INFO.smartstoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-[#142E25] text-white text-xs font-semibold text-center rounded-sm hover:bg-[#2D5A4C]"
                >
                  스마트스토어 구매하기
                </a>
              ) : (
                <span className="flex-1 py-2.5 bg-stone-200 text-stone-500 text-xs font-medium text-center rounded-sm cursor-not-allowed">
                  출시 준비 중 (곧 판매)
                </span>
              )}
              <button
                onClick={() => setInspectBrick(null)}
                className="px-4 py-2.5 border border-stone-300 text-stone-600 text-xs rounded-sm hover:bg-stone-50"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
