import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand logo" href="/">Clickity Clackity Reactity</a>
      <div className="d-flex justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <p className="nav-link">Score: {props.score}</p>
          </li>
          <li className="nav-item">
            <p className="nav-link"> | </p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Top Score: {props.topScore} </p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired,
};

export default Header;
