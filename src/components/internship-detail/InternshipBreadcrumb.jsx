import React from 'react';
import { Link } from 'react-router-dom';

const InternshipBreadcrumb = ({ company, title }) => {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <Link to="/student/internships" className="text-[#60758a] text-base font-medium leading-normal hover:text-[#111418] transition-colors">
        Internships
      </Link>
      <span className="text-[#60758a] text-base font-medium leading-normal">/</span>
      <Link to="/student/internships" className="text-[#60758a] text-base font-medium leading-normal hover:text-[#111418] transition-colors">
        {company}
      </Link>
      <span className="text-[#60758a] text-base font-medium leading-normal">/</span>
      <span className="text-[#111418] text-base font-medium leading-normal">{title}</span>
    </div>
  );
};

export default InternshipBreadcrumb; 