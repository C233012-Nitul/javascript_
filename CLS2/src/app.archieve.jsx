import "./App.css";
import Card from "./components/card.jsx";
//import TestComponent from "./testComponent";
const member = [
  { firstName: "nitul", lastName: "1", age: 12 },
  { firstName: "ali", lastName: "2", age: 21 },
  { firstName: "mohammad", lastName: "3", age: 22 },
  { firstName: "taslim", lastName: "4", age: 34 },
];
function App() {
  //return <TestComponent/>;
  //return <Card firstName="mohammad" lastName="Nitul" age={23} />;
  return (
    <div>
      {/* <Card firstName="mohammad" lastName="Nitul" age={23}></Card>
      <Card firstName="mohammad" lastName="ali" age={13}></Card> */}
      //filter kore sort kore map...
      {member.filter((member) => member.age > 18).sort((a, b) => b.age - a.age).map((member) => (
        <Card
          firstName={member.firstName}
          lastName={member.lastName}
          age={member.age}
        ></Card>
      ))}
    </div>
  );
}
export default App;
