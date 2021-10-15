import React from "react";
import styled from "styled-components/macro";

import LogoutButton from "../Components/Auth0/LogoutButton";

const Profile = ({ user, isAuthenticated, isLoading }) => {
  return (
    <main>
      <h2>THIS IS PROFILE</h2>
      <LogoutButton>Log Out...</LogoutButton>
    </main>
  )
}

export default Profile;