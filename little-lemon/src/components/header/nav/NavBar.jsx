import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { logo } from '../../../utilities/images';
import {
    colorsPrimary,
    colorsSpecials,
    fontWeight,
} from '../../../utilities/utils';

const Img = styled.img`
    width: 180px;
    height: 56px;
`;

const LabelsStyle = styled.label`
    font-size: 17px;
    font-weight: ${fontWeight.medium};
    color: ${colorsPrimary.primary};
    cursor: pointer;

    &:hover {
        color: ${colorsSpecials.primary};
    }
    &:active {
        color: ${colorsSpecials.primary};
    }
`;
export default function NavBar({
    linkOne,
    linktwo,
    linkthird,
    linkfour,
    linkfive
}) {
    const [showNavCentred, setShowNavCentred] =
        useState(false);
    return (
        <>
            <MDBNavbar
                expand="lg"
                light
                bgColor="light"
                className="navBar fixed-top p-2 border border-0 shadow"
            >
                <MDBContainer
                    fluid
                    className="px-5"
                >
                    <MDBNavbarBrand
                        className="navbar-link"
                        href="#"
                    >
                        <Img
                            className="navbar-img"
                            src={logo}
                            alt="logo img"
                        />
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() =>
                            setShowNavCentred(
                                !showNavCentred
                            )
                        }
                    >
                        <MDBIcon
                            icon="bars"
                            fas
                        />
                    </MDBNavbarToggler>

                    <MDBCollapse
                        navbar
                        show={showNavCentred}
                        center
                        id="navbarCenteredExample"
                    >
                        <MDBNavbarNav className="mr-auto px-5 mb-2 mb-lg-0 g-2">
                            <MDBNavbarItem className="px-5">
                                <Link
                                    active
                                    aria-current="page"
                                    to="/"
                                >
                                    <LabelsStyle>
                                        {linkOne}
                                    </LabelsStyle>
                                </Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-5">
                                <Link
                                    active
                                    aria-current="page"
                                    to="/booking"
                                >
                                    <LabelsStyle>
                                        {linktwo}
                                    </LabelsStyle>
                                </Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-5">
                                <HashLink
                                    smooth
                                    to="/#menu"
                                >
                                    <LabelsStyle>
                                        {
                                            linkthird
                                        }
                                    </LabelsStyle>
                                </HashLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-5">
                                <HashLink
                                    to="/#testimonial"
                                    scroll={el =>
                                        el.scrollIntoView(
                                            {
                                                behavior:
                                                    'auto',
                                                block: 'end'
                                            }
                                        )
                                    }
                                >
                                    <LabelsStyle>
                                        {linkfive}
                                    </LabelsStyle>
                                </HashLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-5">
                                <HashLink
                                    to="/#About"
                                    scroll={el =>
                                        el.scrollIntoView(
                                            {
                                                behavior:
                                                    'auto',
                                                block: 'end'
                                            }
                                        )
                                    }
                                >
                                    <LabelsStyle>
                                        {linkfour}
                                    </LabelsStyle>
                                </HashLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

NavBar.propTypes = {
    linkOne: PropTypes.string.isRequired,
    linktwo: PropTypes.string.isRequired,
    linkthird: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired,
    linkfive: PropTypes.string.isRequired
};

NavBar.defaultProps = {
    linkOne: 'Home',
    linktwo: 'Reserves',
    linkthird: 'Menu',
    linkfour: 'About',
    linkfive: 'Testimonials'
};
