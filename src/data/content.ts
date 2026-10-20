export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  location: string;
  host: string;
  role: string;
  type: '세계유산' | '축제' | '행사' | '체험';
  year: '2026' | '2025';
  summary: string;
  description: string;
  highlightDetails?: string[];
  notice?: string;
  link?: string;
  imageTag: string;
}

export interface BusinessField {
  id: string;
  step: '기획한다' | '만든다' | '운영한다';
  title: string;
  subtitle: string;
  description: string;
  tasks: string[];
  cases: string[];
  buttonText: string;
  specs: { label: string; value: string }[];
  accentKey: string;
}

export interface BrickItem {
  code: string;
  name: string;
  pieces: number;
  description: string;
  status: '판매중' | '곧 판매';
  height?: string;
}

export interface LanternKit {
  id: string;
  name: string;
  tagline: string;
  contents: string;
  difficulty: string;
  baseSpecs: string;
  status: '판매중' | '곧 판매';
}

export const COMPANY_INFO = {
  name: '성림조형원 사회적협동조합',
  nameEn: 'Seongnim Johyeongwon Social Cooperative',
  subtitleEn: 'Korean Heritage Craft Studio',
  representative: '심재담',
  registrationNumber: '501-87-01949',
  address: '경상북도 경주시 북정로 13-3 (황오동) · 조각상점',
  phone: '010-3954-0529',
  email: 'seonglim.coop@gmail.com',
  bankAccount: '농협 351-1188-7501-13 (성림조형원 사회적협동조합)',
  instagramSeonglim: '@_seonglim_',
  instagramBrick: '@brickstore.gj',
  smartstoreUrl: 'https://smartstore.naver.com/brickstore_gj',
  establishedDate: '2021.01.19',
  heritageCareerStart: '2010',
  colorName: '뇌록(磊綠)',
  colorStory:
    '회사 색인 뇌록은 단청 그림을 올리기 전 가장 먼저 바르는 바탕칠 색입니다. 경북 포항 뇌성산에서 나는 천연 안료로, 불국사 대웅전 단청에도 쓰였습니다. 화려한 그림 아래에서 보이지 않게 받쳐 주는 색이지요. 성림조형원도 그 자리에서 전통을 받치려 합니다.',
};

export const TRUST_PROOFS = [
  {
    title: '국가유산 정비 2010년 시작',
    desc: '현장에서 15년 이상 단청·탱화·전통등을 직접 축적해 온 장인과 기획자들의 연대',
  },
  {
    title: '세계유산 함께 누림 사업 공식 운영',
    desc: '국가유산청·경상북도·경주시와 함께 황룡사지 등 역사적 공간의 가치를 되살리는 사업 시행',
  },
  {
    title: '유네스코 인류무형문화유산 연등회 전수교육 강사',
    desc: '전통등 제작 기법의 원형을 연구하고 정통 계승하는 전문 전수교육 인력 보유',
  },
  {
    title: '직접생산확인증명서 보유 비영리 법인',
    desc: '기획부터 도안·제작·현장 설치 및 운영까지 외주 없이 한 팀이 직접 완결하는 신뢰성',
  },
];

export const STATS = [
  { number: '2010', label: '국가유산 정비 시작', sub: '현장 실무 경력의 출발' },
  { number: '2021', label: '사회적협동조합 설립', sub: '경주 비영리 법인 출범' },
  { number: '3단계', label: '원스톱 직접 실행', sub: '기획 · 제작 · 운영 완결' },
  { number: '5종', label: '전통 공예 기법', sub: '단청 · 탱화 · 개금 · 전통등 · 조형' },
];

export const THREE_STEPS = [
  {
    num: '01',
    step: '기획한다',
    motto: '무엇을 보여줄지 정합니다.',
    details: '축제·행사 기획 · 투어 설계 · 체험 프로그램 설계',
    narrative: '국가유산이 놓인 장소의 역사와 맥락을 연구하여 시민과 여행자에게 어떤 감동을 선사할지 기획의 뼈대를 세웁니다.',
  },
  {
    num: '02',
    step: '만든다',
    motto: '정한 것을 직접 만듭니다.',
    details: '축제 조형물 · 전통등 · 제품(K헤리티지 브릭) · 전통등 및 소품 임대',
    narrative: '도면만 외주로 넘기지 않고, 골조 제작부터 배접, 단청 채색과 조명 설계까지 우리 손으로 직접 제작합니다.',
  },
  {
    num: '03',
    step: '운영한다',
    motto: '현장에서 직접 돌립니다.',
    details: '체험·교육 프로그램 운영 · 세계유산 함께 누림 사업 운영 · 설치·운영·철수',
    narrative: '행사 개막부터 소등까지 현장 전 과정을 책임지며 안전하고 깊이 있는 문화유산 경험을 완성합니다.',
  },
];

export const BUSINESS_FIELDS: BusinessField[] = [
  {
    id: 'planning',
    step: '기획한다',
    title: '전통예술 기획·운영',
    subtitle: '국가유산이 있는 자리에서, 무엇을 보여줄지부터 함께 정합니다.',
    description:
      '역사 공간의 스토리텔링을 발굴하고, 관람객의 이동 동선과 체험 포인트를 정밀하게 설계합니다. 세계유산 지구 축제부터 나이트 투어까지 기획과 현장 운영을 통괄합니다.',
    tasks: ['축제 및 문화재 야행 기획', '역사 투어 및 야간 힐링트립 설계', '맞춤형 체험 프로그램 기획', '현장 총괄 진행 및 안전 운영'],
    cases: ['황룡사 Since 553 (2026)', '2025 황룡사지 등축제', '2026 해파랑길 나이트 힐링트립', '제30회 원효예술제'],
    buttonText: '기획 문의하기',
    specs: [
      { label: '주요 대상', value: '지자체 · 공공기관 · 문화재단' },
      { label: '핵심 역량', value: '세계유산 스토리텔링 & 투어 동선' },
      { label: '실행 형태', value: '기획부터 현장 총괄 운영까지' },
    ],
    accentKey: '기획·운영',
  },
  {
    id: 'production',
    step: '만든다',
    title: '작품 제작',
    subtitle: '축제·전시 조형물은 도면만 받아 만들지 않습니다. 처음부터 끝까지 한 팀이 빚어냅니다.',
    description:
      '단청, 탱화, 개금, 전통등, 조형의 5대 기법을 숙련한 전문 인력이 상주하여 철골 용접부터 한지 배접, 채색, 방수, 전기 조명까지 한곳에서 직접 제작합니다.',
    tasks: ['대형 축제 야간 장엄등 제작', '현대적 조명 아트 오브제 제작', '역사 인물 및 동물 조형물', '특수 전시 도안 및 구조 설계'],
    cases: ['2025 황룡사지 등축제 전통등 전시 (해태등·종등·연꽃등)', '제53회 신라문화제 청년작가존 「빛의 숲」 조명 오브제'],
    buttonText: '제작 문의하기',
    specs: [
      { label: '제작 기법', value: '단청 · 탱화 · 개금 · 전통등 · 조형' },
      { label: '제작 공정', value: '기획협의 → 도안 → 제작 → 설치 → 철수' },
      { label: '인증 자격', value: '직접생산확인증명서 보유' },
    ],
    accentKey: '작품 제작',
  },
  {
    id: 'rental',
    step: '만든다',
    title: '전통등·소품 임대',
    subtitle: '직접 만든 장엄등과 대형 조형물을 행사에 빌려 드립니다. 설치와 철수까지 안전하게 맡습니다.',
    description:
      '국가유산 축제, 지자체 점등 행사, 사찰 봉축 행사에 최적화된 고품질 전통등과 안내 소품을 대여합니다. 완벽한 방수와 전기 설비, 전문 현장팀의 운송·설치·철수가 포함됩니다.',
    tasks: ['대형 장엄등 단기/장기 대여', '8m 대형 황룡사 9층 목탑 조형물', '사찰 및 야간 축제 소품 렌탈', '운송·안전 설치·전기 배선·철수'],
    cases: ['전국 지자체 야간 축제', '불교 사찰 봉축 및 문화 행사', '공공기관 문화유산 행사'],
    buttonText: '임대 문의하기',
    specs: [
      { label: '보유 품목', value: '범종등, 법고등, 운판등, 지장삼존등 등' },
      { label: '대형 조형', value: '황룡사 9층 목탑 (높이 8m)' },
      { label: '서비스 범위', value: '사전 점검 · 왕복 운송 · 현장 설치 및 철수' },
    ],
    accentKey: '전통등 임대',
  },
  {
    id: 'education',
    step: '운영한다',
    title: '체험·교육',
    subtitle: '등갓에 그림을 그리고 불을 밝히는 동안, 유산 이야기가 손에 남습니다.',
    description:
      '유네스코 인류무형문화유산 연등회 전수교육 강사 등 검증된 강사진이 어린이, 청소년, 다문화 가족, 성인 대상 전통공예 및 문화유산 교육을 지도합니다.',
    tasks: ['어린이·가족 손잡이 전통등 만들기', '빛조각 키트 조립 및 전통문화 교실', '대학·기관 전문 전통공예 특강', '취약계층 및 다문화 문화나눔 교육'],
    cases: ['2025 황룡사지 등축제 등 만들기', '제4회 고운문화제 만들기 체험', '대구가톨릭대 RISE 다문화 경제교육 전문가 양성 전통공예 강의'],
    buttonText: '체험·교육 문의하기',
    specs: [
      { label: '강사진', value: '연등회 전수교육 강사 및 대학 강사 출신' },
      { label: '키트 구성', value: '안전 LED 받침 + 친환경 필름 및 한지' },
      { label: '출강 지역', value: '경주 및 대구·경북 전역, 전국 출강 가능' },
    ],
    accentKey: '체험·교육',
  },
];

export const RENTAL_ITEMS = [
  { category: '장엄등', name: '범종등', desc: '성덕대왕신종의 비천상과 당초문을 정밀 재현한 은은한 야간 장엄등' },
  { category: '장엄등', name: '법고등', desc: '불교 사물(四物)의 하나인 법고 형태의 전통 한지 조명' },
  { category: '장엄등', name: '운판등', desc: '구름 문양을 입체화하여 허공과 하늘을 밝히는 상징적인 등' },
  { category: '장엄등', name: '지장삼존등', desc: '지장보살과 도명존자, 무독귀왕의 자비를 기리는 전통등' },
  { category: '장엄등', name: '첨성대등', desc: '신라 천문과학의 정수 첨성대의 석재 결을 섬세하게 살린 등' },
  { category: '장엄등', name: '소머리등', desc: '전통 민속 및 수호의 의미를 담은 특수 입체 조형등' },
  { category: '대형 조형물', name: '황룡사 9층 목탑 조형물', desc: '높이 8m 규모의 웅장한 목탑 골조 재현 야간 랜드마크' },
  { category: '행사 소품', name: 'A보드 (안내판 거치대)', desc: '행사장 동선 유도 및 국가유산 해설용 우드/메탈 스탠드' },
];

export const RENTAL_PROCESS = [
  { step: '01', title: '문의 접수', desc: '행사 날짜, 장소, 원하시는 품목 및 전시 규모를 전달해 주십니다.' },
  { step: '02', title: '일정 및 여건 확인', desc: '보유 품목 일정 예약 상태와 현장 전기·바닥 설치 여건을 사전 검토합니다.' },
  { step: '03', title: '견적 및 계약', desc: '설치·운영·철수 범위에 따른 투명한 공공 표준 견적서 발행 및 계약 체결.' },
  { step: '04', title: '설치 · 운영 · 철수', desc: '전문 기술팀이 현장으로 직접 운송하여 안전 점등을 완료하고 행사 종료 후 원상복구합니다.' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'wonhyo-art-festival-30',
    title: '제30회 원효예술제',
    period: '2026.10.17(토) 14:00~21:00',
    location: '경주 분황사',
    host: '원효학연구원 · 대한불교조계종 분황사',
    role: '시행',
    type: '행사',
    year: '2026',
    summary: '원효 스님의 우리말 이름은 「새벽」입니다. 그가 머물던 분황사가 하룻밤 문을 열고 탑돌이와 불빛으로 채워집니다.',
    description:
      '원효 스님의 우리말 이름은 「새벽」입니다. 그가 머물던 절이, 하룻밤 문을 엽니다. 분황사 경내에서 법요식과 공연, 체험, 마켓, 탑돌이와 점등이 이어집니다. 성림조형원은 야간 조명 설계와 탑돌이 전통등, 행사장 조형 연출을 맡았습니다.',
    highlightDetails: [
      '분황사 모전석탑 중심의 야간 탑돌이 연출',
      '전통등 점등 및 분황사 경내 야간 조명 큐레이션',
      '시민과 관광객이 함께하는 문화마켓 및 불교 예술 프로그램',
    ],
    imageTag: '분황사 모전석탑과 은은한 탑돌이 불빛',
  },
  {
    id: 'goun-cultural-festival-4',
    title: '제4회 고운문화제 만들기 체험',
    period: '2026.10.17(토)~10.18(일) 10:30~15:30',
    location: '의성 고운사',
    host: '수정사',
    role: '체험 운영',
    type: '체험',
    year: '2026',
    summary: '등갓에 그림을 그리고 손잡이 LED등으로 완성하는 「손잡이 전통등 만들기」 이틀간의 현장 운영.',
    description:
      '신라의 대학자 최치원의 호를 딴 천년고찰 고운사에서 관람객들이 직접 등갓에 고운사의 가을과 연꽃을 채색하고, 안전한 손잡이 LED 조명을 결합해 손에 쥐는 전통등을 완성하는 대중 체험을 총괄 운영했습니다.',
    highlightDetails: [
      '남녀노소 누구나 안전하게 만드는 손잡이 LED 전통등',
      '전통 문양 스텐실 및 자유 단청 채색 가이드',
      '이틀간 500명 이상의 가족 단위 관람객 참여',
    ],
    imageTag: '등갓에 채색된 단청 그림과 손잡이 LED등',
  },
  {
    id: 'shilla-cultural-festival-53',
    title: '제53회 신라문화제 청년작가존 「빛의 숲」',
    period: '2026.10.09(금)~10.11(일)',
    location: '경주 대릉원 일원 (금관총~서봉총 사이 숲)',
    host: '(재)경주문화재단',
    role: '수행',
    type: '축제',
    year: '2026',
    summary: '1921년 신라 금관이 처음 세상에 나온 금관총과 서봉총 사이 숲에, 네 시대의 유산을 담은 조명 오브제를 수놓았습니다.',
    description:
      '1921년 신라 금관이 처음 세상에 나온 금관총과 서봉총 사이 숲에, 네 시대의 유산을 담은 조명 오브제를 매달았습니다. 알(기원전 57년 박혁거세 탄생), 금관(5~6세기 신라 황금기), 첨성대(7세기 선덕여왕 천문), 황룡사 9층 목탑(866년 경문왕)의 네 지점을 시대 순서로 찾아가는 몰입형 야간 전시입니다.',
    highlightDetails: [
      '네 시대의 유산(알·금관·첨성대·9층목탑)을 상징하는 커스텀 조명 오브제',
      '고분군 사이 숲길의 자연 수목과 어우러지는 비침습형 친환경 설치',
      '야간 역사 산책로와 도슨트 연계 동선 구축',
    ],
    imageTag: '고분 사이 숲에 매달린 은은한 황금빛 오브제',
  },
  {
    id: 'hwangnyongsa-since-553',
    title: '황룡사 Since 553',
    period: '2026.08.26(수)~09.04(금) 중 5일, 06:00~10:00',
    location: '경주 황룡사지',
    host: '국가유산청 / 경상북도 · 경주시',
    role: '시행',
    type: '세계유산',
    year: '2026',
    summary: '새벽 6시, 과소(통행증)를 들고 여섯 관문을 지나며 황룡사를 기억하고 마음의 탑을 세우는 아침 힐링 여정.',
    description:
      '신라는 나라의 안녕을 염원하며 황룡사에 9층 목탑을 세웠습니다. 천사백 년이 지난 그 자리에서, 우리는 저마다 마음의 탑을 세웁니다. 새벽 여섯 시, 과소(통행증)를 들고 여섯 관문을 지나며 황룡사를 기억하고, 마지막 관문에서 마음수련으로 그 탑을 완성합니다.',
    highlightDetails: [
      '일(一) 황룡사의 흥망성쇠 — 통행증 교부 및 이야기 시작',
      '이(二) 인터랙티브 아트 콘텐츠 — 나무망치로 두드려 여는 유산의 벽',
      '삼(三) 경문왕 6년 전통등 — 삼국사기 기록 속의 등을 다시 밝히다',
      '사(四) 황룡사를 기억하는 향낭 만들기 — 손끝으로 담아가는 향기',
      '오(五) 태평성대 명상 — 9층 목탑 등 앞 잔디밭 아침 싱잉볼 명상',
      '육(六) 황룡사의 기록을 남기다 — 마음의 탑을 완결하는 서명',
    ],
    notice: '본 행사는 세계유산알리기 프로그램의 일환으로 국가유산청의 지원을 받아 추진되는 사업입니다.',
    link: 'https://hwangnyongsa-553.netlify.app/',
    imageTag: '황룡사지 잔디밭 9층 목탑 등 앞 아침 햇살과 명상',
  },
  {
    id: 'haeparang-night-healing-trip-2026',
    title: '2026 해파랑길 나이트 힐링트립',
    period: '2026.08.29(토)~08.30(일)',
    location: '경주 양남 주상절리 파도소리길 (읍천항 출발·종점)',
    host: '경주시 (주관·시행: 경주스마트미디어센터 · 성림조형원)',
    role: '주관 · 시행',
    type: '행사',
    year: '2026',
    summary: '「왕이 사는 바다, 경주」. 읍천항에서 파도소리길 4.5km를 걷는 야간 힐링 행사. 만파식적 대금과 어쿠스틱의 울림.',
    description:
      '「왕이 사는 바다, 경주」를 테마로 읍천항에서 출발해 천연기념물 주상절리 파도소리길을 왕복 4.5km 걷는 야간 힐링 프로그램입니다. 밤바다의 파도 소리 속에서 울려 퍼지는 만파식적 대금 연주와 어쿠스틱 버스킹이 함께하였으며, 이틀간 284명의 시민과 여행자가 참여했습니다.',
    highlightDetails: [
      '야간 안전을 위한 LED 안전등 및 전통 빛 오브제 설치',
      '천연기념물 주상절리 조망 포인트의 만파식적 대금 독주',
      '이틀간 284명 전원 무사고 완주 달성',
    ],
    imageTag: '주상절리 밤바다와 파도소리길을 걷는 참가자들의 불빛',
  },
  {
    id: 'hwangnyongsa-lantern-festival-2025',
    title: '2025 황룡사지 등축제',
    period: '2025.10.03(금)~10.05(일)',
    location: '경주 황룡사지 역사문화관 잔디광장',
    host: '국가유산청 / 경상북도 · 경주시',
    role: '시행',
    type: '세계유산',
    year: '2025',
    summary: '삼국사기 경문왕 6년(866년) 기록 속 등을 황룡사지에 1,159년 만에 다시 밝힌 세계유산 활용사업.',
    description:
      '삼국사기 신라본기에는 경문왕 6년(866년) 정월 보름에 황룡사에 거둥하여 등을 구경하고 잔치를 베풀었다는 기록이 있습니다. 그 역사적 기록을 바탕으로 광활한 황룡사지에 대형 해태등, 종등, 연꽃등 등 전통 장엄등을 다시 밝히고, 국악 공연과 시민 전통등 만들기 체험을 열었습니다.',
    highlightDetails: [
      '삼국사기 경문왕 6년 정월 보름 기록 고증 재현',
      '밤 잔디밭을 황금빛으로 물들인 대형 해태등·종등·연꽃등',
      '전통 공연과 시민 1,000명이 함께 밝힌 황룡사지의 밤',
    ],
    notice: '2025 세계유산 함께 누림 사업 (당시 명칭 세계유산 활용사업)',
    imageTag: '황룡사지 잔디밭에 불을 밝힌 대형 전통 해태등과 종등',
  },
];

export const JOGAK_SHOP_INFO = {
  title: '조각상점 — 경주를 쌓는 소품샵',
  motto: '경주의 국가유산, 손으로 직접 만들 수 있습니다',
  storeAddress: '경상북도 경주시 북정로 13-3',
  instagram: '@brickstore.gj',
  story:
    '유물은 땅에서 조각으로 나와, 발굴하는 사람이 하나씩 맞춥니다. 전통등은 한지를 조각내어 맞추고, 브릭도 조각을 맞춰 쌓지요. 조각을 맞추는 동안 그 유산을 조금 더 알게 됩니다.',
  substory:
    '성림조형원은 국가유산 정비 현장에서 일해온 사람들이 만든 회사입니다. 우리가 다루던 것을, 누구나 손으로 만들 수 있는 크기로 옮깁니다. 유산의 기억을 함께 되살립니다.',
};

export const LANTERN_KITS: LanternKit[] = [
  {
    id: 'dalhangari',
    name: '달항아리등',
    tagline: '달항아리, 손으로 직접 만들 수 있습니다.',
    contents: '특수 투광 필름 A4 3장 + 원목 LED 받침 (USB 1m 버튼형)',
    difficulty: '입문 (약 25분)',
    baseSpecs: '원목 원형 지름 10cm · 두께 2cm / USB 일체형 스위치',
    status: '판매중',
  },
  {
    id: 'cheongja',
    name: '고려청자등',
    tagline: '고려청자, 손으로 직접 만들 수 있습니다.',
    contents: '특수 투광 필름 A4 5장 + 원목 LED 받침 (USB 1m 버튼형)',
    difficulty: '중급 (약 40분)',
    baseSpecs: '원목 원형 지름 10cm · 두께 2cm / USB 일체형 스위치',
    status: '판매중',
  },
  {
    id: 'hwangnyongsa-pagoda-lamp',
    name: '황룡사 구층목탑등',
    tagline: '황룡사 구층목탑, 손으로 직접 만들 수 있습니다.',
    contents: '정밀 도안 한지/필름 + 원목 LED 받침 (USB 1m 버튼형)',
    difficulty: '고급 (약 60분)',
    baseSpecs: '원목 원형 지름 10cm · 두께 2cm / USB 일체형 스위치',
    status: '판매중',
  },
];

export const BRICK_SERIES: BrickItem[] = [
  {
    code: 'KY01',
    name: '석가탑',
    pieces: 535,
    description: '불국사 삼층석탑의 단정하고 균형 잡힌 비례를 호환 브릭으로 정밀하게 구현했습니다.',
    status: '곧 판매',
  },
  {
    code: 'KY02',
    name: '금관',
    pieces: 157,
    description: '신라 고분에서 출토된 황금빛 출(出)자형 입식과 사슴뿔 문양을 책상 위 크기로 담았습니다.',
    status: '판매중',
  },
  {
    code: 'KY03',
    name: '신라 수막새',
    pieces: 38,
    description: '「신라의 미소」로 불리는 얼굴무늬 수막새의 온화한 곡선과 질감을 브릭으로 조립합니다.',
    status: '판매중',
  },
  {
    code: 'KY04',
    name: '다보탑',
    pieces: 912,
    description: '완성 높이 약 30cm의 웅장한 디테일. 지금 남아 있는 돌사자 한 마리까지 정밀 복원 수록.',
    height: '약 30cm',
    status: '곧 판매',
  },
  {
    code: 'KY05',
    name: '첨성대&대릉원',
    pieces: 95,
    description: '동양 최고(最古) 천문대 첨성대와 부드러운 능선의 대릉원 고분 풍경을 한 손에 들어오는 미니어처로 완성.',
    status: '판매중',
  },
];

export const HISTORY_ITEMS = [
  { year: '2010', text: '국가유산 정비 현장에서 일을 시작함 (구성원 현장 경력의 시작)' },
  { year: '2021.01.19', text: '성림조형원 사회적협동조합 설립 (경주)' },
  { year: '2025.10', text: '황룡사지 등축제 시행 (세계유산 함께 누림 사업)' },
  { year: '2026', text: '조각상점 문 엶 (경주 북정로 13-3)' },
  { year: '2026.08~09', text: '황룡사 Since 553 운영 (2026 세계유산 함께 누림 사업 황룡사지구)' },
  { year: '2026.08', text: '2026 해파랑길 나이트 힐링트립 주관·시행' },
  { year: '2026.09', text: 'K헤리티지 브릭 시리즈 와디즈 펀딩으로 첫 판매' },
  { year: '2026.10', text: '제53회 신라문화제 청년작가존 「빛의 숲」 수행' },
  { year: '2026.10', text: '제30회 원효예술제 시행' },
  { year: '2026.10', text: '제4회 고운문화제 만들기 체험 운영' },
];

export const FAQS = [
  {
    q: '행사 기획이나 조형물 제작 의뢰는 얼마나 전에 신청해야 하나요?',
    a: '조형물 신규 제작이나 축제 기획은 통상 행사 1~3개월 전 협의를 권장합니다. 기존 보유 중인 전통등 임대의 경우 일정 확인 후 행사 1~2주 전에도 긴급 배차가 가능할 수 있으니 문의 양식이나 유선으로 연락 주시면 빠르게 확인해 드립니다.',
  },
  {
    q: '전통등 임대 시 운송과 현장 설치, 철수까지 모두 포함되나요?',
    a: '네, 성림조형원은 직접생산확인증명서를 보유한 전문 법인으로 안전한 특수 차량 운송부터 현장 바닥 고정, 우천 대비 방수 전기 배선, 개막 점등 확인, 행사 후 원상 복구 철수까지 전 과정을 전담 기술팀이 책임집니다.',
  },
  {
    q: '체험·교육 프로그램은 전국 출강이 가능한가요?',
    a: '네, 경주 본사를 기점으로 대구·경북권은 물론 전국 지자체 축제, 국립 박물관, 문화원, 초·중·고교 및 대학교 특강에 출강하고 있습니다. 유네스코 연등회 전수교육 강사 등 전문 인력이 현장 인원수에 맞춘 안전 키트와 함께 방문합니다.',
  },
  {
    q: '조각상점의 빛조각 전통등과 K헤리티지 브릭은 관공서 대량 납품이 가능한가요?',
    a: '네, 지자체 기념품, 외국인 귀빈 선물, 박물관 문화상품 숍 입점 및 기관 대량 구매(기프트 세트 구성, 로고 각인 패키징 협의)가 가능합니다. 네이버 스마트스토어 온라인 단건 구매 또는 대량 주문 견적 문의를 통해 진행하실 수 있습니다.',
  },
  {
    q: '공공기관 수의계약이나 공식 입찰 자격 요건이 갖추어져 있나요?',
    a: '성림조형원 사회적협동조합은 기획·제작 직접생산확인증명서를 보유하고 있으며, 문화재 정비 현장 15년 경력 및 국가유산청 세계유산 사업 수행 이력을 갖춘 공식 사회적협동조합 법인으로 공공 조달 요건을 충족합니다.',
  },
];

export const MULTI_LANG = {
  ko: {
    nav: { home: '홈', about: '성림소개', work: '사업분야', projects: '프로젝트', shop: '조각상점', contact: '소식·문의' },
    heroTitle: '국가유산을 다루던 사람들이,\n기획하고 만들고 운영합니다.',
    heroSubtitle: '유산의 기억을 함께 되살립니다',
    primaryCta: '온라인 구매',
    inquiryBtn: '기획·제작 문의',
    viewProjects: '지난 프로젝트 보기',
  },
  en: {
    nav: { home: 'Home', about: 'About', work: 'Services', projects: 'Projects', shop: 'Jogak Shop', contact: 'Contact' },
    heroTitle: 'We plan, produce, and operate —\nworking only with Korean national heritage and traditional arts.',
    heroSubtitle: 'Seongnim Johyeongwon Social Cooperative was founded in 2021 in Gyeongju by people who have worked on heritage conservation sites since 2010.',
    primaryCta: 'Shop Online',
    inquiryBtn: 'Request Proposal',
    viewProjects: 'View Projects',
  },
  ja: {
    nav: { home: 'ホーム', about: '聖林紹介', work: '事業分野', projects: '事業実績', shop: '彫刻商店', contact: 'お問い合わせ' },
    heroTitle: '文化遺産を守り継ぐ職人が、\n企画し、制作し、現場を運営します。',
    heroSubtitle: '2010年から慶州の国家遺産現場で伝統技術を培った専門家による社会적協同組合です。',
    primaryCta: 'オンライン購入',
    inquiryBtn: '企画・制作相談',
    viewProjects: '過去の実績を見る',
  },
  zh: {
    nav: { home: '首页', about: '关于圣林', work: '业务领域', projects: '项目业绩', shop: '雕刻商店', contact: '咨询合作' },
    heroTitle: '传承国家文化遗产的工匠，\n集策划、制作与现场运营于一体。',
    heroSubtitle: '自2010年深耕韩国庆州文化遗产一线，以丹青、传统灯与当代艺术赋活历史记忆。',
    primaryCta: '在线选购',
    inquiryBtn: '策划与制作咨询',
    viewProjects: '浏览过往项目',
  },
};
