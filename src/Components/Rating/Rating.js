import react from "react";
import styled from "styled-components/macro";

const Rating = ({ ratingData }) => {

  const info = ratingData.restaurantInfo;
  const userRatings = ratingData.userRatings;
  const userRatingValues = Object.values(ratingData.userRatings);

  const averageRating = userRatingValues.reduce((acc, rating) => {
    return acc += rating
  }, 0) / 4;

  return (
    <RatingWrapper>
      <RestName>{info.name}</RestName>
      <p>{info.address}</p>
      <p>{info.dateVisited}</p>
      <p>{info.website}</p>
      <p>FOOD: {userRatings.foodRating}</p>
      <p>VIBE: {userRatings.vibeRating}</p>
      <p>SERVICE: {userRatings.serviceRating}</p>
      <p>VALUE: {userRatings.valueRating}</p>
      <h3>Average Score: {averageRating}</h3>
    </RatingWrapper>
  )
}

const RatingWrapper = styled.article`
  border: 1px solid red;
  text-align: center;
`;

const RestName = styled.h2`
  font-size: 1.5rem;
`;

export default Rating;