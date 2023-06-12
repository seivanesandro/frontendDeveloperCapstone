import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { devices } from '../../utilities/constantes';
import {
    colorsPrimary,
    fontFamily,
    fontSize,
    fontWeight,
    fontLineHeight,
    textShadow
} from '../../utilities/utils';

const TitleH1 = styled.h1`
    color: ${({ color }) => color};
    font-family: ${({ fontFamily }) =>
        fontFamily};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) =>
        fontWeight};
    line-height: ${({ lineHeight }) =>
        lineHeight};
    letter-spacing: ${({ letterSpace }) =>
        letterSpace};
    text-shadow: ${({ textShadow }) =>
        textShadow};
    &:hover {
        text-shadow: 1px 0 3px greenyellow,
            1px 0 1px coral;
    }

    @media only screen and (${devices.tablet}) {
        line-height: none;
        font-size: 55px;
        letter-spacing: none;
    }

    @media only screen and (${devices.mobileP}) {
        line-height: none;
        font-size: 50px;
        letter-spacing: none;
    }
    @media only screen and (${devices.mobileM}) {
        line-height: none;
        font-size: 50px;
        letter-spacing: none;
    }
    @media only screen and (${devices.mobileG}) {
        line-height: none;
        font-size: 50px;
        letter-spacing: none;
    }
`;

function Title({
    title,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpace,
    textShadow,
}) {
    return (
        <TitleH1
            color={color}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            letterSpace={letterSpace}
            textShadow={textShadow}
        >
            {title}
        </TitleH1>
    );
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    fontFamily: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired,
    lineHeight: PropTypes.string.isRequired,
    letterSpace: PropTypes.string.isRequired,
    textShadow: PropTypes.string.isRequired,
};

Title.defaultProps = {
    title: 'title',
    color: `${colorsPrimary.secondary}`,
    fontFamily: `${fontFamily.markazi}`,
    fontSize: `${fontSize.large}`,
    fontWeight: `${fontWeight.large}`,
    lineHeight: `${fontLineHeight.large}`,
    letterSpace: '0.6rem',
    textShadow: `${textShadow.medium}`,
};

export default Title
