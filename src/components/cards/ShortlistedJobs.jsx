import React from 'react';
import { Link } from 'react-router-dom';

const ShortlistedJobs = () => {
  // Sample shortlisted jobs data
  const shortlistedJobs = [
    {
      id: 1,
      company: "Google",
      position: "Software Engineer",
      lastDate: "2024-04-10",
      logo: "https://readymadeui.com/readymadeui.svg",
      location: "Mountain View, CA",
      type: "Full-time",
      salary: "$140k - $190k",
      status: "Applied"
    },
    {
      id: 2,
      company: "Microsoft",
      position: "Frontend Developer Intern",
      lastDate: "2024-04-15",
      logo: "https://readymadeui.com/readymadeui.svg",
      location: "Redmond, WA",
      type: "Internship",
      salary: "$8k - $12k/month",
      status: "Shortlisted"
    },
    {
      id: 3,
      company: "Apple",
      position: "iOS Developer",
      lastDate: "2024-04-20",
      logo: "https://readymadeui.com/readymadeui.svg",
      location: "Cupertino, CA",
      type: "Full-time",
      salary: "$140k - $190k",
      status: "Interview"
    },
    {
      id: 4,
      company: "Amazon",
      position: "Cloud Engineer",
      lastDate: "2024-04-25",
      logo: "https://readymadeui.com/readymadeui.svg",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$150k - $200k",
      status: "Applied"
    },
    {
      id: 5,
      company: "Meta",
      position: "React Developer",
      lastDate: "2024-04-30",
      logo: "https://readymadeui.com/readymadeui.svg",
      location: "Menlo Park, CA",
      type: "Full-time",
      salary: "$145k - $195k",
      status: "Shortlisted"
    },
    {
      id: 6,
      company: "Netflix",
      position: "Full Stack Engineer",
      lastDate: "2024-05-05",
      logo: "https://readymadeui.com/readymadeui.svg",
      location: "Los Gatos, CA",
      type: "Full-time",
      salary: "$170k - $230k",
      status: "Applied"
    },
    {
      id: 7,
      company: "Uber",
      position: "Mobile Engineer",
      lastDate: "2024-05-10",
      logo: "https://readymadeui.com/readymadeui.svg",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$135k - $185k",
      status: "Interview"
    },
    {
      id: 8,
      company: "Airbnb",
      position: "UI/UX Designer",
      lastDate: "2024-05-15",
      logo: "https://readymadeui.com/readymadeui.svg",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $170k",
      status: "Shortlisted"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied':
        return 'bg-blue-100 text-blue-800';
      case 'Shortlisted':
        return 'bg-green-100 text-green-800';
      case 'Interview':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  // Index-based visibility:
  // 0,1: always visible (mobile shows 2)
  // 2: from sm and up (sm shows 3 total)
  // 3,4: from md and up (md shows 5 total)
  // 5,6: from lg and up (lg shows 7 total)
  const visibilityByIndex = [
    'block',             // 0
    'block',             // 1
    'hidden sm:block',   // 2
    'hidden md:block',   // 3
    'hidden md:block',   // 4
    'hidden lg:block',   // 5
    'hidden lg:block',   // 6
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Shortlisted Jobs</h2>
        <Link 
          to="/student/shortlisted" 
          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          View all
        </Link>
      </div>
      
      {/* Two rows at each breakpoint; Show More is the last slot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Visible shortlisted jobs per breakpoint: 2 / 3 / 5 / 7 */}
        {shortlistedJobs.slice(0, 7).map((job, idx) => (
          <div
            key={job.id}
            className={`bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow ${visibilityByIndex[idx] || 'hidden'}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <img 
                  src={job.logo} 
                  alt={`${job.company} logo`} 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="text-right">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                  {job.status}
                </span>
              </div>
            </div>
            
            <h3 className="font-semibold text-slate-900 mb-1">{job.company}</h3>
            <p className="text-sm text-slate-600 mb-2">{job.position}</p>
            <p className="text-xs text-slate-500 mb-1">{job.location}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                {job.type}
              </span>
              <p className="text-xs text-green-600 font-medium">{job.salary}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-500">
                <span className="font-medium">Last Date:</span> {formatDate(job.lastDate)}
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View
              </button>
            </div>
          </div>
        ))}
        
        {/* Show More - always rendered; naturally lands as last slot */}
        <Link
          to="/student/shortlisted"
          className="bg-white rounded-lg border-2 border-dashed border-slate-300 p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col items-center justify-center text-center"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-900 mb-1">Show More</h3>
          <p className="text-sm text-slate-600">View all shortlisted jobs</p>
        </Link>
      </div>
    </div>
  );
};

export default ShortlistedJobs; 