import { useState } from "react";
import "./App.css";

import Counter from "./components/counter.jsx";

import Display from "./components/display.jsx";
import CounterProvider from "./provider/counter.Provider.jsx";

function App() {
  return (
    <CounterProvider>
      <Counter />
      <Display />
    </CounterProvider>
  );
}
export default App;
