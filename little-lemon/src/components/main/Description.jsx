import React from 'react'
//FIXME:import PropTypes from 'prop-types';

import styled from 'styled-components';
import { devices } from '../../utilities/constantes';
import Hero from '../../assets/hero.png';

const DescriptionContainer = styled.div`
    background: #f4ce14;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 4%;
    margin: 3rem;
    border-radius: 16px;
    gap: 11rem;
    z-index: 0;
    box-shadow: 0 0 0.8rem black;

    @media only screen and (${devices.laptop}) {
    }
    @media only screen and (${devices.laptop3}) {
    }
    @media only screen and (${devices.tablet2}) {
    }
    @media only screen and (${devices.tablet1}) {
    }
    @media only screen and (${devices.m5}) {
    }
    @media only screen and (${devices.m3}) {
    }
`;

const DescriptionStyle = styled.div`
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
`;

const DescriptionTitle = styled.p`
    font-size: 64px;
    font-family: 'Markazi Text', serif;
    font-weight: 600;
    color: #495e57;
    line-height: 50px;
    letter-spacing: 0em;
    text-shadow: 0 0 0.2rem coral;

    @media only screen and (${devices.tablet3}) {
        font-size: 50px;
        line-height: 40px;
    }

    @media only screen and (${devices.tablet2}) {
        font-size: 23px;
        line-height: 25px;
    }
    @media only screen and (${devices.tablet1}) {
        font-size: 23px;
        line-height: 25px;
    }
    @media only screen and (${devices.m5}) {
        font-size: 23px;
        line-height: 25px;
    }
`;

const DescriptionSubTitle = styled.p`
    font-size: 48px;
    font-family: 'Markazi Text', serif;
    font-weight: 600;
    color: #495e57;
    line-height: 45px;
    letter-spacing: 0em;

    @media only screen and (${devices.tablet3}) {
        font-size: 45px;
        line-height: 40px;
    }

    @media only screen and (${devices.tablet2}) {
        font-size: 22px;
        line-height: 25px;
    }
    @media only screen and (${devices.tablet1}) {
        font-size: 20px;
        line-height: 25px;
    }
    @media only screen and (${devices.m5}) {
        font-size: 22px;
        line-height: 25px;
    }
`;

const DescriptionText = styled.p`
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    font-weight: 300;
    color: #000000;
    letter-spacing: 0.1em;

    @media only screen and (${devices.tablet3}) {
        font-size: 16px;
        line-height: 20px;
    }

    @media only screen and (${devices.tablet2}) {
        font-size: 14px;
        line-height: 20px;
    }
    @media only screen and (${devices.tablet1}) {
        font-size: 14px;
        line-height: 20px;
    }
    @media only screen and (${devices.m5}) {
        font-size:14px;
        line-height: 20px;
    }
`;

const DescriptionImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 5em;
    background: transparent;
`;

const DescriptionImg = styled.img`
    position: absolute;
    display: flex;
    width: 240px;
    height: 290px;
    z-index: 101;
    box-shadow: 0 0 0.3rem black;
    border-radius: 16px;
    &:hover {
        box-shadow: 0 0 0.6rem black;
    }

    @media only screen and (${devices.laptop}) {
    }
    @media only screen and (${devices.laptop3}) {
    }
    @media only screen and (${devices.tablet2}) {
    }
    @media only screen and (${devices.tablet1}) {
    }
    @media only screen and (${devices.m5}) {
        width: 180px;
        height: 220px;
    }
    @media only screen and (${devices.m3}) {
    }
`;
function Description(props) {
  return (
      <>
          <DescriptionContainer className="description-container">

              <DescriptionStyle className="description">
                  <DescriptionTitle className="description-title">
                      Little Lemon
                  </DescriptionTitle>

                  <DescriptionSubTitle className="description-subtitle">
                      Chicago
                  </DescriptionSubTitle>

                  <DescriptionText className="description-text">
                      We are a family owned
                      Mediterranean restaurant,<br/>
                      focused on traditional
                      recipes served with a modern
                      twist.
                  </DescriptionText>
              </DescriptionStyle>

              <DescriptionImgContainer className="descripton-img-container">
                  <DescriptionImg
                      className="descripton-img"
                      src={Hero}
                      alt="hero img"
                  />
              </DescriptionImgContainer>
          </DescriptionContainer>
      </>
  );
}

Description.propTypes = {}

export default Description
