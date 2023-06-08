import React from 'react';
import PropTypes from 'prop-types';
//FIXME:import { Link } from "react-router-dom"
import Button from './Button';
import photoHeader from '../../assets/restauranfood.jpg';
import styled from 'styled-components';
import { devices } from '../../constantes';

const HeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 2rem;
    gap: 10rem;

    @media only screen and (${devices.m5}) {
        gap: 2rem;
    }
    @media only screen and (${devices.m4}) {
        gap: 2rem;
    }
    @media only screen and (${devices.m3}) {
        gap: 0.5rem;
    }
    @media only screen and (${devices.m1}) {
        gap: 0.5rem;
    }
    @media only screen and (${devices.m}) {
        gap: 0.3rem;
    }
`;

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const HeroTitle = styled.p`
    font-family: 'Markazi Text', serif;
    font-size: 64px;
    font-weight: 500;
    line-height: 77px;
    text-align: left;
    color: #f4ce14;
    text-shadow: 1px 0 3px gold, 1px 0 1px #fff;

    @media only screen and (${devices.m5}) {
        font-size: 39px;
    }
    @media only screen and (${devices.m4}) {
        font-size: 28px;
    }
    @media only screen and (${devices.m3}) {
        font-size: 24px;
    }
    @media only screen and (${devices.m1}) {
        font-size: 22px;
    }
    @media only screen and (${devices.m}) {
        font-size: 20px;
    }
`;

const HeroSubTitle = styled.p`
    font-family: 'Markazi Text', serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 48.01px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;

    @media only screen and (${devices.m5}) {
        font-size: 30px;
    }
    @media only screen and (${devices.m4}) {
        font-size: 28px;
    }
`;

const HeroDescription = styled.p`
    color: #ffffff;
    font-family: 'Karla', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: justify;
    text-justify: inter-word;

    @media only screen and (${devices.m5}) {
        font-size: 14px;
    }
    @media only screen and (${devices.m4}) {
        font-size: 13px;
    }
`;

const HeroImgWrapper = styled.div`
    max-width: 250px;
    max-height: 245px;
    align-self: flex-end;
    margin-bottom: 1rem;
    border: none;

    @media only screen and (${devices.tablet3}) {
        max-width: 140px;
        max-height: 145px;
        margin: 0 1rem 10rem 0;
    }
    @media only screen and (${devices.tablet1}) {
        max-width: 140px;
        max-height: 145px;
        margin: 0 1rem 10rem 0;
    }

    @media only screen and (${devices.m5}) {
        max-width: 140px;
        max-height: 145px;
        margin: 0 1rem 10rem 0;
    }
`;

const ImgHero = styled.img`
    width: 250px;
    box-shadow: 0 0 0.3rem black;
    border-radius: 6%;

    @media only screen and (${devices.tablet3}) {
        width: 140px;
    }
    @media only screen and (${devices.tablet1}) {
        width: 140px;
    }
    @media only screen and (${devices.m5}) {
        width: 140px;
    }
    @media only screen and (${devices.m5}) {
        width: 140px;
    }
`;

function Hero({ title, subtitle }) {
    return (
        <>
            <HeroContainer className="hero-container">
                <HeroText className="hero-text">
                    <HeroTitle className="title">
                        {title}
                    </HeroTitle>
                    <HeroSubTitle className="subtitle">
                        {subtitle}
                    </HeroSubTitle>
                    <HeroDescription className="description">
                        We are a family owned
                        Mediterranean restaurant,{' '}
                        <br /> focused on
                        traditional <br /> recipes
                        served with a modern
                        twist.
                    </HeroDescription>
                    <p to="/booking">
                        <Button
                            className="reserve-btn btn"
                            name="Reserve a table"
                        />
                    </p>
                </HeroText>

                <HeroImgWrapper className="img-wrapper">
                    <ImgHero
                        className="hero-img"
                        src={photoHeader}
                        alt="hero img"
                    />
                </HeroImgWrapper>
            </HeroContainer>
        </>
    );
}

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

Hero.defaultProps = {
    title: 'Little Lemon',
    subtitle: 'Chicago'
};

export default Hero




