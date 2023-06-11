import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { devices } from '../../utilities/constantes';

import {
    colorsPrimary,
    fontSize,
    fontWeight,
    borderRadius,
    boxShadow
} from '../../utilities/utils';

const Btn = styled.button`
    padding: ${({ size }) => size};
    margin: 2rem 0 0 0;
    border: none;
    border-radius: ${({ borderRadius }) =>
        borderRadius};
    box-shadow: 0 0 0.2rem
        ${({ boxShadow }) => boxShadow};
    font-size: ${fontSize.small};
    font-weight: ${({ fontWeight }) =>
        fontWeight};
    color: ${({ colorText }) => colorText};
    background: ${({ backgroundText }) =>
        backgroundText};

    &:hover {
        cursor: pointer;
        color: ${colorsPrimary.secondary};
        background: ${colorsPrimary.primary};
        box-shadow: ${boxShadow.small};
    }

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
    fontWeight,
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
    colorText: `${colorsPrimary.primary}`,
    backgroundText: `${colorsPrimary.secondary}`,
    borderRadius: `${borderRadius.small}`,
    boxShadow: 'black',
    size: '0.5rem 5rem 0.5rem 5rem',
    fontWeight: `${fontWeight.large}`
};

export default Button
