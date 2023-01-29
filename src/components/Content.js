//Ref: https://dev.to/zeyadetman/from-reactjs-class-component-to-functional-component---usestate-part-1-2l3m

//Ref: https://www.codevertiser.com/reactjs-responsive-navbar/

import React, { Component, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../navbar.css';

const Content = () => {
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
            Menu
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/vhv_ep1">vhv_ep1</Link>
              </li>
              <li>
                <Link to="/vhv_ep2">vhv_ep2</Link>
              </li>
              <li>
                <Link to="/vhv_ep3">vhv_ep3</Link>
              </li>
              <li>
                <Link to="/vhv_ep4">vhv_ep4</Link>
              </li>
              <li>
                <Link to="/vhv_ep5">vhv_ep5</Link>
              </li>
              <li>
                <Link to="/vhv_ep6">vhv_ep6</Link>
              </li>
              <li>
                <Link to="/vhv_ep7">vhv_ep7</Link>
              </li>

              <li>
                <Link to="/mini_blendfood">mini_blendfood</Link>
              </li>
              <li>
                <Link to="/mini_karaoke">mini_karaoke</Link>
              </li>
              <li>
                <Link to="/mini_tongue">mini_tongue</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Content;
