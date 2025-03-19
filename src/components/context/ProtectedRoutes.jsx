import { Navigate } from "react-router-dom";
import { useAdminAuth } from "./AdminAuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAdminAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
