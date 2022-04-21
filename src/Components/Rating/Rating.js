import react from "react";
import styled from "styled-components/macro";

const Rating = ({ ratingData }) => {

  const info = ratingData.restaurantInfo;
  const userRatings = ratingData.userRatings;

  return (
    <RatingWrapper>
      <p>{info.name}</p>
      <p>{info.address}</p>
      <p>{info.dateVisited}</p>
      <p>{info.website}</p>
      <h3>The Vibecheck</h3>
      <p>{userRatings.foodRating}</p>
      <p>{userRatings.vibeRating}</p>
      <p>{userRatings.serviceRating}</p>
      <p>{userRatings.valueRating}</p>
      <h3>Average Score: AVG</h3>
    </RatingWrapper>
  )
}

const RatingWrapper = styled.article`
  border: 1px solid red;
`;

export default Rating;