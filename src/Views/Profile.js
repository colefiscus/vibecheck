import React from "react";
import styled from "styled-components/macro";

import LogoutButton from "../Components/Auth0/LogoutButton";

const Profile = ({ user, isAuthenticated }) => {
  return (
    isAuthenticated && <MainWrapper>
        <h2>{user.given_name.toUpperCase()}'S PROFILE</h2>
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

const ImageWrapper = styled.div`
  width: 100px;
`;

export default Profile;