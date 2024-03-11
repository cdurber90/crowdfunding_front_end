import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";

import "./NavBar.css";

function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/nominate">NOMINATE A HERO</Link></li>
                    <li><Link to="/signup">CREATE ACCOUNT</Link></li>
                    <div>
                        {auth.token ? (
                            <li><Link to="/" onClick={handleLogout}>
                                LOG OUT
                            </Link></li>
                             ) : (
                            <li><Link to="/login">LOGIN</Link></li>
                         )}
                    
                    </div>
                    

                </ul>
   
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;