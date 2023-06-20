import React from 'react'
import styled from 'styled-components';
import {
    lily,
    anna,
    trump,
    jonh
} from '../../../utilities/images';
import Title from '../../commons/Title';
import CardPerson from '../../commons/CardPerson';

const TestimonialContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

const TestimonialsTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 5rem;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

function Testimonials() {
  return (
      <>
          <TestimonialContainer className="testimonials-container">
              <TestimonialsTitle className="testimonials-title">
                  <Title
                      title="Testimonials"
                      fontWeight="500"
                  />
              </TestimonialsTitle>

              <CardContainer
                  className="card-container"
                  id="testimonial"
              >
                  <CardPerson
                      imageUrl={lily}
                      name="Lily"
                      descripton='"The best place ive eaten since 2020 Great and best tastiet food"'
                  />
                  <CardPerson
                      imageUrl={anna}
                      name="Anna"
                      descripton='"love coming to little-lemon for dinner is very skilled & professional"'
                  />
                  <CardPerson
                      imageUrl={trump}
                      name="Trump"
                      descripton='"The best Restaurant in USA!! I did love the wine and Italian Foods."'
                  />
                  <CardPerson
                      imageUrl={jonh}
                      name="Jonh"
                      descripton='"Little is of another planet!! Great Service and the quality of food!"'
                  />
              </CardContainer>
          </TestimonialContainer>
      </>
  );
}

export default Testimonials
