import React from 'react';

const PersonalDetails = ({ formData, onInputChange }) => {
  return (
    <div className="px-4">
      <h3 className="text-[#111418] text-xl font-bold leading-tight tracking-[-0.015em] pb-4">
        Personal Information
      </h3>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Full Name</p>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-14 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="Enter your full name"
          />
        </label>
      </div>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Email Address</p>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-14 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="Enter your email address"
          />
        </label>
      </div>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Phone Number</p>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-14 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="Enter your phone number"
          />
        </label>
      </div>
      
      <div className="px-4 py-3">
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            checked={formData.isStudent}
            onChange={(e) => onInputChange('isStudent', e.target.checked)}
            className="h-5 w-5 rounded border-[#dbe0e6] border-2 bg-transparent text-[#0d80f2] checked:bg-[#0d80f2] checked:border-[#0d80f2] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe0e6] focus:outline-none"
          />
          <p className="text-[#111418] text-base font-normal leading-normal">
            I am a current student and available during the internship period.
          </p>
        </label>
      </div>
    </div>
  );
};

export default PersonalDetails; 