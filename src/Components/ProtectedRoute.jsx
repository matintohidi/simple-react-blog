import React from 'react';
import { useAuth } from '../context/Auth';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  let { token } = useAuth();

  return token !== null ? children : <Navigate to={{pathname: '/login'}}/>
}

export default ProtectedRoute;
