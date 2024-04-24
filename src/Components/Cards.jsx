// components/Card.js
import React from "react";
import { FaStar } from "react-icons/fa";

function Card({ value }) {
  const { imagesource, rating, description, price, tag, } = value;

  return (
   
    <div className=" ml-16 mt-12 mb-10 shadow-md ">
      <div className="relative  ">
        <img src={imagesource} alt="" className="rounded-lg h-80 w-80 object-cover" />
        <div className="absolute mb-30">{tag}</div>
      </div>
      <div className=" p-4 ">
      <div className="flex"><FaStar size={20} className="text-red-500" /><p className="ml-2">{rating}</p></div>
    
        <p>{description}</p>
        <br />
        <p><strong>{price}</strong></p>
      </div>
    
    </div>
  );
}

export default Card;
