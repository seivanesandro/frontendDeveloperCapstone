import React from 'react'
//FIXME:import PropTypes from 'prop-types'
import styled from 'styled-components';

import { devices } from '../../constantes';
import { IoIosStar } from 'react-icons/io';
import Lily from '../../assets/lily.jpg';
import Anna from '../../assets/anna.jpg';
import Trump from '../../assets/trump.jpg';
import John from '../../assets/john.jpg';

const TestemonialsStyled = styled.div`
    background: transparent;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 5rem;

    @media only screen and (${devices.laptop}) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    @media only screen and (${devices.laptop3}) {
    }
    @media only screen and (${devices.tablet2}) {
    }
    @media only screen and (${devices.tablet1}) {
    }
    @media only screen and (${devices.m5}) {
    }
    @media only screen and (${devices.m3}) {
    }
`;
const TestemonialsTitle = styled.div`
    font-size: 64px;
    color: #f4ce14;
    font-family: 'Markazi Text', serif;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
`;
const TestemonialsCard = styled.div`
    background: lightgray;
    @media only screen and (${devices.laptop}) {
    }
    @media only screen and (${devices.laptop3}) {
    }
    @media only screen and (${devices.tablet2}) {
    }
    @media only screen and (${devices.tablet1}) {
    }
    @media only screen and (${devices.m5}) {
    }
    @media only screen and (${devices.m3}) {
    }
`;
const TestemonialContainer = styled.div`
    padding: 1rem;
    background: #fff;
    box-shadow: 0 0 0.3rem black;
    border-radius: 6px;
`;
const TestemonialRating = styled.p`
    color: gold;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.2rem;
    padding: 1rem 0.5rem;
    background: #fff;
    border-bottom: 1px solid lightgray;
`;
const TestemonialMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    background-color: #fff;

`;
const TestemonialImg = styled.img`
    width: 121px;
    height: 120px;
    box-shadow: 0 0 0.2rem black;
`;
const TestemonialName = styled.p`
    font-family: 'Markazi Text', serif;
    font-size: 28px;
    font-weight: 500;
`;
const TestemonialFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    padding: 1rem;
    background-color: #fff;
    border-top: 0.5px solid lightgray;
`;
const TestemonialComments = styled.p`
    font-family: 'Markazi Text', serif;
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
    text-align: left;
    width: auto;
`;

function Testimonials(props) {
  return (
      <>
          <TestemonialsTitle className="testimonials-title">
              <label>Testimonials</label>
          </TestemonialsTitle>

          <TestemonialsStyled className="testimonials-container">
              <TestemonialsCard className="testimonials-card">
                  <TestemonialContainer className="testimonial-container">
                      <TestemonialRating className="testimonial-rating">
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                      </TestemonialRating>
                      <TestemonialMain className="testimonial-main">
                          <TestemonialImg
                              className="testimonial-img"
                              src={Lily}
                              alt="greek salad"
                          />

                          <TestemonialName className="testimonial-name">
                              Lily
                          </TestemonialName>
                      </TestemonialMain>
                      <TestemonialFooter className="testimonial-footer">
                          <TestemonialComments className="testimonial-comments">
                              "The best place i've
                              eaten since 2020
                              <br />
                              Great and best
                              tastiet food".{' '}
                          </TestemonialComments>
                      </TestemonialFooter>
                  </TestemonialContainer>
              </TestemonialsCard>

              <TestemonialsCard className="testimonials-card">
                  <TestemonialContainer className="testimonial-container">
                      <TestemonialRating className="testimonial-rating">
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                      </TestemonialRating>
                      <TestemonialMain className="testimonial-main">
                          <TestemonialImg
                              className="testimonial-img"
                              src={Anna}
                              alt="Anna"
                          />
                          <TestemonialName className="testimonial-name">
                              Anna
                          </TestemonialName>
                      </TestemonialMain>
                      <TestemonialFooter className="testimonial-footer">
                          <TestemonialComments className="testimonial-comments">
                              "love coming to
                              restaurant for
                              dinner
                              <br />
                              is very skilled &
                              professional"{' '}
                          </TestemonialComments>
                      </TestemonialFooter>
                  </TestemonialContainer>
              </TestemonialsCard>

              <TestemonialsCard className="testimonials-card">
                  <TestemonialContainer className="testimonial-container">
                      <TestemonialRating className="testimonial-rating">
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                      </TestemonialRating>
                      <TestemonialMain className="testimonial-main">
                          <TestemonialImg
                              className="testimonial-img"
                              src={Trump}
                              alt="Trump"
                          />

                          <TestemonialName className="testimonial-name">
                              Trump
                          </TestemonialName>
                      </TestemonialMain>
                      <TestemonialFooter className="testimonial-footer">
                          <TestemonialComments className="testimonial-comments">
                              "The best Restaurant
                              in USA!!
                              <br />I did love the
                              wine and Italian
                              Foods."{' '}
                          </TestemonialComments>
                      </TestemonialFooter>
                  </TestemonialContainer>
              </TestemonialsCard>

              <TestemonialsCard className="testimonials-card">
                  <TestemonialContainer className="testimonial-container">
                      <TestemonialRating className="testimonial-rating">
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                          <IoIosStar size={40} />
                      </TestemonialRating>
                      <TestemonialMain className="testimonial-main">
                          <TestemonialImg
                              className="testimonial-img"
                              src={John}
                              alt="John"
                          />

                          <TestemonialName className="testimonial-name">
                              John
                          </TestemonialName>
                      </TestemonialMain>
                      <TestemonialFooter className="testimonial-footer">
                          <TestemonialComments className="testimonial-comments">
                              "Little is
                              of another planet!!
                              <br />Great Service and
                               the quality of
                              food!"{' '}
                          </TestemonialComments>
                      </TestemonialFooter>
                  </TestemonialContainer>
              </TestemonialsCard>
          </TestemonialsStyled>
      </>
  );
}

Testimonials.propTypes = {}

export default Testimonials
