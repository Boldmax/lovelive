
import './App.css';
import About from './components/pages/about/About';
import Education from './components/pages/education/Education';
import Footer from './components/pages/footer/Footer';
import Gallery from './components/pages/gallery/Gallery';
import Join from './components/pages/join/Join';
import LandingPage from './components/pages/landingPage/LandingPage';
import Program from './components/pages/program/Program';

function App() {

  return (
    <div>
      <LandingPage />
      <About />
      <Program />
      <Education />
      <Gallery />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
