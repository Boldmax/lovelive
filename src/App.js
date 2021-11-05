import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/mainPage/MainPage';

import Blog from './components/pages/blogPage/BlogPage';
/* import Navbar from './components/navbar/Navbar'; */

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/blog' component={() => <Blog />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
