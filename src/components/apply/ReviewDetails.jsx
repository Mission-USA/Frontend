import React from 'react';

const ReviewDetails = ({ formData }) => {
  return (
    <div className="px-4">
      <h3 className="text-[#111418] text-xl font-bold leading-tight tracking-[-0.015em] pb-4">
        Review Your Application
      </h3>
      
      <div className="space-y-6">
        {/* Personal Information */}
        <div className="bg-[#f8f9fa] rounded-lg p-4">
          <h4 className="text-[#111418] text-lg font-semibold leading-tight mb-3">
            Personal Information
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[#60758a] text-sm">Name:</span>
              <span className="text-[#111418] text-sm font-medium">{formData.name || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#60758a] text-sm">Email:</span>
              <span className="text-[#111418] text-sm font-medium">{formData.email || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#60758a] text-sm">Phone:</span>
              <span className="text-[#111418] text-sm font-medium">{formData.phone || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#60758a] text-sm">Student Status:</span>
              <span className="text-[#111418] text-sm font-medium">{formData.isStudent ? 'Yes' : 'No'}</span>
            </div>
          </div>
        </div>

        {/* Education Information */}
        <div className="bg-[#f8f9fa] rounded-lg p-4">
          <h4 className="text-[#111418] text-lg font-semibold leading-tight mb-3">
            Education Information
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[#60758a] text-sm">University:</span>
              <span className="text-[#111418] text-sm font-medium">{formData.university || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#60758a] text-sm">Degree:</span>
              <span className="text-[#111418] text-sm font-medium">{formData.degree || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#60758a] text-sm">Major:</span>
              <span className="text-[#111418] text-sm font-medium">{formData.major || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#60758a] text-sm">Graduation Year:</span>
              <span className="text-[#111418] text-sm font-medium">{formData.graduationYear || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#60758a] text-sm">GPA:</span>
              <span className="text-[#111418] text-sm font-medium">{formData.gpa || 'Not provided'}</span>
            </div>
          </div>
        </div>

        {/* Experience & Projects */}
        <div className="bg-[#f8f9fa] rounded-lg p-4">
          <h4 className="text-[#111418] text-lg font-semibold leading-tight mb-3">
            Experience & Projects
          </h4>
          <div className="space-y-3">
            <div>
              <span className="text-[#60758a] text-sm block mb-1">Relevant Experience:</span>
              <p className="text-[#111418] text-sm bg-white p-3 rounded border border-[#dbe0e6] min-h-[60px]">
                {formData.experience || 'Not provided'}
              </p>
            </div>
            <div>
              <span className="text-[#60758a] text-sm block mb-1">Projects:</span>
              <p className="text-[#111418] text-sm bg-white p-3 rounded border border-[#dbe0e6] min-h-[60px]">
                {formData.projects || 'Not provided'}
              </p>
            </div>
            <div>
              <span className="text-[#60758a] text-sm block mb-1">Technical Skills:</span>
              <p className="text-[#111418] text-sm bg-white p-3 rounded border border-[#dbe0e6] min-h-[60px]">
                {formData.skills || 'Not provided'}
              </p>
            </div>
            <div>
              <span className="text-[#60758a] text-sm block mb-1">Certifications:</span>
              <p className="text-[#111418] text-sm bg-white p-3 rounded border border-[#dbe0e6] min-h-[60px]">
                {formData.certifications || 'Not provided'}
              </p>
            </div>
          </div>
        </div>

        {/* Application Summary */}
        <div className="bg-[#e8f4fd] rounded-lg p-4 border border-[#0d80f2]">
          <h4 className="text-[#0d80f2] text-lg font-semibold leading-tight mb-2">
            Application Summary
          </h4>
          <p className="text-[#111418] text-sm">
            You are applying for the <strong>Software Engineering Intern</strong> position at <strong>Tech Innovators Inc.</strong>
          </p>
          <p className="text-[#60758a] text-xs mt-2">
            Please review all information carefully before submitting. You can go back to previous steps to make changes if needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails; 