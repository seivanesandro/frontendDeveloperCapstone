import React from 'react'
import Title from '../../commons/Title';
import Subtitle from '../../commons/Subtitle';
import Text from '../../commons/Text';
import styled from 'styled-components';
import { devices } from '../../../utilities/constantes';
import {
    marioAndAdrianB,
    marioAndAdrianA,
    restaurant,
    home
} from '../../../utilities/images';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

const DescriptionContainer = styled(MDBContainer)`
    display: flex;
    flex-direction: column;
    align-items: start;
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
    @media only screen and (${devices.tablet}) {
        display: flex;
        flex-direction: column;
    }
    @media only screen and (${devices.portatil}) {
        display: flex;
        flex-direction: column;
    }
    @media only screen and (${devices.portatilL}) {
        display: flex;
        flex-direction: column;
    }
`;

const DescriptionRowContainerText = styled(MDBRow)`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

const DescriptionRowContainerImg = styled(MDBRow)`
    display: flex;
    flex-direction: row;
    gap: 0.1rem;
    flex-wrap: nowrap;

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
    @media only screen and (${devices.tablet}) {
        display: flex;
        flex-direction: column;
    }
`;

const DescriptionColImg = styled(MDBCol)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Img = styled.img`
    width: 490px;
    border-radius: 6%;
    box-shadow: 0 0 0.3rem black;
    &:hover {
        box-shadow: 0 0 0.7rem #495e57;
    }

    @media only screen and (${devices.mobileP}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.tablet}) {
    }
`;

function Description(props) {
  return (
      <>
          <DescriptionContainer
              className="container"
              id="About"
          >
              <DescriptionRowContainerText className="description-row-text">
                  <MDBCol start>
                      <Title
                          title="Little-Lemon"
                          fontSize="64px"
                          color="#495E57"
                          textShadow="coral"
                      />
                  </MDBCol>

                  <MDBCol center>
                      <Subtitle
                          subtitle="Chicago"
                          fontSize="48px"
                          color="#495E57"
                          textShadow="coral"
                      />
                  </MDBCol>

                  <MDBCol end>
                      <Text
                          text="
                            We are a family owned
                        Mediterranean restaurant,
                        focused on
                        traditional recipes
                        served with a modern
                        twist."
                          fontSize="25px"
                          color="#333333"
                          textShadow="coral"
                          sizeText="40rem"
                      />
                  </MDBCol>
              </DescriptionRowContainerText>
              <DescriptionRowContainerImg className="description-row-img">
                  <DescriptionColImg start>
                      <Img
                          src={marioAndAdrianB}
                          alt="img-responsive"
                      />
                      <Img
                          src={marioAndAdrianA}
                          alt="img-responsive"
                      />
                  </DescriptionColImg>

                  <DescriptionColImg end>
                      <Img
                          src={home}
                          alt="img-responsive"
                          style={{
                              height: '325px'
                          }}
                      />
                      <Img
                          src={restaurant}
                          alt="img-responsive"
                      />
                  </DescriptionColImg>
              </DescriptionRowContainerImg>
          </DescriptionContainer>
      </>
  );
}

Description.propTypes = {}

export default Description
