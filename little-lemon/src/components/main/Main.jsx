import React from 'react';
//import PropTypes from 'prop-types';
import { devices } from '../../constantes';

import styled from 'styled-components';

import Hero from './Hero';
import Menu from './Menu';
//import Testimonials from './Testimonials';
//import Description from './Description';

const MainContainer = styled.div`
    display: grid;
    grid: 1fr 1fr 1fr;
    justify-items: none;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 0.5rem;
`;

const MainHero = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #495e57;
    padding: 3rem 0 0.5rem 0;

   /*FIXME:
    @media only screen and (${devices.laptop3}) {
    }
    @media only screen and (${devices.laptop1}) {
    }
    @media only screen and (${devices.tablet3}) {
    }
    @media only screen and (${devices.tablet2}) {
    }
    @media only screen and (${devices.m5}) {
    } */
`;

const MainMenu = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 0.5rem 0 0.5rem 0;

`;
function Main(props) {
  return (
      <MainContainer
          style={{background: 'tomato'}}
          className="main-sections"
      >
          <MainHero className="Hero">
             <Hero />
          </MainHero>
          <MainMenu className="main-menu">
             <Menu />
          </MainMenu>
          <section className="main-testemonials">
             testemonials
          </section>
          <section className="main-description">
              description
          </section>
      </MainContainer>
  );
}

Main.propTypes = {}

export default Main
