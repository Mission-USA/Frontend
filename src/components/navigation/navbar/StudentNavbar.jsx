import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const StudentNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
    navigate('/');
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 inset-x-0 flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* Logo */}
        <Link to="/student/dashboard" className="max-sm:hidden">
          <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
        </Link>
        <Link to="/student/dashboard" className="hidden max-sm:block">
          <img src="https://readymadeui.com/readymadeui-short.svg" alt="logo" className="w-9" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link 
            to="/student/dashboard"
            className={`font-medium text-[15px] transition-colors ${
              isActiveLink('/student/dashboard') ? 'text-blue-700' : 'text-slate-900 hover:text-blue-700'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/student/internships"
            className={`font-medium text-[15px] transition-colors ${
              isActiveLink('/student/internships') ? 'text-blue-700' : 'text-slate-900 hover:text-blue-700'
            }`}
          >
            Internship
          </Link>
          <Link 
            to="/student/fulltime"
            className={`font-medium text-[15px] transition-colors ${
              isActiveLink('/student/fulltime') ? 'text-blue-700' : 'text-slate-900 hover:text-blue-700'
            }`}
          >
            Full Time
          </Link>
        </div>

        {/* Right Side - Notifications and Profile */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <button className="relative p-2 text-slate-600 hover:text-blue-700 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JS</span>
              </div>
              <span className="hidden sm:block text-slate-900 font-medium">John Smith</span>
              <svg 
                className={`w-4 h-4 text-slate-600 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                <Link
                  to="/student/profile"
                  className="flex items-center px-4 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/student/dashboard"
              className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                isActiveLink('/student/dashboard') ? 'bg-blue-50 text-blue-700' : 'text-slate-900 hover:bg-slate-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/student/internships"
              className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                isActiveLink('/student/internships') ? 'bg-blue-50 text-blue-700' : 'text-slate-900 hover:bg-slate-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Internship
            </Link>
            <Link
              to="/student/fulltime"
              className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                isActiveLink('/student/fulltime') ? 'bg-blue-50 text-blue-700' : 'text-slate-900 hover:bg-slate-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Full Time
            </Link>
            <Link
              to="/student/profile"
              className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                isActiveLink('/student/profile') ? 'bg-blue-50 text-blue-700' : 'text-slate-900 hover:bg-slate-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-lg font-medium text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default StudentNavbar;
