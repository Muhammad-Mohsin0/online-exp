// App.js
import React from "react";
import Card from "../src/Components/Cards";
import onlineData from "../src/Components/OnlineData";
import { SiAirbnb } from "react-icons/si";

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex absolute items-center w-[55%] h-16 rounded-t-lg bg-orange-300 shadow-lg text-red-600 font-extrabold font-mono  ">
          <SiAirbnb size={22} className="ml-10 "/>
          <h1 className="ml-2 ">airbnb</h1>
        </div>
      <div className=" mt-[66px] rounded-t-lg w-[55%] border border-solid border-black bg-gray-200">
      
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
