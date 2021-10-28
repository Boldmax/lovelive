import "./Donation.css";
import logo from "../../pages/images/logo.png";
import { FaTimes } from "react-icons/fa";

const Donation = ({ toggle, popUp }) => {

    let navbarClas = ["donation"];
    toggle ? navbarClas.push("active") : navbarClas.join(" ")

    return (
        <div className={navbarClas.join(" ")}>
            <div className="topbar">
                <img src={logo} alt="Logo" />
                <FaTimes className="times" onClick={popUp} />
            </div>

            <div className="donation-box">
                <h3>Your donation today can go a long way to shape their future.</h3>
                <form>
                    <input type="text" placeholder="Name" />

                    <input type="text" placeholder="Amount Donated" />

                    <select placeholder="Donation For" >
                        <option value="scholarship">Scholarship</option>
                        <option value="scholarship">Others</option>
                    </select>

                    <button>Submit</button>
                </form>

            </div>

            <div className="botomBar">Thank you for your donation</div>
        </div>
    )
}

export default Donation;
