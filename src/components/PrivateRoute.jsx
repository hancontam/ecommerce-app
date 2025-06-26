import { Navigate } from "react-router-dom";

const SESSION_TIMEOUT = 10 * 60 * 1000; // 10 minutes

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const loginTime = parseInt(localStorage.getItem("loginTime"));

  const now = Date.now();
  const expired = now - loginTime > SESSION_TIMEOUT;

  if (!user || expired) {
    localStorage.removeItem("user");
    localStorage.removeItem("loginTime");
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
