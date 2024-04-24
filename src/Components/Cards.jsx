// components/Card.js
import React from "react";

function Card({ value }) {
  const { imagesource, rating, description, price } = value;

  return (
    <div className="">
      <div className="">
        <img src={imagesource} alt="" className="" />
      </div>
      <div className=" p-4 ">
        <p>{rating}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Card;
