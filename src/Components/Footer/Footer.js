import React from "react";
import styled from "styled-components/macro";
import instagramLogo from '../../Images/instagram-logo.png';
import ghLogo from '../../Images/github-logo.png';
import smallLogo from '../../Images/small-logo-dark.png';

const Footer = () => {
  return (
    <PageBottom>
      <LogoWrapper>
        <Logo src={smallLogo} />
      </LogoWrapper>
      <LogoWrapper href="https://www.instagram.com/negative2to7" target="_blank">
        <Logo src={instagramLogo} />
      </LogoWrapper>
      <LogoWrapper href="https://github.com/colefiscus/vibecheck" target="_blank">
        <Logo src={ghLogo} />
      </LogoWrapper>
    </PageBottom>
  )
}

const PageBottom = styled.footer`
  width: 100%;
  height: 40px;
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

const Logo = styled.img`
  width: 100%;
`;

export default Footer;