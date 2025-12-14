import React, { useState, useCallback } from 'react';
import { STEPS } from './constants';
import { UserSelection } from './types';
import ProgressBar from './components/ProgressBar';
import SelectionStep from './components/SelectionStep';
import ResultPage from './components/ResultPage';
import AdBanner from './components/AdBanner';

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
    // Use timeout to allow user to see the click effect briefly
    setTimeout(() => {
      setCurrentStepIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {!isFinished && (
        <>
          <ProgressBar currentStep={currentStepIndex} totalSteps={STEPS.length} />
          
          <main className="pt-2">
            <SelectionStep 
              stepData={STEPS[currentStepIndex]} 
              onSelect={handleSelection} 
            />
          </main>

          <AdBanner location="footer" />
        </>
      )}

      {isFinished && (
        <ResultPage selection={selection} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;