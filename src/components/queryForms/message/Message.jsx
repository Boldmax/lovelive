import "./Message.css";
import { FaEnvelope } from "react-icons/fa";

const Message = () => {
    return (
        <div className="message">
            <a href="#whatsapp"><FaEnvelope className="whatsapp" /></a>
        </div>
    )
}

export default Message;
