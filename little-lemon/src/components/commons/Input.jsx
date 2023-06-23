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
    className,
    id
}) {
    return (
        <>
            <InputText
                className={className}
                type={type}
                data-testid="input-field"
                id={id}
                size="lg"
                required={true}
                contrast
                label={inputPlaceholder}
                boxShadow={boxShadow}
            />
        </>
    );
}

Input.propTypes = {
    inputPlaceholder: PropTypes.string.isRequired,
   
    boxShadow: PropTypes.string.isRequired,

};

Input.defaultProps = {
    inputPlaceholder: 'placeholder input',
    type: 'text',
    id: 'form1',
    boxShadow: `${boxShadowSpecial.mediumW}`
};
export default Input
