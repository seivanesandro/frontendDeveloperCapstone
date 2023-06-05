import React from 'react';
import PropTypes from 'prop-types';

import Hero from './Hero';
import Menu from './Menu';
import Testimonials from './Testimonials';
import Description from './Description';

function Main(props) {
  return (
      <main className="main-articles" style={{margin:'1.5rem', background:'lightcoral'}}>
          <article className="main-hero">
              <Hero />
          </article>
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
