import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StudentDashboard from '../pages/student-dashboard'
import StudentProfile from '../pages/student-profile'
import Companies from '../pages/companies'
import Jobs from '../pages/jobs'

const StudentRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<StudentDashboard />} />
                <Route path="/profile" element={<StudentProfile />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/jobs" element={<Jobs />} />
            </Routes>
        </Router>
    );
};

export default StudentRoutes;