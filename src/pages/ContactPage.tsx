import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, FileText, ChevronRight, X, AlertCircle, Plus, Minus, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/content';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
  inquiryPrefill?: {
    type?: string;
    location?: string;
    scale?: string;
  };
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  inquiryPrefill = {},
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState(inquiryPrefill.type || '기획');
  const [message, setMessage] = useState(
    inquiryPrefill.location || inquiryPrefill.scale
      ? `[사전 선택 정보]\n- 희망 지역: ${inquiryPrefill.location || '미정'}\n- 예상 규모: ${inquiryPrefill.scale || '미정'}\n\n[문의 내용]: `
      : ''
  );
  const [agreed, setAgreed] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  React.useEffect(() => {
    if (inquiryPrefill.type) {
      if (inquiryPrefill.type.includes('기획')) setInquiryType('기획');
      else if (inquiryPrefill.type.includes('제작')) setInquiryType('제작');
      else if (inquiryPrefill.type.includes('임대')) setInquiryType('임대');
      else if (inquiryPrefill.type.includes('교육') || inquiryPrefill.type.includes('체험')) setInquiryType('교육');
      else setInquiryType('기타');
    }
  }, [inquiryPrefill.type]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('성함 혹은 기관명을 입력해 주세요.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('연락 가능한 전화번호를 입력해 주세요.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('문의 내용을 작성해 주세요.');
      return;
    }
    if (!agreed) {
      setErrorMsg('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FBF9F5] py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ========================================================
            헤더 및 브레드크럼
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
              NEWS & INQUIRY · 소식과 문의
            </span>
            <h1 className="font-myeongjo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142E25] leading-tight mb-4">
              국가유산의 가치를 살리는 협업,<br />
              성림이 성심을 다해 듣겠습니다
            </h1>
            <p className="text-sm sm:text-base text-stone-600 font-gothic leading-relaxed max-w-2xl">
              지자체·공공기관 축제 기획부터 문화재 야행, 조형물·전통등 제작, 소품 임대 및 체험 프로그램 출강까지 편안하게 남겨주시면 담당 책임자가 직접 회신드립니다.
            </p>
          </div>
        </section>

        {/* ========================================================
            7-1. 소식 (News & Notice)
            ======================================================== */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-myeongjo text-xl font-bold text-[#142E25]">
              성림 소식
            </h3>
            <span className="text-xs text-stone-500 font-gothic">공지사항</span>
          </div>

          <div className="bg-white border border-[#E3DACB] rounded-xs p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EBE6DF] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#EAF2EE] text-[#2D5A4C] rounded-xs font-gothic">
                  공지
                </span>
                <h4 className="font-myeongjo font-bold text-base sm:text-lg text-[#142E25]">
                  성림조형원 홈페이지를 새로 열었습니다
                </h4>
              </div>
              <span className="text-xs text-stone-500 font-gothic">2026.10.14</span>
            </div>

            <div className="space-y-3 text-stone-700 font-gothic text-xs sm:text-sm font-light leading-relaxed">
              <p>
                성림조형원 사회적협동조합 공식 홈페이지를 새롭게 단장하여 선보입니다.
              </p>
              <p>
                국가유산 정비와 전통예술 현장에서 축적된 경험을 바탕으로 기획부터 제작, 운영까지 직접 실행해 온 성림의 다양한 프로젝트와 실적 기록을 한 곳에서 투명하게 확인하실 수 있습니다.
              </p>
              <p className="text-stone-500 text-xs pt-1">
                앞으로도 국가유산의 숨결을 현대에 생생하게 전하는 믿음직한 파트너가 되겠습니다. 많은 관심과 응원 부탁드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            7-2. 문의 양식 (Interactive Form)
            ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 bg-white border border-[#E3DACB] rounded-xs p-6 sm:p-8 shadow-xs">
            <h3 className="font-myeongjo text-xl font-bold text-[#142E25] mb-2">
              기획·제작·임대 문의서
            </h3>
            <p className="text-xs text-stone-600 font-gothic font-light mb-6">
              아래 양식을 작성해 주시면 24시간 내(영업일 기준) 유선 또는 이메일로 상세 견적 및 기획안을 안내드립니다.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#EAF2EE] text-[#2D5A4C] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-myeongjo text-xl font-bold text-[#142E25]">
                  문의가 정상적으로 접수되었습니다
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-gothic font-light max-w-md mx-auto leading-relaxed">
                  작성해 주신 연락처(<strong className="font-semibold text-stone-900">{phone}</strong>)로 성림조형원 기획총괄 실장이 검토 후 신속히 연락드리겠습니다.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                      setAgreed(false);
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-[#142E25] bg-[#F1ECE2] hover:bg-[#E5DFD3] rounded-xs font-gothic transition-colors"
                  >
                    새 문의 작성하기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-gothic">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* 문의 유형 선택 */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-2">
                    문의 유형 <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { id: '기획', label: '기획·운영' },
                      { id: '제작', label: '조형물 제작' },
                      { id: '임대', label: '전통등 임대' },
                      { id: '교육', label: '체험·교육' },
                      { id: '기타', label: '기타 문의' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setInquiryType(item.id)}
                        className={`py-2 px-3 text-xs font-medium rounded-xs border text-center transition-all ${
                          inquiryType === item.id
                            ? 'bg-[#142E25] text-white border-[#142E25] shadow-xs'
                            : 'bg-[#FBF9F5] text-stone-700 border-[#D8CFBD] hover:border-stone-400'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 성명 & 연락처 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      성명 또는 기관/기업명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="예: 경주시 관광컨벤션과 / 홍길동"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FBF9F5] border border-[#D8CFBD] rounded-xs focus:outline-none focus:border-[#2D5A4C] text-stone-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="예: 010-0000-0000"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FBF9F5] border border-[#D8CFBD] rounded-xs focus:outline-none focus:border-[#2D5A4C] text-stone-800"
                    />
                  </div>
                </div>

                {/* 이메일 */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    이메일 <span className="text-stone-400 text-[11px]">(제안서·견적 수신용)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@domain.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FBF9F5] border border-[#D8CFBD] rounded-xs focus:outline-none focus:border-[#2D5A4C] text-stone-800"
                  />
                </div>

                {/* 문의 내용 */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="사업명, 설치 희망 장소, 행사 일정, 조형물 규격 및 예산 규모 등을 적어주시면 더욱 구체적인 안내가 가능합니다."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FBF9F5] border border-[#D8CFBD] rounded-xs focus:outline-none focus:border-[#2D5A4C] text-stone-800 leading-relaxed resize-y"
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 rounded text-[#2D5A4C] focus:ring-[#2D5A4C]"
                    />
                    <span className="text-xs text-stone-600 font-light leading-snug">
                      개인정보 수집 및 이용에 동의합니다.{' '}
                      <button
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        className="text-[#2D5A4C] underline hover:text-[#142E25]"
                      >
                        [내용 보기]
                      </button>
                    </span>
                  </label>
                </div>

                {/* 전송 버튼 */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#142E25] hover:bg-[#204439] text-white text-xs font-semibold tracking-wider rounded-xs transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>문의 접수하기</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* 오른쪽: 담당 연락처 & 기관 정보 카드 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#162720] text-white rounded-xs space-y-5 font-gothic text-xs">
              <h4 className="font-myeongjo text-lg font-bold text-[#F8E2B2]">
                직접 유선 상담
              </h4>
              <p className="text-stone-300 font-light leading-relaxed">
                행사 일정이 촉박하거나 구체적인 현장 실사가 필요한 경우 유선으로 먼저 연락 주시면 빠른 협의가 가능합니다.
              </p>

              <div className="space-y-3 pt-3 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#F8E2B2] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-stone-400">대표 전화</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-semibold text-white hover:text-[#F8E2B2]">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#F8E2B2] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-stone-400">공식 이메일</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs font-medium text-white hover:text-[#F8E2B2]">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F8E2B2] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-stone-400">본사 및 연구소</span>
                    <span className="text-xs text-stone-200">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] text-stone-300 space-y-1 font-light">
                <div>법인명: {COMPANY_INFO.name}</div>
                <div>대표자: {COMPANY_INFO.representative}</div>
                <div>사업자등록번호: {COMPANY_INFO.registrationNumber}</div>
                <div>입금계좌: {COMPANY_INFO.bankAccount}</div>
              </div>
            </div>

            {/* 수의계약 안내 박스 */}
            <div className="p-5 bg-white border border-[#E3DACB] rounded-xs space-y-2">
              <div className="flex items-center gap-2 text-[#2D5A4C]">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-myeongjo font-bold text-xs text-[#142E25]">
                  공공기관 수의계약 자격 보유
                </span>
              </div>
              <p className="text-[11px] text-stone-600 font-gothic font-light leading-relaxed">
                성림조형원은 기획재정부 인가 사회적협동조합 및 직접생산확인증명서 보유 법인으로, 국가계약법 및 지방계약법 시행령에 따른 공공기관 수의계약 체결 요건을 완비하고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            8. 자주 묻는 질문 (FAQ)
            ======================================================== */}
        <section className="pt-6 border-t border-[#2D5A4C]/15">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-2 font-gothic">
              FAQ · 자주 묻는 질문
            </span>
            <h3 className="font-myeongjo text-2xl font-bold text-[#142E25]">
              의뢰 전 자주 확인하시는 사항
            </h3>
          </div>

          <div className="divide-y divide-[#E3DACB] border-y border-[#E3DACB]">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-5 font-gothic">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  >
                    <span className="font-myeongjo font-bold text-sm sm:text-base text-[#142E25] group-hover:text-[#2D5A4C] transition-colors">
                      {faq.q}
                    </span>
                    <span className="shrink-0 p-1 rounded-full text-stone-500 group-hover:text-[#2D5A4C]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* 개인정보 모달 */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white max-w-lg w-full p-6 sm:p-8 rounded-xs shadow-2xl relative max-h-[85vh] overflow-y-auto font-gothic">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="font-myeongjo text-lg font-bold text-[#142E25] mb-4">
              개인정보 수집 및 이용 동의
            </h4>
            <div className="space-y-3 text-xs text-stone-600 leading-relaxed font-light">
              <p>
                <strong>1. 수집 항목:</strong> 성명(또는 기관명), 연락처(휴대전화번호), 이메일, 문의 내용
              </p>
              <p>
                <strong>2. 수집 및 이용 목적:</strong> 문의 사항 확인 및 사실 조사, 처리 결과 회신 및 상담 자료 활용
              </p>
              <p>
                <strong>3. 보유 및 이용 기간:</strong> 문의 처리 완료 후 1년간 보관 후 지체 없이 파기
              </p>
              <p>
                <strong>4. 거부 권리:</strong> 귀하는 개인정보 수집·이용에 동의하지 않을 권리가 있으며, 동의 거부 시 온라인 문의 접수가 제한될 수 있습니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-2 bg-[#142E25] text-white text-xs font-semibold rounded-xs"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
