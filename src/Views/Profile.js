import React from "react";
import styled from "styled-components/macro";

import LogoutButton from "../Components/Auth0/LogoutButton";

const Profile = ({ user, isAuthenticated }) => {

  return (
    isAuthenticated && <MainWrapper>
        <HomeWrapper>
          <WelcomeHero>Hi {user.given_name}!</WelcomeHero>
        </HomeWrapper>
        <ImageWrapper>
          <img src={user.picture} alt={user.name} style={{ "width": "100%" }} />
        </ImageWrapper>
        <LogoutButton />
      </MainWrapper>
  )
}

const MainWrapper = styled.main`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 78%;
`;

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

const ImageWrapper = styled.div`
  width: 100px;
`;

export default Profile;