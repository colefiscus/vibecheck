import React from "react";
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
      <RestName>{info.name.toUpperCase()}</RestName>
      <p>{info.address}</p>
      <p>{info.dateVisited}</p>
      <a href={info.website} target="_blank" rel="noreferrer">{info.website}</a>
      <p>FOOD: {userRatings.foodRating}</p>
      <p>VIBE: {userRatings.vibeRating}</p>
      <p>SERVICE: {userRatings.serviceRating}</p>
      <p>VALUE: {userRatings.valueRating}</p>
      <h3>AVERAGE: {averageRating}</h3>
    </RatingWrapper>
  )
}

const RatingWrapper = styled.article`
  border: 6px groove #0591B8;
  border-radius: 5px;
  text-align: center;
  padding: 16px;
  font-family: 'Rokkitt';
  font-size: 1.25rem;
  `;

const RestName = styled.h2`
  font-size: 1.75rem;
  font-family: 'Biryani';
`;

export default Rating;