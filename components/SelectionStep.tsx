import React from 'react';
import { WizardStepData, StepOption } from '../types';

interface SelectionStepProps {
  stepData: WizardStepData;
  onSelect: (value: any) => void;
}

const SelectionStep: React.FC<SelectionStepProps> = ({ stepData, onSelect }) => {
  return (
    <div className="flex flex-col animate-fadeIn px-6 pb-20 pt-8 max-w-md mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block px-2.5 py-1 bg-blue-100 text-blue-700 text-[10px] font-black rounded-md tracking-wider">
            STEP {stepData.id} / 4
          </span>
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 leading-tight mb-2">
          {stepData.title}
        </h1>
        <p className="text-slate-500 text-sm font-medium">
          {stepData.subtitle}
        </p>
      </div>

      <div className="space-y-3.5">
        {stepData.options.map((option: StepOption) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className="w-full text-left p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-500 hover:shadow-md hover:bg-blue-50 transition-all duration-200 active:scale-[0.97] group"
          >
            <div className="flex items-center">
              <div className="text-4xl mr-5 bg-slate-50 w-14 h-14 flex items-center justify-center rounded-xl group-hover:bg-blue-100 transition-colors">
                {option.icon}
              </div>
              <div className="flex-1">
                <div className="font-bold text-slate-800 text-lg group-hover:text-blue-700 leading-tight">
                  {option.label}
                </div>
                {option.description && (
                  <div className="text-xs text-slate-500 mt-1.5 leading-snug">
                    {option.description}
                  </div>
                )}
              </div>
              <div className="text-slate-300 group-hover:text-blue-400 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectionStep;