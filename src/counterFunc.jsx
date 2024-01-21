import React from "react";
import UseCount from "./customhooks/useCount";

const CounterFunc = () => {
  const [count, incrementCount, decrementCount, resetCount] = UseCount();
  return (
    <div>
      <h2>The count information</h2>
      <span>Count: {count}</span>
      <button onClick={incrementCount}>Increment count</button>
      <button onClick={decrementCount}>Decrement count</button>
      <button onClick={resetCount}>Reset count</button>
    </div>
  );
};

export default CounterFunc;
