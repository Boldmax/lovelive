import "./Navbar.css";
import Logo from "../pages/images/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const navShow = () => {
        setToggle(!toggle)
    };

    let navbarClas = ["navbar"];
    toggle ? navbarClas.push("active") : navbarClas.join(" ")

    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <Link to="/"> <img src={Logo} alt="NGO logo" /></Link>
                    </div>

                    <nav onClick={navShow}>
                        <ul className={navbarClas.join(" ")} >
                            <li>
                                <Link to="/" onClick={navShow}>Home</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={navShow}>About Us</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={navShow}>Program</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={navShow}>Webinars</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={navShow}>Gallery</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={navShow}>Join Us</Link>
                            </li>
                            <li>
                                <Link to="./blog" onClick={navShow}>Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar;
