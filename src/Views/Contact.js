import React from "react";
import styled from "styled-components/macro";

import ContactMe from "../Components/EmailJS/ContactMe";

const Contact = () => {
  return (
    <ContactWrapper>
      <SectionWrapper>
        <Title>ABOUT</Title>
        <h3>Cole Fiscus</h3>
        <p>The developer is a major foodie.</p>
        <p>He wanted a better place to store his ratings of restaurants than his Notion page or Yelp.</p>
        <p>He also thinks the rating system used here is simultaneously ridiculous and fantastic.</p>
        <p>He would give it a 6/7.</p>
      </SectionWrapper>
      <SectionWrapper>
        <Title>CONTACT</Title>
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

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default Contact;