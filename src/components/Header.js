import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand logo" href="/">ReactClicky</a>
      <div className="d-flex justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <p className="nav-link">Score:  | </p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Top Score: </p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
