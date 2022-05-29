import React from 'react';
import { useAuth } from '../context/Auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  let { user } = useAuth();

  return user.isAuthenticated === true || user.token !== null ? children : <Navigate to={{ pathname: '/login' }} state={ { error: "You must be logged in to use the site services" } } />
}

export default ProtectedRoute;
