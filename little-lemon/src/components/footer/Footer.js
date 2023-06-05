import React from 'react';
import PropTypes from 'prop-types';
import logoFooter  from '../../assets/logo_footer.png'

function footer(props) {
  return (
      <footer style={{margin:'2.8rem 0 0 0', background:'lightblue'}}>
              <div className="footer-content">
                  <img
                      src={logoFooter}
                      alt="logo"
                      style={{
                          with: '172px',
                          height: '220px'
                      }}
                  />
                  <div className="footer-nav">
                      <li className="footer-head">
                          Navigation
                      </li>
                      <li className="footer-item">
                          Home
                      </li>
                      <li className="footer-item">
                          About
                      </li>
                      <li className="footer-item">
                          Menu
                      </li>
                      <li className="footer-item">
                          Reservations
                      </li>
                      <li className="footer-item">
                          Order Line
                      </li>
                      <li className="footer-item">
                          Login
                      </li>
                  </div>

                  <div className="footer-contact">
                      <li className="footer-head">
                          Contact
                      </li>
                      <li className="footer-item">
                          Adress
                      </li>
                      <li className="footer-item">
                          Phone Number
                      </li>
                      <li className="footer-item">
                          Email
                      </li>
                  </div>

                  <div className="footer-social">
                      <li className="footer-head">
                          Social Media Links
                      </li>
                      <li className="footer-item">
                          facebook
                      </li>
                      <li className="footer-item">
                          instagram
                      </li>
                      <li className="footer-item">
                          twitter
                      </li>
                  </div>
              </div>
      </footer>
  );
}

footer.propTypes = {}

export default footer
