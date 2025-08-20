import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/common/ScrollToTop'
import CompanyDashboard from '../pages/company/dashboard'
import CompanyProfile from '../pages/company/profile'
import Jobs from '../pages/company/jobs'
import OpenJobs from '../pages/company/jobs/open'
import ClosedJobs from '../pages/company/jobs/closed'
import AddNewJob from '../pages/company/jobs/add-new-job'
import ShortlistedApplications from '../pages/company/applications/shortlisted'
import RejectedApplications from '../pages/company/applications/rejected'
import HiredApplications from '../pages/company/applications/hired'
import PendingApplications from '../pages/company/applications/pending'
import OnHoldApplications from '../pages/company/applications/on-hold'
import CancelledApplications from '../pages/company/applications/cancelled'
import WithdrawnApplications from '../pages/company/applications/withdrawn'
import ExpiredApplications from '../pages/company/applications/expired'

const CompanyRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<CompanyDashboard />} />
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
        </>
    );
};

export default CompanyRoutes;