import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const CompanyLayout = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default CompanyLayout;   