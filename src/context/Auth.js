import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { setLocalStorage , getLocalStorage } from '../hooks/useLocalStorage';
import { getMeUser } from '../services';

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const location = useLocation();

  const [ user , setUser ] = useState(() => getLocalStorage('user' , { isAuthenticated: false , token: null }));
  const [ authorData , setAuthorData ] = useState({ followers:[] , followings:[] , socials:{} });

  useEffect(() => {
    setLocalStorage('user', user);
  },[user])

  useEffect(() => {
    getMeUser(user.token)
      .then(res => {
        setLocalStorage('user' , { isAuthenticated: true , token: user.token });
        setAuthorData(res.data);
      })
      .catch(() => setLocalStorage('user' , { isAuthenticated: false , token: null }))
  },[location.pathname])

  const value = { user , setUser , authorData };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  let context = useContext(AuthContext)

  if (context === undefined)
    throw new Error('useAuth must be within AuthProvider!')

  return context;
}

export { AuthProvider, useAuth }