import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const RegisterProtect = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="container flex items-center justify-center space-x-2 mb-6">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
      </div>
    );
  }

  if (!user) {
    return <div>{children}</div>;
  }


  return <Navigate to="/" />;
};

export default RegisterProtect;
