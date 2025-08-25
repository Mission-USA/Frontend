import React from 'react';
import InternshipSearch from '../../../components/internships/InternshipSearch';
import InternshipFilters from '../../../components/internships/InternshipFilters';
import InternshipGrid from '../../../components/internships/InternshipGrid';
import InternshipPagination from '../../../components/internships/InternshipPagination';

const InternshipsPage = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <h1 className="text-[#111418] tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72">
            Internships
          </h1>
        </div>
        <InternshipSearch />
        <InternshipFilters />
        <InternshipGrid />
        <InternshipPagination />
      </div>
    </div>
  );
};

export default InternshipsPage; 