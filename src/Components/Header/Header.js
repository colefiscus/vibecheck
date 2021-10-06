import React from 'react';
import styled from 'styled-components/macro';
import logo from '../../Images/logo_one.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} />
      <Button>SIGN IN</Button>
      <Button>HELP</Button>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: #0591B8;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  height: 60px;
  gap: 2px;
  border-bottom: 3px solid #474448;
`;

const Logo = styled.img`
  width: 275px;
  margin-right: auto;
`;

const Button = styled.button`
  padding: 10px 12px 4px 12px;
  font-family: 'Biryani';
  font-weight: 200;
  line-height: 1;
  background-color: #FDFFFC;
  border-radius: 8px 8px 0px 0px;
  border-bottom: none;
  align-self: flex-end;
`;

export default Header;