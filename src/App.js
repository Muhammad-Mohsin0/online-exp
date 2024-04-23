import Card from "./Components/Cards";
import onlineData from "./Components/OnlineData";
import { SiAirbnb } from "react-icons/si";

console.log(onlineData)
function App() {
  return (
    <div className="flex justify-center ">
    <div className="flex items-center w-[55%] h-14  mt-10 border border-solid border-black bg-gray-200">
        <div className=" flex  w-[100%] rounded-t-lg bg-red-200 text-red-600 font-bold font-mono h-14"> <h1 className="flex ml-7 items-center"><SiAirbnb size={22}/>airbnb</h1></div>
        {onlineData.map((value) =>( 
        <div  key={value.id} >
        <Card value={value}/>
        </div>
        ))}
    </div>
    </div>
    
  );
}

export default App;
