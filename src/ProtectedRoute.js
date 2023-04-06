import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Unauthenticated users redirected to log in route
const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};


//These are the routes you want authenticated users not to access.
// example, a user just logged in successfully, then tries to navigate to "/login" either via link or manual entry in the address bar, and since they are already authenticated they are bounced off the route.

// Authenticated users redirected to safe route
const AnonymousRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export { ProtectedRoute, AnonymousRoute };
