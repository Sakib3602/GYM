import React, { useContext } from "react";
import { Navigate, useLocation,  } from "react-router";
import { AuthContext } from "./AuthProvider";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
  // const navigate = useNavigate();
  const location = useLocation();
  const { person, loading } = useContext(AuthContext);
    if (loading) {
    return <Loader></Loader>
  }

  // ✅ Now check if person exists
  if (!person) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  return children ;
};

export default PrivateRoute;
