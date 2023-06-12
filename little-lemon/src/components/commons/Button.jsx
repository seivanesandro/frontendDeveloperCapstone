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
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) =>
        fontWeight};
    color: ${({ colorText }) => colorText};
    background: ${({ backgroundText }) =>
        backgroundText};
    cursor: pointer;

    &:hover {
        cursor: pointer;
        color: ${colorsPrimary.secondary};
        background: ${colorsPrimary.primary};
        box-shadow: ${boxShadow.small};
    }

    @media only screen and (${devices.fourk}) {
        font-size: 30px;
    }

    @media only screen and (${devices.portatilL}) {
        font-size: 30px;
    }

    @media only screen and (${devices.portatil}) {
        font-size: 30px;
    }
    @media only screen and (${devices.tablet}) {
        font-size: 28px;
    }

    @media only screen and (${devices.mobileG}) {
        font-size: 26px;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 26px;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 26px;
    }
`;

function Button({
    name,
    colorText,
    backgroundText,
    borderRadius,
    boxShadow,
    size,
    fontSize,
    fontWeight,
}) {
    return (
        <Btn
            colorText={colorText}
            backgroundText={backgroundText}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            size={size}
            fontSize={fontSize}
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
    fontSize: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired
};

Button.defaultProps = {
    name: 'Button',
    colorText: `${colorsPrimary.primary}`,
    backgroundText: `${colorsPrimary.secondary}`,
    borderRadius: `${borderRadius.small}`,
    boxShadow: 'black',
    fontSize: `${fontSize.medium}`,
    size: '0.5rem 5rem 0.5rem 5rem',
    fontWeight: `${fontWeight.large}`
};

export default Button