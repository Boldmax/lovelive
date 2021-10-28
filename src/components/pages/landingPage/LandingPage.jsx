import "./LandingPage.css";
import Logo from "../images/logo.png";
import { useState } from "react";

const LandingPage = () => {

    const [toggle, setToggle] = useState(false);
    const navShow = () => {
        setToggle(!toggle)
    };

    let navbarClas = ["navbar"];
    toggle ? navbarClas.push("active") : navbarClas.join(" ")

    return (
        <div className="fullContainer banner" id="homeSection">
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
                                <a href="#educationSection" onClick={navShow}>Education</a>
                            </li>
                            <li>
                                <a href="#gallerySection" onClick={navShow}>Gallery</a>
                            </li>
                            <li>
                                <a href="#joinSection" onClick={navShow}>Join Us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>


            <div className="container">
                <h1>Together we can <span>save lives</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ducimus veritatis asperiores accusamus,
                    sapiente explicabo esse atque expedita ipsam porro.
                    Voluptatibus assumenda dignissimos vero excepturi
                    voluptatum, ratione unde inventore quibusdam nam?
            </p>

                <button id="homePage">start with a little</button>
            </div>

        </div>
    )
}

export default LandingPage;
