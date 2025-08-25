import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/common/ScrollToTop'
import StudentLayout from '../layouts/StudentLayout/StudentLayout'
import StudentDashboard from '../pages/student/dashboard'
import StudentProfile from '../pages/student/profile'
import Companies from '../pages/student/companies'
import Jobs from '../pages/student/jobs'
import StudentApplications from '../pages/student/applications'
import InternshipsPage from '../pages/student/internships'
import InternshipDetailPage from '../pages/student/internship-detail'
import ApplyPage from '../pages/student/apply'

const StudentRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<StudentLayout />}>
                    <Route path="dashboard" element={<StudentDashboard />} />
                    <Route path="profile" element={<StudentProfile />} />
                    <Route path="companies" element={<Companies />} />
                    <Route path="jobs" element={<Jobs />} />
                    <Route path="applications" element={<StudentApplications />} />
                    <Route path="internships" element={<InternshipsPage />} />
                    <Route path="internship/:id" element={<InternshipDetailPage />} />
                    <Route path="apply/:id" element={<ApplyPage />} />
                    <Route path="fulltime" element={<Jobs />} />
                </Route>
            </Routes>
        </>
    );
};

export default StudentRoutes;