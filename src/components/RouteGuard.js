import {
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import jwt from 'jwt-decode' 

const RouteGuard = ({ redirectPath = '/' }) => {

  function hasJWT() {
      let flag = false;
      let token = localStorage.getItem("token")
      if (token && token != 'undefined') flag = true;
      else flag = false;
      return flag
  }

  if (!hasJWT()) {
      return <Navigate to={redirectPath} replace />;
  }
  let token = localStorage.getItem("token")
  const user = jwt(token)

  return <Outlet context={{ user }}/>;
};

export default RouteGuard;

