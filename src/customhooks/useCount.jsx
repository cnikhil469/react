import React, { useState } from "react";

const UseCount = (initialCount = 1) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(initialCount);
  };

  return [count, incrementCount, decrementCount, resetCount];
};

export default UseCount;
