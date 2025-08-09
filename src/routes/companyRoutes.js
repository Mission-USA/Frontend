import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CompanyDashboard from '../pages/company-dashboard'
import CompanyProfile from '../pages/company-profile'
import Jobs from '../pages/jobs'
import OpenJobs from '../pages/open-jobs'
import ClosedJobs from '../pages/closed-jobs'
import AddNewJob from '../pages/add-new-job'
import ShortlistedApplications from '../pages/shortlisted-applications'
import RejectedApplications from '../pages/rejected-applications'
import HiredApplications from '../pages/hired-applications'
import PendingApplications from '../pages/pending-applications'
import OnHoldApplications from '../pages/on-hold-applications'
import CancelledApplications from '../pages/cancelled-applications'
import WithdrawnApplications from '../pages/withdrawn-applications'
import ExpiredApplications from '../pages/expired-applications'

const CompanyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<CompanyDashboard />} />
                <Route path="/profile" element={<CompanyProfile />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/open" element={<OpenJobs />} />
                <Route path="/jobs/closed" element={<ClosedJobs />} />
                <Route path="/jobs/add-new-job" element={<AddNewJob />} />
                <Route path="/jobs/applications/:id/shortlisted" element={<ShortlistedApplications />} />
                <Route path="/jobs/applications/:id/rejected" element={<RejectedApplications />} />
                <Route path="/jobs/applications/:id/hired" element={<HiredApplications />} />
                <Route path="/jobs/applications/:id/pending" element={<PendingApplications />} />
                <Route path="/jobs/applications/:id/on-hold" element={<OnHoldApplications />} />
                <Route path="/jobs/applications/:id/cancelled" element={<CancelledApplications />} />
                <Route path="/jobs/applications/:id/withdrawn" element={<WithdrawnApplications />} />
                <Route path="/jobs/applications/:id/expired" element={<ExpiredApplications />} />
            </Routes>
        </Router>
    );
};

export default CompanyRoutes;