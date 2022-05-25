import React from "react";
import styled from "styled-components/macro";
import Rating from "../Rating/Rating";

const RatingBox = ({ data }) => {

  const ratings = data.map(ratingData => {
    return <Rating ratingData={ratingData} />
  })

  return (
    <RatingsWrapper>
      {ratings}   
    </RatingsWrapper>
  )
}

const RatingsWrapper = styled.section`
  width: 67%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export default RatingBox;