import React from 'react';

const InternshipContent = ({ overview, responsibilities, requirements, expectations, perks }) => {
  return (
    <div className="px-4">
      <h2 className="text-[#111418] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Overview
      </h2>
      <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1">
        {overview}
      </p>
      
      <h2 className="text-[#111418] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Responsibilities
      </h2>
      <div>
        {responsibilities.map((responsibility, index) => (
          <label key={index} className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe0e6] border-2 bg-transparent text-[#0d80f2] checked:bg-[#0d80f2] checked:border-[#0d80f2] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe0e6] focus:outline-none"
            />
            <p className="text-[#111418] text-base font-normal leading-normal">{responsibility}</p>
          </label>
        ))}
      </div>
      
      <h2 className="text-[#111418] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Requirements
      </h2>
      <div>
        {requirements.map((requirement, index) => (
          <label key={index} className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe0e6] border-2 bg-transparent text-[#0d80f2] checked:bg-[#0d80f2] checked:border-[#0d80f2] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe0e6] focus:outline-none"
            />
            <p className="text-[#111418] text-base font-normal leading-normal">{requirement}</p>
          </label>
        ))}
      </div>
      
      <h2 className="text-[#111418] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        What We Expect
      </h2>
      <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1">
        {expectations}
      </p>
      
      <h2 className="text-[#111418] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Perks & Benefits
      </h2>
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {perks.map((perk, index) => (
          <div key={index} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">{perk}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipContent; 