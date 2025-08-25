import React from 'react';

const InternshipActions = () => {
  return (
    <div className="flex justify-stretch">
      <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e5e7eb] transition-colors">
          <span className="truncate">Save</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e5e7eb] transition-colors">
          <span className="truncate">Share</span>
        </button>
      </div>
    </div>
  );
};

export default InternshipActions; 