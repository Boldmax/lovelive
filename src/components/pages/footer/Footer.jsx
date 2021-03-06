import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                                <li><Link to="./blog">Blog</Link></li>
                                <li><a href="#footer">Report Cases</a></li>
                                <li><a href="#footer">Payment Options</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Follow us</h4>
                            <div className="social-links">
                                <a href="https://www.facebook.com/101732601569908?referrer=whatsapp"><FaFacebook className=" social" /></a>
                                <a href="https://t.me/livloffoundation"><FaTelegram className=" social" /></a>
                                <a href="https://www.instagram.com/p/CBEOC7gJ0Mz/?igshid=op3apitmuh9"><FaInstagram className=" social" /></a>
                                <a href="https://chat.whatsapp.com/HxQMUvst2id9lS5HHahOI1"><FaWhatsapp className=" social" /></a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4>&copy; LiveLove Foundation</h4>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
