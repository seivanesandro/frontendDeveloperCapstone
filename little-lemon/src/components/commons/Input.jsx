import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MDBInput } from 'mdb-react-ui-kit';
import { boxShadowSpecial } from '../../utilities/utils';

const InputText = styled(MDBInput)`
    font-family: 'Roboto' !important;
    box-shadow: ${({ boxShadow }) =>
        boxShadow} !important;
`;
function Input({
    inputPlaceholder,
    type,
    boxShadow,

}) {
    return (
        <>
            <InputText
                label={inputPlaceholder}
                type={type}
                size="lg"
                boxShadow={boxShadow}
                id="form1"
                required
                contrast
                
            />
        </>
    );
}

Input.propTypes = {
    inputPlaceholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    boxShadow: PropTypes.string.isRequired,
};

Input.defaultProps = {
    inputPlaceholder: 'placeholder input',
    type: 'text',
    boxShadow: `${boxShadowSpecial.mediumW}`
};
export default Input
