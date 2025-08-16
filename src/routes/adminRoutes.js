import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminDashboard from '../pages/admin/dashboard'
import AdminProfile from '../pages/admin/profile'
import StudentPortal from '../pages/admin/student-portal'
import CompanyPortal from '../pages/admin/company-portal'

const AdminRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/profile" element={<AdminProfile />} />
                <Route path="/student-portal" element={<StudentPortal />} />
                <Route path="/company-portal" element={<CompanyPortal />} />
            </Routes>
        </Router>
    );
};

export default AdminRoutes;