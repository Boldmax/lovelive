import { useState } from "react";
import About from '../pages/about/About';
import Education from '../pages/education/Webiner';
import Footer from '../pages/footer/Footer';
import Gallery from '../pages/gallery/Gallery';
import Join from '../pages/join/Join';
import LandingPage from '../pages/landingPage/LandingPage';
import Program from '../pages/program/Program';
import Donation from '../queryForms/donation/Donation';
import Volunteer from '../queryForms/volunteer/Volunteer';
import Message from '../queryForms/message/Message';

const MainPage = () => {

    const [toggle, setToggle] = useState(true);
    const popUp = () => {
        setToggle(!toggle)
    };

    // volunteer
    const [open, setOpen] = useState(true);
    const volunt = () => {
        setOpen(!open)
    };

    return (
        <div>
            <Donation toggle={toggle} popUp={popUp} />
            <Volunteer open={open} volunt={volunt} />
            <Message />
            <LandingPage />
            <About popUp={popUp} volunt={volunt} />
            <Program popUp={popUp} />
            <Education />
            <Gallery />
            <Join volunt={volunt} />
            <Footer />
        </div>
    )
}

export default MainPage;
