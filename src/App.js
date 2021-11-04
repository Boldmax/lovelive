import './App.css';
import { useState } from "react";

import About from './components/pages/about/About';
import Education from './components/pages/education/Webiner';
import Footer from './components/pages/footer/Footer';
import Gallery from './components/pages/gallery/Gallery';
import Join from './components/pages/join/Join';
import LandingPage from './components/pages/landingPage/LandingPage';
import Program from './components/pages/program/Program';
import Donation from './components/queryForms/donation/Donation';
import Volunteer from './components/queryForms/volunteer/Volunteer';
import Message from './components/queryForms/message/Message';

function App() {

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
  );
}

export default App;
