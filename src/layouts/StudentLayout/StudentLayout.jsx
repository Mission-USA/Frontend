import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentNavbar from '../../components/navigation/navbar/StudentNavbar';
import Footer from '../../components/common/Footer';

const StudentLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <StudentNavbar />
            <main className="flex-1 pt-[78px] sm:pt-[86px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default StudentLayout;   