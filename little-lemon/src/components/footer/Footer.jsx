import React from 'react';
//TODO:import { Link } from 'react-router-dom';

import {
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdb-react-ui-kit';

import {
    colorsPrimary,
    colorsSecundary,
    colorsSpecials,
    fontFamily,
    fontWeight
} from '../../utilities/utils';
//import { devices } from '../../utilities/constantes';
import { logoFooter } from '../../utilities/images';
import styled from 'styled-components';

const FooterHeaderContainer = styled.section`
    background: ${colorsPrimary.primary};
`;

const FooterMainContainer = styled.div`
    background: ${colorsPrimary.primary};
`;

const FooterBoottom = styled.div`
    background: ${colorsPrimary.primary};
`;

const FooterTitle = styled.h6`
    color: ${colorsSpecials.third};
    font-size: 15px;
`;

const FooterLink = styled.a`
    font-size: 14px;
    color: ${colorsSpecials.third};

    &:hover {
        color: ${colorsPrimary.secondary};
    }
`;

const FooterText = styled.p`
    color: ${colorsSpecials.third};
    font-size: 14px;
`;

const Img = styled.img`
    width: 100px;
    height: 160px;
`;

const IconsSocialMediaStyle = styled(MDBIcon)`
    color: ${colorsSpecials.third};

    &:hover {
        color: ${colorsPrimary.secondary};
    }
`;

const CopyrightFooter = styled.span`
    color: ${colorsSecundary.primary};
    font-size: 15px;
    font-family: ${fontFamily.karla};
    font-weight: ${fontWeight.small};
`;

function Footer () {
  return (
      <>
          <MDBFooter className="footer-header text-center text-lg-start text-muted">
              <FooterHeaderContainer className="footer-header-container d-flex justify-content-center justify-content-lg-between p-4">
                  <div className="logo-container me-5 d-none d-lg-block"></div>

                  <div className="social-media-icons-container mt-1">
                      <a
                          href="/"
                          className="me-4 px-3 text-reset icons-container"
                      >
                          <IconsSocialMediaStyle
                              fab
                              size="lg"
                              icon="facebook-f"
                          />
                      </a>

                      <a
                          href="/"
                          className="me-4 px-3 text-reset"
                      >
                          <IconsSocialMediaStyle
                              fab
                              size="lg"
                              icon="twitter"
                          />
                      </a>

                      <a
                          href="/"
                          className="me-4 px-3 text-reset"
                      >
                          <IconsSocialMediaStyle
                              fab
                              size="lg"
                              icon="instagram"
                          />
                      </a>
                  </div>
              </FooterHeaderContainer>

              <section className="footer-main">
                  <FooterMainContainer className="text-center text-md-start p-3 footer-main-container">
                      <MDBRow className="mt-1">
                          <MDBCol
                              md="3"
                              lg="4"
                              xl="3"
                              className="mx-auto mb-4"
                          >
                              <Img
                                  src={logoFooter}
                                  alt="logo-footer"
                              />
                          </MDBCol>

                          <MDBCol
                              md="2"
                              lg="2"
                              xl="2"
                              className="mx-auto mb-4"
                          >
                              <FooterTitle className="text-uppercase fw-bold mb-4 ">
                                  Navigation
                              </FooterTitle>

                              <p>
                                  <FooterLink
                                      href="#!"
                                      className="footer-link"
                                  >
                                      Home
                                  </FooterLink>
                              </p>

                              <p>
                                  <FooterLink
                                      href="#!"
                                      className="footer-link"
                                  >
                                      About
                                  </FooterLink>
                              </p>

                              <p>
                                  <FooterLink
                                      href="#!"
                                      className="footer-link"
                                  >
                                      Menu
                                  </FooterLink>
                              </p>

                              <p>
                                  <FooterLink
                                      href="#!"
                                      className="footer-link"
                                  >
                                      Revervations
                                  </FooterLink>
                              </p>

                              <p>
                                  <FooterLink
                                      href="#!"
                                      className="footer-link"
                                  >
                                      Order Online
                                  </FooterLink>
                              </p>

                              <p>
                                  <FooterLink
                                      href="#!"
                                      className="footer-link"
                                  >
                                      Login
                                  </FooterLink>
                              </p>
                          </MDBCol>

                          <MDBCol
                              md="4"
                              lg="3"
                              xl="3"
                              className="mx-auto mb-md-0 mb-4"
                          >
                              <FooterTitle className="text-uppercase fw-bold mb-4">
                                  Contact
                              </FooterTitle>

                              <FooterText>
                                  <MDBIcon
                                      icon="home"
                                      className="me-2"
                                  />
                                  Chicago, 10012,
                                  US
                              </FooterText>

                              <FooterText>
                                  <MDBIcon
                                      icon="envelope"
                                      className="me-3"
                                  />
                                  little-lemon@mail.com
                              </FooterText>

                              <FooterText>
                                  <MDBIcon
                                      icon="phone"
                                      className="me-3"
                                  />{' '}
                                  + 01 234 567 88
                              </FooterText>

                              <FooterText>
                                  <MDBIcon
                                      icon="print"
                                      className="me-3"
                                  />{' '}
                                  + 01 234 567 89
                              </FooterText>
                          </MDBCol>
                      </MDBRow>
                  </FooterMainContainer>
              </section>

              <FooterBoottom className="text-center p-4 footer-boottom">
                  <CopyrightFooter
                      className="copyright-footer"
                      href="#"
                  >
                      © Copyright: Sandro Seivane
                      - 2023
                  </CopyrightFooter>
              </FooterBoottom>
          </MDBFooter>
      </>
  );
}

export default Footer
