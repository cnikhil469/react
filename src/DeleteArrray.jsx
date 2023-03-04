import React, { useState } from "react";

function DeleteArray() {
  const array = [
    {
      id: 1,
      firstName: "nikhil",
      lastName: "Chappalli",
      age: 22,
    },
    {
      id: 2,
      firstName: "sai",
      lastName: "vignesh",
      age: 15,
    },
    {
      id: 3,
      firstName: "sahithya",
      lastName: "chappalle",
      age: 12,
    },
  ];

  const [data, setData] = useState(array);
  function handleDel(id) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    return newData;
  }

  return (
    <div>
      <ul>
        {data.map((item, id) => {
          return (
            <li key={id}>
              <h1>first name: {item.firstName}</h1>
              <h2>last name: {item.lastName}</h2>
              <h3>age: {item.age}</h3>
              <button onClick={() => handleDel(item.id)}>Delete this</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DeleteArray;
