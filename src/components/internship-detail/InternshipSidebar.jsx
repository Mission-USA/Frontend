import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InternshipSidebar = ({ type, stipend, duration, deadline, posted, company, aboutCompany }) => {
  const { id } = useParams();

  return (
    <div className="flex flex-col w-full lg:w-[360px]">
      <div className="flex px-4 py-3">
        <Link to={`/student/apply/${id}`}>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#0d80f2] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0b6fd8] transition-colors">
            <span className="truncate">Apply</span>
          </button>
        </Link>
      </div>
      <div className="flex px-4 py-3">
        <Link to="/student/internships">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e5e7eb] transition-colors">
            <span className="truncate">Cancel/Back</span>
          </button>
        </Link>
      </div>
      
      <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Quick Facts
      </h3>
      <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
          <p className="text-[#60758a] text-sm font-normal leading-normal">Type</p>
          <p className="text-[#111418] text-sm font-normal leading-normal">{type}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
          <p className="text-[#60758a] text-sm font-normal leading-normal">Stipend</p>
          <p className="text-[#111418] text-sm font-normal leading-normal">{stipend}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
          <p className="text-[#60758a] text-sm font-normal leading-normal">Duration</p>
          <p className="text-[#111418] text-sm font-normal leading-normal">{duration}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
          <p className="text-[#60758a] text-sm font-normal leading-normal">Deadline</p>
          <p className="text-[#111418] text-sm font-normal leading-normal">{deadline}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
          <p className="text-[#60758a] text-sm font-normal leading-normal">Posted</p>
          <p className="text-[#111418] text-sm font-normal leading-normal">{posted}</p>
        </div>
      </div>
      
      <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        About {company}
      </h3>
      <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
        {aboutCompany}
      </p>
      <p className="text-[#60758a] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline cursor-pointer hover:text-[#111418] transition-colors">
        View Company Profile
      </p>
    </div>
  );
};

export default InternshipSidebar; 