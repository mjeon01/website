/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ShopPage } from './pages/ShopPage';
import { ContactPage } from './pages/ContactPage';
import { Globe, MessageSquareText } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [lang, setLang] = useState<'ko' | 'en' | 'ja' | 'zh'>('ko');
  const [inquiryPrefill, setInquiryPrefill] = useState<{
    type?: string;
    location?: string;
    scale?: string;
  }>({});

  const handleNavigate = (page: string) => {
    setCurrentTab(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (
    data?: string | { type?: string; location?: string; scale?: string }
  ) => {
    if (typeof data === 'string') {
      setInquiryPrefill({ type: data });
    } else if (data) {
      setInquiryPrefill(data);
    }
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickInquiry = (data: { type: string; location: string; scale: string }) => {
    setInquiryPrefill(data);
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] flex flex-col font-sans selection:bg-[#2D5A4C] selection:text-white">
      {/* Multi-language international alert banner if language is not Korean */}
      {lang !== 'ko' && (
        <div className="bg-[#142E25] text-white py-2.5 px-4 text-xs font-gothic">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#F8E2B2]" />
              <span>
                {lang === 'en' && 'English International Edition · Seongnim Johyeongwon Social Cooperative'}
                {lang === 'ja' && '日本語 公式概要 · 聖林造形院 社会的協同組合'}
                {lang === 'zh' && '中文 官方简介 · 圣林造形院 社会协同组合'}
              </span>
            </div>
            <button
              onClick={() => setLang('ko')}
              className="text-[#F8E2B2] hover:underline text-[11px]"
            >
              한국어 원문 보기
            </button>
          </div>
        </div>
      )}

      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleNavigate}
        lang={lang}
        setLang={setLang}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Multi-Page Sub-View Switching Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            lang={lang}
            onQuickInquiry={handleQuickInquiry}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentTab === 'work' && (
          <WorkPage
            onOpenInquiry={handleOpenInquiry}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'projects' && (
          <ProjectsPage onNavigate={handleNavigate} />
        )}

        {currentTab === 'shop' && (
          <ShopPage onNavigate={handleNavigate} />
        )}

        {currentTab === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            inquiryPrefill={inquiryPrefill}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick Floating Action Button for Quick Commission Inquiry */}
      {currentTab !== 'contact' && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => handleOpenInquiry()}
            className="flex items-center gap-2 px-4 py-3 bg-[#142E25] hover:bg-[#2D5A4C] text-white text-xs font-semibold rounded-full shadow-2xl border border-white/20 transition-all hover:scale-105 font-gothic"
            aria-label="Direct inquiry"
          >
            <MessageSquareText className="w-4 h-4 text-[#FDE68A]" />
            <span className="hidden sm:inline">기획·제작 문의</span>
          </button>
        </div>
      )}
    </div>
  );
}
