import React from "react";
import styled from "styled-components/macro";

const Rating = ({ ratingData }) => {

  const info = ratingData.restaurantInfo;
  const userRatings = ratingData.userRatings;

  const userRatingValues = Object.values(ratingData.userRatings);
  const averageRating = userRatingValues.reduce((acc, rating) => {
    return acc += rating
  }, 0) / 4;

  const makeWebsitePresentable = (website) => {
    if (website.includes("https")) {
      return website.slice(8)
    } else if (website.includes("http")) {
      return website.slice(7)
    }
  }

  return (
    <RatingWrapper>
      <RestName>{info.name.toUpperCase()}</RestName>
      <RestWebsite href={`http://maps.google.com/?q=${info.address}`} target="_blank" rel="noreferrer">{info.address}</RestWebsite>
      <p>{info.dateVisited}</p>
      <RestWebsite href={info.website} target="_blank" rel="noreferrer">{makeWebsitePresentable(info.website)}</RestWebsite>
      <p>FOOD: {userRatings.foodRating}</p>
      <p>VIBE: {userRatings.vibeRating}</p>
      <p>SERVICE: {userRatings.serviceRating}</p>
      <p>VALUE: {userRatings.valueRating}</p>
      <h3>AVERAGE: {averageRating}</h3>
    </RatingWrapper>
  )
}

const RatingWrapper = styled.article`
  background-color: white;
  border: 6px ridge #0591B8;
  border-radius: 5px;
  text-align: center;
  padding: 1rem;
  font-family: 'Josefin Slab';
  font-size: 1.25rem;
  font-weight: 200;
  box-shadow: 1px 3px 5px hsl(0deg 0% 0% / 0.5);
  `;

const RestName = styled.h2`
  font-family: 'Rokkitt';
  font-size: 1.75rem;
  font-weight: 400;
  text-decoration: underline;
  margin-bottom: 1rem;
`;

const RestWebsite = styled.a`
  text-decoration: none;

  &:visited {
    color: blue;
  }
`;

export default Rating;