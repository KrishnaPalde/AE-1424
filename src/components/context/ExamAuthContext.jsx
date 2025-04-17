import { createContext, useContext, useState, useEffect } from "react";

const ExamAuthContext = createContext();

export const ExamAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("examLoggedIn")
  );

  const login = () => {
    localStorage.setItem("examLoggedIn", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("examLoggedIn");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("examLoggedIn"));
  }, []);

  return (
    <ExamAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </ExamAuthContext.Provider>
  );
};

export const useExamAuth = () => useContext(ExamAuthContext);
