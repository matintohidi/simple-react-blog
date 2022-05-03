import { createContext, useContext, useEffect, useState } from 'react';
import { setLocalStorage , getLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    getLocalStorage('user', { loggedIn: false }),
  )

  useEffect(() => {
    setLocalStorage('user', user)
  }, [user])

  const toggleAuth = () => {
    setUser((prev) => ({
      ...prev,
      loggedIn: !prev.loggedIn,
    }))
  }

  const value = { toggleAuth , user }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  let context = useContext(AuthContext)

  if (context === undefined)
    throw new Error('useAuth must be within AuthProvider!')

  return context;
}

export { AuthProvider, useAuth }
