import React from "react";
import styled from "styled-components/macro";

const Contact = () => {
  return (
    <ContactWrapper>
      <TextWrapper>
        <h2>ABOUT</h2>
        <h3>Cole Fiscus</h3>
        <p>The developer is a major foodie.</p>
        <p>He wanted a better place to store his ratings of restaurants than his Notion page or Yelp.</p>
        <p>He also thinks the rating system used here is simultaneously ridiculous and fantastic.</p>
        <p>He would give it a 6/7.</p>
        <p></p>
      </TextWrapper>
      <TextWrapper>
        <h2>CONTACT</h2>
      </TextWrapper>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.main`
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  margin: 0px 25px;
`;

export default Contact;