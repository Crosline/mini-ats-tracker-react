import { Navigate, Outlet } from "react-router-dom";
import { LoadingSpinner } from "./common";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { accessToken, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner color="indigo" />
      </div>
    );
  }

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
