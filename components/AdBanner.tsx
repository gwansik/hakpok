import React from 'react';

interface AdBannerProps {
  location: 'footer' | 'content';
}

const AdBanner: React.FC<AdBannerProps> = ({ location }) => {
  // 사용자의 요청에 따라 광고 영역을 임시로 주석 처리함 (나중에 필요 시 주석 해제)
  return null;
  /*
  return (
    <div 
      className={`
        w-full bg-slate-100 border border-slate-200 
        flex flex-col items-center justify-center text-slate-400 text-sm
        ${location === 'footer' ? 'h-[60px] fixed bottom-0 left-0 z-50' : 'h-[100px] my-6 rounded-lg'}
      `}
    >
      <span className="font-semibold">광고 영역 ({location === 'footer' ? '하단 고정' : '콘텐츠 중간'})</span>
      <span className="text-xs">Google AdSense</span>
    </div>
  );
  */
};

export default AdBanner;