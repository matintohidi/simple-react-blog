import { createContext, useContext, useEffect, useState } from 'react';
import { setLocalStorage , getLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [ token , setToken ] = useState(() => getLocalStorage('token' , null));

  useEffect(() => {
    setLocalStorage('token', token)
  },[token])

  const value = { setToken , token };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  let context = useContext(AuthContext)

  if (context === undefined)
    throw new Error('useAuth must be within AuthProvider!')

  return context;
}

export { AuthProvider, useAuth }
