import { createContext, useContext, useEffect, useState } from 'react';
import { setLocalStorage , getLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [ user , setUser ] = useState(() => getLocalStorage('user', { loggedIn: false }))

  const [ token , setToken ] = useState(() => getLocalStorage('token' , null))

  useEffect(() => {
    setLocalStorage('user', user)
  }, [user])

  useEffect(() => {
    setLocalStorage('token', token)
  },[token])

  const toggleAuth = () => {
    setUser((prev) => ({
      ...prev,
      loggedIn: !prev.loggedIn,
    }))
  }

  const createToken = (token) => setToken(token);

  const value = { toggleAuth , user , createToken , token };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  let context = useContext(AuthContext)

  if (context === undefined)
    throw new Error('useAuth must be within AuthProvider!')

  return context;
}

export { AuthProvider, useAuth }
