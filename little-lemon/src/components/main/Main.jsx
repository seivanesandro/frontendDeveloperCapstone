import React from 'react';
//import PropTypes from 'prop-types';
//import { devices } from '../../constantes';
import styled from 'styled-components';

import Hero from './Hero';
import Menu from './Menu';
import Testimonials from './Testimonials';
import Description from './Description';

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
    padding: 5rem 0 0.5rem 0;
`;
const MainMenu = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 2rem 0 5rem 0;
`;
const MainTestemonials = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #495e57;
    padding: 5rem 0 15rem 0;
`;
const MainDescription = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 8rem 0 8rem 0;
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
          <MainTestemonials className="main-testemonials">
             <Testimonials />
          </MainTestemonials>
          <MainDescription className="main-description">
              <Description />
          </MainDescription>
      </MainContainer>
  );
}

Main.propTypes = {}

export default Main
