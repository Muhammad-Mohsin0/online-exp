// App.js
import React from "react";
import Card from "../src/Components/Cards";
import onlineData from "../src/Components/OnlineData";
import { SiAirbnb } from "react-icons/si";

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex absolute items-center  w-[80%] h-16 rounded-t-lg bg-orange-300 shadow-lg text-red-600 font-extrabold font-mono  ">
          <SiAirbnb size={28} className="ml-10 "/>
          <h1 className="ml-2 text-2xl ">airbnb</h1>
        </div>
      <div className="flex flex-wrap  mt-[66px] rounded-t-lg w-[80%] border border-solid border-black bg-white">
      <div className=" ml-16 mt-12 w-[100%]">
       <p className=" text-3xl font-black font-mono">Online Experiences
       </p>
       
       <p className="mt-3">Joint unique interactive activities led by one-of-a-kind  hosts-all without leaving home.</p>
       </div>

        {onlineData.map((value) => (
          <div key={value.id}>
            <Card value={value}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
