import React from "react";
import styled from "styled-components/macro";
import instagramLogo from '../../Images/instagram-logo.png';
import ghLogo from '../../Images/github-logo.png';
import smallLogo from '../../Images/small-logo-dark.png';
import contactLogo from '../../Images/contact-logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <PageBottom>
      <LogoWrapper>
        <Logo src={smallLogo} 
          style={{"--color": "#FFDD00"}} />
      </LogoWrapper>
      <FooterLink to="/contact">
        <Logo src={contactLogo} 
          style={{ "--radius": 16 + "px", "--color": "white" }} />
      </FooterLink>
      <LogoWrapper href="https://www.instagram.com/viibcheck/" target="_blank">
        <Logo src={instagramLogo} 
          style={{ "--radius": 8 + "px", "--color": "white" }}/>
      </LogoWrapper>
      <LogoWrapper href="https://github.com/colefiscus/vibecheck/" target="_blank">
        <Logo src={ghLogo} 
          style={{ "--radius": 16 + "px", "--color": "white" }}/>
      </LogoWrapper>
    </PageBottom>
  )
}

const PageBottom = styled.footer`
  width: 100%;
  height: 50px;
  padding: 0px 8px;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  background-color: #FFDD00;
  color: #FDFFFC;
  border-top: 3px solid #061826;

  // Remove this once content has been added to all views?
  // position: fixed;
  // bottom: 0;
`;

const LogoWrapper = styled.a`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-of-type {
    margin-right: auto;
  }
`;

const FooterLink = styled(Link)`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100%;
  border-radius: var(--radius);

  &:hover {
    background-color: var(--color);
  }
`;

export default Footer;