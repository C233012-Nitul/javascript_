import { use } from "react";
import "./card.css";
import {CounterContext} from '../provider/counter.Provider.jsx'
export default function Counter() {
  const {count, setCount} = use(CounterContext)
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleIncrementValue = (value) => {
    setCount(count + value);
  };
  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return(
     <div className="card">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => handleIncrementValue(5)}>Increment by 5</button>
      <button onClick={handleDecrement}>Decrement</button>
     </div>
  );
}
