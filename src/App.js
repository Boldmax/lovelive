
import './App.css';
import { useState } from "react";

import About from './components/pages/about/About';
import Education from './components/pages/education/Education';
import Footer from './components/pages/footer/Footer';
import Gallery from './components/pages/gallery/Gallery';
import Join from './components/pages/join/Join';
import LandingPage from './components/pages/landingPage/LandingPage';
import Program from './components/pages/program/Program';
import Donation from './components/queryForms/donation/Donation';

function App() {

  const [toggle, setToggle] = useState(false);
  const popUp = () => {
    setToggle(!toggle)
  };

  return (
    <div>
      <Donation toggle={toggle} popUp={popUp} />
      <LandingPage />
      <About popUp={popUp} />
      <Program popUp={popUp} />
      <Education />
      <Gallery />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
