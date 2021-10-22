import React from "react";
import styled from "styled-components/macro";
import selfPortrait from "../Images/cole.jpeg";

import ContactMe from "../Components/EmailJS/ContactMe";

const Contact = () => {
  return (
    <ContactWrapper>
      <AboutWrapper style={{ "--alignment": "center" }}>
        <h3 style={{ "margin-bottom": 25 + "px"}}>About Cole Fiscus</h3>
        <ImageWrapper align="right">
          <Portrait src={selfPortrait} alt={"Portrait of the developer"} />
        </ImageWrapper>
        <p>The developer is a major foodie. He wanted a better place to store his ratings and reviews of restaurants than his Notion page or Yelp. He also came up with the rating system. He wanted something that could factor in the multiple aspects of the dining-out experience. The best restaurant that he's been to so far has been Sawyer, in Ballard, WA. Sawyer got a final score of 5.5. He hopes you like using ViibCheck. He appreciates that you're here. And he hopes to hear from you soon.</p>
      </AboutWrapper>
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
  gap: 40px;
  padding: 30px;
`;

const ImageWrapper = styled.div`
  align-self: center;
  margin: 16px;
  width: 300px;
  border-radius: 50%;
  float: left;
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
`;

const AboutWrapper = styled.div`
  flex: 1;
  text-align: var(--alignment);
  line-height: 1.3;
`;

export default Contact;