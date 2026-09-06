import "./App.css";
import Card from "./components/card";
//import TestComponent from "./testComponent";
function App() {
  //return <TestComponent/>;
  //return <Card firstName="mohammad" lastName="Nitul" age={23} />;
  return (
    <>
      <Card firstName="mohammad" lastName="Nitul" age={23}></Card>
      <Card firstName="mohammad" lastName="ali" age={13}></Card>
    </>
  );
}
export default App;
