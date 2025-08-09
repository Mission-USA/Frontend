import React from 'react'
import StudentSidebar from './StudentSidebar'
import AdminSidebar from './AdminSidebar'
import CompanySidebar from './CompanySidebar'

const Sidebar = () => {

    const role="user";  /// have to extract from cookies

    return (
        <div>
            {role === "user" && (
                <StudentSidebar />
            )}
            {role === "admin" && (
                <AdminSidebar />
            )}
            {role === "company" && (
                <CompanySidebar />
            )}
        </div>
    )
}

export default Sidebar;