import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApplicationProgress from '../../../components/apply/ApplicationProgress';
import PersonalDetails from '../../../components/apply/PersonalDetails';
import EducationDetails from '../../../components/apply/EducationDetails';
import ExperienceDetails from '../../../components/apply/ExperienceDetails';
import ReviewDetails from '../../../components/apply/ReviewDetails';

const ApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    name: '',
    email: '',
    phone: '',
    isStudent: false,
    
    // Education Details
    university: '',
    degree: '',
    major: '',
    graduationYear: '',
    gpa: '',
    
    // Experience Details
    experience: '',
    projects: '',
    skills: '',
    certifications: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate(`/student/internship/${id}`);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetails 
            formData={formData} 
            onInputChange={handleInputChange} 
          />
        );
      case 2:
        return (
          <EducationDetails 
            formData={formData} 
            onInputChange={handleInputChange} 
          />
        );
      case 3:
        return (
          <ExperienceDetails 
            formData={formData} 
            onInputChange={handleInputChange} 
          />
        );
      case 4:
        return (
          <ReviewDetails 
            formData={formData} 
          />
        );
      default:
        return <PersonalDetails formData={formData} onInputChange={handleInputChange} />;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Details";
      case 2:
        return "Education Details";
      case 3:
        return "Experience & Projects";
      case 4:
        return "Review Application";
      default:
        return "Personal Details";
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[#111418] tracking-light text-2xl md:text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Apply for Software Engineering Internship
        </h2>
        <ApplicationProgress currentStep={currentStep} />
        {renderStep()}
        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
            <button
              onClick={prevStep}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e5e7eb] transition-colors"
            >
              <span className="truncate">
                {currentStep === 1 ? 'Back' : 'Previous'}
              </span>
            </button>
            {currentStep < 4 && (
              <button
                onClick={nextStep}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0d80f2] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0b6fd8] transition-colors"
              >
                <span className="truncate">Next</span>
              </button>
            )}
            {currentStep === 4 && (
              <button
                onClick={() => alert('Application submitted successfully!')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0d80f2] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0b6fd8] transition-colors"
              >
                <span className="truncate">Submit Application</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage; 