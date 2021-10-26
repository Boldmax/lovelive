import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="containerBox">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Foundation</h4>
                            <ul>
                                <li>
                                    <a href="#homeSection">Home</a>
                                </li>
                                <li>
                                    <a href="#aboutSection">About Us</a>
                                </li>
                                <li>
                                    <a href="#progressSection">Program</a>
                                </li>
                                <li>
                                    <a href="#educationSection">Education</a>
                                </li>
                                <li>
                                    <a href="#gallerySection">Gallery</a>
                                </li>
                                <li>
                                    <a href="#joinSection">Join Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#contact">FAQ</a></li>
                                <li><a href="#footer;">Blog</a></li>
                                <li><a href="#footer">Report Cases</a></li>
                                <li><a href="#footer">Payment Options</a></li>
                            </ul>
                        </div>
                        {/* 
                        <div className="footer-col">
                            <h4>Online shop</h4>
                            <ul>
                                <li><a href="#menu">Children shoes</a></li>
                                <li><a href="#menu">Ladies shoes</a></li>
                                <li><a href="#menu">Sport shoes</a></li>
                                <li><a href="#menu">Office shoes</a></li>
                            </ul>
                        </div> */}

                        <div className="footer-col">
                            <h4>Follow us</h4>
                            <div className="social-links">
                                <a href="https://facebook.com"><FaFacebook className=" social" /></a>
                                <a href="https://twitter.com"><FaTwitter className=" social" /></a>
                                <a href="https://instagram.com"><FaInstagram className=" social" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
