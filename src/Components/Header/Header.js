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
  height: 50px;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: ${32/16}rem;
  margin-right: auto;
`;

const Button = styled.button`
  width: 40x;
  background-color: #FFDD00;
`;

export default Header;