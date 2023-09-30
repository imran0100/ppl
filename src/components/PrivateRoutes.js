import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  let auth = JSON.parse(localStorage.getItem("user_322"));
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
