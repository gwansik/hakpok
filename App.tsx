import React, { useState, useCallback, useMemo } from 'react';
import { STEPS, TEACHER_POSITION_OPTIONS } from './constants';
import { UserSelection } from './types';
import ProgressBar from './components/ProgressBar';
import SelectionStep from './components/SelectionStep';
import ResultPage from './components/ResultPage';
import AdBanner from './components/AdBanner'; // Import kept for consistency, though unused in footer now

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
    
    // Update selection state based on current step key
    setSelection(prev => ({
      ...prev,
      [currentStepData.key]: value
    }));

    // Move to next step
    setTimeout(() => {
      setCurrentStepIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  }, [currentStepIndex]);

  // Back button handler
  const handleBack = useCallback(() => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      // Optional: window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStepIndex]);

  const handleReset = useCallback(() => {
    setSelection({
      target: null,
      position: null,
      violenceType: null,
      status: null
    });
    setCurrentStepIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const isFinished = currentStepIndex >= STEPS.length;

  const currentStepData = useMemo(() => {
    if (isFinished) return null;
    const step = STEPS[currentStepIndex];
    
    // If user is a teacher and we are at the 'position' step, swap options
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {!isFinished && currentStepData && (
        <>
          <ProgressBar currentStep={currentStepIndex} totalSteps={STEPS.length} />
          
          <main className="pt-2 pb-24">
            <SelectionStep 
              stepData={currentStepData} 
              onSelect={handleSelection} 
            />
          </main>

          {/* Step 1 (Index 0): Developer Credit */}
          {currentStepIndex === 0 && (
            <div className="fixed bottom-0 left-0 w-full h-[60px] flex items-center justify-center z-40 bg-slate-50/80 backdrop-blur-sm pointer-events-none">
              <span className="text-slate-300 text-xs font-mono">
                developed by ntidea@knou.ac.kr
              </span>
            </div>
          )}
          
          {/* Step 2+ (Index > 0): Back Button */}
          {currentStepIndex > 0 && (
            <div className="fixed bottom-0 left-0 w-full p-4 z-50 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent">
              <button 
                onClick={handleBack}
                className="w-full py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl shadow-lg hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center text-sm"
              >
                <span className="mr-2">←</span> 이전 단계로
              </button>
            </div>
          )}
        </>
      )}

      {isFinished && (
        <ResultPage selection={selection} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;