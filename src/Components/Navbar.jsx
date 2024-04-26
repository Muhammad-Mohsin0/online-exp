import React from 'react'
import { SiAirbnb } from "react-icons/si";

const Navbar = () => {
  return (

    <div className="flex flex-col items-center mt-8 mb-5 ">
      <div className="flex items-center w-[76%] justify-between h-16 rounded-t-lg bg-orange-600 font-extrabold font-mono">
       <div className="flex items-center">
         <SiAirbnb size={28} className="ml-10 text-white"/>
         <h1 className="ml-2 text-2xl text-white ">airbnb</h1>
       </div>
        <div className="flex items-center text-white text-xl">
          <button className="mr-5 ">Home</button>
          <button className="mr-5">Contact</button>
          <button className="mr-5">Services</button>
          <button className="mr-10">About</button>
        </div>
      </div>
      </div>

  )
}

export default Navbar
