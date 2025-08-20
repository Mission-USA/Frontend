import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/common/ScrollToTop'
import StudentLayout from '../layouts/StudentLayout/StudentLayout'
import StudentDashboard from '../pages/student/dashboard'
import StudentProfile from '../pages/student/profile'
import Companies from '../pages/student/companies'
import Jobs from '../pages/student/jobs'
import StudentApplications from '../pages/student/applications'

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
                    <Route path="internships" element={<Jobs />} />
                    <Route path="fulltime" element={<Jobs />} />
                </Route>
            </Routes>
        </>
    );
};

export default StudentRoutes;