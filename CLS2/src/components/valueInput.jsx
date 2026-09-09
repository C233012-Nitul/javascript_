import { useContext } from "react";
import { counterContext } from "../provider/counter.Provider.jsx";
export default function ValueInput() {
  const { val, setVal } = useContext(counterContext);
  const handleSubmit = (e) => {
    e.prevntDefault();
    setVal("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        placeholder="Entet Number"
      />
    </form>
  );
}
