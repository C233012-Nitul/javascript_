import "./card.css";
import { CounterContext } from "../provider/counter.Provider";
import { use } from "react";
export default function NestedDisplay() {
    const {count} = use(CounterContext)
  
  return (
    <div className="card-yellow">
      <p>Grand Child</p>
      <p>{count}</p>
    </div>
  );
}
