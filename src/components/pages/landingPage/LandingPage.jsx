import "./LandingPage.css";
import Logo from "../images/logo.jpg";
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
                <h1>Livelove Foundation  <span>...we live to love, we love to live...</span></h1>
                <p>
                    effect of sexual assault, domestic violence and child abuse are detrimental and
                    could be fatal in some cases. Our society will be a better place to live as an individual or a community if we join
                    hands together to prevent the occurence, address the incident as well as give support to survivors
                    in their recovery process and ensure they can stand as loved and accepted members of the society.
                </p>

                {/* <p>"We are on mission to build a community of young people living purposefully and in all areas of life"</p> */}

                {/* <button id="homePage">start with a little</button> */}
            </div>

        </div>
    )
}

export default LandingPage;
