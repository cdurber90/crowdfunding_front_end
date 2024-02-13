import { Link, Outlet } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/project">PROJECTS</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li class="login"><Link to="/login">LOGIN</Link></li>

                </ul>
   
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;