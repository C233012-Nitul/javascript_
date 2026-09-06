import "./App.css";
import Card from "./components/card";
//import TestComponent from "./testComponent";
function App() {
  //return <TestComponent/>;
  //return <Card firstName="mohammad" lastName="Nitul" age={23} />;
  return (
    <Card firstName="mohammad" lastName="Nitul" age={23}>
      <h1>Welcome</h1>
    </Card>
  )
}
export default App;
