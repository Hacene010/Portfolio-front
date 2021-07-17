import { BrowserRouter as Router, Link } from 'react-router-dom';
import SHeader from './Style';

export default function Header() {
  return (
    <SHeader className="Header">
      <Router>
        <div className="burger-container">
          <nav>
            <ul>
              <Link to="about">
                <li>A propos</li>
              </Link>

              <Link to="career">
                <li>Parcours</li>
              </Link>
              <Link to="/">
                <div className="logo">
                  <img src="/img/Header/logo.png" alt="logo" />
                </div>
              </Link>
              <Link to="achievments">
                <li>Réalisations</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
        </div>
      </Router>
    </SHeader>
  );
}
