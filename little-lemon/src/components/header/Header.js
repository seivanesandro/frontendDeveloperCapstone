import React from 'react'
import PropTypes from 'prop-types'

import photoHeader from '../../assets/restauranfood.jpg'
import Nav from './Nav';

function Header(props) {
  return (
      <header style={{ margin: '0 0 1.8rem 0' }}>
          <Nav />
          <div
              className="header-content"
              style={{
                  background: 'red',
                  padding: '1rem 0 1rem 0',
                  display: 'flex'
              }}
          >
              <div
                  className="header-text"
                  style={{
                      margin: '1.5rem 11rem 1rem 5rem'
                  }}
              >
                  <h3>title</h3>
                  <h4>sub-title</h4>
                  <p>
                      Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                      Nam a enim magna. Phasellus
                      non pellentesque quam, at
                      vehicula est. Nulla vitae
                      molestie nibh, ut
                      scelerisque risus.
                      Vestibulum ac interdum
                      metus. Sed sit amet purus
                      eros. Sed commodo, elit
                      pellentesque laoreet
                      fermentum, nibh ex egestas
                      odio, nec finibus nisi est
                      ac quam. Integer egestas
                      lectus at lorem dictum, a
                      fringilla urna lacinia.
                      Donec vitae dolor non augue
                      mollis accumsan a quis
                      massa.{' '}
                  </p>
              </div>

              <div
                  className="header-img"
                  style={{
                      margin: '1rem 6rem 1rem 0'
                  }}
              >
                  <img
                      src={photoHeader}
                      alt="restaurante-food"
                      style={{
                          width: '180px',
                          height: '246px'
                      }}
                  />
              </div>
          </div>
      </header>
  );
}

Header.propTypes = {}

export default Header
