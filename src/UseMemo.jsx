import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const doubleNumber = (number) => {
    return number * 2;
  };

  const numberDouble = useMemo(() => {
    return doubleNumber(count);
  }, [count]);

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={() => setDark(!dark)}>Theme change</button>
      <h2 style={theme}>Double of the count is: {numberDouble}</h2>
    </div>
  );
};

export default UseMemo;
