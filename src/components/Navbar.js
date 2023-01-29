//Ref: https://dev.to/zeyadetman/from-reactjs-class-component-to-functional-component---usestate-part-1-2l3m

//Ref: https://www.codevertiser.com/reactjs-responsive-navbar/

import React, { Component, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg';
import { ReactComponent as Brand } from '../assets/icons/logo.svg';
import '../navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">logo</div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            hamburger
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
