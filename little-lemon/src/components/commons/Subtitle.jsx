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

const SubTitleH6 = styled.h6`
    color: ${({ color }) => color};
    font-family: ${({ fontFamily }) =>
        fontFamily};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) =>
        fontWeight};
    line-height: ${({lineHeight}) => lineHeight};

    @media only screen and (${devices.tablet}) {
        line-height: 4rem;
        font-size: 40px;
        letter-spacing: none;
    }

    @media only screen and (${devices.mobileP}) {
        line-height: none;
        font-size: 43px;
        letter-spacing: none;
    }

    @media only screen and (${devices.mobileM}) {
        line-height: none;
        font-size: 42px;
        letter-spacing: none;
    }

    @media only screen and (${devices.mobileG}) {
        line-height: none;
        font-size: 41px;
        letter-spacing: none;
    }
`;

function Subtitle({
    subtitle,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight
}) {
    return (
        <SubTitleH6
            color={color}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
        >
            {subtitle}
        </SubTitleH6>
    );
}

Subtitle.propTypes = {
    subtitle: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    fontFamily: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired,
    lineHeight: PropTypes.string.isRequired,
};

Subtitle.defaultProps = {
    subtitle: 'subtitle',
    color: `${colorsSpecials.third}`,
    fontFamily: `${fontFamily.karla}`,
    fontSize: `${fontSize.medium}`,
    fontWeight: `${fontWeight.medium}`,
    lineHeight: `${fontLineHeight.small}`,
};

export default Subtitle
