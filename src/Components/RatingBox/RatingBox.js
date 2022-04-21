import React from "react";
import styled from "styled-components/macro";
import Rating from "../Rating/Rating";

const RatingBox = ({ data }) => {

  const ratings = data.map(ratingData => {
    return <Rating ratingData={ratingData} />
  })

  return (
    <section>
      <div>Herlo</div>
      {ratings}   
    </section>
  )
}

export default RatingBox;