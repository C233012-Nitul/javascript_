import { createContext, useState } from "react";

const counterContext = createContext();

export default function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");

  return (
    <counterContext.Provider value={{ count, setCount, val, setVal }}>
      {children}
    </counterContext.Provider>
  );
}
