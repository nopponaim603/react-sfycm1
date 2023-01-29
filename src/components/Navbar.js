import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <Router>
            <div>
              <Link to="/">
                <p>Home</p>
              </Link>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/login">
                    <p>login</p>
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <p>Profile</p>
                  </Link>
                </li>
              </ul>
            </div>
          </Router>
        </nav>
      </header>
    );
  }
}

export default Navbar;
