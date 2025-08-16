import React from 'react';
import AppRoutes from './routes/AppRoutes.jsx';
import StudentRoutes from './routes/studentRoutes.jsx';
import AdminRoutes from './routes/adminRoutes.jsx';
import CompanyRoutes from './routes/companyRoutes.jsx';

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <StudentRoutes />
      <AdminRoutes />
      <CompanyRoutes />
    </div>
  );
}

export default App;
