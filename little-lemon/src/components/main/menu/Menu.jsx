import React from 'react'
//import PropTypes from 'prop-types'
 import styled from 'styled-components';

import Card from '../../commons/Card';
import Button from '../../commons/Button';
import { devices } from '../../../utilities/constantes';
import {greekSalad, bruchetta, lemonDessert } from '../../../utilities/images';
import Title from '../../commons/Title';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7rem;

    @media only screen and (${devices.mobileP}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileG}) {
        display: flex;
        flex-direction: column;
    }
    @media only screen and (${devices.tablet}) {
    }
    @media only screen and (${devices.portatil}) {
    }
    @media only screen and (${devices.portatilL}) {
    }
    @media only screen and (${devices.fourk}) {
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;

    @media only screen and (${devices.mobileP}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (${devices.mobileM}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (${devices.mobileG}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const MenuHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    @media only screen and (${devices.mobileP}) {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: flex-start;
    }
    @media only screen and (${devices.mobileM}) {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: flex-start;
    }
    @media only screen and (${devices.mobileG}) {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: flex-start;
    }
`;

function Menu() {
    return (
        <MenuContainer className="menu-Container">
            <MenuHeader className="menu-header">
                <Title title='Specials Menus' color='coral' >title</Title>
                <Button name='Order Online'/>
            </MenuHeader>

            <CardContainer className="card-container">
                <Card
                    imageUrl={greekSalad}
                    name="Greek Salad"
                    price="$12.99"
                    text="The famous greek salad of
                        crispy lettuce, peppers,
                        olives and our Chicago
                        style feta cheese,
                        garnished with
                        crunchy garlic."
                    delivery="Delivery"
                />
                <Card
                    imageUrl={bruchetta}
                    name="Bruchetta"
                    price="$11.99"
                    text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    delivery="Delivery"
                />
                <Card
                    imageUrl={lemonDessert}
                    name="Dessert lemon"
                    price="$10.99"
                    text="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    delivery="Delivery"
                />
            </CardContainer>
        </MenuContainer>
    );
}

Menu.propTypes = {

};

Menu.defaultProps = {

};

export default Menu
