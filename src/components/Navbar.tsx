import React, { useState } from 'react';
import { ExternalLink, Menu, X, Globe, Phone } from 'lucide-react';
import { COMPANY_INFO, MULTI_LANG } from '../data/content';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: 'ko' | 'en' | 'ja' | 'zh';
  setLang: (lang: 'ko' | 'en' | 'ja' | 'zh') => void;
  onOpenInquiry: (defaultType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = MULTI_LANG[lang];

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'work', label: t.nav.work },
    { id: 'projects', label: t.nav.projects },
    { id: 'shop', label: t.nav.shop },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#2D5A4C]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element wordmark) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="group text-left flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5A4C]"
            >
              {/* Traditional Noerok Seal Stamp Emblem */}
              <div className="w-10 h-10 rounded-sm bg-[#2D5A4C] text-[#FBF9F5] flex items-center justify-center font-serif font-bold text-lg tracking-wider shadow-sm transition-transform group-hover:scale-105">
                聖
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#142E25] group-hover:text-[#2D5A4C] transition-colors whitespace-nowrap">
                  성림조형원
                </span>
                <span className="block text-[10px] tracking-widest text-[#5C6B64] uppercase font-sans">
                  Social Cooperative
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: 4–5 concise single-line text links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A5550]">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 tracking-wider transition-colors whitespace-nowrap shrink-0 hover:text-[#142E25] ${
                  currentTab === item.id
                    ? 'text-[#2D5A4C] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#2D5A4C]'
                    : 'text-[#4A5550]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + Language switch */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#4A5550] hover:text-[#142E25] rounded transition-colors"
                title="Change Language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="uppercase font-semibold tracking-wider">{lang}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-[#FFFFFF] rounded-md shadow-lg border border-[#E5E0D5] py-1 z-50">
                  <button
                    onClick={() => { setLang('ko'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${lang === 'ko' ? 'bg-[#EAF2EE] text-[#2D5A4C] font-semibold' : 'text-[#333] hover:bg-stone-50'}`}
                  >
                    한국어 (KO)
                  </button>
                  <button
                    onClick={() => { setLang('en'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${lang === 'en' ? 'bg-[#EAF2EE] text-[#2D5A4C] font-semibold' : 'text-[#333] hover:bg-stone-50'}`}
                  >
                    English (EN)
                  </button>
                  <button
                    onClick={() => { setLang('ja'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${lang === 'ja' ? 'bg-[#EAF2EE] text-[#2D5A4C] font-semibold' : 'text-[#333] hover:bg-stone-50'}`}
                  >
                    日本語 (JA)
                  </button>
                  <button
                    onClick={() => { setLang('zh'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${lang === 'zh' ? 'bg-[#EAF2EE] text-[#2D5A4C] font-semibold' : 'text-[#333] hover:bg-stone-50'}`}
                  >
                    中文 (ZH)
                  </button>
                </div>
              )}
            </div>

            {/* Quick Phone Call */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-xs text-[#5C6B64] hover:text-[#142E25] tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* Primary Action Button: 온라인 구매 (Naver SmartStore) */}
            <a
              href={COMPANY_INFO.smartstoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider text-white bg-[#142E25] hover:bg-[#2D5A4C] rounded-sm transition-all shadow-sm whitespace-nowrap shrink-0"
            >
              <span>{t.primaryCta}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
              className="px-2 py-1 text-xs border border-[#2D5A4C]/20 rounded text-[#2D5A4C] font-semibold"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#142E25] hover:text-[#2D5A4C] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#2D5A4C]/10 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2 text-base font-medium tracking-wide ${
                currentTab === item.id ? 'text-[#2D5A4C] font-bold' : 'text-[#4A5550]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#2D5A4C]/10 flex flex-col gap-2">
            <a
              href={COMPANY_INFO.smartstoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-[#142E25] text-white text-sm font-semibold rounded-sm"
            >
              {t.primaryCta} (스마트스토어)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full text-center py-2.5 border border-[#2D5A4C] text-[#2D5A4C] text-sm font-semibold rounded-sm"
            >
              기획·제작 문의하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
