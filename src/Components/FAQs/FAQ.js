import React from 'react';
import styled from 'styled-components/macro';

import downArrow from '../../Images/down-arrow.png'

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <FAQWrapper
      key={index}
      open={(faq.open ? true : false)}
      >
      <FAQQuestion 
        onClick={() => toggleFAQ(index)}
        className="faq-question"
        open={(faq.open ? true : false)}
      >
        {faq.question}
      </FAQQuestion>
      <FAQAnswer 
        className="faq-answer"
        open={(faq.open ? true : false)}
      >
        {faq.answer}
      </FAQAnswer>
    </FAQWrapper>
  )
}

const FAQWrapper = styled.div`
  padding: 20px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.6s ease-in-out;
  background-color: ${props => props.open ? "#FFF" : "hsl(193deg, 95%, 37%, 35%)"};
  border: ${props => props.open ? "1px solid" : "none"};

  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  `;
  
  const FAQQuestion = styled.p`
  font-family: 'Biryani';
  font-weight: 200;
  position: relative;
  font-size: ${18/14}rem;
  padding: 0px 8px;
  margin-top: 4px;
  transition: all 0.6s ease-in-out;
  cursor: default;
  
  margin-bottom: ${props => props.open ? "10px" : "0px"};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;

    background-image: url(${downArrow});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    transition: all 0.6s linear;

    // transform: ${props => props.open ? "translateY(-50%)" : "rotate(180deg)"};
  }
`;

const FAQAnswer = styled.p`
  font-family: 'Josefin Slab';
  font-size: ${16/14}rem;
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
  background-color: #FFF;
  border-radius: 8px;

  padding: ${props => props.open ? "25px 5px" : "0px"};
  max-height: ${props => props.open ? "1000px" : "0px"};
  opacity: ${props => props.open ? "1" : "0px"};
`;

export default FAQ;