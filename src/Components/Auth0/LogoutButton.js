import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <AuthLogoutButton onClick={() => logout({ returnTo: window.location.origin })}>
      SIGN OUT
    </AuthLogoutButton>
  )
}

const AuthLogoutButton = styled.button`
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

export default LogoutButton;