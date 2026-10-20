import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, FileText, ChevronRight, X, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NewsAndContactProps {
  initialType?: string;
  initialLocation?: string;
  initialScale?: string;
}

export const NewsAndContact: React.FC<NewsAndContactProps> = ({
  initialType = '기획',
  initialLocation = '',
  initialScale = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState(initialType || '기획');
  const [message, setMessage] = useState(
    initialLocation || initialScale
      ? `[사전 선택 정보]\n- 희망 지역: ${initialLocation || '미정'}\n- 예상 규모: ${initialScale || '미정'}\n\n[문의 내용]: `
      : ''
  );
  const [agreed, setAgreed] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update when initialType changes
  React.useEffect(() => {
    if (initialType) {
      if (initialType.includes('기획')) setInquiryType('기획');
      else if (initialType.includes('제작')) setInquiryType('제작');
      else if (initialType.includes('임대')) setInquiryType('임대');
      else if (initialType.includes('교육') || initialType.includes('체험')) setInquiryType('교육');
      else setInquiryType('기타');
    }
  }, [initialType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('성명을 입력해 주세요.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('연락처를 입력해 주세요.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('문의 내용을 입력해 주세요.');
      return;
    }
    if (!agreed) {
      setErrorMsg('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notice & News Highlights Preview (Section 7-1) */}
        <div className="mb-20 p-6 sm:p-8 bg-[#FBF9F5] rounded-sm border border-[#E3DACB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 mb-4 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold">
                NOTICE · 공지사항
              </span>
              <span className="text-[11px] bg-[#EAF2EE] text-[#2D5A4C] px-2 py-0.5 rounded font-medium">
                공식 안내
              </span>
            </div>
            <span className="text-xs text-stone-500 font-mono">2026.10.14</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#142E25] mb-2">
            성림조형원 홈페이지를 새로 열었습니다
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
            성림조형원 사회적협동조합 홈페이지를 새로 열었습니다. 지금까지 맡아 온 국가유산 축제와 체험,
            직접 만든 전통등과 K헤리티지 브릭을 한곳에서 보실 수 있습니다.
            기획·제작·임대·교육 문의는 아래 문의하기 양식에 남겨 주세요.
          </p>
        </div>

        {/* Contact & Inquiry Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Info & Desk Hours */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-2">
              GET IN TOUCH · 문의 안내
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#142E25] font-normal tracking-tight mb-4 leading-snug">
              기획 · 제작 · 운영 문의
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-8">
              행사 날짜와 장소, 하고 싶은 일을 적어 주시면 담당 기술진 및 기획팀이 확인 후 직접 연락드립니다.
            </p>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-[#FBF9F5] rounded-sm border border-[#E8E3DA] flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#2D5A4C] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#142E25] block mb-0.5">유선 전화 및 문자 상담</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-stone-700 hover:text-[#2D5A4C] font-medium text-sm">
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-stone-400 block text-[11px] mt-0.5">
                    급한 행사 및 현장 일정은 전화로 우선 연락 주시면 빠릅니다.
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#FBF9F5] rounded-sm border border-[#E8E3DA] flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2D5A4C] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#142E25] block mb-0.5">조각상점 쇼룸 및 본사</span>
                  <span className="text-stone-700 font-medium block">
                    {COMPANY_INFO.address}
                  </span>
                  <span className="text-stone-400 block text-[11px] mt-0.5">
                    조각상점 매장에서 브릭과 전통등 실물을 직접 보실 수 있습니다.
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#FBF9F5] rounded-sm border border-[#E8E3DA] flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#2D5A4C] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#142E25] block mb-0.5">인스타그램 공식 채널</span>
                  <div className="flex items-center gap-3 text-stone-700 font-medium">
                    <a
                      href={`https://instagram.com/${COMPANY_INFO.instagramSeonglim.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#2D5A4C]"
                    >
                      성림조형원 {COMPANY_INFO.instagramSeonglim}
                    </a>
                    <span>·</span>
                    <a
                      href={`https://instagram.com/${COMPANY_INFO.instagramBrick.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#2D5A4C]"
                    >
                      조각상점 {COMPANY_INFO.instagramBrick}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#FBF9F5] rounded-sm border border-[#E3DACB] shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#142E25] mb-6">
                문의 양식 작성
              </h3>

              {errorMsg && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-sm text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                {/* Inquiry Type Radio / Segmented buttons */}
                <div>
                  <label className="block text-stone-700 font-semibold mb-2">
                    문의 유형 <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {['기획', '제작', '임대', '교육', '기타'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`py-2 px-3 text-xs font-medium rounded-xs border text-center transition-colors ${
                          inquiryType === type
                            ? 'bg-[#142E25] text-white border-[#142E25]'
                            : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1.5">
                      성명 / 담당자명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-stone-900 focus:outline-none focus:border-[#2D5A4C]"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1.5">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-0000-0000"
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-stone-900 focus:outline-none focus:border-[#2D5A4C]"
                    />
                  </div>
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-stone-700 font-semibold mb-1.5">
                    이메일 주소 <span className="text-stone-400 font-normal">(선택 — 견적서 수신용)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@organization.kr"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-stone-900 focus:outline-none focus:border-[#2D5A4C]"
                  />
                </div>

                {/* Content Message */}
                <div>
                  <label className="block text-stone-700 font-semibold mb-1.5">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="행사 날짜, 장소, 원하시는 품목 또는 기획 범위를 자유롭게 적어 주세요."
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-stone-900 focus:outline-none focus:border-[#2D5A4C] leading-relaxed resize-y"
                  />
                </div>

                {/* Privacy Agreement Checkbox (Mandatory as per section 7-3) */}
                <div className="pt-2">
                  <div className="p-3 bg-stone-100 rounded-xs border border-stone-200 flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="privacyAgree"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-[#2D5A4C] border-stone-300 rounded focus:ring-[#2D5A4C] cursor-pointer"
                    />
                    <label htmlFor="privacyAgree" className="text-[11px] text-stone-600 cursor-pointer">
                      <strong>개인정보 수집·이용에 동의합니다 (필수).</strong> 문의 확인 및 답변을 위해 성명, 연락처, 이메일을 수집하며 1년간 보관 후 파기합니다.{' '}
                      <button
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        className="text-[#2D5A4C] underline hover:text-[#142E25] font-semibold"
                      >
                        전문 보기
                      </button>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#142E25] hover:bg-[#2D5A4C] text-white font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm text-sm tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>문의 보내기</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FFFDF8] max-w-md w-full p-6 rounded-sm shadow-2xl border border-[#D5C9B8]">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <h4 className="font-serif font-bold text-base text-[#142E25]">
                개인정보 수집·이용 동의 (개인정보보호법 제15조)
              </h4>
              <button onClick={() => setShowPrivacyModal(false)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-stone-700 leading-relaxed mb-6">
              <p>
                <strong>1. 수집 항목:</strong> 성명, 연락처, 이메일, 문의 내용
              </p>
              <p>
                <strong>2. 수집 목적:</strong> 문의 확인과 답변 및 행사 상담
              </p>
              <p>
                <strong>3. 보유 기간:</strong> 문의 처리를 마친 날부터 1년
              </p>
              <p className="text-stone-500 text-[11px]">
                * 동의하지 않을 권리가 있으며, 동의를 거부하실 경우 문의 접수가 제한될 수 있습니다.
              </p>
            </div>
            <button
              onClick={() => {
                setAgreed(true);
                setShowPrivacyModal(false);
              }}
              className="w-full py-2.5 bg-[#142E25] text-white text-xs font-semibold rounded-sm hover:bg-[#2D5A4C]"
            >
              확인 및 동의하기
            </button>
          </div>
        </div>
      )}

      {/* Submission Success Confirmation Modal (Section 7-3 Auto Reply simulation) */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FFFDF8] max-w-lg w-full p-6 sm:p-8 rounded-sm shadow-2xl border border-[#D5C9B8]">
            <div className="w-12 h-12 rounded-full bg-[#EAF2EE] text-[#2D5A4C] flex items-center justify-center mb-4 mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl font-bold text-center text-[#142E25] mb-2">
              문의가 성공적으로 접수되었습니다
            </h3>
            <p className="text-xs text-center text-stone-600 mb-6 font-light">
              담당 기획·기술팀이 내용을 확인한 뒤 남겨 주신 연락처로 신속히 회신드리겠습니다.
            </p>

            {/* Simulated Automated Response Notice Card from §7-3 */}
            <div className="p-4 bg-white rounded-sm border border-stone-200 text-xs text-stone-700 space-y-2 mb-6">
              <div className="font-bold text-[#142E25] pb-2 border-b border-stone-200">
                [자동 안내 메일 발송 완료]
              </div>
              <p>
                안녕하세요, <strong>{name}</strong>님. 성림조형원 사회적협동조합입니다.
              </p>
              <p className="font-light text-stone-600">
                남겨 주신 [{inquiryType}] 관련 문의가 정상적으로 접수되었습니다. 일정 및 제작 여건을 검토한 뒤 연락드리겠습니다.
              </p>
              <div className="pt-2 text-[11px] text-stone-500">
                급한 문의는 <strong>010-3954-0529</strong>로 연락 주시면 빠릅니다.<br />
                성림조형원 사회적협동조합 · 경상북도 경주시 북정로 13-3
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setName('');
                setPhone('');
                setEmail('');
                setMessage('');
                setAgreed(false);
              }}
              className="w-full py-2.5 bg-[#142E25] text-white text-xs font-semibold rounded-sm hover:bg-[#2D5A4C] transition-colors"
            >
              확인 완료
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
