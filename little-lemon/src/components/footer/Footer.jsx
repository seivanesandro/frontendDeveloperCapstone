import React from 'react';
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
    fontWeight,
} from '../../utilities/utils';
import { logoFooter } from '../../utilities/images';
import styled from 'styled-components';
import { devices } from '../../utilities/constantes';

const FooterHeaderContainer = styled.section`
    background: ${colorsPrimary.primary};

    @media only screen and (${devices.tablet}) {
        display: flex !important;
        max-width: 1068px;
        justify-content: center;
    }
`;

const FooterMainContainer = styled.div`
    background: ${colorsPrimary.primary};

    @media only screen and (${devices.tablet}) {
        display: block !important;

    }
`;

const FooterBoottom = styled.div`
    background: ${colorsPrimary.primary};

    @media only screen and (${devices.tablet}) {
        display: flex !important;
        flex-direction: column;
        max-width: 1068px;
        justify-content: center;
    }
`;

const RowContainer = styled(MDBRow)`

    @media only screen and (${devices.tablet}) {
        display: flex !important;
        flex-direction: column;
        align-items: center;
    }
`;

const ColContainer = styled(MDBCol)`
    @media only screen and (${devices.tablet}) {
        display: flex !important;
        flex-direction: column;
        align-items: center;
    }
`;

const FooterTitle = styled.h6`
    color: ${colorsSpecials.third};
    font-size: 21px;
    line-height: 1.7rem;
    letter-spacing: 0.3rem;
    text-align: center;
    font-weight: ${fontWeight.large};

    @media only screen and (${devices.mobileP}) {
        font-size: 3rem;
        line-height: 3rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 3rem;
        line-height: 3rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 3rem;
        line-height: 3rem;
    }
    @media only screen and (${devices.tablet}) {
        font-size: 3rem;
        line-height: 3rem;
        justify-content: start;
    }
`;

const FooterLink = styled.a`
    font-size: 19px;
    color: ${colorsSpecials.third};
    line-height: 1.7rem;
    letter-spacing: 0.3rem;
    text-align: center;

    &:hover {
        color: ${colorsPrimary.secondary};
    }

    @media only screen and (${devices.mobileP}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    @media only screen and (${devices.tablet}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const FooterText = styled.p`
    color: ${colorsSpecials.third};
    font-size: 19px;
    letter-spacing: 0.3rem;
    line-height: 1.9rem;
    text-align: center;
    @media only screen and (${devices.mobileP}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    @media only screen and (${devices.tablet}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const Img = styled.img`
    width: 190px;
    height: 310px;
    margin: 0.5rem 0;

    @media only screen and (${devices.mobileP}) {
        width: 190px;
        height: 330px;
    }
    @media only screen and (${devices.mobileM}) {
        width: 190px;
        height: 330px;
    }
    @media only screen and (${devices.mobileG}) {
        width: 190px;
        height: 330px;
    }
    @media only screen and (${devices.tablet}) {
        width: 190px;
        height: 330px;
    }
`;

const IconsSocialMediaStyle = styled(MDBIcon)`
    color: ${colorsSpecials.third};
    font-size: 2rem;

    &:hover {
        color: ${colorsPrimary.secondary};
    }

    @media only screen and (${devices.mobileP}) {
        font-size: 2rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 2rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 2rem;
    }
    @media only screen and (${devices.tablet}) {
        font-size: 2rem;
    }
`;

const CopyrightFooter = styled.span`
    color: ${colorsSecundary.primary};
    font-size: 19px;
    font-family: ${fontFamily.karla};
    font-weight: ${fontWeight.small};
    @media only screen and (${devices.mobileP}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    @media only screen and (${devices.tablet}) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

function Footer () {
  return (
      <>
          <MDBFooter className="footer footer-container text-center text-md-start text-muted">
              <FooterHeaderContainer className="footer-header-container d-flex justify-content-center border border-primary border-bottom-1 p-4">
                  <div className="social-media-icons-container m-4">
                      <a
                          href="/"
                          className="me-1 px-4 text-reset icons-container"
                      >
                          <IconsSocialMediaStyle
                              fab
                              size="xl"
                              icon="facebook-f"
                          />
                      </a>

                      <a
                          href="/"
                          className="me-1 px-4 text-reset"
                      >
                          <IconsSocialMediaStyle
                              fab
                              size="xl"
                              icon="twitter"
                          />
                      </a>

                      <a
                          href="/"
                          className="me-1 px-4 text-reset"
                      >
                          <IconsSocialMediaStyle
                              fab
                              size="xl"
                              icon="instagram"
                          />
                      </a>
                  </div>
              </FooterHeaderContainer>

              <section className="footer-section-main">
                  <FooterMainContainer className="text-center text-md-start p-3 footer-main-container">
                      <RowContainer className="row text-center d-flex justify-content-evenly mt-1">
                          <ColContainer
                              md="1"
                              lg="1"
                              xl="1"
                              className="mx-1 mb-4"
                          >
                              <Img
                                  src={logoFooter}
                                  alt="logo-footer"
                              />
                          </ColContainer>

                          <ColContainer
                              md="1"
                              lg="1"
                              xl="1"
                              className="mx-1 mb-4"
                          >
                              <FooterTitle className="text-uppercase fw-bold mb-4 ">
                                  Navigation
                              </FooterTitle>

                              <p>
                                  <FooterLink
                                      href="/"
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
                                      href="/"
                                      className="footer-link"
                                  >
                                      Reservation
                                  </FooterLink>
                              </p>

                              <p>
                                  <FooterLink
                                      href="#!"
                                      className="footer-link"
                                  >
                                      Order
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
                          </ColContainer>

                          <ColContainer
                              md="1"
                              lg="1"
                              xl="1"
                              className="mx-1 mb-md-0 mb-4"
                          >
                              <FooterTitle className="text-uppercase fw-bold mb-4">
                                  Contact
                              </FooterTitle>

                              <FooterText>
                                  Chicago
                              </FooterText>

                              <FooterText>
                                  rllemon@mail.com
                              </FooterText>

                              <FooterText>
                                  +0123456788
                              </FooterText>
                          </ColContainer>
                      </RowContainer>
                  </FooterMainContainer>
              </section>

              <FooterBoottom className="text-center p-1 footer-boottom">
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
