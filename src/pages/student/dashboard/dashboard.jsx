import React from 'react';
import RecommendedJobs from '../../../components/cards/RecommendedJobs';
import ShortlistedJobs from '../../../components/cards/ShortlistedJobs';
import InternshipJobs from '../../../components/cards/InternshipJobs';
import FullTimeJobs from '../../../components/cards/FullTimeJobs';

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, John!</h1>
        <p className="text-slate-600">Here's what's happening with your job search today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Applications</p>
              <p className="text-2xl font-bold text-slate-900">24</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Interviews</p>
              <p className="text-2xl font-bold text-slate-900">8</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v4m-6 0v4a2 2 0 002 2h4a2 2 0 002-2v-4m-6 0v4a2 2 0 002 2h4a2 2 0 002-2v-4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Saved Jobs</p>
              <p className="text-2xl font-bold text-slate-900">15</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Profile Views</p>
              <p className="text-2xl font-bold text-slate-900">42</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm mb-8">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Recent Activities</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Application submitted to Google</p>
                <p className="text-xs text-slate-500">Software Engineer Intern • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Interview scheduled with Microsoft</p>
                <p className="text-xs text-slate-500">Frontend Developer • Yesterday</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Profile viewed by Amazon</p>
                <p className="text-xs text-slate-500">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Application status updated</p>
                <p className="text-xs text-slate-500">Meta • Under Review • 3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Jobs Section */}
      <RecommendedJobs />

      {/* Shortlisted Jobs Section */}
      <ShortlistedJobs />

      {/* Internships Section */}
      <InternshipJobs />

      {/* Full-Time Jobs Section */}
      <FullTimeJobs />
    </div>
  );
};

export default Dashboard;
