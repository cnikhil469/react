import React, { useCallback } from "react";
import { useState } from "react";
import Title from "./titleComp";
import Button from "./buttonComp";
import Count from "./countComp";

const UseCallbackFunc = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count title={"age"} number={age} />
      <Button incrFunction={incrementAge} />
      <Count title={"salary"} number={salary} />
      <Button incrFunction={incrementSalary} />
    </div>
  );
};

export default UseCallbackFunc;
