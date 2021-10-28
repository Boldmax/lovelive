import "./Message.css";
import { FaWhatsapp } from "react-icons/fa";

const Message = () => {
    return (
        <div className="message">
            <a href="#whatsapp"><FaWhatsapp className="whatsapp" /></a>
        </div>
    )
}

export default Message;
