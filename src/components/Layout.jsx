import { Outlet } from "react-router-dom";
import Header from "./AppBar/AppBar";

const Layout = () => {
    return <div>
        <Header />
        <Outlet />
    </div>
};

export default Layout