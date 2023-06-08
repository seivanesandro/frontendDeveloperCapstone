import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { devices } from '../../constantes';

const Btn = styled.button`
    padding: ${({ size }) => size};
    margin: 2rem 0 0 0;
    border: none;
    border-radius: ${({ borderRadius }) =>
        borderRadius};
    box-shadow: 0 0 0.2rem
        ${({ boxShadow }) => boxShadow};
    font-size: 18px;
    font-weight: ${({ fontWeight }) =>
        fontWeight};
    color: ${({ colorText }) => colorText};
    background: ${({ backgroundText }) =>
        backgroundText};

    @media only screen and (${devices.tablet2}) {
        padding: 0.4rem 3rem 0.4rem 3rem;
        font-weight: 700;
        font-size: 12px;
    }
    @media only screen and (${devices.tablet1}) {
        padding: 0.4rem 3rem 0.4rem 3rem;
        font-weight: 600;
        font-size: 12px;
    }
    @media only screen and (${devices.m5}) {
        padding: 0.4rem 2rem 0.4rem 2rem;
        font-weight: 600;
        font-size: 12px;
    }
    @media only screen and (${devices.m3}) {
        padding: 0.4rem 1rem 0.4rem 1rem;
        font-weight: 600;
        font-size: 12px;
    }
    @media only screen and (${devices.m2}) {
        padding: 0.4rem 1rem 0.4rem 1rem;
        font-size: 12px;
    }
    @media only screen and (${devices.m}) {
        padding: 0.3rem 0.6rem 0.3rem 0.6rem;
        font-size: 11px;
    }
`;

function Button({
    name,
    colorText,
    backgroundText,
    borderRadius,
    boxShadow,
    size,
    fontWeight
}) {
    return (
        <Btn
            colorText={colorText}
            backgroundText={backgroundText}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            size={size}
            fontWeight={fontWeight}
        >
            {name}
        </Btn>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    colorText: PropTypes.string.isRequired,
    backgroundText: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
    boxShadow: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired
};

Button.defaultProps = {
    name: 'Button',
    colorText: '#495e57',
    backgroundText: '#f4ce14',
    borderRadius: '6rem',
    boxShadow: 'black',
    size: '0.5rem 5rem 0.5rem 5rem',
    fontWeight: '700',
};

export default Button
