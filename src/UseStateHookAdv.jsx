import React, { useState } from "react";

function UseStateHookAdv() {
  const initObj = {
    firstName: "Nikhil",
    lastName: "Chappalli",
  };

  const [name, setName] = useState(initObj);

  function swapName() {
    setName({ firstName: name.lastName, lastName: name.firstName });
  }

  return (
    <div className="">
      <h3>first name is {name.firstName}</h3>
      <button onClick={swapName}>swap the names</button>
      <h3>last name is {name.lastName}</h3>
    </div>
  );
}

export default UseStateHookAdv;
