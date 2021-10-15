import React from "react";
import styled from "styled-components/macro";

import LogoutButton from "../Components/Auth0/LogoutButton";

const Profile = ({ user, isAuthenticated }) => {
  return (
    isAuthenticated && <MainWrapper>
        <h2>{user.given_name.toUpperCase()}'S PROFILE</h2>
        <ImageWrapper>
          <img src={user.picture} alt={user.name} />
        </ImageWrapper>
        <LogoutButton>Log Out...</LogoutButton>
      </MainWrapper>
  )
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  width: 300px;
`;

export default Profile;