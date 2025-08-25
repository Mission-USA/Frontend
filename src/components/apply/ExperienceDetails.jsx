import React from 'react';

const ExperienceDetails = ({ formData, onInputChange }) => {
  return (
    <div className="px-4">
      <h3 className="text-[#111418] text-xl font-bold leading-tight tracking-[-0.015em] pb-4">
        Experience & Projects
      </h3>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Relevant Experience</p>
          <textarea
            value={formData.experience}
            onChange={(e) => onInputChange('experience', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-32 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="Describe any relevant work experience, internships, or volunteer work..."
            rows={4}
          />
        </label>
      </div>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Projects</p>
          <textarea
            value={formData.projects}
            onChange={(e) => onInputChange('projects', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-32 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="Describe any relevant projects you've worked on (academic, personal, or professional)..."
            rows={4}
          />
        </label>
      </div>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Technical Skills</p>
          <textarea
            value={formData.skills}
            onChange={(e) => onInputChange('skills', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-24 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="List your technical skills, programming languages, tools, and technologies..."
            rows={3}
          />
        </label>
      </div>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">Certifications (Optional)</p>
          <textarea
            value={formData.certifications}
            onChange={(e) => onInputChange('certifications', e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#0d80f2] h-24 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
            placeholder="List any relevant certifications, courses, or training programs..."
            rows={3}
          />
        </label>
      </div>
    </div>
  );
};

export default ExperienceDetails; 