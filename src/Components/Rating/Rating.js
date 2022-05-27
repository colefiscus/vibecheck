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
      <RestLink 
        href={info.website}
        target="_blank" 
        rel="noreferrer" 
        style={{"text-decoration": "underline"}}
      >
        {info.name.toUpperCase()}
      </RestLink>
      <RestHeader style={{"font-weight": "200"}}>
        {info.dateVisited}
      </RestHeader>
      <RestLink 
        href={`http://maps.google.com/?q=${info.address}`} 
        target="_blank" 
        rel="noreferrer"
      >
        {info.address}
      </RestLink>
      <br/>
      {/* <RestLink 
        href={info.website} 
        target="_blank" 
        rel="noreferrer"
      >
        {makeWebsitePresentable(info.website)}
      </RestLink> */}
      <p>Food: {userRatings.foodRating}</p>
      <p>Vibe: {userRatings.vibeRating}</p>
      <p>Service: {userRatings.serviceRating}</p>
      <p>Value: {userRatings.valueRating}</p>
      <h3>AVERAGE: {averageRating}</h3>
    </RatingWrapper>
  )
}

const RatingWrapper = styled.article`
  background-color: white;
  border: 6px ridge #0591B8;
  border-radius: 15px;
  text-align: center;
  padding: 1rem;
  font-family: 'Josefin Slab';
  font-size: 1.25rem;
  font-weight: 200;
  box-shadow: 1px 3px 5px hsl(0deg 0% 0% / 0.5);
  `;

const RestHeader = styled.h2`
  font-family: 'Rokkitt';
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 0.85;
`;

const RestLink = styled.a`
  text-decoration: none;

  &:visited {
    color: blue;
  }
`;

export default Rating;