import React from 'react';
import styled from 'styled-components/macro';

import downArrow from '../../Images/down-arrow.png'

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <FAQWrapper
      className={"faq" + (faq.open ? " open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <FAQQuestion className="faq-question">
        {faq.question}
      </FAQQuestion>
      <FAQAnswer className="faq-answer">
        {faq.answer}
      </FAQAnswer>
    </FAQWrapper>
  )
}

const FAQWrapper = styled.div`
  background-color: #FFF;
  padding: 15px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const FAQQuestion = styled.div`
  position: relative;
  font-size: 20px;
  padding-right: 80px;

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

    transition: all 0.4s ease;
  }
`;

const FAQAnswer = styled.div`
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.4s ease;
`;

export default FAQ;