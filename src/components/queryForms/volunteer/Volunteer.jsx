import "./Volunteer.css";
import logo from "../../pages/images/logo1.jpg";
import { FaTimes } from "react-icons/fa";

const Volunteer = ({ volunt, open }) => {

    let navbarClas = ["volunteer"];
    open ? navbarClas.push("active") : navbarClas.join(" ")

    return (
        <div className={navbarClas.join(" ")}>
            <div className="topbar">
                <img src={logo} alt="Logo" />
                <FaTimes className="times" onClick={volunt} />
            </div>

            <div className="volunteer-box">
                <h3>Your donation today can go a long way to shape their future.</h3>
                <form>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Phone Number" />

                    <select placeholder="Donation For" >
                        <option value="scholarship">Scholarship</option>
                        <option value="scholarship">Others</option>
                    </select>

                    <button onClick={volunt}>Submit</button>
                </form>

            </div>

            <div className="botomBar">Thank you for your donation</div>
        </div>
    )
}

export default Volunteer;
