import React from "react";
import styled from "styled-components/macro";

const Home = ({ user, isAuthenticated }) => {

  return (
    <HomeWrapper>
      <h1>Welcome {user.given_name}!</h1>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.main`
  min-height: 78%;
  position: relative;
`;

export default Home;