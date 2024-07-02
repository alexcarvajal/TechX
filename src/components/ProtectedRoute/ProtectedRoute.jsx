import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../../templates/Sidebar/Sidebar';

const ProtectedRoute = ({ element }) => {
  const isAutenticated = !!localStorage.getItem('authToken');

  if (!isAutenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;