import React from 'react'
//FIXME:import PropTypes from 'prop-types'

import Nav from './nav/Nav';



//FIXME:
function Header(props) {
  return (
      <header className='header'>
        <Nav />
      </header>
  );
}

Header.propTypes = {}

export default Header
