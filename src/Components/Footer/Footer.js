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
          style={{ "--radius": 16 + "px", "--color": "#0591B8" }} />
      </FooterLink>
      <LogoWrapper href="https://www.instagram.com/viibcheck/" target="_blank">
        <Logo src={instagramLogo} 
          style={{ "--radius": 9 + "px", "--color": "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" }}/>
      </LogoWrapper>
      <LogoWrapper href="https://github.com/colefiscus/vibecheck/" target="_blank">
        <Logo src={ghLogo} 
          style={{ "--radius": 16 + "px", "--color": "#ffffff" }}/>
      </LogoWrapper>
    </PageBottom>
  )
}

const PageBottom = styled.footer`
  width: 100%;
  height: 10%;
  padding: 0px 8px;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  background-color: #FFDD00;
  color: #FDFFFC;
  border-top: 3px solid #061826;
  position: relative;
  bottom: 0;
`;

const LogoWrapper = styled.a`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-of-type {
    margin-right: auto;
  }
`;

const FooterLink = styled(Link)`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100%;
  border-radius: var(--radius);
  overflow: hidden;


  &:hover {
    background: var(--color);
  }
`;

export default Footer;