
import React from 'react';

import { Navigate , Outlet } from 'react-router-dom';

import { isAuthenticated } from './Helper';

const ProtectedRoute = () => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }
    return <Outlet />;
}
  
export default ProtectedRoute ;