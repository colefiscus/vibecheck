import React from "react";
import styled from "styled-components/macro";
import selfPortrait from "../Images/cole.jpeg";

import ContactMe from "../Components/EmailJS/ContactMe";

const Contact = () => {
  return (
    <ContactWrapper>
      <SectionWrapper style={{ "--alignment": "center" }}>
        <h3>Made by: Cole Fiscus</h3>
        <ImageWrapper align="right">
          <Portrait src={selfPortrait} alt={"Portrait of the developer"} />
        </ImageWrapper>
        <p>The developer is a major foodie.</p>
        <p>He wanted a better place to store his ratings and reviews of restaurants than his Notion page or Yelp.</p>
        <p>He also came up with the rating system. He wanted something that could factor in the multiple aspects of the dining-out experience.</p>
        <p>The best restaurant that he's been to so far has been Sawyer, in Ballard, WA.</p>
        <p>Sawyer got a final score of 5.5.</p>
        <p>He hopes you like using ViibCheck. He appreciates that you're here. And he hopes to hear from you soon.</p>
      </SectionWrapper>
      <SectionWrapper style={{ "--alignment": "left" }}>
        <p>Have a suggestion for ViibCheck? Send your ideas!</p>
        <ContactMe />
      </SectionWrapper>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Josefin Slab';
  font-weight: 200;
  font-size: ${22/14}rem;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-family: 'Biryani';
  font-weight: 400;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  align-self: center;
  margin: 16px;
  width: 300px;
  border-radius: 50%;
`;

const Portrait = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const SectionWrapper = styled.section`
  display: flex;
  text-align: var(--alignment);
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export default Contact;