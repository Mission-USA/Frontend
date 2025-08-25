import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/common/ScrollToTop'
import AdminDashboard from '../pages/admin/dashboard'
import AdminProfile from '../pages/admin/profile'
import StudentPortal from '../pages/admin/student-portal'
import CompanyPortal from '../pages/admin/company-portal'

const AdminRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/profile" element={<AdminProfile />} />
                <Route path="/student-portal" element={<StudentPortal />} />
                <Route path="/company-portal" element={<CompanyPortal />} />
            </Routes>
        </>
    );
};

export default AdminRoutes;