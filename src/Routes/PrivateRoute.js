import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
