import React, { useState } from 'react';
import { Compass, Hammer, Users, ArrowUpRight, Check } from 'lucide-react';
import { THREE_STEPS } from '../data/content';

interface ThreeStepsWorkflowProps {
  onSelectStep: (stepName: string) => void;
}

export const ThreeStepsWorkflow: React.FC<ThreeStepsWorkflowProps> = ({ onSelectStep }) => {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [Compass, Hammer, Users];

  const techniques = [
    { name: '단청 (丹靑)', desc: '목조 건축의 결을 보존하고 장엄하는 전통 색채 채색 기법' },
    { name: '탱화 (幀畵)', desc: '비단이나 삼베에 불교 세계관과 서사를 정밀하게 담아내는 전통 회화' },
    { name: '개금 (改金)', desc: '순금박을 정교하게 덧씌워 유물의 영원한 광채를 구현하는 도금 기술' },
    { name: '전통등 (傳統燈)', desc: '철골 골조 용접부터 천연 한지 배접, 배선과 내후성 방수 공예' },
    { name: '조형 (造形)', desc: '고대 유물과 건축물의 형태미를 입체 공간에 복원하는 현대적 조형' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#2D5A4C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold block mb-2">
              HOW WE WORK · 실행 프로세스
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#142E25] font-normal tracking-tight">
              하는 일 세 단계
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-light leading-relaxed">
            아이디어를 타인에게 외주 주지 않습니다. 무엇을 보여줄지 기획하고, 직접 손으로 만들고, 현장에서 안전하게 운영합니다.
          </p>
        </div>

        {/* 3 Step Editorial Cards Grid (Like Rihla's 01 Tell us the trip / 02 Choose from options / 03 Fly or sail) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {THREE_STEPS.map((step, idx) => {
            const IconComponent = icons[idx];
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => {
                  setActiveStep(idx);
                  onSelectStep(step.step);
                }}
                className={`p-8 rounded-sm cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-[#FBF9F5] border-[#2D5A4C] shadow-md -translate-y-1'
                    : 'bg-[#FFFDF8] border-[#E8E3DA] hover:border-[#2D5A4C]/40 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-light text-[#2D5A4C]/60">
                    {step.num}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#2D5A4C] text-white' : 'bg-[#EAF2EE] text-[#2D5A4C]'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#142E25] mb-2 flex items-center gap-2">
                  <span>{step.step}</span>
                  {isSelected && <span className="text-xs font-sans font-normal text-[#2D5A4C]">· 확인 중</span>}
                </h3>

                <p className="text-xs font-semibold text-[#2D5A4C] tracking-wide mb-3">
                  {step.motto}
                </p>

                <div className="text-xs text-stone-700 font-medium pb-4 border-b border-stone-200 mb-4 leading-relaxed">
                  {step.details}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {step.narrative}
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#142E25] group-hover:text-[#2D5A4C]">
                  <span>관련 실적 및 상세</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 5 Traditional Techniques Section - Highlighted in One Place as required */}
        <div className="mt-16 p-8 lg:p-10 bg-[#162720] text-white rounded-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#F8E2B2] font-semibold block mb-2">
              FIVE TRADITIONAL TECHNIQUES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FFFDF8] mb-3">
              우리 손으로 직접 만들 수 있는 이유
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              단청·탱화·개금·전통등·조형을 구사하는 숙련된 장인들이 함께하기에,
              기획한 것을 남에게 넘기지 않고 끝까지 우리 손으로 완성합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {techniques.map((tech, i) => (
              <div
                key={i}
                className="p-4 bg-white/5 border border-white/10 rounded-sm hover:border-[#F8E2B2]/60 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-[#F8E2B2] font-serif mb-2">
                  <Check className="w-3.5 h-3.5 text-[#6EE7B7]" />
                  <span>{tech.name}</span>
                </div>
                <p className="text-[11px] text-stone-300 leading-relaxed font-light">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
