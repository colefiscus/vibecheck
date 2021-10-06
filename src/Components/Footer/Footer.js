import React from "react";
import styled from "styled-components/macro";

const Footer = () => {
  return (
    <PageBottom>
      Place for things.
    </PageBottom>
  )
}

const PageBottom = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #061826;
  position: absolute;
  bottom: 0;
`;

export default Footer;