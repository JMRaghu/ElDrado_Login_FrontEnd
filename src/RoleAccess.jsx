import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const RoleAccess = ({ roles = [], user, redirectTarget }) => {
  return !roles.length || roles.includes(user?.role)
    ? <Outlet />
    : <Navigate to={redirectTarget} replace />;
};

  export default RoleAccess
  
  