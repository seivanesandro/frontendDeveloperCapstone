import React from 'react';
//import PropTypes from 'prop-types';
//import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

import {
    IoIosCloseCircleOutline,
    IoIosMenu,
    IoMdPerson,
    IoIosHome,
} from 'react-icons/io';
import styled, { keyframes } from 'styled-components';
import { devices } from '../../../constantes';
import logo from '../../../assets/logo.png';

const FadeInAnimation = keyframes`
    0% { opacity: 0; transform: translateY(-10%); }
    50%{ opacity: 0;  transform: translateY(-40%);}
    100%{ opacity: 1;}
`;

const NavContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 1rem;
    background: #fff;
    z-index: 0;

    @media only screen and (${devices.m5}) {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 3rem;
    }
`;

const NavMobile = styled.div`
    display: none;

    @media only screen and (${devices.m5}) {
        display: block;
        cursor: pointer;
        float: left;
        z-index:100;
    }
`;

const NavContent = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10rem;

    @media only screen and (${devices.laptop3}) {
        gap: 4rem;
    }
    @media only screen and (${devices.laptop1}) {
        gap: 4rem;
    }
    @media only screen and (${devices.tablet3}) {
        gap: 2.5rem;
    }
    @media only screen and (${devices.tablet2}) {
        gap: 1.5rem;
    }
    @media only screen and (${devices.m5}) {
        display: ${({ isOpen }) =>
            isOpen ? 'flex' : ''};
        flex-direction: column;
        height: 0em;
        width: 19em;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        z-index: 99;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
        animation-name: ${FadeInAnimation};
        animation-duration: 0.3s;
        box-shadow: 0 0 0.3rem black;
        gap: 2rem;

        &.active {
            height: 75%;
            padding: 1em 2em;
        }
    }
`;

const NavItemStyle = styled.a`
    display: flex;
    align-items: stretch;
    gap: 5px;
    color: green;
    font-weight: 600;
    text-decoration: inherit;
    font-family: 'Markazi', sans-serif;

    &:hover {
        color: yellow;
    }

    @media only screen and (${devices.laptop3}) {
        font-weight: 500;
    }
    @media only screen and (${devices.laptop1}) {
        font-weight: 500;
    }
    @media only screen and (${devices.tablet3}) {
        font-weight: 500;
    }
    @media only screen and (${devices.tablet2}) {
        font-weight: 500;
    }
    @media only screen and (${devices.m5}) {
        font-weight: 500;
        display: block;
        margin: 0rem 4rem;
    }
`;

const Img = styled.img`
    width: 190px;
    height: 56px;

    @media only screen and (${devices.laptop3}) {
        width: 190px;
        height: 56px;
    }
    @media only screen and (${devices.laptop1}) {
        width: 190px;
        height: 56px;
    }
    @media only screen and (${devices.tablet3}) {
        display: flex;
        width: 150px;
        height: 46px;
    }
`;

const Logo = styled.img`
    display: none;
    width: 190px;
    height: 56px;

    @media only screen and (${devices.laptop3}) {
        display: none;
        width: 190px;
        height: 56px;
    }
    @media only screen and (${devices.laptop1}) {
        display: none;
        width: 190px;
        height: 56px;
    }
    @media only screen and (${devices.tablet3}) {
        display: none;
        width: 150px;
        height: 46px;
    }
    @media only screen and (${devices.tablet2}) {
        display: none;
        width: 150px;
        height: 46px;
    }
    @media only screen and (${devices.tablet1}) {
        display: none;
        width: 150px;
        height: 46px;
    }
    @media only screen and (${devices.m5}) {
        display: flex;
        width: 150px;
        height: 46px;
    }
`;
function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <NavContainerStyle>
            <NavMobile
                className="nav-mobile"
                onClick={toggleNav}
                isOpen={isOpen}
            >
                {isOpen ? (
                    <IoIosCloseCircleOutline
                        size={30}
                    />
                ) : (
                    <IoIosMenu size={20} />
                )}
            </NavMobile>
            <Logo src={logo} alt="logo" />
            {isOpen ? (
                <NavContent
                    className="nav active"
                    onClick={toggleNav}
                >
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        <Img
                            src={logo}
                            alt="logo"
                        />
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        <IoIosHome size={20} />
                        {''}Home
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        About
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        Menu
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        Reserves
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        Orders
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        <IoMdPerson size={20} />
                    </NavItemStyle>
                </NavContent>
            ) : (
                <NavContent
                    className="nav "
                    onClick={toggleNav}
                >
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        <Img
                            src={logo}
                            alt="logo"
                        />
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        <IoIosHome size={20} />
                        {''}Home
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        About
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        Menu
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        Reserves
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        Orders
                    </NavItemStyle>
                    <NavItemStyle
                        href="/./"
                        className="nav-item"
                    >
                        <IoMdPerson size={20} />
                    </NavItemStyle>
                </NavContent>
            )}
        </NavContainerStyle>
    );
}

Nav.propTypes = {
};

export default Nav
