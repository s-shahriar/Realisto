
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Layout() {
  return (
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
  );
}

export default Layout;
