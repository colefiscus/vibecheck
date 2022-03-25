import React from "react";
import styled from "styled-components/macro";

const Home = ({ user, isAuthenticated }) => {

  return (
    <HomeWrapper>
      <WelcomeHero>Welcome {user.given_name}!</WelcomeHero>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.main`
  min-height: 78%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeHero = styled.h1`
  font-size: ${36/14}rem;
`;

export default Home;