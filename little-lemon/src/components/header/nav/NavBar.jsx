import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';

import {logo} from '../../../utilities/images';
import {
    colorsPrimary,
    colorsSpecials,
    fontWeight,
    fontSize,
} from '../../../utilities/utils';

const Img = styled.img`
    width: 190px;
    height: 56px;
`;

const LabelsStyle = styled.label`
    font-size: ${fontSize.small};
    font-weight: ${fontWeight.medium};
    color: ${colorsPrimary.primary};

    &:hover {
        color: ${colorsSpecials.primary};
    }
    &:active {
        color: ${colorsSpecials.primary};
    }
`;

export default function NavBar({
    home,
    reserves,
    about,
    menu,
    orders
}) {
    const [showNavCentred, setShowNavCentred] =
        useState(false);

    return (
        <>
            <MDBNavbar
                expand="xl"
                light
                bgColor="light"
                className="navBar fixed-top p-2 border border-0 rounded-5 shadow"
            >
                <MDBContainer fluid  className='px-5'>
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
                        <MDBNavbarNav className="mr-auto px-5 mb-2 mb-lg-0">
                            <MDBNavbarItem className="px-5">
                                <MDBNavbarLink
                                    active
                                    aria-current="page"
                                    href="#"
                                >
                                    <LabelsStyle>
                                        {home}
                                    </LabelsStyle>
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-5">
                                <MDBNavbarLink
                                    active
                                    aria-current="page"
                                    href="#"
                                >
                                    <LabelsStyle>
                                        {reserves}
                                    </LabelsStyle>
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-5">
                                <MDBNavbarLink
                                    active
                                    aria-current="page"
                                    href="#"
                                >
                                    <LabelsStyle>
                                        {about}
                                    </LabelsStyle>
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-5">
                                <MDBNavbarLink
                                    active
                                    aria-current="page"
                                    href="#"
                                >
                                    <LabelsStyle>
                                        {menu}
                                    </LabelsStyle>
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-5">
                                <MDBNavbarLink
                                    disabled
                                    aria-current="page"
                                    href="#"
                                >
                                    <LabelsStyle className='text-reset'>
                                        {orders}
                                    </LabelsStyle>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

NavBar.propTypes = {
    home: PropTypes.string.isRequired,
    reserves: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired,
    orders: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
    home: 'Home',
    reserves: 'Reserves',
    about: 'About',
    menu: 'Menu',
    orders: 'Orders',
};


