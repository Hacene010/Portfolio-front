import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/AboutMe/AboutMe';
import Career from './components/Career/Career';
import Achievments from './components/Achievments/Achievments';
import Contact from './components/Contact/Contact';
import SApp from './Style';

function App() {
  return (
    <Router>
      <SApp className="App">
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/career">
          <Career />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/achievments">
          <Achievments />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </SApp>
    </Router>
  );
}

export default App;
