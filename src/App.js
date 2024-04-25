// App.js
import React from "react";
import Card from "../src/Components/Cards";
import onlineData from "../src/Components/OnlineData";
import { SiAirbnb } from "react-icons/si";

function App() {
  return (
    <div className="flex flex-col items-center mt-8 mb-5 ">

      <div className="flex items-center w-[76%] justify-between h-16 rounded-t-lg bg-orange-600  text-red-600 font-extrabold font-mono  ">
       
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

      <div className=" flex flex-wrap w-[76%] shadow-lg">
        <div className="flex flex-wrap  ">
         <div className="ml-16 mt-12 ">
           <p className=" text-3xl font-black font-mono ">Online Experiences
           </p>
           <p className="mt-3 text-lg font-sans mb-5">Joint unique interactive activities led by one-of-a-kind  hosts-all without leaving home.</p>
         </div>
       </div>

        <div className="flex flex-wrap justify-center ">
        {onlineData.map((value) => (
          <div key={value.id}>
            <Card value={value}/>
          </div>
        ))}
        </div>
      
      </div>
    </div>
  );
}

export default App;
