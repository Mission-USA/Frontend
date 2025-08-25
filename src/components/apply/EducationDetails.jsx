import React from 'react';

const EducationDetails = ({ formData, onInputChange }) => {
  return (
    <div className="px-4">
      <h3 className="text-[#111418] text-xl font-bold leading-tight tracking-[-0.015em] pb-4">
        Education Information
      </h3>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">University/College</p>
          <input
            type="text"
            value={formData.university}
            onChange={(e) => onInputChange('university', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-14 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="Enter your university name"
          />
        </label>
      </div>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Degree</p>
          <select
            value={formData.degree}
            onChange={(e) => onInputChange('degree', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-14 p-[15px] text-base font-normal leading-normal"
          >
            <option value="">Select your degree</option>
            <option value="Bachelor's">Bachelor's Degree</option>
            <option value="Master's">Master's Degree</option>
            <option value="PhD">PhD</option>
            <option value="Associate's">Associate's Degree</option>
            <option value="Diploma">Diploma</option>
          </select>
        </label>
      </div>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Major/Field of Study</p>
          <input
            type="text"
            value={formData.major}
            onChange={(e) => onInputChange('major', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-14 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="e.g., Computer Science, Engineering"
          />
        </label>
      </div>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Expected Graduation Year</p>
          <input
            type="number"
            value={formData.graduationYear}
            onChange={(e) => onInputChange('graduationYear', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-14 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="e.g., 2025"
            min="2024"
            max="2030"
          />
        </label>
      </div>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Current GPA (Optional)</p>
          <input
            type="number"
            value={formData.gpa}
            onChange={(e) => onInputChange('gpa', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-14 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="e.g., 3.8"
            min="0"
            max="4"
            step="0.1"
          />
        </label>
      </div>
    </div>
  );
};

export default EducationDetails; 