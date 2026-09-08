import { useState } from "react";
import "./counter.css";
export default function Counter({val}) {
  const [count, setCount] = useState(0);
    
  const newVal = Number(val) || 0
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handledecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const handleValue = (value) => {
    setCount(count + value);
  };
  const delValue = (value) => {
    setCount(count >= value ? count - value : 0);
  };
  const handleClick = () =>{
    setCount(count)
    setCount("")
  }

  return (
    <div className="counter">
      <button onClick={handleIncrement} className="btn">
        Increment
      </button>
      <span>{count}</span>
      <button onClick={handledecrement} className="btn">
        Decrement
      </button>
      <button onClick={() => handleValue(newVal)} className="btn">
        ADD VALUE
      </button>
      <button onClick={() => delValue(newVal)} className="btn">Delete Value</button>
    </div>
  );
}
