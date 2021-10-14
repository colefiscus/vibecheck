import React from 'react';
import styled from 'styled-components/macro';
import mainLogo from '../../Images/main-logo.png';
import { NavLink } from 'react-router-dom';
import LoginButton from '../Auth0/LoginButton';
import LogoutButton from '../Auth0/LogoutButton';

const Header = ({ user, isAuthenticated, isLoading }) => {
  return ((
      <HeaderWrapper>
        <HeaderLink to="/">
          <Logo src={mainLogo} />
        </HeaderLink>
        <HeaderLink to="faqs">
          <Button>FAQs</Button>
        </HeaderLink>
        <HeaderLink to="/contact">
          <Button>CONTACT</Button>
        </HeaderLink>
        {isLoading && <h2>Loading.....</h2>}
        {!isAuthenticated &&  <HeaderLink to="/sign-in">
                                <LoginButton />
                              </HeaderLink>}
        {isAuthenticated && <HeaderLink to="/sign-out">
                              <Logo src={user.picture} alt={user.name} />
                            </HeaderLink>}
      </HeaderWrapper>
    )
  )
}

const HeaderWrapper = styled.header`
  background-color: #0591B8;
  padding-right: 8px;
  display: flex;
  align-items: center;
  height: 60px;
  gap: 2px;
  border-bottom: 3px solid #061826;
`;

const HeaderLink = styled(NavLink)`
  align-self: flex-end;

  &:first-of-type {
    margin-right: auto;
    align-self: center;
  }
`;

const Logo = styled.img`
  max-width: 275px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 12px 4px 12px;
  font-family: 'Biryani';
  font-weight: 200;
  line-height: 1;
  flex-shrink: 0;
  background-color: #FDFFFC;
  border-radius: 8px 8px 0px 0px;
  border-bottom: none;
  align-self: flex-end;
  cursor: pointer;
`;

export default Header;