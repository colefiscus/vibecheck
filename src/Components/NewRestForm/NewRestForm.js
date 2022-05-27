import React from "react";
import styled from "styled-components/macro";

const NewRestForm = () => {
  return (
    <>
      <h2>Add New Restaurant</h2>
      <form>
        <label>Name:</label>
        <input />
        <label>Date Visited:</label>
        <input type="date" />
        <label>Website</label>
        <input type="url" />
      </form>
    </>
  )
};

export default NewRestForm;