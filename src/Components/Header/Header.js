import React from 'react';
import styled from 'styled-components/macro';
import mainLogo from '../../Images/main-logo.png';
import { NavLink } from 'react-router-dom';
import LoginButton from '../Auth0/LoginButton';

const Header = ({ isAuthenticated, isLoading }) => {
  return ((
      <HeaderWrapper>
        <HeaderLink to="/">
          <Logo src={mainLogo} />
        </HeaderLink>
        <HeaderLink to="/">
          <Button>HOME</Button>
        </HeaderLink>
        <HeaderLink to="faqs">
          <Button>FAQs</Button>
        </HeaderLink>
        {isLoading && <h2>Loading.....</h2>}
        {!isAuthenticated &&  <HeaderLink to="/sign-in">
                                <LoginButton />
                              </HeaderLink>}
        {isAuthenticated && <HeaderLink to="/profile">
                              <Button>PROFILE</Button>
                            </HeaderLink>}
      </HeaderWrapper>
    )
  )
}

const HeaderWrapper = styled.header`
  background-color: #0591B8;
  padding-right: 10px;
  display: flex;
  height: 12%;
  width: 100%;
  gap: 4px;
  border-bottom: 3px solid #061826;
  position: sticky;
  z-index: 1;
  top: 0;
`;

const HeaderLink = styled(NavLink)`
  align-self: flex-end;
  text-decoration: none;
  color: black;

  &:first-of-type {
    margin-right: auto;
    align-self: center;
  }
`;

const Logo = styled.img`
  max-width: 275px;
  width: 100%;
`;

const Button = styled.div`
  padding: 10px 16px 5px 16px;
  font-size: ${12/14}rem;
  font-family: 'Biryani';
  font-weight: 200;
  flex-shrink: 0;
  background-color: #FDFFFC;
  border: 1px solid #061826;
  border-bottom: none;
  border-radius: 8000px 8000px 1000px 1000px;
  cursor: pointer;

  &:hover {
    background-color: #C1292E;
    color: white;
  }
`;

export default Header;
