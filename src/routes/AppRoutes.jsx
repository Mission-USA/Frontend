import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Login from '../pages/auth/login'
import Signup from '../pages/auth/signup'
import ForgotPassword from '../pages/auth/forgot-password'
import ResetPassword from '../pages/auth/reset-password'
import About from '../pages/about'
import Contact from '../pages/contact'

const AppRoutes = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password" element={<ResetPassword />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
  );
};

export default AppRoutes;
