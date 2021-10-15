import React from "react";
import styled from "styled-components/macro";

import LogoutButton from "../Components/Auth0/LogoutButton";

const Profile = ({ user, isAuthenticated, isLoading }) => {
  return (
    isAuthenticated && <main>
        <h2>THIS IS {user.given_name.toUpperCase()}'S PROFILE</h2>
        <img src={user.picture} alt={user.name} />
        <LogoutButton>Log Out...</LogoutButton>
      </main>
  )
}

export default Profile;