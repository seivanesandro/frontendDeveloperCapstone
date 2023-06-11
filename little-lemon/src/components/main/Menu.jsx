import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import Button from '../commons/Button';
import { devices } from '../../utilities/constantes';
import greekSalad from '../../assets/greek-salad.png';
import bruchetta from '../../assets/bruchetta.PNG';
import lemonDessert from '../../assets/lemon-dessert.jpg';
import { IoIosCard } from 'react-icons/io';

const Menudescription = styled.div`
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: baseline;
    align-items: baseline;
    gap: 12.5rem;
    margin: 5rem 10px;

    @media only screen and (${devices.laptop}) {
        margin: 4rem 10px;
        gap: 14rem;
    }

    @media only screen and (${devices.tablet3}) {
        margin: 4rem 10px;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media only screen and (${devices.tablet2}) {
        margin: 3rem 10px;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (${devices.m5}) {
        margin: 3rem 10px;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media only screen and (${devices.m2}) {
        gap: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const MenuTitle = styled.p`
    font-family: 'Markazi Text', serif;
    font-size: 64px;
    font-weight: 500;
    line-height: 77px;
    letter-spacing: 0em;
    text-align: left;
    color: #495e57;
    margin: 0;
    display: flex;
    &:hover {
        color: coral;
        text-shadow: 0 0 0.3rem gold;
    }

    @media only screen and (${devices.tablet3}) {
        font-size: 38px;
    }
    @media only screen and (${devices.tablet2}) {
    }
    @media only screen and (${devices.tablet1}) {
        font-weight: 500;
        line-height: 57px;
        letter-spacing: 0em;
        font-size: 28px;
    }
    @media only screen and (${devices.m5}) {
        font-weight: 500;
        line-height: 57px;
        letter-spacing: 0em;
        font-size: 25px;
    }
`;
const MenuBtn = styled(Button)`
`;
const MenuCard = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: flex-start;
    justify-content: flex-start;
    background: transparent;
    gap: 5rem;

    @media only screen and (${devices.laptop}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:3rem;
    }

    @media only screen and (${devices.tablet3}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (${devices.m5}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const Card = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 0 0.4rem black;

    @media only screen and (${devices.tablet3}) {
        padding: 0.5rem;
    }
    @media only screen and (${devices.m5}) {
        padding: 0.5rem;
    }
`;
const CardHeadImg = styled.img`
    width: 330px;
    height: 175px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    display: flex;
`;
const CardMain = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 22em;
    padding: 1rem 0 0 0;
    gap: 9rem;
`;
const CardItemName = styled.p`
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    font-weight: 600;
    color: #495e57;
`;
const CardItemPrice = styled.p`
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    font-weight: 600;
    color: #000000;
`;
const CardItemDescription = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 20em;
    padding: 0.3rem;
`;
const Description = styled.p`
    font-size: 15px;
    font-family: 'Karla', sans-serif;
    font-weight: 500;
    color: #000000;
`;
const CardFooter = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    width: 22em;
    padding: 0.3rem;
`;
const Delivery = styled.p`
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    font-weight: 500;
    color: #000000;
    &:hover {
        cursor: pointer;
        color: #495e57;
    }
`;
function Menu({order}) {
    return (
        <>
            <Menudescription className="menu-description">
                <MenuTitle className="title menu-title">
                    This weeks specials!
                </MenuTitle>
                <MenuBtn
                    className="btn"
                    name={order}
                />
            </Menudescription>
            <MenuCard className="menu-card">
                <Card className="card">
                    <CardHeadImg
                        className="card-head"
                        src={greekSalad}
                        alt="greek salad"
                    />
                    <CardMain className="card-main">
                        <CardItemName className="card-item-name">
                            Greek Salad
                        </CardItemName>
                        <CardItemPrice className="card-item-price">
                            $12.99
                        </CardItemPrice>
                    </CardMain>
                    <CardItemDescription className="card-item-description">
                        <Description className="description">
                            The famous greek
                            salad of crispy
                            lettuce, peppers,
                            <br />
                            olives and our
                            Chicago style feta
                            cheese,
                            <br /> garnished
                            with crunchy
                            garlic and
                            <br />
                            rosemary croutons.{' '}
                        </Description>
                    </CardItemDescription>
                    <CardFooter className="card-footer">
                        <label>
                            <IoIosCard
                                size={28}
                            />
                        </label>
                        <Delivery className="delivery">
                            <br />
                            {''}Order a
                            delivery
                        </Delivery>
                    </CardFooter>
                </Card>

                <Card className="card">
                    <CardHeadImg
                        className="card-head"
                        src={bruchetta}
                        alt="bruchetta"
                    />
                    <CardMain className="card-main">
                        <CardItemName className="card-item-name">
                            Bruchetta
                        </CardItemName>
                        <CardItemPrice className="card-item-price">
                            $11.99
                        </CardItemPrice>
                    </CardMain>
                    <CardItemDescription className="card-item-description">
                        <Description className="description">
                            <br />
                            Our Bruschetta is
                            made from grilled
                            bread that has
                            been smeared with
                            garlic and
                            seasoned with salt
                            and olive oil.
                            <br />
                            This events will
                            give great moments
                            of flavor{' '}
                        </Description>
                    </CardItemDescription>
                    <CardFooter className="card-footer">
                        <label>
                            <IoIosCard
                                size={28}
                            />
                        </label>
                        <Delivery className="delivery">
                            <br />
                            {''}Order a
                            delivery
                        </Delivery>
                    </CardFooter>
                </Card>

                <Card className="card">
                    <CardHeadImg
                        className="card-head"
                        src={lemonDessert}
                        alt="lemon-dessert"
                    />
                    <CardMain className="card-main">
                        <CardItemName className="card-item-name">
                            Lemon-dessert
                        </CardItemName>
                        <CardItemPrice className="card-item-price">
                            $10.99
                        </CardItemPrice>
                    </CardMain>
                    <CardItemDescription className="card-item-description">
                        <Description className="description">
                            <br />
                            His comes straight
                            from grandma’s
                            recipe book,
                            <br /> every last
                            ingredient has
                            been sourced and
                            is as authentic as
                            can be imagined.{' '}
                        </Description>
                    </CardItemDescription>
                    <CardFooter className="card-footer">
                        <label>
                            <IoIosCard
                                size={28}
                            />
                        </label>
                        <Delivery className="delivery">
                            <br />
                            {''}Order a
                            delivery
                        </Delivery>
                    </CardFooter>
                </Card>
            </MenuCard>
        </>
    );
}

Menu.propTypes = {
    order: PropTypes.string.isRequired,
};

Menu.defaultProps = {
    order: 'Delivery',
};

export default Menu
