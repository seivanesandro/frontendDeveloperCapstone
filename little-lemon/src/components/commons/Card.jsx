import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { devices } from '../../utilities/constantes';
import { colorsSecundary, boxShadow } from '../../utilities/utils';
import SubTitle from './Subtitle';
import Text from './Text';
import { IoIosCard } from 'react-icons/io';

const CardContainer = styled.div`
    box-shadow: ${boxShadow.medium};
    background: ${colorsSecundary.primary};
    width: 18rem;
    border-radius: 2%;

    @media only screen and (${devices.mobileP}) {
        width: 33rem;
    }
    @media only screen and (${devices.mobileM}) {
        width: 33rem;
    }
    @media only screen and (${devices.mobileG}) {
        width: 33rem;
    }
    @media only screen and (${devices.tablet}) {
        width: 32rem;
    }
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.6rem;
`;

const CardBodyHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    padding: 1rem;

    @media only screen and (${devices.mobileP}) {
        gap: 4rem;
        padding: 1rem;
    }
    @media only screen and (${devices.mobileM}) {
        gap: 4rem;
        padding: 1rem;
    }
    @media only screen and (${devices.mobileG}) {
        gap: 4rem;
        padding: 1rem;
    }
    @media only screen and (${devices.tablet}) {
        gap: 5rem;
        padding: 1.3rem;
    }
`;

const CardBodyMain = styled.div`
    padding: 0.6rem 0.5rem 0 0.5rem;

    @media only screen and (${devices.mobileP}) {
        padding: 0.3rem;
    }
    @media only screen and (${devices.mobileM}) {
        padding: 0.3rem;
    }
    @media only screen and (${devices.mobileG}) {
        padding: 0.3rem;
    }
    @media only screen and (${devices.tablet}) {
        padding: 1.5rem;
    }
`;

const CardFooter = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 1.4rem;
    gap: 8rem;
    align-items: center;
`;

const ImgStyle = styled.img`
    width: 288px;
    height: 192.02;

    @media only screen and (${devices.mobileP}) {
        width: 515px;
    }
    @media only screen and (${devices.mobileM}) {
        width: 515px;
    }
    @media only screen and (${devices.mobileG}) {
        width: 515px;
    }
    @media only screen and (${devices.tablet}) {
        width: 515px;
    }
`;
function Card({
    imageUrl,
    name,
    price,
    text,
    delivery
}) {
    return (
        <CardContainer class="card">
            <ImgStyle
                class="card-img-top"
                src={imageUrl}
                alt="Card img cap"
            />
            <CardBody class="card-body">
                <CardBodyHeader className="card-body-header">
                    <SubTitle
                        subtitle={name}
                        color="#495E57"
                        fontSize="23px"
                        lineHeight="30px"
                    />

                    <SubTitle
                        subtitle={price}
                        color="#EE9972"
                        fontSize="18px"
                        fontWeight='600'
                    />
                </CardBodyHeader>

                <CardBodyMain className="card-body-main">
                    <Text
                        text={text}
                        color="#333333"
                        fontSize="14px"
                        lineHeight="25px"
                        sizeText="15"
                    />
                </CardBodyMain>

                <CardFooter className="card-footer">
                    <a href='/'>
                        <IoIosCard
                            size={35}
                            color="#495E57"
                        />
                    </a>
                    <SubTitle
                        subtitle={delivery}
                        color="#333333"
                        fontSize="15px"
                        fontFamily="Roboto"
                    />
                </CardFooter>
            </CardBody>
        </CardContainer>
    );
}

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

Card.propTypes = {
    imageUrl: '',
    name: 'name',
    price: 'price',
    text: 'text',
    delivery: 'delivery'
};

export default Card
