import React, { useMemo } from 'react';
import { UserSelection } from '../types';
import { getGuideContent } from '../services/guideService';
import AdBanner from './AdBanner';

interface ResultPageProps {
  selection: UserSelection;
  onReset: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ selection, onReset }) => {
  const content = useMemo(() => getGuideContent(selection), [selection]);

  return (
    <div className="bg-white min-h-screen pb-10 animate-fadeIn">
      {/* Header */}
      <div className="bg-blue-600 px-6 pt-12 pb-8 rounded-b-[2rem] shadow-lg text-white text-center">
        <div className="text-blue-100 text-sm font-semibold mb-2">
          학교폭력 대응 가이드
        </div>
        <h1 className="text-2xl font-bold mb-4">
          {content.title}
        </h1>
        <p className="text-blue-50 text-sm leading-relaxed max-w-xs mx-auto opacity-90">
          {content.summary}
        </p>
      </div>

      <div className="px-6 -mt-4 max-w-md mx-auto">
        
        {/* Actions Card */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 mb-6">
          <h2 className="flex items-center text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
            <span className="mr-2">💡</span> 핵심 행동 요령
          </h2>
          <ul className="space-y-4">
            {content.actions.map((action, idx) => (
              <li key={idx} className="flex items-start text-slate-700 text-sm leading-relaxed">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                  {idx + 1}
                </span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        <AdBanner location="content" />

        {/* Contacts Card */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 mb-6">
          <h2 className="flex items-center text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
            <span className="mr-2">📞</span> 도움 요청처
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {content.contacts.map((contact, idx) => (
              <a 
                key={idx}
                href={`tel:${contact.phone}`} 
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div>
                  <div className="font-semibold text-slate-800">{contact.name}</div>
                  <div className="text-xs text-slate-500">{contact.desc}</div>
                </div>
                <div className="text-blue-600 font-bold text-sm bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
                  {contact.phone}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Legal Basis */}
        <div className="bg-slate-50 rounded-lg p-4 mb-8 border border-slate-200">
          <h3 className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">관련 법적 근거</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {content.legalBasis}
          </p>
        </div>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold shadow-lg hover:bg-slate-900 transition-all active:scale-[0.98]"
        >
          처음부터 다시 하기
        </button>
      </div>
    </div>
  );
};

export default ResultPage;