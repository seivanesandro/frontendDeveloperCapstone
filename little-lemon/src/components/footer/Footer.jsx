import React from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

import logoFooter  from '../../assets/logo_footer.png';
import {
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram
} from 'react-icons/io';
import { devices } from '../../constantes';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    /* layout */
    display: flex;
    gap: 15rem;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-block: 2em;

    /* typeography */
    font-family: 'Karla', sans-serif;
    font-size: 20px;
    font-weight: 800;
    line-height: 26px;
    letter-spacing: 1.5px;
    text-align: left;
    background: green;

    @media only screen and (${devices.laptop3}) {
        gap: 10rem;
        justify-content: center;
    }

    @media only screen and (${devices.laptop1}) {
        gap: 6rem;
        justify-content: center;
    }

    @media only screen and (${devices.tablet3}) {
        gap: 3rem;
        justify-content: center;
    }
    @media only screen and (${devices.tablet2}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }
`;

/* containers */
const FooterContainerImage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;

    @media only screen and (${devices.tablet2}) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
    }
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15rem;

    @media only screen and (${devices.laptop3}) {
        gap: 6rem;
    }

    @media only screen and (${devices.laptop1}) {
        gap: 4rem;
    }

    @media only screen and (${devices.tablet3}) {
        gap: 2rem;
    }
    @media only screen and (${devices.tablet2}) {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (${devices.tablet2}) {
        align-items: center;
        gap:0.5rem;
    }
`;

const FooterContentSocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
`;

/*items */
const Img = styled.img`
    width: 120px;
    height: 200px;

    @media only screen and (${devices.tablet2}) {
        width: 60px;
        height: 100px;
    }
`;

const FooterHeader = styled.p`
    font-weight: 600;
    margin-bottom: 0.6em;
    color: yellow;
`;

const FooterItem = styled.a`
    color: #fff;
    font-weight: 400;
    line-height: 2.5rem;
    text-decoration: inherit;
    font-size: 18px;

    &:hover{
      color: yellow;
    }
`;

const FooterSpan = styled.span`
    color: #fff;
    font-weight: 400;
    text-decoration: inherit;
    font-size: 14px;
`;

function Footer (props) {
  return (
      <FooterStyle className='footer'>
          <FooterContainerImage className="footer-image">
              <Img
                  src={logoFooter}
                  alt="little lemon logo"
              />
              <FooterSpan>
                  Copyright @ Sandro Seivane -
                  2023
              </FooterSpan>
          </FooterContainerImage>
          <FooterContainer className="footer-container">
              <FooterContent className="footer-nav">
                  <FooterHeader className="footer-header">
                      Navigation
                  </FooterHeader>
                  <FooterItem
                      href="/"
                      className="footer-item"
                  >
                      Home
                  </FooterItem>
                  <FooterItem
                      href="/"
                      className="footer-item"
                  >
                      About
                  </FooterItem>
                  <FooterItem
                      href="/"
                      className="footer-item"
                  >
                      Menu
                  </FooterItem>
                  <FooterItem
                      href="/booking"
                      className="footer-item"
                  >
                      Revervations
                  </FooterItem>
                  <FooterItem
                      href="/"
                      className="footer-item"
                  >
                      Order Online
                  </FooterItem>
                  <FooterItem
                      href="/"
                      className="footer-item"
                  >
                      Login
                  </FooterItem>
              </FooterContent>

              <FooterContent className="footer-contact">
                  <FooterHeader className="footer-header">
                      Contact
                  </FooterHeader>
                  <FooterItem
                      href="/"
                      className="footer-item"
                  >
                      Address
                  </FooterItem>
                  <FooterItem
                      href="/"
                      className="footer-item"
                  >
                      Phone Number
                  </FooterItem>
                  <FooterItem
                      href="/"
                      className="footer-item"
                  >
                      Email
                  </FooterItem>
              </FooterContent>

              <FooterContent className="footer-social">
                  <FooterHeader className="footer-header">
                      Social Media
                  </FooterHeader>
                  <FooterContentSocialMedia className="footer-content-social-media">
                      <FooterItem
                          href="/"
                          className="footer-item"
                      >
                          <IoLogoFacebook />
                      </FooterItem>
                      <FooterItem
                          href="/"
                          className="footer-item"
                      >
                          <IoLogoInstagram />
                      </FooterItem>
                      <FooterItem
                          href="/"
                          className="footer-item"
                      >
                          <IoLogoTwitter />
                      </FooterItem>
                  </FooterContentSocialMedia>
              </FooterContent>
          </FooterContainer>
      </FooterStyle>
  );
}

Footer.propTypes = {}

export default Footer
