import React from 'react';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

function Nav(props) {
  return (
      <nav style={{background: 'lightgreen'}}>
          <div className="nav-bar">
              <img
                  className="nav-img"
                  src={logo}
                  alt="logo"
                  style={{
                      with: '213.28px',
                      height: '56px'
                  }}
              />
              <ul className="nav-content">
                  <li className="nav-item">
                      <a href="">Home</a>
                  </li>
                  <li className="nav-item">
                      <a href="">About</a>
                  </li>
                  <li className="nav-item">
                      <a href="">Menu</a>
                  </li>
                  <li className="nav-item">
                      <a href="">Reservations</a>
                  </li>
                  <li className="nav-item">
                      <a href="#">Order-line</a>
                  </li>
                  <li className="nav-item">
                      <a href="#">Login</a>
                  </li>
              </ul>
          </div>
      </nav>
  );
}


Nav.propTypes = {}

export default Nav
