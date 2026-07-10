import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

function Layout(){
    return(
        <>
        <NavBar/>
         <div className="main">
        <Sidebar/>
        <div className="content">
            <Outlet/>
            </div>
            </div>
        <Footer/>
        </>
    )
}
export default Layout;