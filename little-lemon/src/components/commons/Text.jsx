import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { devices } from '../../utilities/constantes';
import {
    fontLineHeight,
    colorsSpecials,
    fontFamily,
    fontSize,
    fontWeight
} from '../../utilities/utils';

const TextParagraph = styled.p`
    color: ${({ color }) => color};
    font-family: ${({ fontFamily }) =>
        fontFamily};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) =>
        fontWeight};
    line-height: ${({lineHeight})=>(lineHeight)};
    width: ${({ sizeText }) => sizeText};
    letter-spacing: 0.1rem;

    @media only screen and (${devices.tablet}) {
        line-height: 3rem;
        font-size: 27px;
        letter-spacing: 0.2rem;
    }

    @media only screen and (${devices.mobileP}) {
        line-height: none;
        font-size: 25px;
        letter-spacing: 0.2rem;
    }

    @media only screen and (${devices.mobileM}) {
        line-height: none;
        font-size: 25px;
        letter-spacing: 0.2rem;
    }

    @media only screen and (${devices.mobileG}) {
        line-height: none;
        font-size: 25px;
        letter-spacing: 0.2rem;
    }
`;

function Text({
    text,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    sizeText,
    lineHeight,
}) {
    return (
        <TextParagraph
            color={color}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            sizeText={sizeText}
            lineHeight={lineHeight}
        >
            {text}
        </TextParagraph>
    );
}

Text.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    fontFamily: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired,
    sizeText: PropTypes.string.isRequired,
    lineHeight: PropTypes.string.isRequired,
};

Text.defaultProps = {
    text: 'loream bla bla bla bla bla',
    color: `${colorsSpecials.third}`,
    fontFamily: `${fontFamily.karla}`,
    fontSize: `${fontSize.small}`,
    fontWeight: `${fontWeight.small}`,
    sizeText: '25rem',
    lineHeight: `${fontLineHeight.medium}`,
};

export default Text;
