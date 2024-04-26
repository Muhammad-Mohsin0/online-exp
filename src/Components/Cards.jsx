// components/Card.js
import React from "react";
import { FaStar } from "react-icons/fa";

function Card({ value }) {
  const { imagesource, rating, description, price, tag, } = value;

  return (
   
    <div className=" ml-8 mt-12 mr-6 mb-8 shadow-md hover:scale-105 transition duration-700 ">

      <div className="relative  ">
          {tag && <div className="absolute text-black text-center w-[30%] mt-2 ml-2 rounded-lg bg-white font-semibold px-2 py-1" >{tag}</div>}
          <img src={imagesource} alt="" className="rounded-lg h-80 w-80 object-cover" />
      </div>

      <div className=" p-4 "> 
           <div className="flex"><FaStar size={20} className="text-red-500" />
               <p className="ml-2">{rating}</p>
           </div>
             <p>{description}</p>
             <br />
             <p><strong>{price}</strong></p>
      </div>

    </div>
  );
}

export default Card;
