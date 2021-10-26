import React from 'react';
import styled from 'styled-components/macro';

const FAQ = ({ faq, index }) => {
  return (
    <FAQWrapper
      className={"faq" + (faq.open ? "open" : "")}
      key={index}
    >
      <FAQQuestion className="faq-question">
        {faq.question}
      </FAQQuestion>
      <div className="faq-answer">
        {faq.answer}
      </div>
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
`;



export default FAQ;