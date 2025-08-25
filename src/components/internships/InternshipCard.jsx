import React from 'react';
import { Link } from 'react-router-dom';

const InternshipCard = ({ internship }) => {
  return (
    <Link to={`/student/internship/${internship.id}`} className="block">
      <div className="flex flex-col gap-3 pb-3 hover:shadow-md transition-shadow rounded-lg p-2">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
          style={{
            backgroundImage: `url("${internship.image}")`
          }}
        ></div>
        <div>
          <p className="text-[#111418] text-base font-medium leading-normal">{internship.title}</p>
          <p className="text-[#60758a] text-sm font-normal leading-normal">{internship.company}</p>
        </div>
      </div>
    </Link>
  );
};

export default InternshipCard; 