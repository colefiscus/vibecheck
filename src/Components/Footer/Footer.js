import React from "react";
import styled from "styled-components/macro";
import instagramLogo from '../../Images/instagram-logo.png';
import ghLogo from '../../Images/github-logo.png';

const Footer = () => {
  return (
    <PageBottom>
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
  justify-content: flex-end;
  background-color: #FFDD00;
  color: #FDFFFC;
  border-top: 3px solid #061826;
  position: absolute;
  bottom: 0;
`;

const LogoWrapper = styled.a`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100%;
`;

export default Footer;