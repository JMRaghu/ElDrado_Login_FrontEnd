import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Unauthenticated users redirected to log in route
const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

// Authenticated users redirected to safe route
const AnonymousRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export { ProtectedRoute, AnonymousRoute };
