import React from "react";
import styled from "styled-components/macro";
import data from "../Data/sampleData"

import NewRestForm from "../Components/NewRestForm/NewRestForm";
import RatingBox from "../Components/RatingBox/RatingBox";

const Home = ({ user }) => {

  const welcomeMsg = user ? `Welcome back, ${user.given_name}!` : "Welcome!"

  return (
    <HomeWrapper>
      <WelcomeHero>{welcomeMsg}</WelcomeHero>
      <NewRestForm></NewRestForm>
      <RatingBox data={data}></RatingBox>
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
  margin: 1rem;
`;

export default Home;