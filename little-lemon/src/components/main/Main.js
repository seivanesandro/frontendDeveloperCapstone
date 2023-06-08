import React from 'react';
import PropTypes from 'prop-types';

import Hero from './Hero';
import Menu from './Menu';
import Testimonials from './Testimonials';
import Description from './Description';

//FIXME:
function Main(props) {
  return (
      <main className="main-articles" style={{background:'lightcoral'}}>
            <article className="main-menu">
                <Menu />
            </article>
            <article className="main-testemonials">
                <Testimonials />
            </article>
            <article className='main-description'>
                <Description />
            </article>
      </main>
  );
}

Main.propTypes = {}

export default Main
