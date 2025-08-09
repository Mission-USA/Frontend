import React from 'react'
import StudentNavbar from './navbar/StudentNavbar'
import AdminNavbar from './navbar/AdminNavbar'
import CompanyNavbar from './navbar/CompanyNavbar'

const Navbar = () => {

    const role="user";  /// have to extract from cookies

    return (
        <div>
            {role === "user" && (
                <StudentNavbar />
            )}
            {role === "admin" && (
                <AdminNavbar />
            )}
            {role === "company" && (
                <CompanyNavbar />
            )}
        </div>
    )
}

export default Navbar;  