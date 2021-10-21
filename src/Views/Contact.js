import React from "react";
import styled from "styled-components/macro";

import ContactMe from "../Components/EmailJS/ContactMe";

const Contact = () => {
  return (
    <ContactWrapper>
      <SectionWrapper>
        <h2>ABOUT</h2>
        <h3>Cole Fiscus</h3>
        <p>The developer is a major foodie.</p>
        <p>He wanted a better place to store his ratings of restaurants than his Notion page or Yelp.</p>
        <p>He also thinks the rating system used here is simultaneously ridiculous and fantastic.</p>
        <p>He would give it a 6/7.</p>
        <p></p>
      </SectionWrapper>
      <SectionWrapper>
        <h2>CONTACT</h2>
        <p>Have a suggestion for VibeCheck? Send me your ideas!</p>
        <ContactMe />
      </SectionWrapper>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.main`
  display: flex;
  justify-content: center;
  font-family: 'Josefin Slab';
  font-weight: 200;
  font-size: ${22/14}rem;
`;

const SectionWrapper = styled.section`
  margin: 0px 25px;
`;

export default Contact;