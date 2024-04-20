import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{

    var [activeMenu, setActiveMenu] = useState(false);

    const show = () => {
        setActiveMenu(true);
    }

    const notshow = () => {
        setActiveMenu(false);
    }


    return(
        
        <div className="main-header">
        <nav className="navbar">

            <div className="logo_img"></div>
            <div className={activeMenu ? "active" : ""}>
                <ul className="nav_item">
                    <li className="nav_items"><NavLink to={"/"} className="nav-links" onClick={notshow}>Home</NavLink></li>
                    <li className="nav_items"><NavLink to={"/services"}  className="nav-links" onClick={notshow}>Services</NavLink></li>
                    <li className="nav_items"><NavLink to={"/about"} className="nav-links" onClick={notshow}>About</NavLink></li>
                    <li className="nav_items"><NavLink to={"/contact"} className="nav-links" onClick={notshow}>Contact</NavLink></li>
                    <li className="nav_items"><NavLink to={"/register"} className="nav-links" onClick={notshow}>Register</NavLink></li>
                    
                </ul>
                <div className="menu-buttons">
            <i class="fa-solid fa-bars open " onClick={show}></i>
            <i class="fa-solid fa-xmark close" onClick={notshow}></i>
        </div>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;