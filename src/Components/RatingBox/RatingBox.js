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
  /* display: grid;
  grid-template-columns: 33% 33% 33%; */
`;

export default RatingBox;