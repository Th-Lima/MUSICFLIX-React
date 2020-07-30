/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #AF33C1;
    opacity: 0.5;
    color: ${({arrowColor }) => arrowColor};
    width: 40px;
    height: 253px;
    border-radius: 5px;
   
    transform: initial;
    &:before {
      font-size: 40px;
      color: ${({arrowColor }) => arrowColor};
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
    border: 10px solid; 
    border-radius: 10px;
    border-color: var(--primary);
  }
`;


const Slider = ({ arrowColor, children }) => (
  <Container arrowColor={arrowColor}>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 