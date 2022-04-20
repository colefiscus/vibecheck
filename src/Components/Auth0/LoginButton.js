import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <AuthLoginButton onClick={() => loginWithRedirect()}>SIGN IN</AuthLoginButton>
}

const AuthLoginButton = styled.div`
  padding: 10px 16px 5px 16px;
  font-size: ${12/14}rem;
  font-family: 'Biryani';
  font-weight: 200;
  flex-shrink: 0;
  background-color: #FDFFFC;
  border: 1px solid #061826;
  border-bottom: none;
  border-radius: 6000px 6000px 1000px 1000px;
  cursor: pointer;

  &:hover {
    background-color: #C1292E;
    color: white;
  }
`;

export default LoginButton;