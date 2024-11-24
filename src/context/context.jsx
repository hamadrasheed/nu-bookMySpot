import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUserRole, setLoggedInUserRole] = useState(null);
  const [loggedInUserInfo, setLoggedInUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); 
  }, []);

  const login = (responseData) => {
    
    const token = responseData.token;
    const role  = responseData.role.slug;

    setLoggedInUserInfo(responseData);

    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('userId', responseData.id);
    setLoggedInUserRole(role);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setLoggedInUserRole(null);
    setLoggedInUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loggedInUserRole, loggedInUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
