import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/mainPage/MainPage';

import BlogPage from './components/pages/blogPage/BlogPage';
import Blog from './components/pages/blogs/Blog';
/* import Navbar from './components/navbar/Navbar'; */

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/blog' exact component={() => <BlogPage />} />
          <Route path='/blog/page' exact component={() => <Blog />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
