import React from "react";
import styled from "styled-components/macro";

const Home = () => {
  return (
    <HomeWrapper>
      <h1>THIS IS HOME</h1>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.main`
  min-height: 100%;
`;

export default Home;