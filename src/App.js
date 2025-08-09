import React from 'react';
import AppRoutes from './routes/AppRoutes';
import StudentRoutes from './routes/studentRoutes';
import AdminRoutes from './routes/adminRoutes';
import CompanyRoutes from './routes/companyRoutes';

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
