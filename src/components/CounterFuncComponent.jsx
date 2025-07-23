import "./counter.css";
import { useState } from "react";

const CounterFuncComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Parent">
      <h2>Func Counter</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}>
        -
      </button>
    </div>
  );
};

export default CounterFuncComponent;
