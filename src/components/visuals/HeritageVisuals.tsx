import React from 'react';

// Hero Sunrise over Cheomseongdae & Gyeongju Historical Valley
export const GyeongjuSunriseVisual: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Dynamic atmospheric sky gradient mimicking the uploaded sunrise photo */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#F5C27E] via-[#F8D9A8] to-[#E3DAC9]"
        style={{
          background: 'linear-gradient(180deg, #D4884B 0%, #E8A869 22%, #F9DCB0 45%, #FBF6EE 68%, #DFE8D8 85%, #8B9B7B 100%)'
        }}
      />
      
      {/* Sun glow orb */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-white via-[#FFF5DE] to-[#FFE2B0] blur-[42px] opacity-95" />
      <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white blur-xl opacity-90" />

      {/* Atmospheric Sunrise SVG Illustration */}
      <svg
        viewBox="0 0 1200 680"
        className="absolute inset-0 w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mistGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF7E6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFF7E6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mountain1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C9B49E" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#A89480" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="mountain2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8C8B76" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#5E674F" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="parkField" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9CA87F" />
            <stop offset="30%" stopColor="#7B8C5C" />
            <stop offset="70%" stopColor="#556942" />
            <stop offset="100%" stopColor="#37472A" />
          </linearGradient>
          <linearGradient id="stoneCircle" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EDE6D8" />
            <stop offset="100%" stopColor="#C8BCAC" />
          </linearGradient>
          <linearGradient id="towerShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A4843" />
            <stop offset="100%" stopColor="#2D2B27" />
          </linearGradient>
          <radialGradient id="sunBurst" cx="50%" cy="38%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#FED7AA" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FED7AA" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sun flare burst */}
        <rect x="0" y="0" width="1200" height="680" fill="url(#sunBurst)" />

        {/* Distant mountains silhouette */}
        <path
          d="M0 310 Q 180 280, 360 300 T 720 285 T 1050 310 T 1200 305 L 1200 360 L 0 360 Z"
          fill="url(#mountain1)"
          opacity="0.65"
        />
        <path
          d="M0 330 Q 240 295, 480 320 T 960 305 T 1200 325 L 1200 400 L 0 400 Z"
          fill="url(#mountain2)"
          opacity="0.8"
        />

        {/* Morning fog / valley mist */}
        <rect x="0" y="325" width="1200" height="65" fill="url(#mistGrad)" />

        {/* Rolling historic park landscape */}
        <path
          d="M0 370 Q 250 365, 520 375 T 1000 365 T 1200 375 L 1200 680 L 0 680 Z"
          fill="url(#parkField)"
        />

        {/* Ancient Tumuli (Grave mounds) in the distance */}
        <ellipse cx="280" cy="382" rx="90" ry="24" fill="#6B7C50" opacity="0.85" />
        <ellipse cx="410" cy="386" rx="70" ry="18" fill="#5E6F45" opacity="0.9" />
        <ellipse cx="980" cy="380" rx="110" ry="26" fill="#637449" opacity="0.85" />
        <ellipse cx="1090" cy="388" rx="85" ry="20" fill="#55653E" opacity="0.9" />

        {/* Cheomseongdae Circular Plaza (Matching the aerial photo) */}
        <ellipse cx="600" cy="510" rx="210" ry="85" fill="url(#stoneCircle)" stroke="#B0A290" strokeWidth="2" />
        <ellipse cx="600" cy="510" rx="205" ry="82" fill="none" stroke="#8C7D6A" strokeWidth="1" strokeDasharray="5,4" />

        {/* Outer concentric fence and walking track */}
        <ellipse cx="600" cy="515" rx="250" ry="102" fill="none" stroke="#E2DACB" strokeWidth="16" opacity="0.45" />

        {/* Pine trees surrounding Cheomseongdae */}
        <g opacity="0.95">
          {/* Left grove */}
          <ellipse cx="430" cy="460" rx="28" ry="16" fill="#3D4D2C" />
          <ellipse cx="410" cy="475" rx="34" ry="18" fill="#2E3C20" />
          <ellipse cx="460" cy="485" rx="26" ry="14" fill="#364525" />
          
          {/* Right grove */}
          <ellipse cx="760" cy="465" rx="32" ry="17" fill="#3A4A29" />
          <ellipse cx="790" cy="480" rx="36" ry="19" fill="#2D3A1F" />
          <ellipse cx="740" cy="495" rx="25" ry="13" fill="#354424" />

          {/* Foreground park trees */}
          <ellipse cx="320" cy="560" rx="48" ry="26" fill="#2C3B1E" />
          <ellipse cx="880" cy="570" rx="55" ry="28" fill="#263419" />
        </g>

        {/* Cheomseongdae Tower itself at the center of the circular plaza */}
        {/* Shadow */}
        <ellipse cx="628" cy="515" rx="38" ry="12" fill="#000000" opacity="0.35" />
        
        {/* Base stone foundation */}
        <rect x="582" y="500" width="36" height="6" rx="1" fill="#8E8578" stroke="#5E564A" strokeWidth="0.8" />
        <rect x="584" y="496" width="32" height="5" rx="1" fill="#A49A8C" stroke="#5E564A" strokeWidth="0.8" />
        
        {/* Cylindrical curved body layers (27 stone tiers stylized) */}
        <path
          d="M587 496 C 586 460, 589 425, 592 410 L 608 410 C 611 425, 614 460, 613 496 Z"
          fill="#B5AAA0"
          stroke="#5C5549"
          strokeWidth="1"
        />
        {/* Shadow gradient on the right side of the tower */}
        <path
          d="M600 496 C 600 460, 604 425, 608 410 L 608 410 C 611 425, 614 460, 613 496 Z"
          fill="url(#towerShadow)"
          opacity="0.32"
        />

        {/* Central Observation Window (South facing) */}
        <rect x="597" y="445" width="8" height="12" rx="1" fill="#201E1B" />

        {/* Top square interlocking stone structure (Jeongjaseok) */}
        <rect x="589" y="405" width="22" height="5" fill="#93897C" stroke="#484238" strokeWidth="0.8" />
        <rect x="591" y="401" width="18" height="4" fill="#B1A79B" stroke="#484238" strokeWidth="0.8" />

        {/* Gentle morning light ray overlay */}
        <polygon points="600,200 480,680 720,680" fill="url(#sunBurst)" opacity="0.3" />
      </svg>

      {/* Subtle photographic film grain / parchment touch */}
      <div className="absolute inset-0 bg-[#2D5A4C]/10 mix-blend-overlay pointer-events-none" />
      {/* Editorial Bottom Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
    </div>
  );
};

// Hwangnyongsa Traditional Lantern Night Visual
export const LanternFestivalVisual: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden bg-[#0A110E] ${className}`}>
      {/* Deep twilight sky & distant silhouette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#091512] via-[#0E201C] to-[#040807]" />
      
      {/* Ambient warm lantern glow orbs */}
      <div className="absolute top-[35%] left-[25%] w-72 h-72 rounded-full bg-[#E5A83B]/25 blur-[50px]" />
      <div className="absolute top-[40%] right-[20%] w-80 h-80 rounded-full bg-[#D46B28]/20 blur-[60px]" />
      <div className="absolute top-[20%] left-[55%] w-60 h-60 rounded-full bg-[#F3C860]/20 blur-[45px]" />

      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="haetaeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE8B2" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E2872A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A84310" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="lotusGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF0E6" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#DE5A7D" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6E1E34" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bellGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#CCA03B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6E4C0D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Distant Hwangnyongsa 9-story Pagoda Silhouette against the starry dusk */}
        <g opacity="0.45">
          <rect x="382" y="90" width="36" height="190" fill="#050C0A" />
          {/* Eaves tiers */}
          {[100, 118, 136, 154, 172, 190, 208, 226, 244].map((y, i) => (
            <path
              key={i}
              d={`M ${350 - i * 4} ${y} L ${450 + i * 4} ${y} L ${435 + i * 3} ${y - 8} L ${365 - i * 3} ${y - 8} Z`}
              fill="#06120F"
            />
          ))}
          {/* Pagoda Finial */}
          <line x1="400" y1="50" x2="400" y2="90" stroke="#06120F" strokeWidth="4" />
          <circle cx="400" cy="60" r="6" fill="#CCA03B" opacity="0.8" />
        </g>

        {/* Dark night grass field */}
        <path d="M0 320 Q 350 300, 800 320 L 800 500 L 0 500 Z" fill="#040907" />
        <ellipse cx="400" cy="420" rx="380" ry="70" fill="#07130E" />

        {/* Central Traditional Lantern 1: Mythical Haetae / Lion Lantern (Left-Center) */}
        <g transform="translate(180, 260)">
          {/* Inner Light Glow */}
          <circle cx="70" cy="70" r="90" fill="url(#haetaeGlow)" />
          {/* Handcrafted Hanji Body Outline */}
          <path
            d="M 30 110 C 20 80, 45 40, 75 40 C 95 40, 115 55, 120 75 C 135 70, 150 85, 145 105 C 140 120, 115 125, 95 125 C 60 125, 40 120, 30 110 Z"
            fill="#FEE6B3"
            stroke="#C06214"
            strokeWidth="2.5"
            opacity="0.9"
          />
          {/* Haetae Horn & Mane Details */}
          <path d="M 65 40 Q 60 20, 75 15 Q 85 22, 80 40" fill="#E88225" />
          <circle cx="60" cy="62" r="5" fill="#3D1A05" />
          <path d="M 85 55 Q 105 50, 115 65" stroke="#C06214" strokeWidth="2" fill="none" />
          {/* Traditional Ribs (Iron wire skeleton showing through Hanji) */}
          <path d="M 45 90 Q 75 70, 105 85" stroke="#D9771E" strokeWidth="1.5" strokeDasharray="3,2" fill="none" opacity="0.7" />
          <path d="M 55 110 Q 80 90, 120 100" stroke="#D9771E" strokeWidth="1.5" strokeDasharray="3,2" fill="none" opacity="0.7" />
        </g>

        {/* Central Traditional Lantern 2: Sacred Temple Bell Lantern (Center) */}
        <g transform="translate(350, 230)">
          <circle cx="65" cy="80" r="95" fill="url(#bellGlow)" />
          {/* Bell Body */}
          <path
            d="M 40 40 Q 65 30, 90 40 C 105 60, 110 110, 115 140 L 15 140 C 20 110, 25 60, 40 40 Z"
            fill="#FFF1C2"
            stroke="#A37517"
            strokeWidth="3"
            opacity="0.92"
          />
          {/* Flying Apsaras (비천상) Dangcho motif */}
          <path d="M 45 75 Q 65 60, 85 75 Q 65 90, 45 75" fill="#E5AA30" opacity="0.8" />
          <path d="M 50 105 Q 65 95, 80 105" stroke="#A37517" strokeWidth="2" fill="none" />
          {/* Ringing Rim */}
          <rect x="10" y="138" width="110" height="10" rx="3" fill="#D69719" stroke="#7A5308" strokeWidth="2" />
        </g>

        {/* Central Traditional Lantern 3: Radiant Hanji Lotus Lantern (Right) */}
        <g transform="translate(540, 270)">
          <circle cx="65" cy="65" r="85" fill="url(#lotusGlow)" />
          {/* Lotus Petals layered */}
          <path d="M 65 15 C 45 40, 40 70, 65 95 C 90 70, 85 40, 65 15 Z" fill="#FFAEC8" stroke="#B82A52" strokeWidth="2" opacity="0.9" />
          <path d="M 30 40 C 20 65, 30 85, 55 95 C 65 80, 50 55, 30 40 Z" fill="#F882A5" stroke="#9A1D41" strokeWidth="2" opacity="0.85" />
          <path d="M 100 40 C 110 65, 100 85, 75 95 C 65 80, 80 55, 100 40 Z" fill="#F882A5" stroke="#9A1D41" strokeWidth="2" opacity="0.85" />
          {/* Base Calyx */}
          <path d="M 40 95 Q 65 110, 90 95 L 85 115 Q 65 125, 45 115 Z" fill="#3D7263" stroke="#1D4338" strokeWidth="2" />
        </g>

        {/* Ground light reflections */}
        <ellipse cx="250" cy="405" rx="80" ry="18" fill="#E2872A" opacity="0.25" />
        <ellipse cx="415" cy="400" rx="85" ry="16" fill="#CCA03B" opacity="0.3" />
        <ellipse cx="605" cy="400" rx="75" ry="16" fill="#DE5A7D" opacity="0.2" />
      </svg>

      {/* Scrim overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
    </div>
  );
};

// Silla Cultural Festival: Forest of Light (빛의 숲) Visual
export const LightForestVisual: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden bg-[#0D1814] ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1713] via-[#10241E] to-[#060D0B]" />
      
      {/* Hanging light orbs & geometry */}
      <div className="absolute top-[20%] left-[20%] w-64 h-64 rounded-full bg-[#E5B558]/20 blur-[50px]" />
      <div className="absolute top-[30%] right-[30%] w-72 h-72 rounded-full bg-[#6EB098]/15 blur-[55px]" />

      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ancient Pine Trunks of Daereungwon */}
        <g stroke="#1A2D25" strokeWidth="24" strokeLinecap="round" opacity="0.85">
          <line x1="120" y1="0" x2="140" y2="500" />
          <line x1="280" y1="0" x2="260" y2="500" />
          <line x1="520" y1="0" x2="545" y2="500" />
          <line x1="700" y1="0" x2="680" y2="500" />
        </g>
        {/* Branches */}
        <g stroke="#162720" strokeWidth="10" strokeLinecap="round" opacity="0.75">
          <path d="M 130 180 Q 200 120, 280 150" fill="none" />
          <path d="M 530 140 Q 620 90, 690 130" fill="none" />
          <path d="M 270 240 Q 380 200, 480 230" fill="none" />
        </g>

        {/* Suspended Light Objects representing 4 Eras: Egg, Crown, Cheomseongdae, 9-story Tower */}
        
        {/* 1. The Primordial Egg (알 - 기원전 57년) */}
        <g transform="translate(200, 160)">
          <line x1="30" y1="-80" x2="30" y2="0" stroke="#FFF7DE" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <circle cx="30" cy="35" r="45" fill="#FFE29A" opacity="0.25" filter="blur(10px)" />
          <ellipse cx="30" cy="35" rx="26" ry="36" fill="#FFF2CE" stroke="#DFAC41" strokeWidth="2" opacity="0.9" />
          <ellipse cx="26" cy="28" rx="8" ry="14" fill="#FFFFFF" opacity="0.6" />
        </g>

        {/* 2. Silla Golden Crown (금관 - 5~6세기) */}
        <g transform="translate(360, 180)">
          <line x1="40" y1="-100" x2="40" y2="0" stroke="#FFF7DE" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <circle cx="40" cy="30" r="55" fill="#FFCF55" opacity="0.3" filter="blur(14px)" />
          {/* Stylized Golden Antlers & Branching Crown Elements */}
          <path
            d="M 15 50 L 15 20 L 25 20 L 25 30 L 35 10 L 45 10 L 45 50 L 55 10 L 65 10 L 55 30 L 65 20 L 65 50 Z"
            fill="#FFE885"
            stroke="#C48E19"
            strokeWidth="2"
          />
          {/* Dangling jade Gogok */}
          <circle cx="20" cy="55" r="4" fill="#6EE7B7" />
          <circle cx="60" cy="55" r="4" fill="#6EE7B7" />
        </g>

        {/* 3. Cheomseongdae Light Geometry (첨성대 - 7세기) */}
        <g transform="translate(580, 170)">
          <line x1="30" y1="-90" x2="30" y2="0" stroke="#FFF7DE" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <circle cx="30" cy="35" r="50" fill="#7EE7C7" opacity="0.25" filter="blur(12px)" />
          <path
            d="M 20 55 C 18 35, 22 20, 24 15 L 36 15 C 38 20, 42 35, 40 55 Z"
            fill="#D5F5E3"
            stroke="#27AE60"
            strokeWidth="2"
          />
          <rect x="22" y="10" width="16" height="4" fill="#A9DFBF" stroke="#1E8449" strokeWidth="1" />
        </g>

        {/* Forest floor illuminated pathway */}
        <path d="M 0 420 Q 400 370, 800 420 L 800 500 L 0 500 Z" fill="#06120D" />
        <ellipse cx="400" cy="460" rx="220" ry="25" fill="#FFEAA7" opacity="0.15" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

// Jogak Shop - Moon Jar (달항아리) Traditional Lantern
export const MoonJarVisual: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden bg-[#F6F3EC] flex items-center justify-center ${className}`}>
      {/* Studio limestone backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F3] via-[#EFECE3] to-[#E3DED2]" />
      
      {/* Warm internal lantern glow */}
      <div className="absolute top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#FFEAC2] blur-[38px] opacity-85" />
      <div className="absolute top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-[#FFF7E8] blur-xl opacity-95" />

      <svg
        viewBox="0 0 400 400"
        className="relative z-10 w-full max-w-[340px] max-h-[340px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="jarGlow" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FFF4DE" />
            <stop offset="85%" stopColor="#F5E4C4" />
            <stop offset="100%" stopColor="#E0CA9F" />
          </radialGradient>
          <linearGradient id="woodBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8C6347" />
            <stop offset="50%" stopColor="#6E4A32" />
            <stop offset="100%" stopColor="#4A3120" />
          </linearGradient>
        </defs>

        {/* Table cast shadow */}
        <ellipse cx="200" cy="340" rx="110" ry="22" fill="#000000" opacity="0.14" />
        <ellipse cx="200" cy="336" rx="85" ry="14" fill="#000000" opacity="0.2" />

        {/* Natural Round Wood Stand (원목 LED 받침 지름 10cm · 두께 2cm) */}
        <path
          d="M 125 315 C 125 306, 275 306, 275 315 L 275 330 C 275 339, 125 339, 125 330 Z"
          fill="url(#woodBase)"
          stroke="#402919"
          strokeWidth="1.5"
        />
        <ellipse cx="200" cy="315" rx="75" ry="12" fill="#A47756" stroke="#402919" strokeWidth="1" />
        
        {/* Brass USB Push Switch on the wood base */}
        <circle cx="245" cy="323" r="3.5" fill="#E5C158" stroke="#876615" strokeWidth="0.8" />

        {/* The Moon Jar (달항아리) Body */}
        {/* Soft, gently asymmetrical organic curvature celebrating Joseon white porcelain */}
        <path
          d="M 165 140 
             C 145 138, 120 170, 115 210 
             C 110 250, 135 295, 160 312 
             L 240 312 
             C 265 295, 290 250, 285 210 
             C 280 170, 255 138, 235 140 
             Z"
          fill="url(#jarGlow)"
          stroke="#CEBC9A"
          strokeWidth="2"
        />

        {/* Mouth rim */}
        <ellipse cx="200" cy="140" rx="35" ry="7" fill="#FFFBF2" stroke="#CEBC9A" strokeWidth="1.8" />
        <ellipse cx="200" cy="140" rx="28" ry="4" fill="#FFE5B3" opacity="0.6" />

        {/* Subtle translucent folding facet lines of the DIY film/hanji assembly kit */}
        <path d="M 160 144 L 140 215 L 170 310" stroke="#C8B38E" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.6" />
        <path d="M 200 147 L 200 220 L 200 312" stroke="#C8B38E" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.6" />
        <path d="M 240 144 L 260 215 L 230 310" stroke="#C8B38E" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.6" />

        {/* Soft light halo highlighting */}
        <path
          d="M 135 180 C 130 205, 132 235, 140 260"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};

// K-Heritage Brick (다보탑 & 첨성대 브릭) Visual
export const KHeritageBrickVisual: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden bg-[#F2EFE8] flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#E6E1D5] via-[#F4F1EA] to-[#FCFAF6]" />

      <svg
        viewBox="0 0 400 400"
        className="relative z-10 w-full max-w-[340px] max-h-[340px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brickLight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#DFD9CD" />
            <stop offset="100%" stopColor="#B6AC9C" />
          </linearGradient>
          <linearGradient id="brickTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FAF7F0" />
            <stop offset="100%" stopColor="#E2DCD0" />
          </linearGradient>
          <linearGradient id="brickDark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9C9281" />
            <stop offset="100%" stopColor="#7E7464" />
          </linearGradient>
        </defs>

        {/* Pedestal Shadow */}
        <ellipse cx="200" cy="355" rx="130" ry="22" fill="#000000" opacity="0.12" />

        {/* Museum Exhibition Plinth */}
        <rect x="70" y="340" width="260" height="15" rx="2" fill="#D3CBC0" stroke="#9A9082" strokeWidth="1" />
        <polygon points="70,340 100,328 330,328 300,340" fill="#E8E3DA" />

        {/* Dabotap Miniature Brick Model (KY04 - 912 pieces) */}
        {/* Tier 1: Wide Foundation Stairs & Four Entrances */}
        <rect x="130" y="280" width="140" height="28" fill="url(#brickLight)" stroke="#5B5347" strokeWidth="1" />
        {/* Brick studs pattern on top */}
        {[145, 170, 195, 220, 245].map((x, i) => (
          <circle key={i} cx={x} cy="280" r="3" fill="#FAF7F0" stroke="#7A7061" strokeWidth="0.8" />
        ))}

        {/* Reconstructed Stone Lion Figure (지금 남아 있는 돌사자 한 마리 재현) */}
        <rect x="140" y="268" width="12" height="12" rx="1" fill="#887E6E" stroke="#4D463B" strokeWidth="0.8" />
        <circle cx="146" cy="265" r="4" fill="#A89E8E" />

        {/* Tier 2: Four Pillars & Open Chamber */}
        <rect x="155" y="225" width="14" height="45" fill="url(#brickDark)" stroke="#4A4337" strokeWidth="1" />
        <rect x="231" y="225" width="14" height="45" fill="url(#brickDark)" stroke="#4A4337" strokeWidth="1" />
        <rect x="160" y="215" width="80" height="10" fill="url(#brickLight)" stroke="#4A4337" strokeWidth="1" />

        {/* Tier 3: Octagonal Railing & Bamboo Pillars */}
        <polygon points="150,205 165,190 235,190 250,205 150,205" fill="url(#brickTop)" stroke="#4A4337" strokeWidth="1" />
        <rect x="175" y="165" width="50" height="25" fill="url(#brickLight)" stroke="#4A4337" strokeWidth="1" />

        {/* Tier 4: Lotus Blossom Eaves Roof */}
        <polygon points="135,165 200,140 265,165" fill="url(#brickLight)" stroke="#4A4337" strokeWidth="1.2" />
        <polygon points="135,165 200,140 200,165" fill="#FAF7F0" opacity="0.6" />

        {/* Tier 5: Finial (Sangnyunbu) Metal Spire */}
        <line x1="200" y1="140" x2="200" y2="85" stroke="#C49A45" strokeWidth="2.5" />
        <circle cx="200" cy="125" r="6" fill="#ECC265" stroke="#8A6B22" strokeWidth="0.8" />
        <circle cx="200" cy="110" r="5" fill="#ECC265" stroke="#8A6B22" strokeWidth="0.8" />
        <circle cx="200" cy="98" r="4" fill="#ECC265" stroke="#8A6B22" strokeWidth="0.8" />
        <polygon points="200,82 196,90 204,90" fill="#ECC265" />

        {/* Small Cheomseongdae Miniature (KY05) standing alongside */}
        <g transform="translate(65, 55)">
          <path d="M 235 240 C 233 220, 235 205, 237 195 L 247 195 C 249 205, 251 220, 249 240 Z" fill="#D3C9BC" stroke="#5A5245" strokeWidth="0.8" />
          <rect x="238" y="210" width="5" height="7" fill="#3B352C" />
          <rect x="234" y="192" width="16" height="3" fill="#ECE5DA" stroke="#5A5245" strokeWidth="0.6" />
        </g>
      </svg>
    </div>
  );
};
