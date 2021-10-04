import React from 'react';
import styled from 'styled-components/macro';

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>VIBECHECK</Title>
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
  gap: 16px;
`;

const Title = styled.h1`
  font-size: ${32/16}rem;
  margin-right: auto;
`;

const Button = styled.button`
  padding: 6px 12px;
  background-color: #FDFFFC;
  border: 3px outset #474448;
  border-radius: 8px;
`;

export default Header;