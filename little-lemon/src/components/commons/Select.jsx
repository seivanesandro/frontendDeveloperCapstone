import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { colorsSecundary, colorsSpecials, boxShadowSpecial } from '../../utilities/utils';

const SelectStyle = styled.select`
    padding: 0.5rem;
    border-radius: ${({borderRadius}) => borderRadius};
    background-color: ${({background}) => background};
    color: ${({color}) => color};
    box-shadow: ${boxShadowSpecial.mediumW};
    font-family: 'Roboto';
`;

const LabelStyle = styled.label`
    color: ${({ colorLabel }) => colorLabel};
    margin: 0.3rem 3rem 0 0;
    font-family: 'Roboto';
    letter-spacing: 0.1rem;
`;
function Select({
    title,
    children,
    id,
    name,
    value,
    onChange,
    borderRadius,
    background,
    color,
    boxShadow,
    colorLabel
}) {
    return (
        <>
            <LabelStyle colorLabel={colorLabel}>
                {' '}
                {title}
            </LabelStyle>
            <SelectStyle
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required
                borderRadius={borderRadius}
                color={color}
                background={background}
                boxShadow={boxShadow}
            >
                {children}
            </SelectStyle>
        </>
    );
}

Select.propTypes = {
    title: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    backgound: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    colorLabel: PropTypes.string.isRequired
};

Select.defaultProps = {
    title: 'title',
    borderRadius: '5%',
    color: `${colorsSecundary.primary}`,
    background: `${colorsSpecials.four}`,
    onChange: () => {},
    id: 'id',
    value: 'value',
    name: 'name',
    colorLabel: `${colorsSecundary.primary}`
};

export default Select
