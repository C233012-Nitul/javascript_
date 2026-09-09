import { useState, useContext } from "react";
import "./App.css";
import Card from "./components/card.jsx";
import Counter from "./components/counter.jsx";
//import TestComponent from "./testComponent";
import Display from "./components/display.jsx";
import CounterProvider from "./provider/counter.Provider.jsx";
import NestedDisplay from "./components/nestedDisplay.jsx";
//import {counterContext} from './provider/counter.Provider.jsx'
import ValueInput from "./components/valueInput.jsx";
function App() {
  // const [count, setCount] = useState(0);
  // const [val, setVal] = useState("");
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [age, setAge] = useState("");
  const [members, setMembers] = useState([
    { firstName: "nitul", lastName: "1", age: 12 },
    { firstName: "ali", lastName: "2", age: 21 },
    { firstName: "mohammad", lastName: "3", age: 22 },
    { firstName: "taslim", lastName: "4", age: 34 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(name)
    // setMembers([...members, { firstName, lastName, age }]);
    // //!same ->> setMembers((prev) => [...prev, { firstName, lastName, age }]);
    // setFName("");
    // setLName("");
    // setAge("");
    // setCount("");
     //setVal("");
  };
  return (
    <CounterProvider>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFName(e.target.value)}
          placeholder="Enter First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLName(e.target.value)}
          placeholder="Enter Last Name"
        />
        <input
          type="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter a AGE"
        />

        <button type="submit">Submit</button>
      </form>
      {members.map((member) => (
        <Card
          firstName={member.firstName}
          lastName={member.lastName}
          age={member.age}
        ></Card>
      ))} */}
      {/* <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          placeholder="Entet Number"
        />
      </form> */}
      <ValueInput/>
      <Counter  />
      <Display  />
      <NestedDisplay/>
    </CounterProvider>
  );
}
export default App;
