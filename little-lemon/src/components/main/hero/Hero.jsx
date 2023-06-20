import React from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components';
import { devices } from '../../../utilities/constantes';
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import Button from '../../commons/Button';
import Title from '../../commons/Title';
import Subtitle from '../../commons/Subtitle';
import Text from '../../commons/Text';
import { restaurantFood } from '../../../utilities/images';
import {
    borderRadius,
    boxShadow,
} from '../../../utilities/utils';

const ContainerStyle = styled(MDBContainer)`
    max-width: 900px;
    margin: 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    gap: 3rem;

    @media only screen and (${devices.tablet}) {
        gap: 5rem;
    }
    @media only screen and (${devices.mobileP}) {
        display: flex;
        flex-direction: column-reverse;
    }
    @media only screen and (${devices.mobileM}) {
        display: flex;
        flex-direction: column-reverse;
    }
    @media only screen and (${devices.mobileG}) {
        display: flex;
        flex-direction: column-reverse;
    }
`;

const RowStyled = styled(MDBRow)`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (${devices.tablet}) {
        gap: 0.5rem;
    }
    @media only screen and (${devices.mobileP}) {
        display: flex;
        flex-direction: column;
    }
    @media only screen and (${devices.mobileM}) {
        display: flex;
        flex-direction: column;
    }
    @media only screen and (${devices.mobileG}) {
        display: flex;
        flex-direction: column;
    }
`;

const Img = styled.img`
    width: 336px;
    height: 400px;
    margin: 80px 0 20px 5px;
    border-radius: ${borderRadius.smalls};
    box-shadow: ${boxShadow.small};

    @media only screen and (${devices.tablet}) {
        width: 312px;
        height: 350px;
        margin: 150px 0 20px 5px;
    }
    @media only screen and (${devices.mobileP}) {
        width: 312px;
        height: 350px;
    }
    @media only screen and (${devices.mobileM}) {
        width: 312px;
        height: 350px;
    }
    @media only screen and (${devices.mobileG}) {
        width: 312px;
        height: 350px;
    }
`;

function Hero() {
    return (
        <>
            <ContainerStyle className="container">
                <RowStyled className="hero-row-header">
                    <MDBCol>
                        <Title title="Little-Lemon" />
                    </MDBCol>
                    <MDBCol>
                        <Subtitle subtitle="Chicago" />
                    </MDBCol>
                    <MDBCol>
                        <Text
                            text="
                            We are a family owned
                        Mediterranean restaurant,
                        focused on
                        traditional recipes
                        served with a modern
                        twist."
                        />
                    </MDBCol>

                    <MDBCol>
                        <Link to="/booking">
                            {' '}
                            <Button name="Reserve a table" fontSize='22px'></Button>
                        </Link>
                    </MDBCol>
                </RowStyled>

                <MDBRow className="hero-row-main">
                    <MDBCol end>
                        <Img
                            src={restaurantFood}
                            alt="img-responsive"
                        />
                    </MDBCol>
                </MDBRow>
            </ContainerStyle>
        </>
    );
}

export default Hero
