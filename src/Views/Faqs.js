import React from "react";
import styled from "styled-components/macro";

const Faqs = () => {
  return (
    <FaqsWrapper>
      <Title>Frequently Asked Questions</Title>
    </FaqsWrapper>
  )
}

const FaqsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Title = styled.h1`
  font-family: 'Biryani';
  font-size: ${18/14}rem;
`;

export default Faqs;