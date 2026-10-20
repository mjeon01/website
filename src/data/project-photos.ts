export interface ProjectPhoto {
  name: string;
  alt: string;
  caption: string;
}
// The supplied archive does not identify the year/event of every image.
// Related work is captioned as such, never presented as the exact event.
export const projectPhotos: Record<string, ProjectPhoto[]> = {
  "wonhyo-art-festival-30": [
    {
      name: "hero-lanterns",
      alt: "대형 종등과 용등을 밝힌 야간 전시",
      caption: "관련 작업 · 성림의 대형 전통등 야간 전시",
    },
    {
      name: "craft",
      alt: "점등한 전통등에 채색을 마무리하는 작업",
      caption: "관련 작업 · 전통등 채색과 마감",
    },
  ],
  "goun-cultural-festival-4": [
    {
      name: "goun-workshop",
      alt: "고운사에서 불꽃등에 색을 입히는 참가자들",
      caption: "고운사 작업 기록 · 불꽃등 채색 체험",
    },
    {
      name: "goun-frame",
      alt: "고운사에서 전통등의 골조를 만드는 체험",
      caption: "고운사 작업 기록 · 전통등 골조 체험",
    },
  ],
  "shilla-cultural-festival-53": [
    {
      name: "shilla-lanterns",
      alt: "신라문화제 현장의 전통등 전시",
      caption: "관련 작업 · 신라문화제 전통등 전시 기록",
    },
    {
      name: "festival",
      alt: "신라문화제 청년거리 야경과 관람객",
      caption: "관련 작업 · 신라문화제 청년거리 야간 현장",
    },
    {
      name: "pagoda-night",
      alt: "신라문화제에서 불을 밝힌 목탑등",
      caption: "관련 작업 · 신라문화제 목탑등",
    },
  ],
  "hwangnyongsa-since-553": [
    {
      name: "interactive-art",
      alt: "관람객이 참여할 수 있도록 제작한 인터랙티브 조형물",
      caption: "관련 작업 · 참여형 인터랙티브 조형물 제작",
    },
    {
      name: "studio",
      alt: "공방에서 집등을 제작하는 모습",
      caption: "관련 작업 · 전통등 제작 공방",
    },
  ],
  "haeparang-night-healing-trip-2026": [
    {
      name: "bridge-lantern",
      alt: "월정교의 야경 앞에서 손에 든 월월등",
      caption: "관련 작업 · 월정교에서 만나는 월월등",
    },
    {
      name: "lantern-tour",
      alt: "월정교에서 전통등을 들고 함께하는 투어",
      caption: "관련 작업 · 월정교 등롱 투어",
    },
  ],
  "hwangnyongsa-lantern-festival-2025": [
    {
      name: "hero-lanterns",
      alt: "불을 밝힌 대형 종등과 용등",
      caption: "관련 작업 · 성림의 대형 전통등 전시",
    },
    {
      name: "education",
      alt: "가족이 함께 전통등을 만드는 체험 현장",
      caption: "관련 작업 · 월월등 만들기 체험",
    },
  ],
};
