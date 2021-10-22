import React from "react";
import styled from "styled-components/macro";
import selfPortrait from "../Images/cole.jpeg";
import ghLogo from "../Images/github-logo.png";
import liLogo from "../Images/linkedin-logo.png";

import ContactMe from "../Components/EmailJS/ContactMe";

const Contact = () => {
  return (
    <ContactWrapper>
      <AboutWrapper style={{ "--alignment": "center" }}>
        <SocialWrapper>
          <h2>About Cole Fiscus • • •</h2>
          <ImageWrapper style={{ "--size": 32 + "px" }}>
            <Logo src={ghLogo} />
          </ImageWrapper>
          <ImageWrapper style={{ "--size": 32 + "px" }}>
            <Logo src={liLogo} />
          </ImageWrapper>
        </SocialWrapper>
        <ImageWrapper style={{ "--size": 300 + "px" }}>
          <Portrait src={selfPortrait} alt={"Portrait of the developer"} />
        </ImageWrapper>
        <p>The developer is a major foodie. He wanted a better place to store his ratings and reviews of restaurants than his Notion page or Yelp. He also came up with the rating system. He wanted something that could factor in the multiple aspects of the dining-out experience. The best restaurant that he's been to so far has been Sawyer, in Seattle, WA. Sawyer got a final score of 5.5. He hopes you like using ViibCheck. He appreciates that you're here. And he hopes to hear from you soon.</p>
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

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid;
  line-height: 0;
  margin-bottom: 25px;
`;

const Logo = styled.img`
  width: 100%;
`;

const ImageWrapper = styled.div`
  align-self: center;
  margin: 16px;
  width: var(--size);
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