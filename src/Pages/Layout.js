import { Outlet, Link } from "react-router-dom";
import MenuBar from '../Components/MenuBar';
const Layout = () => {
  return (
    <>
      <Outlet />
      <nav>
        <MenuBar />
      </nav>
      
    </>
  )
};

export default Layout;