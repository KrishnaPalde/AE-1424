import { Navigate } from "react-router-dom";
import { useExamAuth } from "./ExamAuthContext";

const ExamProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useExamAuth();

  return isAuthenticated ? children : <Navigate to="/online-examination/login" replace />;
};

export default ExamProtectedRoute;
