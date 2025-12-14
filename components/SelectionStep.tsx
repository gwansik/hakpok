import React from 'react';
import { WizardStepData, StepOption } from '../types';

interface SelectionStepProps {
  stepData: WizardStepData;
  onSelect: (value: any) => void;
}

const SelectionStep: React.FC<SelectionStepProps> = ({ stepData, onSelect }) => {
  return (
    <div className="flex flex-col animate-fadeIn px-6 pb-24 pt-10 max-w-md mx-auto min-h-screen">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-2">
          STEP {stepData.id}
        </span>
        <h1 className="text-2xl font-bold text-slate-900 leading-tight mb-2">
          {stepData.title}
        </h1>
        <p className="text-slate-500 text-sm">
          {stepData.subtitle}
        </p>
      </div>

      <div className="space-y-3">
        {stepData.options.map((option: StepOption) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className="w-full text-left p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-500 hover:shadow-md hover:bg-blue-50 transition-all duration-200 active:scale-[0.98] group"
          >
            <div className="flex items-start">
              <span className="text-3xl mr-4">{option.icon}</span>
              <div>
                <div className="font-bold text-slate-800 text-lg group-hover:text-blue-700">
                  {option.label}
                </div>
                {option.description && (
                  <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {option.description}
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectionStep;