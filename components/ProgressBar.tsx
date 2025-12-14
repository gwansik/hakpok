import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = Math.min(((currentStep + 1) / totalSteps) * 100, 100);

  return (
    <div className="w-full h-2 bg-slate-200 fixed top-0 left-0 z-50">
      <div 
        className="h-full bg-blue-600 transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;