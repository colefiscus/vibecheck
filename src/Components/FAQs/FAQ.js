import React from 'react';
import styled from 'styled-components/macro';

import downArrow from '../../Images/down-arrow.png'

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <FAQWrapper
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <FAQQuestion 
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
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const FAQQuestion = styled.div`
  position: relative;
  font-size: 20px;
  padding-right: 80px;
  transition: all 0.8s ease-out;

  margin-bottom: ${props => props.open ? "30px" : "0px"};

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

const FAQAnswer = styled.div`
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.5s ease-out;

  max-height: ${props => props.open ? "1000px" : "0px"};
  opacity: ${props => props.open ? "1" : "0px"};
`;

export default FAQ;