import React, { useMemo } from 'react';
import { UserSelection } from '../types';
import { getGuideContent } from '../services/guideService';

interface ResultPageProps {
  selection: UserSelection;
  onReset: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ selection, onReset }) => {
  const content = useMemo(() => getGuideContent(selection), [selection]);

  return (
    <div className="bg-slate-50 min-h-screen pb-12 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 px-6 pt-16 pb-12 rounded-b-[2.5rem] shadow-xl text-white text-center relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border border-white/10">
            Action Protocol
          </div>
          <h1 className="text-2xl font-black mb-4 leading-tight">
            {content.title}
          </h1>
          <p className="text-blue-100 text-sm leading-relaxed max-w-xs mx-auto font-medium">
            {content.summary}
          </p>
        </div>
      </div>

      <div className="px-6 -mt-6 max-w-md mx-auto relative z-20">
        
        {/* Actions Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-7 mb-6">
          <h2 className="flex items-center text-lg font-black text-slate-800 mb-5 pb-3 border-b border-slate-50">
            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 text-lg">💡</span> 
            핵심 행동 요령
          </h2>
          <ul className="space-y-5">
            {content.actions.map((action, idx) => (
              <li key={idx} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-black mr-3.5 mt-0.5 shadow-sm shadow-blue-200">
                  {idx + 1}
                </div>
                <p className="text-slate-700 text-sm font-semibold leading-relaxed tracking-tight">
                  {action}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-7 mb-6">
          <h2 className="flex items-center text-lg font-black text-slate-800 mb-5 pb-3 border-b border-slate-50">
            <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-lg">📞</span> 
            도움 요청처
          </h2>
          <div className="grid grid-cols-1 gap-3.5">
            {content.contacts.map((contact, idx) => (
              <a 
                key={idx}
                href={`tel:${contact.phone}`} 
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all group"
              >
                <div>
                  <div className="font-bold text-slate-800 group-hover:text-blue-700">{contact.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{contact.desc}</div>
                </div>
                <div className="text-blue-600 font-black text-xs bg-white px-3 py-2 rounded-xl shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {contact.phone}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Legal Basis */}
        <div className="bg-slate-100/50 rounded-2xl p-5 mb-8 border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-4 bg-slate-300 rounded-full"></span>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Legal Information</h3>
          </div>
          <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
            본 가이드의 법적 근거: <span className="text-slate-600 underline decoration-slate-300">{content.legalBasis}</span> 및 최신 교육부 사안처리 지침
          </p>
        </div>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black shadow-2xl hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <span>처음부터 다시 하기</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResultPage;