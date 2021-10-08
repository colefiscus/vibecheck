import React from "react";
import styled from "styled-components/macro";
import liLogo from '../../Images/In-White-72.png';


const Footer = () => {
  return (
    <PageBottom>
      <LogoWrapper>
        <Logo src={liLogo} />
      </LogoWrapper>
    </PageBottom>
  )
}

const PageBottom = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  background-color: #061826;
  color: #FDFFFC;
  position: absolute;
  bottom: 0;
`;

const LogoWrapper = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 60%;
`;

export default Footer;