import { useState } from "react";
import "./App.css";
import Card from "./components/card.jsx";
import Counter from "./components/counter.jsx"; 
//import TestComponent from "./testComponent";
const member = [
  { firstName: "nitul", lastName: "1", age: 12 },
  { firstName: "ali", lastName: "2", age: 21 },
  { firstName: "mohammad", lastName: "3", age: 22 },
  { firstName: "taslim", lastName: "4", age: 34 },
];
function App() {
  const [name, setName] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(name)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="number" value = {name} onChange={(e) => setName(e.target.value)} placeholder="Enter a Number"/>
      <button type="submit">Submit</button>
    </form>
      {member.map((member) => (
        <Card
          firstName={member.firstName}
          lastName={member.lastName}
          age={member.age}
        ></Card>
      ))}
      <Counter val = {name}>
      </Counter>
    </div>
  );
}
export default App;
