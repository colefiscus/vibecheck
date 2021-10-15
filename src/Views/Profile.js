import React from "react";
import styled from "styled-components/macro";

import LogoutButton from "../Components/Auth0/LogoutButton";

const Profile = ({ user, isAuthenticated }) => {
  return (
    isAuthenticated && <MainWrapper>
        <h2>{user.given_name.toUpperCase()}'S PROFILE</h2>
        <img src={user.picture} alt={user.name} />
        <LogoutButton>Log Out...</LogoutButton>
      </MainWrapper>
  )
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

export default Profile;