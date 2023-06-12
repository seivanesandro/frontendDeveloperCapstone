import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosStar } from 'react-icons/io';
import Text from './Text';
import {
    colorsPrimary,
    colorsSpecials,
    colorsSecundary,
    fontFamily,
    borderRadius,
    fontSize,
    boxShadow,
    fontWeight,
    
} from '../../utilities/utils';
import { devices } from '../../utilities/constantes';


const Card = styled.div`
    background: ${({ backgroundColorCard }) =>
        backgroundColorCard};

    @media only screen and (${devices.mobileP}) {

    }
    @media only screen and (${devices.mobileM}) {

    }
    @media only screen and (${devices.mobileG}) {

    }
    @media only screen and (${devices.tablet}) {
        width: 50rem;
    }
`;

const CardContainer = styled.div`
    background: ${({ backgroundColorCard }) =>
        backgroundColorCard};
    box-shadow: ${boxShadow.medium};

    @media only screen and (${devices.mobileP}) {

    }
    @media only screen and (${devices.mobileM}) {

    }
    @media only screen and (${devices.mobileG}) {

    }
    @media only screen and (${devices.tablet}) {

    }
`;

const CardHeader = styled.div`
    padding: 2rem;

    @media only screen and (${devices.mobileP}) {
        padding: 3rem;
    }
    @media only screen and (${devices.mobileM}) {
        padding: 3rem;
    }
    @media only screen and (${devices.mobileG}) {
        padding: 3rem;
    }
    @media only screen and (${devices.tablet}) {
        padding: 2rem;
    }
`;

const CardBody = styled.div`
    background: ${colorsSecundary.primary};
    padding: 2rem;

    @media only screen and (${devices.mobileP}) {
        padding: 3rem;
    }
    @media only screen and (${devices.mobileM}) {
        padding: 3rem;
    }
    @media only screen and (${devices.mobileG}) {
        padding: 3rem;
    }
    @media only screen and (${devices.tablet}) {
        padding: 2rem;
    }
`;

const CardFooter = styled.div`
    background: ${colorsSecundary.primary};
    padding: 2rem;
    text-align: justify;

    @media only screen and (${devices.mobileP}) {
        padding: 3rem;
    }
    @media only screen and (${devices.mobileM}) {
        padding: 3rem;
    }
    @media only screen and (${devices.mobileG}) {
        padding: 3rem;
    }
    @media only screen and (${devices.tablet}) {
        padding: 2rem;
    }
`;

const Img = styled.img`
    width: 121px;
    height: 120px;
    border-radius: ${borderRadius.smalls};
`;

function CardPerson({
    imageUrl,
    name,
    colorName,
    fontSizeName,
    fontFamilyName,
    fontWeightName,
    descripton,
    fontSizeDescription,
    fontFamilyDescription,
    colorDescripton,
    colorStar,
    sizeStar,
    backgroundColorCard
}) {
    return (
        <>
            <Card
                className="card"
                backgroundColorCard={ backgroundColorCard }
            >
                <CardContainer
                    className="card-container"
                    backgroundColorCard={ backgroundColorCard }
                >
                    <CardHeader className="card-header">
                        <IoIosStar
                            size={sizeStar}
                            color={colorStar}
                        />
                        <IoIosStar
                            size={sizeStar}
                            color={colorStar}
                        />
                        <IoIosStar
                            size={sizeStar}
                            color={colorStar}
                        />
                        <IoIosStar
                            size={sizeStar}
                            color={colorStar}
                        />
                        <IoIosStar
                            size={sizeStar}
                            color={colorStar}
                        />
                    </CardHeader>

                    <CardBody className="card-body">
                        <Img
                            className="testimonial-img"
                            src={imageUrl}
                            alt={name}
                        />

                        <Text
                            text={name}
                            color={colorName}
                            fontSize={ fontSizeName }
                            fontFamily={ fontFamilyName }
                            fontWeight={ fontWeightName }
                        />
                    </CardBody>

                    <CardFooter className="card-footer">
                        <Text
                            text={descripton}
                            fontFamily={
                                fontFamilyDescription
                            }
                            fontSize={
                                fontSizeDescription
                            }
                            color={
                                colorDescripton
                            }
                        />
                    </CardFooter>
                </CardContainer>
            </Card>
        </>
    );
}

CardPerson.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    colorName: PropTypes.string.isRequired,
    fontSizeName: PropTypes.string.isRequired,
    fontFamilyDescription:PropTypes.string.isRequired,
    descripton: PropTypes.string.isRequired,
    colorDescripton: PropTypes.string.isRequired,
    sizeStar: PropTypes.string.isRequired,
    colorStar: PropTypes.string.isRequired,
};

CardPerson.defaultProps = {
    imageUrl: '',
    name: 'name',
    colorName: `${colorsPrimary.primary}`,
    fontSizeName: `${fontSize.small}`,
    fontFamilyName: `${fontFamily.karla}`,
    fontWeightName: `${fontWeight.large}`,

    descripton: 'descripton',
    colorDescripton: `${colorsPrimary.primary}`,
    fontFamilyDescription: `${fontFamily.karla}`,
    fontSizeDescription: `${fontSize.small}`,

    sizeStar: '70',
    colorStar: `${colorsPrimary.secondary}`,

    backgroundColorCard: `${colorsSpecials.third}`
};

export default CardPerson
