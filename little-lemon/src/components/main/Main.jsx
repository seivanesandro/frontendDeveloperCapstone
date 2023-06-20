import React from 'react';
import styled from 'styled-components';
import Hero from './hero/Hero';
import Menu from './menu/Menu';
import Testimonials from './testimonials/Testimonials';
import Description from './description/Description';

const MainContainer = styled.div`
    display: grid;
    grid: 1fr 1fr 1fr;
    justify-items: none;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
`;

const MainHero = styled.section`
    display: flex;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    background: rgb(73, 94, 87);
    padding: 7rem 0px 0px;
    z-index: 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5rem 1rem 1rem 1rem;
`;

const MainMenu = styled.section`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: stretch;
    background: #FFF;
    padding: 5rem 5rem 10rem;
    gap: 20rem;
    align-items: center;
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
    padding: 8rem 0 10rem 0;
    background: #F4CE14;
`;

function Main(props) {
  return (
      <MainContainer
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

export default Main
