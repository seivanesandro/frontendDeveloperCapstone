import React from 'react';
import PropTypes from 'prop-types';
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
//FIXME:import { Link } from "react-router-dom"
import Button from '../commons/Button';

function Hero({ title, subtitle }) {
    return (
        <>
            <MDBContainer className="hero-container">
                <MDBRow className="hero-row">
                    <MDBCol
                        start
                        className="hero-colomun"
                    >
                        <h1>titulo</h1>
                    </MDBCol>
                    <MDBCol>
                        <img
                            src=""
                            alt="img-responsive"
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="hero-row">
                    <MDBCol
                        start
                        className="hero-colomun"
                    >
                        <MDBCol start>
                            <h6>subtitulo</h6>
                        </MDBCol>
                        <MDBCol start>
                            <p>texto</p>
                        </MDBCol>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            );
        </>
    );
}

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

Hero.defaultProps = {
    title: 'Little Lemon',
    subtitle: 'Chicago'
};

export default Hero




