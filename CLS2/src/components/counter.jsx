import { useState } from "react";
import "./counter.css";
export default function Counter({count, setCount, val}) {
  
    
  const newVal = Number(val) || 0
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };
  const handledecrement = () => {
    setCount(prev => prev > 0 ? prev - 1 : 0);
  };
  const handleValue = () => {
    setCount(prev => prev + newVal);
  };
  const delValue = () => {
    setCount(prev => prev >= newVal ? prev - newVal : 0);
  };

  return (
    <div className="counter">
      <button onClick={handleIncrement} className="btn">
        Increment
      </button>
      {/* <span>{count}</span> */}
      <button onClick={handledecrement} className="btn">
        Decrement
      </button>
      <button onClick={() => handleValue()} className="btn">
        ADD VALUE
      </button>
      <button onClick={() => delValue()} className="btn">Delete Value</button>
    </div>
  );
}
