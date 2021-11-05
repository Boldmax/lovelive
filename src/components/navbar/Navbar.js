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
                        <img src={Logo} alt="NGO logo" />
                    </div>

                    <nav onClick={navShow}>
                        <ul className={navbarClas.join(" ")} >
                            <li>
                                <a href="#homeSection" onClick={navShow}>Home</a>
                            </li>
                            <li>
                                <a href="#aboutSection" onClick={navShow}>About Us</a>
                            </li>
                            <li>
                                <a href="#progressSection" onClick={navShow}>Program</a>
                            </li>
                            <li>
                                <a href="#educationSection" onClick={navShow}>Webinars</a>
                            </li>
                            <li>
                                <a href="#gallerySection" onClick={navShow}>Gallery</a>
                            </li>
                            <li>
                                <a href="#joinSection" onClick={navShow}>Join Us</a>
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
