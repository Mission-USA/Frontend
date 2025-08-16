import Cookies from "js-cookie";

// All possible menus
const allMenus = {
  student: [
    { label: "Dashboard", path: "/student/dashboard" },
    { label: "Jobs", path: "/student/jobs" },
    { label: "Applications", path: "/student/applications" },
    { label: "Profile", path: "/profile" },
  ],
  company: [
    { label: "Dashboard", path: "/company/dashboard" },
    { label: "Post Job", path: "/company/post-job" },
    { label: "Applicants", path: "/comapny/applicants" },
    { label: "Settings", path: "/settings" },
  ],
  admin: [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Manage Users", path: "/admin/users" },
    { label: "Reports", path: "/admin/reports" },
  ],
  common: [
    { label: "Home", path: "/" },
    { label: "Team", path: "/team" },
    { label: "Feature", path: "/feature" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
};

// Function to return menu for current role
const getMenuForRole=()=> {
  const role = Cookies.get("role");
  return allMenus[role] || allMenus['company'];
}

export default getMenuForRole;
