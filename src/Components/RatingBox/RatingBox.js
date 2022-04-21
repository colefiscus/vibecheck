import React from "react";
import styled from "styled-components/macro";
import Rating from "../Rating/Rating";

const RatingBox = ({ data }) => {

  const ratings = data.map(ratingData => {
    return <Rating ratingData={ratingData} />
  })

  return (
    <section>
      {ratings}   
    </section>
  )
}

export default RatingBox;