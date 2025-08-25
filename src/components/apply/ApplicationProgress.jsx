import React from 'react';

const ApplicationProgress = ({ currentStep }) => {
  const progressPercentage = (currentStep / 4) * 100;

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex gap-6 justify-between">
        <p className="text-[#111418] text-base font-medium leading-normal">
          Step {currentStep} of 4
        </p>
      </div>
      <div className="rounded bg-[#dbe0e6]">
        <div 
          className="h-2 rounded bg-[#111418] transition-all duration-300 ease-in-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ApplicationProgress; 