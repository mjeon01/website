import React, { useState } from 'react';
import { ExternalLink, Instagram, Phone, MapPin, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-[#0F1E19] text-stone-300 border-t border-[#2D5A4C]/30 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Grid (Replicating Rihla's clean structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => handleNav('home')}
                className="flex items-center gap-2.5 text-left focus:outline-none"
              >
                <div className="w-8 h-8 rounded-xs bg-[#2D5A4C] text-[#FFFDF8] flex items-center justify-center font-serif font-bold text-sm">
                  聖
                </div>
                <span className="font-serif text-xl font-bold text-white tracking-tight hover:text-[#6EE7B7] transition-colors">
                  {COMPANY_INFO.name}
                </span>
              </button>
            </div>

            <p className="text-stone-400 font-light leading-relaxed max-w-sm text-xs">
              국가유산을 다루던 사람들이 모여 기획하고, 도안을 그리고, 직접 손으로 만들어 현장에서 운영합니다.
              유산의 기억을 함께 되살립니다.
            </p>

            <div className="pt-2 text-stone-400 space-y-1 font-light text-[11px]">
              <div>대표자: {COMPANY_INFO.representative} · 사업자등록번호: {COMPANY_INFO.registrationNumber}</div>
              <div>소재지: {COMPANY_INFO.address}</div>
              <div>직접생산확인증명서 보유 비영리 사회적협동조합 법인</div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm mb-4 tracking-wider">
              <button onClick={() => handleNav('work')} className="hover:text-[#6EE7B7] transition-colors text-left">
                사업분야 →
              </button>
            </h4>
            <ul className="space-y-2.5 text-stone-400 font-light">
              <li><button onClick={() => handleNav('work')} className="hover:text-white transition-colors text-left">전통예술 축제 기획·운영</button></li>
              <li><button onClick={() => handleNav('work')} className="hover:text-white transition-colors text-left">축제 조형물 및 전통등 제작</button></li>
              <li><button onClick={() => handleNav('work')} className="hover:text-white transition-colors text-left">장엄등 및 대형 조형물 임대</button></li>
              <li><button onClick={() => handleNav('work')} className="hover:text-white transition-colors text-left">손잡이 전통등 및 공예 교육</button></li>
              <li><button onClick={() => handleNav('work')} className="hover:text-white transition-colors text-left">단청 · 탱화 · 개금 기법 계승</button></li>
            </ul>
          </div>

          {/* Col 3: Jogak Shop */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm mb-4 tracking-wider">
              <button onClick={() => handleNav('shop')} className="hover:text-[#6EE7B7] transition-colors text-left">
                조각상점 →
              </button>
            </h4>
            <ul className="space-y-2.5 text-stone-400 font-light">
              <li><button onClick={() => handleNav('shop')} className="hover:text-white transition-colors text-left">빛조각 달항아리등 키트</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white transition-colors text-left">빛조각 고려청자등 키트</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white transition-colors text-left">K헤리티지 브릭 다보탑 (912pcs)</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white transition-colors text-left">K헤리티지 브릭 석가탑·금관</button></li>
              <li>
                <a
                  href={COMPANY_INFO.smartstoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6EE7B7] hover:underline inline-flex items-center gap-1"
                >
                  <span>스마트스토어 공식몰</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm mb-4 tracking-wider">
              문의 및 채널
            </h4>
            <div className="space-y-3 text-stone-400 font-light">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#6EE7B7]" />
                <span className="font-medium text-white">{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`https://instagram.com/${COMPANY_INFO.instagramSeonglim.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#6EE7B7]" />
                <span>성림조형원 {COMPANY_INFO.instagramSeonglim}</span>
              </a>

              <a
                href={`https://instagram.com/${COMPANY_INFO.instagramBrick.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#6EE7B7]" />
                <span>조각상점 {COMPANY_INFO.instagramBrick}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Policy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-stone-500 text-[11px] gap-4">
          <div>
            © 2026 {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacyPolicy(true)}
              className="hover:text-stone-300 underline underline-offset-2"
            >
              개인정보처리방침
            </button>
            <span className="text-stone-700">|</span>
            <a
              href={COMPANY_INFO.smartstoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300"
            >
              네이버 스마트스토어
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs text-stone-800">
          <div className="bg-[#FFFDF8] max-w-xl w-full p-6 sm:p-8 rounded-sm shadow-2xl border border-[#D5C9B8] max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <h3 className="font-serif text-lg font-bold text-[#142E25]">
                개인정보처리방침
              </h3>
              <button onClick={() => setShowPrivacyPolicy(false)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-stone-700 leading-relaxed font-light">
              <p>
                성림조형원 사회적협동조합은 개인정보보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립·공개합니다.
              </p>
              <div>
                <h5 className="font-bold text-stone-900 mb-1">1. 개인정보의 처리목적</h5>
                <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                <p className="mt-1">- 문의사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등</p>
              </div>
              <div>
                <h5 className="font-bold text-stone-900 mb-1">2. 개인정보의 처리 및 보유기간</h5>
                <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                <p className="mt-1">- 보유 기간: 문의 접수 및 답변 완료 시점으로부터 1년</p>
              </div>
              <div>
                <h5 className="font-bold text-stone-900 mb-1">3. 정보주체의 권리·의무 및 행사방법</h5>
                <p>정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
              </div>
              <div>
                <h5 className="font-bold text-stone-900 mb-1">4. 개인정보의 파기절차 및 방법</h5>
                <p>보유기간이 경과한 개인정보는 지체없이 전자적 파일 형태는 복원 불가능한 기술적 방법을 사용하여 삭제합니다.</p>
              </div>
            </div>

            <button
              onClick={() => setShowPrivacyPolicy(false)}
              className="mt-6 w-full py-2.5 bg-[#142E25] text-white text-xs font-semibold rounded-sm hover:bg-[#2D5A4C]"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
