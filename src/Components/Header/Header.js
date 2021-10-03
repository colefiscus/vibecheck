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
  background-color: #FFDD00;
  width: 100%;
  display: flex;
`;

const Title = styled.h1`
  font-size: ${22/16}rem;
`;

const Button = styled.button`
  width: 40x;
  background-color: #C1292E;

  &:first-of-type {
    margin-left: auto;
  }
`;

export default Header;