import React from 'react';

const InternshipHeader = ({ title, company, location, type, stipend, deadline }) => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <h1 className="text-[#111418] tracking-light text-2xl md:text-[32px] font-bold leading-tight min-w-72">
          {title}
        </h1>
      </div>
      <p className="text-[#60758a] text-sm font-normal leading-normal pb-3 pt-1 px-4">
        {company} · {location} · {type} · {stipend} · Deadline: {deadline}
      </p>
    </>
  );
};

export default InternshipHeader; 