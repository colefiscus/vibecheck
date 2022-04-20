import React from "react";
import styled from "styled-components/macro";

import NewRestForm from "../Components/NewRestForm/NewRestForm";

const Home = ({ user, isAuthenticated }) => {

  const welcomeMsg = user ? `Hi ${user.given_name}!` : "Welcome!"

  return (
    <HomeWrapper>
      <WelcomeHero>{welcomeMsg}</WelcomeHero>
      <NewRestForm></NewRestForm>
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