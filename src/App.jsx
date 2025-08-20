import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import StudentRoutes from './routes/studentRoutes.jsx';
import AdminRoutes from './routes/adminRoutes.jsx';
import CompanyRoutes from './routes/companyRoutes.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Main App Routes */}
          <Route path="/*" element={<AppRoutes />} />
          
          {/* Student Routes */}
          <Route path="/student/*" element={<StudentRoutes />} />
          
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          
          {/* Company Routes */}
          <Route path="/company/*" element={<CompanyRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
