import React from "react";
import styled from "styled-components/macro";
import Rating from "../Rating/Rating";

const RatingBox = ({ data }) => {

  const ratings = data.map(ratingData => {
    return <Rating ratingData={ratingData} />
  })

  return (
    <RatingsBoxWrapper>
      {ratings}   
    </RatingsBoxWrapper>
  )
}

const RatingsBoxWrapper = styled.section`
  margin: 24px;
  width: 85%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

export default RatingBox;