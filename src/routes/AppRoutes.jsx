import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ScrollToTop from '../components/common/ScrollToTop'
import Login from '../pages/auth/login'
import Signup from '../pages/auth/signup'
import ForgotPassword from '../pages/auth/forgot-password'
import ResetPassword from '../pages/auth/reset-password'
import About from '../pages/about'
import Contact from '../pages/contact'
import Blog from '../pages/blog'
const Landing = React.lazy(() => import('../pages/landing'))

const AppRoutes = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <ScrollToTop />
            <div className="flex-1 pt-[78px] sm:pt-[86px]">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<React.Suspense fallback={null}><Landing /></React.Suspense>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
            <Footer />
        </div>
  );
};

export default AppRoutes;
