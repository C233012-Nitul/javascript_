import "./card.css";
import NestedDisplay from "./nestedDisplay";

export default function Display() {
  return (
    <div className="card-blue">
      <p>Child Component</p>
      <NestedDisplay />
    </div>
  );
}
