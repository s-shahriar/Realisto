import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {;
    return (
      <div className="container flex items-center justify-center space-x-2 mb-6">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
      </div>
    );
  }


  if (user) {
    console.log("User not logged in. Redirecting to login page...");
    return <div>{children}</div>
  }



  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
