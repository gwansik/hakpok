import React, { useState, useCallback, useMemo } from 'react';
import { STEPS, TEACHER_POSITION_OPTIONS } from './constants';
import { UserSelection } from './types';
import ProgressBar from './components/ProgressBar';
import SelectionStep from './components/SelectionStep';
import ResultPage from './components/ResultPage';

// 내부 헤더 컴포넌트
const Header = () => (
  <header className="sticky top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-40 px-6 py-4 flex items-center justify-center">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl shadow-sm">
        🛡️
      </div>
      <h1 className="text-lg font-extrabold text-slate-800 tracking-tight text-center">
        학교폭력 <span className="text-blue-600">대응 가이드</span>
      </h1>
    </div>
  </header>
);

// 내부 푸터 컴포넌트
const Footer = () => (
  <footer className="w-full bg-slate-50 border-t border-slate-200 px-6 py-10 mt-auto">
    <div className="max-w-md mx-auto text-center">
      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
        본 가이드는 교육부의 학교폭력 사안처리 가이드라인을<br />
        바탕으로 제작된 공공 목적의 웹 서비스입니다.
      </p>
      <div className="flex flex-col items-center gap-2">
        <span className="px-3 py-1 bg-slate-200 text-slate-500 text-[10px] font-mono rounded-full uppercase tracking-tighter">
          developed by ntidea@knou.ac.kr
        </span>
        <span className="text-slate-300 text-[10px]">
          © 2025 All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
);

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selection, setSelection] = useState<UserSelection>({
    target: null,
    position: null,
    violenceType: null,
    status: null
  });

  const handleSelection = useCallback((value: string) => {
    const currentStepData = STEPS[currentStepIndex];
    setSelection(prev => ({ ...prev, [currentStepData.key]: value }));

    setTimeout(() => {
      setCurrentStepIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  }, [currentStepIndex]);

  const handleBack = useCallback(() => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  }, [currentStepIndex]);

  const handleReset = useCallback(() => {
    setSelection({ target: null, position: null, violenceType: null, status: null });
    setCurrentStepIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const isFinished = currentStepIndex >= STEPS.length;

  const currentStepData = useMemo(() => {
    if (isFinished) return null;
    const step = STEPS[currentStepIndex];
    if (selection.target === 'teacher' && step.key === 'position') {
      return {
        ...step,
        title: "주로 어떤 업무를 수행하시나요?",
        subtitle: "지도 대상이나 현재 수행해야 할 핵심 과업을 선택해주세요.",
        options: TEACHER_POSITION_OPTIONS
      };
    }
    return step;
  }, [currentStepIndex, selection.target, isFinished]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <ProgressBar currentStep={currentStepIndex} totalSteps={STEPS.length} />
      
      {!isFinished && (
        <>
          <Header />
          <main className="flex-1">
            {currentStepData && (
              <SelectionStep 
                stepData={currentStepData} 
                onSelect={handleSelection} 
              />
            )}
          </main>

          {/* 하단 네비게이션 (이전 단계) */}
          {currentStepIndex > 0 && (
            <div className="fixed bottom-0 left-0 w-full p-4 z-50 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent">
              <button 
                onClick={handleBack}
                className="w-full py-4 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl shadow-xl hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center text-sm"
              >
                <span className="mr-2">←</span> 이전 단계로 돌아가기
              </button>
            </div>
          )}

          <Footer />
        </>
      )}

      {isFinished && (
        <div className="flex-1">
          <ResultPage selection={selection} onReset={handleReset} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;