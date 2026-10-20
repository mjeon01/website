import React, { useState, useEffect, useRef } from 'react';
import { Camera, Image as ImageIcon, RotateCcw } from 'lucide-react';

export const FullBleedSunriseBg: React.FC<{
  customImageUrl?: string;
  className?: string;
}> = ({ customImageUrl, className = '' }) => {
  const [imgSrc, setImgSrc] = useState<string>('/gyeongju_sunrise.jpg');
  const [hasUserCustom, setHasUserCustom] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user previously uploaded their exact original file in the browser
    const stored = localStorage.getItem('seonglim_hero_image');
    if (stored) {
      setImgSrc(stored);
      setHasUserCustom(true);
    } else if (customImageUrl) {
      setImgSrc(customImageUrl);
    } else {
      // Default to the actual uploaded photograph file
      setImgSrc('/gyeongju_sunrise.jpg');
    }
  }, [customImageUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImgSrc(result);
          setHasUserCustom(true);
          try {
            localStorage.setItem('seonglim_hero_image', result);
          } catch (err) {
            console.warn('Image storage limit reached in localStorage:', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('seonglim_hero_image');
    setImgSrc('/gyeongju_sunrise.jpg');
    setHasUserCustom(false);
  };

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden select-none ${className}`}>
      {/* 1. Real Photograph Edge-to-Edge Full-Bleed Image (NO SVG drawing) */}
      <img
        src={imgSrc}
        alt="경주 첨성대 및 역사유적지구 항공 일출"
        className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        referrerPolicy="no-referrer"
        onError={() => {
          // Fallback to Korean filename or default sunrise photo
          if (imgSrc !== '/경주_항공_일출.jpg' && imgSrc !== '/cheomseongdae_photo.jpg') {
            setImgSrc('/cheomseongdae_photo.jpg');
          }
        }}
      />

      {/* 2. Editorial Atmosphere Scrim (Warm morning dawn vignette so text has pristine contrast) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[#162720]/25 mix-blend-multiply pointer-events-none" />

      {/* 3. Subtle Photo Attribution & Direct File Upload/Replacement trigger */}
      <div className="absolute top-24 right-4 sm:right-8 z-20 flex items-center gap-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          id="hero-image-uploader"
        />

        <label
          htmlFor="hero-image-uploader"
          className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white/80 hover:text-white text-[11px] font-gothic rounded-xs border border-white/20 transition-all shadow-sm"
          title="직접 촬영하신 원본 사진 파일(경주_항공_일출.jpg 등)을 바로 적용할 수 있습니다"
        >
          <Camera className="w-3.5 h-3.5 text-[#F8E2B2]" />
          <span className="hidden sm:inline">
            {hasUserCustom ? '사진 변경됨 (다시 변경)' : '내 원본 사진 적용'}
          </span>
          <span className="sm:hidden">사진 변경</span>
        </label>

        {hasUserCustom && (
          <button
            onClick={handleReset}
            className="p-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white/70 hover:text-white rounded-xs border border-white/20 text-[11px]"
            title="기본 사진으로 복원"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};
