import React from "react";
import styled from "styled-components/macro";

import ContactMe from "../Components/EmailJS/ContactMe";

const Contact = () => {
  return (
    <ContactWrapper>
      <SectionWrapper>
        <Title>CONTACT</Title>
        <p>Have a suggestion for VibeCheck? <br />Send your ideas!</p>
        <ContactMe />
      </SectionWrapper>
      <SectionWrapper>
        <Title>ABOUT</Title>
        <h3>Cole Fiscus</h3>
        <p>The developer is a major foodie.</p>
        <p>He wanted a better place to store his ratings of restaurants than his Notion page or Yelp.</p>
        <p>He also thinks the rating system used here is simultaneously ridiculous and fantastic.</p>
        <p>He would give it a 6/7.</p>
      </SectionWrapper>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Josefin Slab';
  font-weight: 200;
  font-size: ${22/14}rem;
  text-align: center;
  padding: 20px;
  padding-bottom: 50px;
`;

const Title = styled.h2`
  font-family: 'Biryani';
  font-weight: 400;
  margin-bottom: 20px;
`;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:last-of-type {
    // padding: 20px;
  }
`;

export default Contact;