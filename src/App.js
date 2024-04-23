import Card from "./Components/Cards";
import onlineData from "./Components/OnlineData";

console.log(onlineData)
function App() {
  return (
    <div className="w-full">
    {onlineData.map((value) =>(
      <div  key={value.id} > 
      <Card value={value}/>
      </div>
    ))}
    </div>
  );
}

export default App;
